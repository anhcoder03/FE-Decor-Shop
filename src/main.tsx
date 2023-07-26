/* eslint-disable @typescript-eslint/no-non-null-assertion */
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { ToastContainer } from "react-toastify";
import "./styles/index.scss";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import "react-toastify/dist/ReactToastify.css";
import { Provider } from "react-redux";
import persistor, { store } from "./store/configureStore.ts";
import { PersistGate } from "redux-persist/integration/react";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <App />
      <ToastContainer />
    </PersistGate>
  </Provider>
);
