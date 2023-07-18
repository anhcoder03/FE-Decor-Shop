import React from "react";

const LoadingSearch = () => {
  return (
    <div className="flex items-center justify-center h-full p-4">
      <div className="w-3 h-3 border-4 border-t-4 border-primary rounded-full border-t-transparent animate-spin"></div>
    </div>
  );
};

export default LoadingSearch;
