import React from "react";

interface IQuantityProps {
  quantity: number;
  setQuantity: React.Dispatch<React.SetStateAction<number>>;
}

const Quantity = ({ quantity = 1, setQuantity }: IQuantityProps) => {
  const decrement = () => {
    if (quantity === 1) return;
    setQuantity(quantity - 1);
  };

  const increment = () => {
    if (quantity === 10) return;
    setQuantity(quantity + 1);
  };
  return (
    <div className="flex items-center justify-center px-5 py-3 bg-black gap-x-10 w-[150px]">
      <button
        type="button"
        className="text-xl font-bold text-primary"
        onClick={decrement}
      >
        -
      </button>
      <span className="flex-1 text-xl text-center text-white ">{quantity}</span>
      <button
        type="button"
        className="text-xl font-bold text-primary"
        onClick={increment}
      >
        +
      </button>
    </div>
  );
};

export default Quantity;
