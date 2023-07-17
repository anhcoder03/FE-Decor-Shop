import React from "react";
import IconHome from "../icons/iconHome";

const ProductListHeading = () => {
  return (
    <div>
      <div className="header-product flex justify-between">
        <div className="flex overflow-hidden bg-[#222222] py-3 rounded-lg">
          <li className="flex items-center gap-[10px] border-r border-r-slate-400 px-4">
            <IconHome></IconHome>
            <a
              href="#"
              className="flex items-center gap-1.5 transition text-[16px] text-[#ffffff]"
            >
              Home
            </a>
          </li>
          <li className="flex items-center bg-[#222222] px-4">
            <a
              href="#"
              className="flex items-center gap-1.5 transition text-[16px] text-primary"
            >
              Product List
            </a>
          </li>
        </div>
        <div className="bg-[#222222] p-3 rounded-lg">
          <select name="HeadlineAct" id="HeadlineAct" className="bg-[#222222]">
            <option>Please select category</option>
            <option value="JM">John Mayer</option>
            <option value="SRV">Stevie Ray Vaughn</option>
            <option value="JH">Jimi Hendrix</option>
            <option value="BBK">B.B King</option>
            <option value="AK">Albert King</option>
            <option value="BG">Buddy Guy</option>
            <option value="EC">Eric Clapton</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default ProductListHeading;
