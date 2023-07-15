import React from "react";

interface IInputProps {
  type: string;
  name: string;
  placeholder: string;
}

const Input = ({ type = "text", name = "", placeholder }: IInputProps) => {
  const styleInput =
    "w-full bg-[#222222] rounded-lg font-medium border-transparent outline-none py-4 px-5";
  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      className={styleInput}
    />
  );
};

export default Input;
