import parse from "html-react-parser";
const ProductDetailDescription = ({ description }: { description: string }) => {
  return (
    <>
      <section className="mb-[30px]">
        <div className="max-w-[1280px] m-auto bg-[#222222] rounded-lg">
          <div className="p-10">
            <div
              className="entry-content"
              style={{ maxHeight: 580, overflow: "auto" }}
            >
              {parse(description) || ""}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductDetailDescription;
