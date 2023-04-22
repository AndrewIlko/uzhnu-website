const Main = ({ children }: { children: any }) => {
  return (
    <>
      <main className="flex flex-col flex-1 w-full min-h-[calc(100vh-60px)]">
        {children}
      </main>
    </>
  );
};

export default Main;
