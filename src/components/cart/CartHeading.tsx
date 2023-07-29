const CartHeading = ({ children }: { children: string }) => {
  return (
    <div className="mb-6">
      <h1 className="text-2xl font-bold text-primary">{children}</h1>
    </div>
  );
};

export default CartHeading;
