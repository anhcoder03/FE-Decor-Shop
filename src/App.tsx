import React, { Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PageNotFound from "./pages/PageNotFound";
import LoadingPage from "./components/common/LoadingPage";

const HomePage = React.lazy(() => import("./pages/HomePage"));
const ProductPage = React.lazy(() => import("./pages/ProductPage"));
const CartPage = React.lazy(() => import("./pages/CartPage"));
const SignupPage = React.lazy(() => import("./pages/SignupPage"));
const SigninPage = React.lazy(() => import("./pages/SignInPage"));
const DashboardPage = React.lazy(() => import("./pages/admin/DashboardPage"));
const ProductDetail = React.lazy(() => import("./pages/ProductDetail"));
const ProductEdit = React.lazy(() => import("./modules/product/ProductEdit"));
const CategoryEdit = React.lazy(
  () => import("./modules/category/CategoryEdit")
);
const CategoryAdd = React.lazy(() => import("./modules/category/CategoryAdd"));
const CategoryManage = React.lazy(
  () => import("./modules/category/CategoryManage")
);
const ProductAdd = React.lazy(() => import("./modules/product/ProductAdd"));
const ProductManage = React.lazy(
  () => import("./modules/product/ProductManage")
);
const ThankPage = React.lazy(() => import("./pages/ThankPage"));
const UserManager = React.lazy(() => import("./modules/user/UserManager"));
const OrderManage = React.lazy(() => import("./modules/order/OrderManage"));
const OrderUpdate = React.lazy(() => import("./modules/order/OrderUpdate"));
const Checkout = React.lazy(() => import("./pages/Checkout"));
const MyOrderPage = React.lazy(() => import("./pages/MyOrderPage"));
const MyOrderDetailPage = React.lazy(() => import("./pages/MyOrderDetailPage"));

function App() {
  const routers = createBrowserRouter([
    { path: "", element: <HomePage /> },
    { path: "product", element: <ProductPage /> },
    { path: "product/:slug", element: <ProductDetail /> },
    { path: "signup", element: <SignupPage /> },
    { path: "signin", element: <SigninPage /> },
    { path: "cart", element: <CartPage /> },
    { path: "checkout", element: <Checkout /> },
    { path: "dashboard", element: <DashboardPage /> },
    { path: "manage/product", element: <ProductManage /> },
    { path: "manage/add-product", element: <ProductAdd /> },
    { path: "manage/edit-product/:id", element: <ProductEdit /> },
    { path: "manage/category", element: <CategoryManage /> },
    { path: "manage/add-category", element: <CategoryAdd /> },
    { path: "manage/edit-category/:id", element: <CategoryEdit /> },
    { path: "manage/order", element: <OrderManage /> },
    { path: "manage/edit-order/:id", element: <OrderUpdate /> },
    { path: "manage/user", element: <UserManager /> },
    { path: "thank", element: <ThankPage /> },
    { path: "my-order", element: <MyOrderPage /> },
    { path: "my-order/detail/:id", element: <MyOrderDetailPage /> },
    { path: "*", element: <PageNotFound /> },
  ]);
  return (
    <Suspense fallback={<LoadingPage />}>
      <RouterProvider router={routers}></RouterProvider>
    </Suspense>
  );
}

export default App;
