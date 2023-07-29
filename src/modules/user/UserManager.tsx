/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/restrict-plus-operands */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import { useEffect, useState } from "react";
import { Table } from "../../components/table";
import DashboardHeading from "../dashboard/DashboardHeading";
import DashboardLayout from "../dashboard/DashboardLayout";
import { IUser } from "../../types/User";
import { IconDelete } from "../../components/icons";
import Swal from "sweetalert2";
import { instance } from "../../api/instance";
import { getAllUser } from "../../api/auth";
import { Paginate } from "../../components/paginate";

type TUser = {
  data: {
    user: IUser[];
    toltalUser: number;
    totalPage: number;
  };
};

const UserManager = () => {
  const headings = ["STT", "Name", "Email", "Role", "Action"];
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState<IUser[]>([]);
  const [pageCount, setPageCount] = useState(1);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(1);

  const handlePageClick = (event: any) => {
    const page = event.selected + 1;
    setPage(page);
  };
  useEffect(() => {
    void loadData();
  }, [page]);
  const loadData = async (): Promise<any> => {
    try {
      setLoading(true);
      const response: TUser = await getAllUser(page);
      setUser(response.data.user);
      setPageCount(response.data.toltalUser);
      setTotalPage(response.data.totalPage);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  console.log(user);

  const handleDeleteUser = (id: any) => {
    void Swal.fire({
      title: "Bạn muốn xoá danh mục này?",
      text: "Thao tác này sẽ khiến danh mục bị xoá vĩnh viễn!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await instance.delete(`/user/${id}`);
          void loadData();
          void Swal.fire("Deleted!", "Your file has been deleted.", "success");
        } catch (error) {
          console.log(error);
        }
      }
    });
  };

  return (
    <DashboardLayout>
      <DashboardHeading title="User" desc="Manage all user"></DashboardHeading>
      <Table loading={loading} headings={headings} length={user.length}>
        {user.map((item, index) => (
          <tr key={item._id}>
            <td>{index + 1}</td>
            <td className="font-bold">{item.name}</td>
            <td className="font-bold">{item.email}</td>
            <td>
              {item?.admin ? (
                <span className="px-3 py-1 text-blue-500 bg-blue-200 rounded-md">
                  Admin
                </span>
              ) : (
                <span className="px-3 py-1 text-red-500 bg-red-200 rounded-md">
                  User
                </span>
              )}
            </td>
            <td>
              <div className="flex items-center gap-x-3 text-primary">
                <IconDelete
                  onClick={() => handleDeleteUser(item._id)}
                ></IconDelete>
              </div>
            </td>
          </tr>
        ))}
      </Table>
      {totalPage > 1 && (
        <Paginate
          pageCount={pageCount}
          handlePageClick={handlePageClick}
        ></Paginate>
      )}
    </DashboardLayout>
  );
};

export default UserManager;
