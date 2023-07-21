import React, { lazy, useEffect } from "react";
import { Route, Routes, Navigate, useNavigate } from "react-router-dom";
import Loader from "./pages/Loader";
import NotFound from "./pages/NotFound";
import { ToastContainer } from "react-toastify";
import { useSelector } from "react-redux";
import { routes } from "./routes/route";
const SignUp = lazy(() => import("./pages/auth/SignUp"));
const SignIn = lazy(() => import("./pages/auth/SignIn"));

const token = localStorage.getItem("token");
const AppRoutes = () => {
  const { loader } = useSelector((state) => state);
  const navigate = useNavigate();
  useEffect(() => {
    if (!token) {
      navigate("/");
    }
  }, []);

  return (
    <>
      <ToastContainer />
      <React.Suspense fallback={<div />}>
        {loader && <Loader />}
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          {routes &&
            routes.map((route, index) => (
              <Route
                key={index}
                path={route.path}
                element={
                  <PrivateRoute>
                    <route.element />
                  </PrivateRoute>
                }
              />
            ))}
          <Route path="404" element={<NotFound />} />
          <Route path="*" element={<Navigate to={"/404"} replace />} />
        </Routes>
      </React.Suspense>
    </>
  );
};

function PrivateRoute({ children }) {
  const auth = localStorage.getItem("token");
  return auth ? children : <Navigate to="/" />;
}

export default AppRoutes;
