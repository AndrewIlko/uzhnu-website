import { updateObj } from "@/helpers";
import { NewsFilter } from "@/ts/types/app_types";

const PaginationBtn = ({
  children,
  clickHandler,
}: {
  children: any;
  clickHandler: Function;
}) => {
  return (
    <>
      <button
        onClick={() => clickHandler()}
        className="px-[10px] py-[10px] bg-white rounded-[8px] border-[2px] font-[500] hover:border-teal-500"
      >
        {children}
      </button>
    </>
  );
};

const PaginationNumberBtn = ({
  className,
  children,
  clickHandler,
}: {
  className: string;
  children: number;
  clickHandler: Function;
}) => {
  return (
    <>
      <button
        className={`px-[15px] rounded-[8px] bg-white font-[500] border-[2px] hover:border-teal-500 hover:shadow ${className}`}
        onClick={() => clickHandler()}
      >
        {children}
      </button>
    </>
  );
};

const Pagination = ({
  total,
  limit,
  currentPage,
  setFilter,
}: {
  total: number;
  limit: number;
  currentPage: number;
  setFilter: Function;
}) => {
  const totalPages = Math.round(total / limit);

  console.log(currentPage);
  const generateBtn = () => {
    let btns = [];

    for (let i = 1; i <= totalPages; i++) {
      btns.push(
        <PaginationNumberBtn
          className={`${
            currentPage == i ? "bg-teal-500 border-teal-500 text-white" : ""
          }`}
          clickHandler={() => {
            setFilter((prev: NewsFilter) => {
              const copy = { ...prev };
              return updateObj(copy, "page", i);
            });
            window.scrollTo(0, 0);
          }}
        >
          {i}
        </PaginationNumberBtn>
      );
    }
    return btns;
  };

  return (
    <>
      <div className="flex justify-center gap-[5px] text-[14px]">
        {currentPage != 1 && (
          <PaginationBtn
            clickHandler={() => {
              setFilter((prev: NewsFilter) => {
                const copy = { ...prev };
                return updateObj(copy, "page", copy["page"] - 1);
              });
              window.scrollTo(0, 0);
            }}
          >
            Попередня
          </PaginationBtn>
        )}
        {generateBtn()}
        {currentPage != totalPages && (
          <PaginationBtn
            clickHandler={() => {
              setFilter((prev: NewsFilter) => {
                const copy = { ...prev };
                return updateObj(copy, "page", copy["page"] + 1);
              });
              window.scrollTo(0, 0);
            }}
          >
            Наступна
          </PaginationBtn>
        )}
      </div>
    </>
  );
};

export default Pagination;
