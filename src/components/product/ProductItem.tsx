/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Link } from "react-router-dom";
import { Tproduct } from "../../types/product";
import formatPrice from "../../utils/fomatPrice";

const ProductItem = ({ data }: { data: Tproduct }) => {
  // if (!data) return;

  return (
    <div className="product-elem-item bg-[#222] rounded-lg">
      <div>
        <Link to={`/product/${data?.slug}`}>
          <img
            className="rounded-lg h-[250px] mb-5"
            src={
              data?.image ||
              "https://cdn0.fahasa.com/media/catalog/product/i/m/image_179515_1.jpg"
            }
            alt={data?.name}
          />
        </Link>
      </div>
      <div className="pb-[35px]">
        <a className="block text-center text-[15px] pb-[10px]">
          {data?.name || "Dapipus Toro"}{" "}
        </a>
        <span className="font-bold text-center block text-[13px] text-red-500">
          {formatPrice(data?.price) || "$189.10"}đ
        </span>
      </div>
    </div>
  );
};

export default ProductItem;
