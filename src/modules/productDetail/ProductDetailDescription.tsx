import parse from "html-react-parser";
const ProductDetailDescription = ({ description }: { description: string }) => {
  return (
    <>
      <section className="mb-[30px]">
        <div className="max-w-[1280px] m-auto bg-[#222222] rounded-lg p-5">
          <div
            className=" custom-scrollbar px-5 py-8"
            style={{ maxHeight: 500, overflow: "auto" }}
          >
            <span className=" entry-content"> {parse(description) || ""}</span>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductDetailDescription;
