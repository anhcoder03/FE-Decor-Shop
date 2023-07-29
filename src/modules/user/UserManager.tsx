import { useEffect, useState } from "react";
import { Table } from "../../components/table";
import DashboardHeading from "../dashboard/DashboardHeading";
import DashboardLayout from "../dashboard/DashboardLayout";
import { IUser } from "../../types/User";
import { IconDelete } from "../../components/icons";
import Swal from "sweetalert2";
import { instance } from "../../api/instance";
import { getAllUser } from "../../api/auth";

const UserManager = () => {
  const headings = ["STT", "Name", "Email", "Action"];
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState<IUser[]>([]);
  useEffect(() => {
    void loadData();
  }, []);
  const loadData = async (): Promise<any> => {
    try {
      setLoading(true);
      const response = await getAllUser();
      setUser(response.data.user);
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
              <div className="flex items-center gap-x-3 text-primary">
                <IconDelete
                  onClick={() => handleDeleteUser(item._id)}
                ></IconDelete>
              </div>
            </td>
          </tr>
        ))}
      </Table>
    </DashboardLayout>
  );
};

export default UserManager;
