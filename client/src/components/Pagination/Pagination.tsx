import useWindowWidth from "@/custom-hooks/useWindowWidth";
import { updateObj } from "@/helpers";
import { NewsFilter } from "@/ts/types/app_types";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const PaginationBtn = ({
  className,
  children,
  clickHandler,
}: {
  className?: string;
  children: any;
  clickHandler: Function;
}) => {
  return (
    <>
      <button
        onClick={() => clickHandler()}
        className={`px-[10px] py-[10px] bg-black text-white rounded-[8px] border-[2px] font-[500]`}
      >
        {children}
      </button>
    </>
  );
};

const PaginationNumberBtn = ({
  isSelected,
  children,
  clickHandler,
}: {
  isSelected: boolean;
  children: number;
  clickHandler: Function;
}) => {
  return (
    <>
      <button
        className={`px-[15px] rounded-[8px] font-[500] h-[41px] border-[2px] ${
          isSelected ? "bg-black text-white" : "bg-white text-black"
        }`}
        onClick={() => clickHandler()}
      >
        {children}
      </button>
    </>
  );
};

const ThreeDots = () => {
  return (
    <>
      <div
        className={`px-[10px] font-[500] h-[41px] flex flex-col justify-end pb-[5px]`}
      >
        ...
      </div>
    </>
  );
};

const Pagination = ({
  total,
  page,
  setFilter,
}: {
  total: number;
  page: number;
  setFilter: Function;
}) => {
  const windowWidth = useWindowWidth();
  const genPaginationBtns = () => {
    let buttons = [];

    if (total <= 6) {
      for (let i = 1; i <= total; i++) {
        buttons.push(
          <PaginationNumberBtn
            isSelected={page == i}
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
    } else {
      if (page < 4) {
        for (let i = 1; i <= 4; i++) {
          buttons.push(
            <PaginationNumberBtn
              isSelected={page == i}
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
        buttons.push(<ThreeDots />);
        buttons.push(
          <PaginationNumberBtn
            isSelected={false}
            clickHandler={() => {
              setFilter((prev: NewsFilter) => {
                const copy = { ...prev };
                return updateObj(copy, "page", total);
              });
              window.scrollTo(0, 0);
            }}
          >
            {total}
          </PaginationNumberBtn>
        );
      }

      if (page >= 4 && page <= total - 3) {
        buttons.push(
          <PaginationNumberBtn
            isSelected={false}
            clickHandler={() => {
              setFilter((prev: NewsFilter) => {
                const copy = { ...prev };
                return updateObj(copy, "page", 1);
              });
              window.scrollTo(0, 0);
            }}
          >
            {1}
          </PaginationNumberBtn>
        );
        buttons.push(<ThreeDots />);
        buttons.push(
          <PaginationNumberBtn
            isSelected={false}
            clickHandler={() => {
              setFilter((prev: NewsFilter) => {
                const copy = { ...prev };
                return updateObj(copy, "page", page - 1);
              });
              window.scrollTo(0, 0);
            }}
          >
            {page - 1}
          </PaginationNumberBtn>
        );
        buttons.push(
          <PaginationNumberBtn
            isSelected={true}
            clickHandler={() => {
              setFilter((prev: NewsFilter) => {
                const copy = { ...prev };
                return updateObj(copy, "page", page);
              });
              window.scrollTo(0, 0);
            }}
          >
            {page}
          </PaginationNumberBtn>
        );

        buttons.push(
          <PaginationNumberBtn
            isSelected={false}
            clickHandler={() => {
              setFilter((prev: NewsFilter) => {
                const copy = { ...prev };
                return updateObj(copy, "page", page + 1);
              });
              window.scrollTo(0, 0);
            }}
          >
            {page + 1}
          </PaginationNumberBtn>
        );
        buttons.push(<ThreeDots />);
        buttons.push(
          <PaginationNumberBtn
            isSelected={false}
            clickHandler={() => {
              setFilter((prev: NewsFilter) => {
                const copy = { ...prev };
                return updateObj(copy, "page", total);
              });
              window.scrollTo(0, 0);
            }}
          >
            {total}
          </PaginationNumberBtn>
        );
      } else if (total - 3 <= page) {
        buttons.push(
          <PaginationNumberBtn
            isSelected={false}
            clickHandler={() => {
              setFilter((prev: NewsFilter) => {
                const copy = { ...prev };
                return updateObj(copy, "page", 1);
              });
              window.scrollTo(0, 0);
            }}
          >
            {1}
          </PaginationNumberBtn>
        );
        buttons.push(<ThreeDots />);
        for (let i = total - 3; i <= total; i++) {
          buttons.push(
            <PaginationNumberBtn
              isSelected={page == i}
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
      }
    }

    return buttons;
  };

  if (total <= 1) {
    return <></>;
  }

  return (
    <>
      <div className="flex flex-col justify-center items-center gap-[5px] w-fit mx-auto">
        <div className="flex justify-center items-center gap-[5px] text-[14px] w-fit">
          {windowWidth && windowWidth > 620 && page != 1 && (
            <PaginationBtn
              clickHandler={() => {
                setFilter((prev: NewsFilter) => {
                  const copy = { ...prev };
                  return updateObj(copy, "page", copy["page"]! - 1);
                });
                window.scrollTo(0, 0);
              }}
            >
              <div className="flex gap-[10px] justify-center">
                <FontAwesomeIcon className="w-[12px]" icon={faArrowLeft} />
                <span>Попередня</span>
              </div>
            </PaginationBtn>
          )}
          {genPaginationBtns()}
          {windowWidth && windowWidth > 620 && page != total && (
            <PaginationBtn
              clickHandler={() => {
                setFilter((prev: NewsFilter) => {
                  const copy = { ...prev };
                  return updateObj(copy, "page", copy["page"]! + 1);
                });
                window.scrollTo(0, 0);
              }}
            >
              <div className="flex gap-[10px] justify-center">
                <span>Наступна</span>
                <FontAwesomeIcon
                  className="w-[12px] rotate-180"
                  icon={faArrowLeft}
                />
              </div>
            </PaginationBtn>
          )}
        </div>
        {windowWidth && windowWidth <= 620 && (
          <div className="grid w-full grid-cols-2 gap-[10px]">
            {page == 1 && <div />}
            {page != 1 && (
              <PaginationBtn
                clickHandler={() => {
                  setFilter((prev: NewsFilter) => {
                    const copy = { ...prev };
                    return updateObj(copy, "page", copy["page"]! - 1);
                  });
                  window.scrollTo(0, 0);
                }}
              >
                <div className="flex gap-[10px] justify-center">
                  <FontAwesomeIcon className="w-[12px]" icon={faArrowLeft} />
                  <span>Попередня</span>
                </div>
              </PaginationBtn>
            )}
            {page == total && <div />}
            {page != total && (
              <PaginationBtn
                clickHandler={() => {
                  setFilter((prev: NewsFilter) => {
                    const copy = { ...prev };
                    return updateObj(copy, "page", copy["page"]! + 1);
                  });
                  window.scrollTo(0, 0);
                }}
              >
                <div className="flex gap-[10px] justify-center">
                  <span>Наступна</span>
                  <FontAwesomeIcon
                    className="w-[12px] rotate-180"
                    icon={faArrowLeft}
                  />
                </div>
              </PaginationBtn>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default Pagination;
