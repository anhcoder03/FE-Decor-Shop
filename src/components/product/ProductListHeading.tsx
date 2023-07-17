import React from "react";

const ProductListHeading = () => {
  return (
    <div>
      <div className="header-product flex justify-end py-8">
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
