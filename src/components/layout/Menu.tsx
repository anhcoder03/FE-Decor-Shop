import { NavLink } from "react-router-dom";
import { IMenu } from "../../types/Menu";

const listMenu: IMenu[] = [
  { path: "/", title: "Home" },
  { path: "/product", title: "Product" },
  { path: "/category", title: "Category" },
  { path: "/news", title: "News" },
  { path: "/contact", title: "Contact" },
];

const Menu = () => {
  return (
    <div className="max-w-[900px] mx-auto w-full">
      <ul className=" items-center justify-center gap-[50px] py-4 hidden md:flex">
        {listMenu.length > 0 &&
          listMenu.map((item) => (
            <NavLink
              to={item.path}
              key={item.title}
              className={({ isActive }) =>
                isActive
                  ? "active-link hover:text-primary"
                  : "hover:text-primary"
              }
            >
              {item.title}
            </NavLink>
          ))}
      </ul>
    </div>
  );
};

export default Menu;
