import React from "react";
import { useController } from "react-hook-form";

interface IInputProps {
  type: string;
  name: string;
  placeholder: string;
  control: any;
  className?: string;
  children?: React.ReactNode;
  disabled?: boolean;
}

const Input = ({
  type = "text",
  name = "",
  control,
  placeholder,
  className = "",
  children,
  disabled,
}: IInputProps) => {
  const { field } = useController<any>({
    name,
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    control,
    defaultValue: "",
  });
  const styleInput = `w-full bg-[#222222] rounded-lg font-medium border-transparent outline-none   py-4 px-5 ${className}`;
  return (
    <div className="relative w-full">
      <input
        type={type}
        id={name}
        placeholder={placeholder}
        className={styleInput}
        disabled={disabled}
        {...field}
      />
      {children ? <div className="input-icon"> {children} </div> : null}
    </div>
  );
};

export default Input;
