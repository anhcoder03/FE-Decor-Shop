/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React, { useEffect, useState } from "react";
import { useWatch } from "react-hook-form";
import useClickOutSide from "../../hooks/useClickOutSIde";

const DropdownCategory = ({
  control,
  setValue,
  name,
  data,
  dropdownLabel = "Phân loại danh mục",
}: any) => {
  const { show, setShow, nodeRef } = useClickOutSide(null);
  const dropdownValue = useWatch({
    control,
    name: "categoryId",
    defaultValue: "",
  });
  console.log("dropdownValue", dropdownValue);
  const handleClickDropdownItem = (e: any) => {
    setValue(name, e.target.dataset.value);
    setShow(false);
    setLabel(e.target.textContent);
  };
  const [label, setLabel] = useState(dropdownLabel);
  useEffect(() => {
    setLabel(dropdownLabel);
  }, [dropdownLabel]);

  return (
    <div className="relative w-full" ref={nodeRef}>
      <div
        className="flex items-center justify-between p-5 border rounded-lg cursor-pointer bg-primary border-gray100"
        onClick={() => setShow(!show)}
      >
        <span>{label}</span>
      </div>
      <div
        className={`absolute top-full left-0 w-full  rounded-lg bg-primary ${
          show ? "" : "opacity-0 invisible"
        }`}
      >
        {data.map((item: any) => (
          <div
            className="p-5 cursor-pointer hover:bg-gray-100"
            onClick={handleClickDropdownItem}
            data-value={item._id}
            key={item._id}
          >
            {item.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DropdownCategory;
