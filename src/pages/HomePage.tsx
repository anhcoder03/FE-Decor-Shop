import { LayoutMain } from "../components/layout";
import Slider from "../components/layout/Slider";
import Services from "../components/homepage/Services";
import TopRateProduct from "../components/homepage/TopRateProduct";
import LatestProducts from "../components/homepage/LatestProducts";

const HomePage = () => {
  return (
    <LayoutMain>
      <Slider></Slider>
      <div className="container">
        <Services></Services>
        <TopRateProduct></TopRateProduct>
        <LatestProducts></LatestProducts>
      </div>
    </LayoutMain>
  );
};

export default HomePage;
