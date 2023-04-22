import { Post } from "@/ts/types/app_types";
import { useMemo, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { URL } from "@/data";
import { useSelector } from "react-redux";

const Post = ({ data }: { data: Post }) => {
  const {
    postLink,
    title,
    date,
    _id: id,
    categoryID,
    countOfViews: views,
  } = useMemo(() => data, []);
  const [countOfViews, setCountOfViews] = useState(views);
  const categories = useSelector(
    (state: any) => state.global["news-categories"]
  );

  const makeViewed = async () => {
    let viewedPosts = localStorage.getItem("viewed-posts")
      ? JSON.parse(localStorage.getItem("viewed-posts")!)
      : [];

    if (viewedPosts.indexOf(id) == -1) {
      viewedPosts = [...viewedPosts, id];

      localStorage.setItem("viewed-posts", JSON.stringify(viewedPosts));
      setCountOfViews((prev) => prev + 1);
      await axios.post(URL + `/post/${id}/add-view`);
    }
  };

  return (
    <>
      <a href={postLink} target="_blank" onClick={() => makeViewed()}>
        <div className="h-[200px] bg-white rounded-lg p-[16px] flex gap-[20px] shadow-sm hover:scale-[1.025] transition-transform duration-500">
          <div className="min-w-[300px] h-[100%] bg-neutral-200 rounded-md overflow-hidden">
            <img
              className="max-w-[300px]"
              src={
                "https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg"
              }
            />
          </div>
          <div className="w-fit flex flex-col flex-1 justify-between">
            <p className="font-[600]">{title}</p>
            <div className="flex justify-between items-center gap-[30px] pb-[5px]">
              <div className="text-[14px] font-[500] flex gap-[10px] items-center">
                <FontAwesomeIcon icon={faEye} className="w-[14px]" />
                <span>{countOfViews}</span>
              </div>
              <div className="text-right mr-[20px] text-[14px] font-[600]">
                {categories.data.length != 0 &&
                  categories.data.find(
                    (category: any) => category["_id"] == categoryID
                  ).name}
              </div>
              <div className="text-right mr-[20px] text-[14px] font-[600] text-neutral-600">
                {new Date(date).toLocaleDateString("uk-UA")}
              </div>
            </div>
          </div>
        </div>
      </a>
    </>
  );
};

export default Post;
