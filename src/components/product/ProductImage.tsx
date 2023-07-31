const ProductImage = ({
  name,
  image,
}: {
  name: string | undefined;
  image: string | undefined;
}) => {
  return (
    <div className="flex items-center justify-center w-full">
      <img
        alt={name}
        src={image}
        className="object-cover h-full max-w-[400px] w-full mx-auto my-auto aspect-square rounded-xl"
      />
    </div>
  );
};

export default ProductImage;
