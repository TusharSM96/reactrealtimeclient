import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { AuthWrapper } from "./Middlewer/AuthWrapper.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <ToastContainer
      hideProgressBar={false}
      newestOnTop={true}
      closeOnClick={true}
      rtl={false}
      draggable
      pauseOnHover
      theme="dark"
    />
    <AuthWrapper>
      <App />
    </AuthWrapper>
  </>
);
