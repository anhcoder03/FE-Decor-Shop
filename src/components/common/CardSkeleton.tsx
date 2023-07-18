import React from "react";
import LoadingSkeleton from "./LoadingSkeleton";

const CardSkeleton = () => {
  return (
    <div className="cursor-pointer">
      <LoadingSkeleton height="300px" />
      <div className="mt-2">
        <div className="flex items-center justify-center mt-2 select-none">
          <LoadingSkeleton height="8px" width="80%" />
        </div>
        <div className="flex items-center justify-center mt-2 select-none">
          <LoadingSkeleton height="8px" width="40%" />
        </div>
      </div>
    </div>
  );
};

export default CardSkeleton;
