import React, { Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PageNotFound from "./pages/PageNotFound";
import LoadingPage from "./components/common/LoadingPage";
const HomePage = React.lazy(() => import("./pages/HomePage"));
const ProductPage = React.lazy(() => import("./pages/ProductPage"));

function App() {
  const routers = createBrowserRouter([
    { path: "", element: <HomePage /> },
    { path: "product", element: <ProductPage /> },
    { path: "*", element: <PageNotFound /> },
  ]);
  return (
    <Suspense fallback={<LoadingPage />}>
      <RouterProvider router={routers}></RouterProvider>
    </Suspense>
  );
}

export default App;
