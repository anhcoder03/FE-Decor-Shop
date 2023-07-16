import React from "react";
import { Control, FieldValues, useController } from "react-hook-form";

interface IInputProps {
  type: string;
  name: string;
  placeholder: string;
  control: any;
}

const Input = ({
  type = "text",
  name = "",
  control,
  placeholder,
}: IInputProps) => {
  const { field } = useController<any>({
    name,
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    control,
    defaultValue: "",
  });
  const styleInput =
    "w-full bg-[#222222] rounded-lg font-medium border-transparent outline-none py-4 px-5";
  return (
    <input
      type={type}
      id={name}
      placeholder={placeholder}
      className={styleInput}
      {...field}
    />
  );
};

export default Input;
