const SkeletonPost = () => {
  return (
    <>
      <a target="_blank">
        <div className="h-[500px] lg:h-[225px] bg-white rounded-lg p-[16px] flex flex-col lg:flex-row gap-[30px] animate-pulse">
          <div className="lg:min-w-[330px] h-[100%] bg-neutral-100 dark:bg-neutral-200 rounded-md overflow-hidden" />
          <div className="w-full flex flex-col flex-1 justify-between px-[5px] md:px-[30px] lg:px-0">
            <div className="font-[600] text-[18px] lg:text-[16px] w-full h-[40px] bg-neutral-100 dark:bg-neutral-200 rounded-md" />
            <div className="flex justify-between items-center gap-[30px] lg:pb-[5px] mt-[60px] lg:mt-0">
              <div className="bg-neutral-100 dark:bg-neutral-200 rounded-md h-[25px] w-[45px]" />
              <div className="bg-neutral-100 lg:mr-[20px] dark:bg-neutral-200 rounded-md h-[25px] w-[75px]" />
              <div className="bg-neutral-100 lg:mr-[20px] dark:bg-neutral-200 rounded-md h-[25px] w-[80px]" />
            </div>
          </div>
        </div>
      </a>
    </>
  );
};

export default SkeletonPost;
