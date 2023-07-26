const PageNotFound = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-black">
      <div className="flex items-center justify-center text-white">
        <h1 className="inline-block pr-6 mr-5 text-2xl font-medium border-r border-r-slate-400">
          404
        </h1>
        <div className="text-left h-[40px] flex items-center">
          <h2 className="text-sm font-normal">
            This page could not be found{/* */}.
          </h2>
        </div>
      </div>
    </div>
  );
};

export default PageNotFound;
