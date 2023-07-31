/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { useEffect, useState } from "react";
import { useWatch } from "react-hook-form";
import useClickOutSide from "../../hooks/useClickOutSIde";

const DropdownCategory = ({
  control,
  setValue,
  name = "categoryId",
  data,
  dropdownLabel = "Phân loại danh mục",
}: any) => {
  const { show, setShow, nodeRef } = useClickOutSide(null);
  const dropdownValue = useWatch({
    control,
    name,
    defaultValue: "",
  });
  console.log(dropdownValue);
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
            className="px-5 py-4 rounded-lg cursor-pointer hover:bg-primary"
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
