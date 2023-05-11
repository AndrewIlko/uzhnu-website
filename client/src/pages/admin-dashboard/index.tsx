import Container from "@/components/Container";
import Main from "@/components/Main/Main";
import { NewsFilter, Post } from "@/ts/types/app_types";
import axios from "axios";

import Head from "next/head";
import { useEffect, useMemo, useRef, useState } from "react";
import PostTableRow from "./PostTableRow";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp, faPlus } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
import { adminDashboardAction } from "@/redux/slices/adminDashboardSlice";
import { useDispatch } from "react-redux";
import AddPostPopUp from "./AddPostPopUp";
import { useQuery } from "react-query";
import { PAGE_URL } from "@/data";
import { useRouter } from "next/router";
import { queryToUrl, urlToQuery } from "@/helpers";
import Pagination from "@/components/Pagination/Pagination";
import { TitleInput } from "@/components/News/NewsFilter";

const AdminDashboard = () => {
  const { isAddPost } = useSelector((state: any) => state.adminDashboard);
  const { setIsAddPost } = adminDashboardAction;
  const dispatch = useDispatch();

  const isFirstRender = useRef(true);
  const limit = 10;
  const { asPath, replace } = useRouter();

  const query = useMemo(() => {
    return urlToQuery(asPath);
  }, []);

  const [filter, setFilter] = useState<NewsFilter>({
    title: query.title ? query.title[0] : "",
    page: query.page ? Number(query.page[0]) : 1,
    sortDate: query.sortData ? query.sortData : "desc",
  });

  const queryUrl = useMemo(() => {
    return queryToUrl(filter);
  }, [filter]);

  const fetchPosts = async () => {
    const data = await axios
      .get(`/post?limit=${limit}&${queryToUrl(filter)}`)
      .then((res) => res.data);
    return data;
  };

  const { data, isLoading, refetch } = useQuery(
    ["fetch-posts", filter],
    fetchPosts
  );

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    replace(
      `/admin-dashboard${queryUrl.length != 0 ? `?${queryUrl}` : ""}`,
      undefined,
      { shallow: true }
    );
  }, [filter]);

  const handleDateSort = () => {
    setFilter((prev) => {
      const copy = { ...prev };
      copy.sortDate = copy.sortDate == "desc" ? "asc" : "desc";
      return copy;
    });
  };

  return (
    <>
      <Head>
        <title>Admin Dashboard | UZHNU</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main>
        <div className="flex flex-col flex-1 py-[30px]">
          <div className="flex flex-col flex-1 px-[25px]">
            {!isLoading && data && (
              <>
                <div className="flex flex-col flex-1">
                  <div className="mb-[15px] font-[500] bg-white border px-[10px] py-[10px] rounded-[8px] flex gap-[30px] items-center justify-between">
                    {/* <div className=" bg-black px-[15px] py-[10px] text-[14px] rounded-[8px] text-white">
                  Кількість постів: {data.posts}
                </div> */}
                    <div>
                      <button
                        className="flex items-center gap-[10px] px-[10px] py-[10px] text-[14px] bg-black rounded-[6px] text-white"
                        onClick={() => dispatch(setIsAddPost(true))}
                      >
                        <span>Додати пост</span>
                        <FontAwesomeIcon className="w-[14px]" icon={faPlus} />
                      </button>
                    </div>
                    <TitleInput filter={filter} setFilter={setFilter} />
                  </div>
                  <div className="flex flex-col flex-1 justify-between gap-[15px]">
                    <table className="min-w-full divide-y divide-gray-200 bg-white rounded-[8px] overflow-hidden">
                      <thead className="bg-black select-none">
                        <tr>
                          <th
                            scope="col"
                            className="flex items-center px-6 py-3 text-xs font-bold text-left text-gray-300 uppercase "
                          >
                            ID
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-xs font-bold text-left text-gray-300 uppercase cursor-pointer"
                            onClick={() => handleDateSort()}
                          >
                            <div className="flex gap-[10px]">
                              <span>Дата</span>
                              <FontAwesomeIcon
                                className={`w-[8px] ${
                                  filter.sortDate == "desc" ? "" : "rotate-180"
                                }`}
                                icon={faArrowUp}
                              />
                            </div>
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-xs font-bold text-left text-gray-300 uppercase "
                          >
                            Фото
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-xs font-bold text-left text-gray-300 uppercase"
                          >
                            Заголовок
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-xs font-bold text-right text-gray-300 uppercase "
                          >
                            Переглядів
                          </th>
                          <th
                            scope="col"
                            className="px-[60px] py-3 text-xs font-bold text-right text-gray-300 uppercase "
                          ></th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200">
                        {data.posts.map((post: Post) => {
                          return (
                            <PostTableRow
                              key={post._id}
                              data={post}
                              refetch={refetch}
                            />
                          );
                        })}
                      </tbody>
                    </table>
                    <Pagination
                      page={data.currentPage}
                      total={data.totalPages}
                      setFilter={setFilter}
                    />
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </Main>
      {isAddPost && <AddPostPopUp refetch={refetch} />}
    </>
  );
};

export default AdminDashboard;
