import Link from "next/link";

const DepartmentsList = ({ className }: { className?: string }) => {
  const departments = [
    {
      title: "Кафедра програмного забезпечення систем",
      link: "/about/software",
    },
    {
      title: "Кафедра інформаційних управляючих систем та технологій",
      link: "/about/it-technology",
    },
    {
      title: "Кафедра інформатики та фізико-математичних дисциплін",
      link: "/about/fiz-math",
    },
  ];

  return (
    <>
      <div
        className={`flex flex-col gap-[10px] max-w-[500px] w-full mx-auto ${className}`}
      >
        {departments.map((department) => {
          const { title, link } = department;
          return (
            <>
              <Link href={link} title={title}>
                <div className="px-[20px] py-[15px] cursor-pointer bg-white rounded-[8px] border-[2px] border-[transparent] hover:shadow-md duration-300">
                  <div className="line-clamp-1 font-[500] text-[14px]">
                    {title}
                  </div>
                </div>
              </Link>
            </>
          );
        })}
      </div>
    </>
  );
};

export default DepartmentsList;
