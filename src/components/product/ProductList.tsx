import ProductItem from "./ProductItem";
import { Tproduct } from "../../types/product";
import CardSkeleton from "../common/CardSkeleton";

const ProductList = ({
  products,
  loading,
}: {
  products: Tproduct[];
  loading: boolean;
}) => {
  return (
    <>
      {loading && (
        <div className="grid grid-cols-3 gap-30px pt-[30px]">
          {Array(9)
            .fill(0)
            .map((item, index) => (
              <CardSkeleton key={index}></CardSkeleton>
            ))}
        </div>
      )}
      <div className="grid grid-cols-3 gap-30px pt-[30px]">
        {!loading &&
          products !== null &&
          products.map((item) => (
            <ProductItem key={item._id} data={item}></ProductItem>
          ))}
        {products.length === 0 && (
          <div className="flex items-center justify-center">
            <span className="text-xl font-semibold text-primary">
              Không có sản phẩm nào 😇
            </span>
          </div>
        )}
      </div>
    </>
  );
};

export default ProductList;
