import React from "react";

interface ITableProps {
  children: React.ReactNode;
}

const Table = ({ children }: ITableProps) => {
  return (
    <div className="table-wrapper">
      <table>{children}</table>
    </div>
  );
};

export default Table;
