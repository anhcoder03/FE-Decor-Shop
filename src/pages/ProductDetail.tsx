/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { useEffect, useState } from "react";
import { LayoutMain } from "../components/layout";
import ProductDetailHeader from "../modules/productDetail/ProductDetailHeader";
import ProductDetailDescription from "../modules/productDetail/ProductDetailDescription";
import { useNavigate, useParams } from "react-router-dom";
import { getProductWithSlug } from "../api/product";
import { Tproduct } from "../types/product";
// import { IconStar } from "../components/icons";
import ProductPrice from "../components/product/ProductPrice";
import ProductImage from "../components/product/ProductImage";
import ProductCategory from "../components/homepage/ProductCategory";
import { Button } from "../components/button";
import Quantity from "../components/quantity/Quantity";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { RootState } from "../store/configureStore";
import { addToCart } from "../api/cart";
import TabPanel from "../components/tab-panel/Tabpanel";
import { Rating, Tab, Tabs } from "@mui/material";

const ProductDetail = () => {
  const { slug } = useParams<string>();
  const [dataDetail, setDataDetail] = useState<Tproduct>();
  const auth: any = useSelector((state: RootState) => state.auth.auth);
  const [quantity, setQuantity] = useState(1);
  const navigate = useNavigate();
  const [value, setValue] = useState(0);
  const [rating] = useState(5);
  const handleChange = (_event: any, newValue: any) => {
    setValue(newValue);
  };
  useEffect(() => {
    async function getDataProduct() {
      const response = await getProductWithSlug(slug);
      setDataDetail(response.data?.product);
    }
    void getDataProduct();
  }, [slug]);

  const handleAddToCart: any = async () => {
    if (auth?.user) {
      const cartData = {
        productId: dataDetail?._id,
        quantity,
        userId: auth?.user?._id,
      };
      const response = await addToCart(cartData);
      toast.success(response.data.message);
      navigate("/cart");
    } else {
      toast.error("Vui lòng đăng nhập!");
      navigate("/signin");
    }
  };
  function a11yProps(index: any) {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  }

  return (
    <LayoutMain>
      <ProductDetailHeader
        nameProduct={dataDetail?.name || "Product name"}
      ></ProductDetailHeader>
      <section>
        <div className="relative mx-auto max-w-[1280px] py-8">
          <div
            className="grid items-start grid-cols-1 gap-8 md:grid-cols-2"
            style={{ maxHeight: 400 }}
          >
            <ProductImage
              image={dataDetail?.image}
              name={dataDetail?.name}
            ></ProductImage>
            <div className="">
              <strong className="rounded-lg bg-[#222222] px-3 py-0.5 text-xs font-medium tracking-wide text-primary">
                Pre Order
              </strong>
              <div className="justify-between mt-8 ">
                <div className="max-w-[35ch] space-y-2">
                  <h1 className="text-xl font-bold sm:text-2xl">
                    {dataDetail?.name || ""}
                  </h1>
                  <p className="text-sm">Highest Rated Product</p>
                </div>
                <ProductPrice price={dataDetail?.price}></ProductPrice>
              </div>
              <form className="mt-8">
                <div className="flex gap-4 mt-8">
                  <Quantity
                    quantity={quantity}
                    setQuantity={setQuantity}
                  ></Quantity>

                  <Button
                    type="button"
                    className="block px-5 py-3 text-xs font-medium text-white rounded bg-primary"
                    onClick={handleAddToCart}
                  >
                    Add to Cart
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      {/* <ProductDetailDescription
        description={dataDetail?.desc || ""}
      ></ProductDetailDescription> */}
      <div className="container">
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab
            label="Description"
            sx={{
              color: value === 0 ? "#dba87f" : "#ffffff",
            }}
            {...a11yProps(0)}
          />
          <Tab
            label="Comment"
            sx={{
              color: value === 1 ? "#dba87f" : "#ffffff",
            }}
            {...a11yProps(1)}
          />
        </Tabs>
        <TabPanel value={value} index={0}>
          <ProductDetailDescription
            description={dataDetail?.desc || ""}
          ></ProductDetailDescription>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <div className="comment-wrraper">
            <div className="listComment mt-8">
              {/* {listComment.length > 0 ? (
                listComment.map((item) => (
                  <div key={item._id} className="mb-5">
                    <div className="flex gap-x-4 items-center">
                      <img
                        src={item?.userImage}
                        className="w-[40px] h-[40px] rounded-full object-cover"
                        alt={item.title}
                      />
                      <div className="">
                        <p className="font-medium">{item.username}</p>
                        <p className="flex items-center gap-2  text-xs lg:text-lg">
                          <Rating readOnly value={item?.rating} />
                          <span className="text-xs">
                            {convertTimestampToDateTime(item.createdAt)}
                          </span>
                        </p>
                      </div>
                    </div>
                    <div className="mt-2">
                      <span className="text-sm">{item.review}</span>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-center  text-primary">
                  Chưa có đánh giá nào cho sản phẩm này.
                </p>
              )} */}
            </div>
            <form className="comment">
              <h1 className=" mt-10 text-lg font-semibold">
                Để lại đánh giá cho sản phẩm này
              </h1>
              <div className="rating my-5">
                <h3 className="font-semibold text-xs lg:text-sm text-[#666]">
                  Đánh giá sao *
                </h3>
                <span className="flex gap-x-1">
                  <Rating
                    name="simple-controlled"
                    value={rating}
                    onChange={(_event, newValue: any) => {
                      setValue(newValue);
                    }}
                  />
                </span>
              </div>
              <div className="mb-5">
                <h3 className="font-semibold text-xs lg:text-sm text-[#666]">
                  Viết đánh giá cho sản phẩm này *
                </h3>
                <textarea
                  name=""
                  id=""
                  cols={30}
                  rows={10}
                  className="w-full text-white bg-[#222222] p-5 mt-2 rounded-md"
                ></textarea>
              </div>
              <Button
                type="button"
                className="commentBtn max-w-[250px] mx-auto w-full mb-10 h-14"
              >
                Bình luận
              </Button>
            </form>
          </div>
        </TabPanel>
      </div>
      <ProductCategory
        categoryId={dataDetail?.categoryId}
        id={dataDetail?._id}
      />
    </LayoutMain>
  );
};

export default ProductDetail;
