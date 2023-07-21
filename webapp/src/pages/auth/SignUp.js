import React from "react";
import "../../styles/Contact.css";
import SocialLogin from "./component/socialLogin";
import { useNavigate, Link } from "react-router-dom";
import { Formik, useFormik } from "formik";
import * as yup from "yup";
import { useDispatch } from "react-redux";
import { Form, Button } from "react-bootstrap";
import { registration } from "../../store/auth/authAction";

const SignUp = () => {
  const dispatch = useDispatch();
  let navigate = useNavigate();

  const validationSchema = yup.object({
    firstName: yup.string().required("First-Name is required"),
    lastName: yup.string().required("Last-Name is required"),

    phoneNumber: yup
      .string()
      .required("Phone-Number is required")
      .min(10, "Phone Number is  too short- should be 10 Number required")
      .max(10, "Phone Number is  too long- should be 10 Number required"),
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
    // termsCondition: yup
    //   .bool()
    //   .oneOf([true], "You need to accept the terms and conditions"),
  });
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      phoneNumber: "",
      address: "",
      email: "",
      password: "",
      // termsCondition: false,
      // userType: "62b4188a0c401a0ff0012324",
    },
    validationSchema,
    onSubmit: (values) => {
      dispatch(
        registration({
          firstName: values.firstName,
          lastName: values.lastName,
          email: values.email,
          phone: values.phoneNumber,
          address: values.address || null,
          password: values.password,
          // terms: false,
        })
      )
        .then((res) => {
          if (res.status === 200) {
            navigate("/");
          }
        })
        .catch((err) => {
          console.log(err);
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
                <h2 className="title">SIGN UP</h2>
                <p>We're happy you're here!</p>
              </div>
              <SocialLogin />
              <Formik
                validationSchema={validationSchema}
                onSubmit={(value) => {
                  dispatch(
                    registration({
                      firstName: value.firstName,
                      lastName: value.lastName,
                      email: value.email,
                      phone: value.phoneNumber,
                      address: value.address,
                      password: value.password,
                      // userType: values.userType,
                    })
                  );
                }}
                initialValues={{
                  firstName: "",
                  lastName: "",
                  phoneNumber: "",
                  address: "",
                  email: "",
                  password: "",
                  // terms: false,
                }}
              >
                <Form
                  onSubmit={formik.handleSubmit}
                  noValidate
                  className="login-form"
                >
                  <div className="d-flex">
                    <Form.Group
                      className="mb-3 formInput"
                      controlId="formBasicEmail"
                    >
                      <Form.Label>First Name</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter First Name"
                        name="firstName"
                        value={formik.values.firstName}
                        onChange={formik.handleChange}
                        isInvalid={!!formik.errors.firstName}
                      />
                      <Form.Control.Feedback type="invalid">
                        {formik.errors.firstName}
                      </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group
                      className="mb-3 formInput"
                      controlId="formBasicEmail"
                    >
                      <Form.Label>Last Name</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter Last Name"
                        name="lastName"
                        value={formik.values.lastName}
                        isInvalid={!!formik.errors.lastName}
                        onChange={formik.handleChange}
                      />
                      <Form.Control.Feedback type="invalid">
                        {formik.errors.lastName}
                      </Form.Control.Feedback>
                    </Form.Group>
                  </div>
                  <Form.Group
                    className="mb-3 formInput"
                    controlId="formBasicEmail"
                  >
                    <Form.Label>Address</Form.Label>
                    <Form.Group
                      as="textarea"
                      placeholder="Enter Address"
                      name="address"
                      value={formik.values.address}
                      onChange={formik.handleChange}
                    />
                    <Form.Text className="text-muted">
                      {formik.touched.address && formik.errors.address}
                    </Form.Text>
                  </Form.Group>
                  <div className="d-flex">
                    <Form.Group
                      className="mb-3 formInput"
                      controlId="formBasicEmail"
                    >
                      <Form.Label>Phone Number</Form.Label>
                      <Form.Control
                        type="number"
                        placeholder="Enter Phone-Number"
                        name="phoneNumber"
                        value={formik.values.phoneNumber}
                        onChange={formik.handleChange}
                        isInvalid={!!formik.errors.phoneNumber}
                      />
                      <Form.Control.Feedback type="invalid">
                        {formik.errors.phoneNumber}
                      </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group
                      className="mb-3 formInput"
                      controlId="formBasicEmail"
                    >
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
                  </div>
                  <Form.Group
                    className="mb-3 formInput"
                    controlId="formBasicPassword"
                  >
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
                  <Form.Group
                    className="mb-3 formInput"
                    controlId="formBasicCheckbox"
                  >
                    {/* <Form.Check
                      type="checkbox"
                      label="Check me out"
                      name="termsCondition"
                      onChange={formik.handleChange}
                    /> */}
                    <Form.Text className="text-muted">
                      {formik.touched.termsCondition &&
                        formik.errors.termsCondition}
                    </Form.Text>
                  </Form.Group>
                  <div className="form-group mb-0">
                    <Button className="custom-button" type="submit">
                      Register
                    </Button>
                  </div>
                </Form>
              </Formik>
            </div>
            <div className="right-side cl-white">
              <div className="section-header mb-0">
                <h3 className="title mt-0">ALREADY HAVE AN ACCOUNT?</h3>
                <p>Log in and go to your Dashboard.</p>

                <Link
                  className="custom-button transparent"
                  to="/"
                  style={{ color: "white" }}
                >
                  Login
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default SignUp;
