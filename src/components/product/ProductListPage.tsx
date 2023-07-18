/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/restrict-plus-operands */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import React, { useEffect, useState } from "react";
import ProductItem from "./ProductItem";
import ProductListHeading from "./ProductListHeading";
import ProductFilterPrice from "./ProductFilterPrice";
import ProductCategoryList from "./ProductCategoryList";
import ProductList from "./ProductList";
import ProductDetailHeader from "../../modules/productDetail/ProductDetailHeader";
import { ICategory } from "../../types/Category";
import { getAllCategory } from "../../api/category";
import { Tproduct } from "../../types/product";
import { getAllProduct } from "../../api/product";
import ReactPaginate from "react-paginate";

const ProductListPage = () => {
  const [categories, setCategories] = useState<ICategory[]>([]);
  const [url, setUrl] = useState("/products");
  const [loading, setLoading] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("songu");
  const [products, setProducts] = useState<Tproduct[]>([]);
  const [pageCount, setPageCount] = useState(0);
  const getCategories = async () => {
    const data = await getAllCategory();
    setCategories(data.data.category);
  };
  const handleGetProductByCategory = (id: string, categoryName: string) => {
    setUrl(`/products?categoryId=${id}`);
    setSelectedCategory(id);
  };
  const handleGetAll = () => {
    setUrl("/products");
    setSelectedCategory("songu");
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
    const getProducts = async () => {
      setLoading(true);
      const data = await getAllProduct(url);
      setProducts(data.data.product);
      setPageCount(Math.ceil(data.data.totalPage));
      setLoading(false);
    };
    void getProducts();
    void getCategories();
  }, [url]);
  return (
    <div className="">
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
                    selectedCategory === "songu" ? "bg-primary" : ""
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
                      onClick={() =>
                        handleGetProductByCategory(item._id, item.name)
                      }
                    >
                      {item.name}
                    </li>
                  ))}
              </ul>
            </div>
          </div>
          <div>
            <ProductList loading={loading} products={products}></ProductList>
            <div className="py-10">
              <ReactPaginate
                hrefBuilder={() => {
                  return "#";
                }}
                breakLabel="..."
                nextLabel=">"
                onPageChange={handlePageClick}
                pageCount={pageCount}
                disableInitialCallback={true}
                previousLabel="<"
                renderOnZeroPageCount={null}
                className="mb-10 flex flex-wrap items-center justify-center gap-x-2 gap-y-[6px] text-[15px] text-[#ececec] lg:gap-x-3 lg:text-base lg:mb-0 "
                pageLinkClassName="bg-[#222222] bg-opacity-80 page-link transition-all hover:bg-opacity-100 py-1 px-2 rounded-[5px]"
                previousClassName="bg-[#222222] bg-opacity-80  transition-all hover:bg-opacity-100 py-1 px-2 rounded-[5px]"
                nextClassName="bg-[#222222] nextPage bg-opacity-80  transition-all hover:bg-opacity-100 py-1 px-2 rounded-[5px]"
                activeClassName="page-active text-primary"
                disabledClassName="opacity-40"
                disabledLinkClassName="hover:cursor-default"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductListPage;
