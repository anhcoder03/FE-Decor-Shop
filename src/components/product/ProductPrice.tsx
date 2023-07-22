import formatPrice from "../../utils/fomatPrice";

const ProductPrice = ({ price = 0 }: { price: number | undefined }) => {
  return (
    <p className="text-lg font-bold text-primary" style={{marginTop: 10}}>{formatPrice(price)} đ</p>
  );
};

export default ProductPrice;
