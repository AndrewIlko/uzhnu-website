import { useSelector } from "react-redux";
import { Category, NewsCategories, NewsFilter } from "@/ts/types/app_types";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { updateObj, urlToQuery } from "@/helpers";
import { PAGE_URL } from "@/data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const CategoriesFilter = ({
  newsCategories,
  filter,
  setFilter,
}: {
  newsCategories: NewsCategories;
  filter: NewsFilter;
  setFilter: Function;
}) => {
  const handleClick = (id: string) => {
    setFilter((prev: NewsFilter) => {
      const copy = { ...prev };
      if (copy["category"]!.includes(id)) {
        let updated = updateObj(
          copy,
          "category",
          prev["category"]!.filter((el) => el != id)
        );
        updated = updateObj(updated, "page", 1);
        return updated;
      } else {
        let updated = updateObj(copy, "category", [...prev["category"]!, id]);
        updated = updateObj(updated, "page", 1);
        return updated;
      }
    });
  };

  return (
    <>
      <div className="w-full flex gap-x-[5px] gap-y-[5px] flex-wrap">
        {newsCategories.data.map((category: Category) => {
          const { _id: id, name, posts } = category;
          return (
            <div
              className={`flex whitespace-normal text-[14px] font-[500] gap-[15px] px-[10px] py-[10px] border-[1px]  rounded-[8px] bg-white select-none cursor-pointer transition-border duration-200 ${
                filter.category && filter.category.includes(id)
                  ? "border-black "
                  : ""
              }`}
              onClick={() => handleClick(id)}
              key={id}
            >
              <span className="">{name}</span>
              <span className="">{posts.length}</span>
            </div>
          );
        })}
      </div>
    </>
  );
};

export const TitleInput = ({
  setFilter,
}: {
  filter: NewsFilter;
  setFilter: Function;
}) => {
  const [title, setTitle] = useState("");

  return (
    <>
      <div>
        <form
          className="flex gap-[5px]"
          onSubmit={(e) => {
            e.preventDefault();
            setFilter((prev: NewsFilter) => {
              const copy = { ...prev };
              let updated = updateObj(copy, "title", title);
              updated = updateObj(updated, "page", 1);
              return updated;
            });
          }}
        >
          <div className="flex relative w-full">
            <FontAwesomeIcon
              className="w-[15px] absolute left-[15px] top-[12px] pointer-events-none"
              icon={faMagnifyingGlass}
            />
            <input
              className={`px-[20px] w-full py-[8px] pl-[50px] rounded-[6px] first-line:text-[16px] outline-none before:content-[${(
                <FontAwesomeIcon icon={faMagnifyingGlass} />
              )}]`}
              placeholder="Введіть назву поста"
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            />
          </div>
          <button className="px-[25px] rounded-tr-[6px] rounded-br-[6px] font-[500] border rounded-[6px] bg-black text-white">
            <span className="text-[14px]">Пошук</span>
          </button>
        </form>
      </div>
    </>
  );
};

const NewsFilter = ({
  filter,
  setFilter,
}: {
  filter: NewsFilter;
  setFilter: Function;
}) => {
  const newsCategories = useSelector(
    (state: any) => state.global["news-categories"]
  );

  return (
    <>
      <div className="flex flex-col">
        {newsCategories.data.length != 0 && (
          <CategoriesFilter
            newsCategories={newsCategories}
            filter={filter}
            setFilter={setFilter}
          />
        )}
        <div className="mt-[15px]">
          <TitleInput filter={filter} setFilter={setFilter} />
        </div>
      </div>
    </>
  );
};

export default NewsFilter;
