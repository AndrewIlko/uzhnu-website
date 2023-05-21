import { convertFileToBase64, updateObj } from "@/helpers";
import { Post } from "@/ts/types/app_types";
import {
  faBan,
  faFloppyDisk,
  faPenToSquare,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { ChangeEvent, memo, useEffect, useState } from "react";
import defaultImg from "../../assets/images/other/default-news-image.png";
import { useMutation } from "react-query";
import axios from "axios";
import { adminDashboardAction } from "@/redux/slices/adminDashboardSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { stat } from "fs";

const EditModeRow = (props: {
  data: Post;
  refetch: Function;
  setUpdatedPost: Function;
  setIsEdit: Function;
}) => {
  const { data, setIsEdit, setUpdatedPost, refetch } = props;
  const [post, setPost] = useState<Post>(data);
  const { setPostToDelete } = adminDashboardAction;
  const dispatch = useDispatch();

  const handleImageChange = async (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target && e.target.files && e.target.files.length) {
      try {
        const uploadedImageBase64 = await convertFileToBase64(
          e.target.files[0]
        );
        setPost((prev) => {
          const copy = { ...prev };

          if (uploadedImageBase64 != undefined) {
            copy.image = uploadedImageBase64.toString();
          }

          console.log(uploadedImageBase64);
          return copy;
        });
      } catch (e) {
        console.log(e);
      }
    }
  };
  const updatePost = async () => {
    const response = await axios.patch(`/post/${post._id}/update`, post);
    return response.data;
  };

  const { mutate: postMutate } = useMutation(updatePost, {
    onSuccess: () => {
      refetch();
    },
  });

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
          <div className="relative">
            <Image
              src={post.image || defaultImg}
              alt="image"
              width={200}
              height={150}
              className="min-w-[100px] rounded-[8px]"
            />
            <input
              className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
              type="file"
              accept="image/*"
              onChange={handleImageChange}
            />
          </div>
        </td>
        <td className="px-6 py-4 text-sm font-medium">
          <textarea
            className="w-full p-[5px] border max-h-[100px] min-h-[60px]"
            onChange={(e) => {
              setPost((prev) => {
                const copy = { ...prev };
                return updateObj(copy, "title", e.target.value);
              });
            }}
            value={post.title}
          />
        </td>
        <td className="px-6 py-4 text-sm font-medium text-center">
          {post.countOfViews}
        </td>
        <td className="text-center px-6 py-4">
          <div className="flex flex-col items-center gap-[10px]">
            <button
              className="px-[15px] bg-red-200 rounded-[6px] font-[500] h-[40px] w-[40px] flex items-center justify-center border-[2px] border-red-400"
              onClick={() => {
                dispatch(setPostToDelete(post._id));
              }}
            >
              <FontAwesomeIcon
                className="text-red-600 scale-[2]"
                icon={faTrash}
              />
            </button>
            <button
              className="px-[15px] bg-green-200 rounded-[6px] font-[500] h-[40px] w-[40px] flex items-center justify-center border-[2px] border-green-400"
              onClick={() => {
                setIsEdit(false);
                setUpdatedPost(post);
                postMutate();
              }}
            >
              <FontAwesomeIcon
                className="text-green-600 scale-[2]"
                icon={faFloppyDisk}
              />
            </button>
            <button
              className="px-[15px] bg-red-200 rounded-[6px] font-[500] py-[5px] h-[40px] w-[40px] flex items-center justify-center  border-[2px] border-red-400"
              onClick={() => setIsEdit(false)}
            >
              <FontAwesomeIcon
                className="text-red-600 scale-[2]"
                icon={faBan}
              />
            </button>
          </div>
        </td>
      </tr>
    </>
  );
};

const PostTableRow = (props: { data: Post; refetch: Function }) => {
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const { data, refetch } = props;
  const [post, setPost] = useState<Post>(data);

  if (isEdit) {
    return (
      <EditModeRow
        data={post}
        setUpdatedPost={setPost}
        setIsEdit={setIsEdit}
        refetch={refetch}
      />
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
          <Image
            src={post.image || defaultImg}
            alt="image"
            width={200}
            height={150}
            className="min-w-[100px] rounded-[8px]"
          />
        </td>
        <td className="px-6 py-4 text-sm font-medium">{post.title}</td>
        <td className="px-6 py-4 text-sm font-medium text-center">
          {post.countOfViews}
        </td>
        <td className="text-center px-6 py-4">
          <button onClick={() => setIsEdit(true)}>
            <FontAwesomeIcon className="w-[18px]" icon={faPenToSquare} />
          </button>
        </td>
      </tr>
    </>
  );
};

export default memo(PostTableRow);
