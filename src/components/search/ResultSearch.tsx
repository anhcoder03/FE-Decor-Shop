/* eslint-disable @typescript-eslint/restrict-template-expressions */
import { Tproduct } from "../../types/product";
import { Link } from "react-router-dom";
import LoadingSearch from "../common/LoadingSearch";

const ResultSearch = ({
  data,
  show = true,
  loading,
}: {
  data: Tproduct[];
  show: boolean;
  loading: boolean;
}) => {
  return (
    <>
      {show && (
        <div>
          {loading && <LoadingSearch></LoadingSearch>}
          {data.length > 0 ? (
            data.map((item: Tproduct) => (
              <Link to={`/product/${item.slug}`} key={item._id}>
                <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-primary">
                  <img className="w-[30px]" src={item.image} alt="" />
                  <p>{item.name}</p>
                </div>
              </Link>
            ))
          ) : (
            <div className="px-5 py-3">Không tìm thấy sản phẩm.</div>
          )}
        </div>
      )}
    </>
  );
};

export default ResultSearch;
