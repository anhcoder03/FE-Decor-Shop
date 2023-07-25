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

const Header = () => {
  const { user }: any = useSelector((state: RootState) => state.auth.auth);
  const { show, setShow, nodeRef } = useClickOutSide(".action-user");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(authLogout());
    toast.success("Đăng xuất thành công!");
    navigate("/signin");
  };
  return (
    <div className="container flex items-center justify-between py-[30px] border-b border-b-[#ffffff]">
      <Link to="">
        <img src="/logo.png" alt="" />
      </Link>
      <div>
        <InputSearch></InputSearch>
      </div>
      <div className="flex items-center gap-[50px]">
        {!user?.name ? (
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
              <span>Xin chào:</span>
              <span className="text-primary">{user?.name}</span>
            </div>
            <div
              className={`absolute  flex-col gap-y-3 top-[30px] transition-all bg-[#222222] z-10 p-3 w-full rounded-md action-user ${
                show ? "flex" : "hidden"
              }`}
            >
              {user?.admin && (
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
            <IconCart></IconCart>
            <span className="absolute flex items-center justify-center w-5 h-5 rounded-full -right-3 -top-3 bg-primary">
              0
            </span>
          </div>
          <div className="flex items-center gap-x-2">
            <span>My Cart</span>
            <span>($00,0)</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
