import { Link } from "react-router-dom";
import { IconCheck } from "../components/icons";

const ThankPage = () => {
  return (
    <div className="grid h-screen px-4 bg-[#111111] place-content-center">
      <div className="text-center">
        <div className="">
          <img
            src="https://cdni.iconscout.com/illustration/premium/thumb/successful-payment-2161433-1815075.png"
            alt=""
          />
        </div>
        <div className="flex items-center gap-2 justify-center">
          <p className="text-2xl font-bold tracking-tight text-primary sm:text-4xl">
            Thanh toán thành công
          </p>
          <IconCheck></IconCheck>
        </div>
        <p className="mt-4 text-white">Bấm vào đây để quay trở lại trang chủ</p>
        <Link
          to={"/"}
          className="inline-block px-5 py-3 mt-6 text-sm font-medium text-white bg-primary rounded hover:bg-[#111111] hover:border hover:border-primary focus:outline-none focus:ring"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
};
export default ThankPage;
