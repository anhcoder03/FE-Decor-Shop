import { ICategory } from "../../types/Category";

const ProductCategoryList = ({
  categories,
  onClick,
}: {
  categories: ICategory[];
  onClick: () => void;
}) => {
  return (
    <div>
      <div className="list-category pt-[30px]">
        <label
          htmlFor="price-filter"
          className="block text-[#ffffff] font-bold mb-2"
        >
          Category:
        </label>
        <ul className="space-y-1">
          <li className="block rounded-lg bg-[#222222] p-3 text-[16px] text-[#ffffff] hover:bg-primary hover:text-[#ffffff] cursor-pointer">
            Tất cả sản phẩm
          </li>
          {categories !== null &&
            categories.map((item) => (
              <li
                className="block rounded-lg bg-[#222222] p-3 text-[16px] text-[#ffffff] hover:bg-primary hover:text-[#ffffff] cursor-pointer"
                key={item._id}
                onClick={onClick}
              >
                {item.name}
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default ProductCategoryList;
