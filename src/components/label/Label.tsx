interface ILabelProps {
  children: string;
  htmlFor?: string;
}

const Label = ({ children, htmlFor }: ILabelProps) => {
  return (
    <label htmlFor={htmlFor} className="font-semibold cursor-pointer">
      {children}
    </label>
  );
};

export default Label;
