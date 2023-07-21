import React, { useEffect } from "react";
import Footer from "./pages/Footer";
import IndexBody from "./pages/indexBody/IndexBody";
import Navbar from "./pages/Navbar";
import AppRoute from "./router";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import configureStore from "./store";
import "react-toastify/dist/ReactToastify.css";


const App = () => {
  const store = configureStore();
  return (
    <>
      <Provider store={store}>
        <Router>
          <AppRoute />
        </Router>
      </Provider>
    </>
  );
};

export default App;
