import React, { Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PageNotFound from "./pages/PageNotFound";
import LoadingPage from "./components/common/LoadingPage";
import ProductManage from "./modules/product/ProductManage";
import ProductAdd from "./modules/product/ProductAdd";
import CategoryManage from "./modules/category/CategoryManage";
import CategoryAdd from "./modules/category/CategoryAdd";
import CategoryEdit from "./modules/category/CategoryEdit";
import ProductEdit from "./modules/product/ProductEdit";
const HomePage = React.lazy(() => import("./pages/HomePage"));
const ProductPage = React.lazy(() => import("./pages/ProductPage"));
const DashboardPage = React.lazy(() => import("./pages/admin/DashboardPage"));
const ProductDetail = React.lazy(() => import("./pages/ProductDetail"));
function App() {
  const routers = createBrowserRouter([
    { path: "", element: <HomePage /> },
    { path: "product", element: <ProductPage /> },
    { path: "product/:id", element: <ProductDetail /> },
    { path: "dashboard", element: <DashboardPage /> },
    { path: "manage/product", element: <ProductManage /> },
    { path: "manage/add-product", element: <ProductAdd /> },
    {path: "manage/edit-product/:id", element: <ProductEdit />},
    { path: "manage/category", element: <CategoryManage /> },
    { path: "manage/add-category", element: <CategoryAdd /> },
    { path: "manage/edit-category/:id", element: <CategoryEdit /> },
    { path: "*", element: <PageNotFound /> },
  ]);
  return (
    <Suspense fallback={<LoadingPage />}>
      <RouterProvider router={routers}></RouterProvider>
    </Suspense>
  );
}

export default App;
