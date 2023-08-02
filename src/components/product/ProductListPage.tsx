/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/restrict-plus-operands */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { useEffect, useState } from "react";
import ProductListHeading from "./ProductListHeading";
import ProductFilterPrice from "./ProductFilterPrice";
import ProductList from "./ProductList";
import ProductDetailHeader from "../../modules/productDetail/ProductDetailHeader";
import { ICategory } from "../../types/Category";
import { getAllCategory } from "../../api/category";
import { Tproduct } from "../../types/product";
import { Paginate } from "../paginate";
import { useGetProductsQuery } from "../../services/product.service";

const ProductListPage = () => {
  const [url, setUrl] = useState("/products");
  const { data, isLoading } = useGetProductsQuery(url);
  const [categories, setCategories] = useState<ICategory[]>([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const getCategories = async () => {
    const data = await getAllCategory();
    setCategories(data.data.category);
  };
  const handleGetProductByCategory = (id: string) => {
    setUrl(`/products?categoryId=${id}`);
    setSelectedCategory(id);
  };
  const handleGetAll = () => {
    setUrl("/products");
    setSelectedCategory("");
  };
  const handlePageClick = (event: any) => {
    const page = event.selected + 1;
    setUrl(
      `/products?${
        selectedCategory ? `categoryId=${selectedCategory}&` : ""
      }page=${page}`
    );
  };
  useEffect(() => {
    void getCategories();
  }, [url]);
  return (
    <>
      <ProductDetailHeader nameProduct=""></ProductDetailHeader>
      <div className="container">
        <ProductListHeading></ProductListHeading>
        <div className="main grid grid-cols-custom gap-30px pb-[30px]">
          <div className="">
            <ProductFilterPrice></ProductFilterPrice>
            <div className="list-category pt-[30px]">
              <label
                htmlFor="price-filter"
                className="block text-[#ffffff] font-bold mb-2"
              >
                Category:
              </label>
              <ul className="space-y-1">
                <li
                  className={`block rounded-lg bg-[#222222] p-3 text-[16px] text-[#ffffff] hover:bg-primary hover:text-[#ffffff] cursor-pointer ${
                    selectedCategory === "" ? "bg-primary" : ""
                  }`}
                  onClick={() => handleGetAll()}
                >
                  Tất cả sản phẩm
                </li>
                {categories !== null &&
                  categories.map((item) => (
                    <li
                      className={`block rounded-lg bg-[#222222] p-3 text-[16px] text-[#ffffff] hover:bg-primary hover:text-[#ffffff] cursor-pointer ${
                        item._id === selectedCategory ? "bg-primary" : ""
                      }`}
                      key={item._id}
                      onClick={() => handleGetProductByCategory(item._id)}
                    >
                      {item.name}
                    </li>
                  ))}
              </ul>
            </div>
          </div>
          <div>
            <ProductList
              loading={isLoading}
              products={data?.product as Tproduct[]}
            ></ProductList>
            <Paginate
              handlePageClick={handlePageClick}
              pageCount={data?.totalPage as number}
            ></Paginate>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductListPage;
