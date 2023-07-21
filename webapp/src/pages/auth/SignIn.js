import React, { useEffect } from "react";
import SocialLogin from "./component/socialLogin";
import { useNavigate, Link } from "react-router-dom";
import "../../styles/Contact.css";
import { useFormik } from "formik";
import * as yup from "yup";
import { Form, Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { login } from "../../store/auth/authAction";
import { toastError, toastSuccess } from "../../utils/common";

const SignIn = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const validationSchema = yup.object({
    email: yup
      .string()
      .email("Please enter a valid email address")
      .required("Email is required"),
    password: yup
      .string()
      .min(8, "Password is too short - should be 8 chars minimum.")
      .max(20, "Password is too long - should be maximum 20 chars")
      .matches(/[a-zA-Z]/, "Password can only contain Latin letters.")
      .matches(/(?=.*[!@#\$%\^&\*])/, "Special can only contain Latin letters.")
      .required("Password is required"),
  });

  useEffect(() => {
    var re = new RegExp("token" + "=([^;]+)");
    var value = re.exec(document.cookie);
    const token = value != null ? unescape(value[1]) : null;
    if (token) {
      localStorage.setItem("token", token);
    }
  }, [window.location]);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      navigate("/home");
    }
  }, [localStorage.getItem("token")]);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema,
    onSubmit: (values) => {
      dispatch(
        login({
          email: values.email,
          password: values.password,
        })
      )
        .then((res) => {
          if (res?.status === 200) {
            toastSuccess(res?.message);
            navigate("/home");
          } else {
            navigate("/");
          }
        })
        .catch((err) => {
          let mess = JSON.parse(err?.request?.response);
          toastError(mess?.message);
          console.log(mess.message, "mess");
        });
    },
  });

  return (
    <>
      <div className="hero-section">
        <div className="bg_img hero-bg bottom_center heroBg"></div>
      </div>
      <section className="account-section padding-bottom">
        <div className="container">
          <div className="account-wrapper mt--100 mt-lg--440">
            <div className="left-side">
              <div className="section-header">
                <h2 className="title">HI, THERE</h2>
                <p>You can log in to your Sbidu account here.</p>
              </div>
              <SocialLogin />

              <Form onSubmit={formik.handleSubmit} className="login-form">
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    name="email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    isInvalid={!!formik.errors.email}
                  />
                  <Form.Control.Feedback type="invalid">
                    {formik.errors.email}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    name="password"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    isInvalid={!!formik.errors.password}
                  />
                  <Form.Control.Feedback type="invalid">
                    {formik.errors.password}
                  </Form.Control.Feedback>
                </Form.Group>
                <div className="form-group mb-0">
                  <Button className="custom-button" type="submit">
                    LOG IN
                  </Button>
                </div>
              </Form>
            </div>
            <div className="right-side cl-white">
              <div className="section-header mb-0">
                <h3 className="title mt-0">NEW HERE?</h3>
                <p>Sign up and create your Account</p>
                <Link
                  to="/signup"
                  className="custom-button transparent"
                  style={{ color: "white" }}
                >
                  Sign Up
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <Footer /> */}
    </>
  );
};
export default SignIn;
