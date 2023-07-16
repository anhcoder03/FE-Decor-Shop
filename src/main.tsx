import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { ToastContainer } from "react-toastify";
import "./styles/index.scss";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import "react-toastify/dist/ReactToastify.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
    <ToastContainer />
  </React.StrictMode>
);
