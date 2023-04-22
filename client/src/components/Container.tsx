const Container = ({ children }: { children: any }) => {
  return (
    <>
      <div className="max-w-[1200px] w-full mx-auto h-full flex flex-col flex-1">
        {children}
      </div>
    </>
  );
};

export default Container;
