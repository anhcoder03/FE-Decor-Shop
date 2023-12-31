/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { Link, useNavigate } from "react-router-dom";
import { InputSearch } from "../input";
import { IconCart, IconUser } from "../icons";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/configureStore";
import useClickOutSide from "../../hooks/useClickOutSIde";
import { authLogout } from "../../store/auth/authSlice";
import { toast } from "react-toastify";
import { resetCart } from "../../store/cart/cartSlice";
import { useEffect } from "react";
import { handleGetCart } from "../../store/cart/handlers";
import formatPrice from "../../utils/fomatPrice";

const Header = () => {
  const auth: any = useSelector((state: RootState) => state.auth.auth);
  const { totalAmount, quantity } = useSelector(
    (state: RootState) => state.cart
  );
  const { show, setShow, nodeRef } = useClickOutSide(".action-user");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(authLogout());
    dispatch(resetCart());
    toast.success("Đăng xuất thành công!");
    navigate("/signin");
  };
  useEffect(() => {
    if (auth?.user?._id) {
      dispatch(handleGetCart(auth?.user._id) as any);
    }
  }, [auth]);
  return (
    <div className="container flex items-center justify-between py-[30px] border-b border-b-[#ffffff]">
      <div className="flex items-center gap-x-12">
        <Link to="/">
          <img src="/logo.png" alt="" />
        </Link>
        <div>
          <InputSearch></InputSearch>
        </div>
      </div>
      <div className="flex items-center gap-[50px]">
        {!auth?.user?.name ? (
          <Link to={"/signin"}>
            <IconUser></IconUser>
          </Link>
        ) : (
          <div className="relative" ref={nodeRef}>
            <div
              className="flex items-center cursor-pointer gap-x-2"
              onClick={() => {
                setShow(!show);
              }}
            >
              <span className="text-sm">Xin chào:</span>
              <span className="text-sm text-primary">{auth?.user?.name}</span>
            </div>
            <div
              className={`absolute text-sm  flex-col gap-y-3 top-[30px] transition-all bg-[#222222] z-10 p-3 w-full rounded-md action-user ${
                show ? "flex" : "hidden"
              }`}
            >
              {auth?.user?.admin && (
                <Link to={"/dashboard"} className="hover:text-primary">
                  Dashboard
                </Link>
              )}
              <Link to="/me" className="hover:text-primary">
                Cập Nhật Tài Khoản
              </Link>
              <Link to="/my-order" className="hover:text-primary">
                Đơn Hàng Của Tôi
              </Link>
              <span
                onClick={handleLogout}
                className="cursor-pointer hover:text-primary"
              >
                Logout
              </span>
            </div>
          </div>
        )}
        <div className="flex items-center gap-4">
          <div className="relative">
            <Link to="/cart">
              <IconCart></IconCart>
            </Link>
            <span className="absolute flex items-center justify-center w-5 h-5 rounded-full -right-3 -top-3 bg-primary">
              {quantity ? quantity : 0}
            </span>
          </div>
          <div className="flex items-center gap-x-2">
            <span>My Cart</span>
            <span className="text-sm text-[#aaaaaa]">
              {totalAmount ? formatPrice(totalAmount) : 0}đ
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
