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
  categoryId,
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
        className="flex items-center justify-between py-4 px-5 rounded-lg cursor-pointer bg-[#222222] mb-2"
        onClick={() => setShow(!show)}
      >
        <span>{label}</span>
      </div>
      <div
        className={`absolute top-full left-0 w-full z-20 rounded-lg bg-[#222222] ${
          show ? "" : "opacity-0 invisible"
        }`}
      >
        {data.map((item: any) => (
          <div
            className="py-4 px-5 cursor-pointer hover:bg-primary rounded-lg"
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
