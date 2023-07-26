import ReactPaginate from "react-paginate";

const Paginate = ({
  handlePageClick,
  pageCount,
}: {
  handlePageClick: (e: any) => void;
  pageCount: number;
}) => {
  return (
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
  );
};

export default Paginate;
