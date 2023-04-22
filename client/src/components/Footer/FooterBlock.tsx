const FooterBlock = ({ children }: { children: any }) => {
  return (
    <>
      <div className="w-full h-fit flex flex-col">{children}</div>
    </>
  );
};

export default FooterBlock;
