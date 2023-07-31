/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { useEffect, useState } from "react";
import { useWatch } from "react-hook-form";
import useClickOutSide from "../../hooks/useClickOutSIde";

interface IDropDownProps {
  control: any;
  setValue: any;
  name: string;
  data: any;
  dropdownLabel?: string;
}

const DropdownStatusOrder = ({
  control,
  setValue,
  name,
  data,
  dropdownLabel = "Trạng thái giao hàng",
}: IDropDownProps) => {
  const { show, setShow, nodeRef } = useClickOutSide(".dropdown-order");
  const dropdownValue = useWatch({
    control,
    name: "status",
    defaultValue: "",
  });
  const handleClickDropdownItem = (e: any) => {
    setValue(name, e.target.dataset.value);
    setShow(false);
    setLabel(e.target.textContent);
  };
  const [label, setLabel] = useState(dropdownLabel);
  useEffect(() => {
    if (dropdownValue === "") setLabel(dropdownLabel);
  }, [dropdownValue]);
  return (
    <div className="relative w-full dropdown-order" ref={nodeRef}>
      <div
        className="flex items-center justify-between p-5 bg-[#222222] border rounded-lg cursor-pointer border-gray100"
        onClick={() => setShow(!show)}
      >
        <span>{label}</span>
      </div>
      <div
        className={`absolute top-full left-0 w-full z-10 rounded-lg bg-[#222222] ${
          show ? "" : "opacity-0 invisible"
        }`}
      >
        {Object.keys(data).map((value) => (
          <div
            className="p-5 cursor-pointer hover:bg-primary"
            onClick={handleClickDropdownItem}
            data-value={data[value]}
            key={value}
          >
            {data[value]}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DropdownStatusOrder;
