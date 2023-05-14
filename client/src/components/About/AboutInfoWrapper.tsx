const AboutInfoWrapper = ({ children }: { children: any }) => {
  return (
    <>
      <div className="px-[15px] bg-white xl:px-[30px] pt-[14px] pb-[30px] rounded-[8px]">
        {children}
      </div>
    </>
  );
};

export default AboutInfoWrapper;
