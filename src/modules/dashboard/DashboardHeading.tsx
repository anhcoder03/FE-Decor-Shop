import React from "react";

interface IDashboardHeadingProps {
  title: string;
  desc?: string;
  children?: React.ReactNode;
}

const DashboardHeading = ({
  children,
  title,
  desc,
}: IDashboardHeadingProps) => {
  return (
    <div className="flex items-center justify-between mb-10">
      <div>
        <h1 className="mb-3 text-4xl font-bold">{title}</h1>
        <p className="text-sm">{desc}</p>
      </div>
      {children}
    </div>
  );
};

export default DashboardHeading;
