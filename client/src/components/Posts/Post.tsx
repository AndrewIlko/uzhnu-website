import { Post } from "@/ts/types/app_types";
import { useMemo, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { URL } from "@/data";
import { useSelector } from "react-redux";
import defaultImg from "../../assets/images/other/default-news-image.png";

const Post = ({ data }: { data: Post }) => {
  const {
    postLink,
    title,
    date,
    _id: id,
    categoryID,
    countOfViews: views,
    image,
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
      await axios.post(`/post/${id}/add-view`);
    }
  };

  return (
    <>
      <a href={postLink} target="_blank" onClick={() => makeViewed()}>
        <div className="h-[500px] lg:h-[225px] bg-white rounded-lg p-[16px] flex flex-col lg:flex-row gap-[30px]">
          <div
            className="lg:min-w-[330px] h-[100%] bg-neutral-200 rounded-md overflow-hidden bg-cover bg-center"
            style={{
              backgroundImage: `url("${image ? image : defaultImg.src}")`,
            }}
          />
          <div className="w-fit flex flex-col flex-1 justify-between px-[5px] md:px-[30px] lg:px-0">
            <p className="font-[600] text-[18px] lg:text-[16px]">{title}</p>
            <div className="flex justify-between items-center gap-[30px] lg:pb-[5px] mt-[60px] lg:mt-0 w-full">
              <div className="text-[14px] font-[500] flex gap-[10px] items-center">
                <FontAwesomeIcon
                  icon={faEye}
                  className="w-[16px] lg:w-[14px]"
                />
                <span className="text-[16px] lg:text-[14px]">
                  {countOfViews}
                </span>
              </div>
              <div className="text-right lg:mr-[20px] text-[16px] lg:text-[14px] font-[600]">
                {categories.data.length != 0 &&
                  categories.data.find(
                    (category: any) => category["_id"] == categoryID
                  ).name}
              </div>
              <div className="text-right lg:mr-[20px] text-[16px] lg:text-[14px] font-[600] text-neutral-600">
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
