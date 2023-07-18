import React from "react";

const ProductImage = ({
  name,
  image,
}: {
  name: string | undefined;
  image: string | undefined;
}) => {
  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-1">
      <img
        alt={name}
        src={image}
        className="object-cover w-full aspect-square rounded-xl"
      />
    </div>
  );
};

export default ProductImage;
