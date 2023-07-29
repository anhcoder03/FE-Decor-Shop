import React from "react";
import LoadingSpinner from "../common/LoadingSpinner";
import { NavLink } from "react-router-dom";

interface IButtonProps {
  children: string | React.ReactNode;
  type: "submit" | "button";
  onClick?: () => void;
  isLoading?: boolean;
  to?: string;
  height?: string;
  className?: string;
  disabled?: boolean;
}

const Button = ({
  type,
  onClick,
  isLoading,
  to,
  children,
  className = "",
  disabled,
}: IButtonProps) => {
  const styleButton = ` flex items-center justify-center px-6 py-2 text-base font-semibold leading-4 text-white disabled:opacity-50 disabled:pointer-events-none bg-primary rounded-xl ${className}`;

  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const child: string | React.ReactNode = isLoading ? (
    <LoadingSpinner></LoadingSpinner>
  ) : (
    children
  );
  if (to !== "" && typeof to === "string") {
    return (
      <NavLink to={to || ""} className={styleButton}>
        <button className={styleButton} type={type}>
          {child}
        </button>
      </NavLink>
    );
  }
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={styleButton}
    >
      {child}
    </button>
  );
};

export default Button;
