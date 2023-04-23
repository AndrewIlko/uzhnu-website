import { useSelector } from "react-redux";
import { Category, NewsCategories, NewsFilter } from "@/ts/types/app_types";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { updateObj, urlToQuery } from "@/helpers";
import { PAGE_URL } from "@/data";

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
      if (copy["category"].includes(id)) {
        let updated = updateObj(
          copy,
          "category",
          prev["category"].filter((el) => el != id)
        );
        updated = updateObj(updated, "page", 1);
        return updated;
      } else {
        let updated = updateObj(copy, "category", [...prev["category"], id]);
        updated = updateObj(updated, "page", 1);
        return updated;
      }
    });
  };

  return (
    <>
      <div className="w-full flex gap-x-[10px] gap-y-[10px] flex-wrap">
        {newsCategories.data.map((category: Category) => {
          const { _id: id, name, posts } = category;
          return (
            <div
              className={`flex whitespace-normal text-[14px] font-[500] gap-[15px] px-[20px] py-[8px] border-[2px] rounded-[8px] bg-white select-none cursor-pointer transition-border duration-200 ${
                filter["category"].includes(id) ? "border-teal-500" : ""
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

const TitleInput = ({
  setFilter,
}: {
  filter: NewsFilter;
  setFilter: Function;
}) => {
  const [title, setTitle] = useState("");

  return (
    <>
      <div className="mt-[15px]">
        <form
          className="flex"
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
          <input
            className="px-[20px] py-[8px] rounded-tl-[6px] rounded-bl-[6px] w-full text-[16px] outline-none"
            placeholder="Введіть назву посту"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
          <button className="px-[25px] bg-teal-600 rounded-tr-[6px] rounded-br-[6px] font-[500] text-white">
            Пошук
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
  const { push, asPath } = useRouter();

  const newsCategories = useSelector(
    (state: any) => state.global["news-categories"]
  );

  console.log(filter);

  useEffect(() => {
    const queryCategory =
      filter.category.length != 0
        ? filter.category.map((category) => `category=${category}`).join("&")
        : "";
    const queryTitle = filter.title.length != 0 ? `title=${filter.title}` : "";
    const queryPage = filter.page > 1 ? `page=${filter.page}` : "";

    const arr = [queryCategory, queryTitle, queryPage].filter((el) => el != "");
    const queryString = arr.join("&");

    const url = `${PAGE_URL}/news${
      queryString.length != 0 ? "?" : ""
    }${queryString}`;

    if (url != PAGE_URL + asPath) {
      push(url, undefined, { shallow: true });
    }
  }, [filter]);

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
        <TitleInput filter={filter} setFilter={setFilter} />
      </div>
    </>
  );
};

export default NewsFilter;
