import { updateObj } from "@/helpers";
import { Post } from "@/ts/types/app_types";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { memo, useState } from "react";

const EditModeRow = (props: {
  data: Post;
  setUpdatedPost: Function;
  setIsEdit: Function;
}) => {
  const { data, setIsEdit, setUpdatedPost } = props;
  const [post, setPost] = useState(data);

  return (
    <>
      <tr>
        <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
          {post._id}
        </td>
        <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
          <input
            type="date"
            value={new Date(post.date)
              .toLocaleDateString()
              .split(".")
              .reverse()
              .join("-")}
            onChange={(e) => {
              setPost((prev) => {
                const copy = { ...prev };
                return updateObj(
                  copy,
                  "date",
                  new Date(e.target.value).toISOString()
                );
              });
            }}
          />
        </td>
        <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
          <input type="file" />
        </td>
        <td className="px-6 py-4 text-sm font-medium ">
          <textarea
            className="w-full p-[5px] border max-h-[100px] min-h-[100px]"
            value={post.title}
          />
        </td>
        <td className="px-6 py-4 text-sm font-medium text-center">
          {post.countOfViews}
        </td>
        <td className="text-center px-6 py-4 ">
          <button
            className="w-[100px] px-[15px] bg-green-300 rounded-[6px] font-[500] mb-[5px] py-[5px]"
            onClick={() => {
              setIsEdit(false);
              setUpdatedPost(post);
            }}
          >
            Save
          </button>
          <button
            className="w-[100px] px-[15px] bg-red-300 rounded-[6px] font-[500] py-[5px]"
            onClick={() => setIsEdit(false)}
          >
            Cancel
          </button>
        </td>
      </tr>
    </>
  );
};

const PostTableRow = (props: { data: Post }) => {
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const { data } = props;
  const [post, setPost] = useState(data);

  if (isEdit) {
    return (
      <EditModeRow data={post} setUpdatedPost={setPost} setIsEdit={setIsEdit} />
    );
  }

  return (
    <>
      <tr>
        <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
          {post._id}
        </td>
        <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
          {new Date(post.date).toLocaleDateString()}
        </td>
        <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
          <input type="file" />
        </td>
        <td className="px-6 py-4 text-sm font-medium ">{post.title}</td>
        <td className="px-6 py-4 text-sm font-medium text-center">
          {post.countOfViews}
        </td>
        <td className="text-center px-6 py-4">
          <button onClick={() => setIsEdit(true)}>
            <FontAwesomeIcon icon={faPenToSquare} />
          </button>
        </td>
      </tr>
    </>
  );
};

export default memo(PostTableRow);
