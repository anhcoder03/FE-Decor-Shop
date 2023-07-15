import React from "react";

interface IFieldProps {
  children: React.ReactNode;
}

const Field = ({ children }: IFieldProps) => {
  return <div className="flex flex-col items-start gap-5 mb-7">{children}</div>;
};

export default Field;
