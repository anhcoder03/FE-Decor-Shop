interface IHeadingProps {
  children: string;
  className?: string;
}

const Heading = ({ children, className }: IHeadingProps) => {
  return (
    // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
    <div className={`relative ${className}`}>
      <h1 className="text-3xl font-bold text-center text-primary">
        {children}
      </h1>
      <div className="absolute w-[100px] -bottom-2 bg-primary h-1 left-1/2 -translate-x-1/2"></div>
    </div>
  );
};

export default Heading;
