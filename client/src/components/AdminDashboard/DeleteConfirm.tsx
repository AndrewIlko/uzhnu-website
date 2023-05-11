import { adminDashboardAction } from "@/redux/slices/adminDashboardSlice";
import axios from "axios";
import { useMutation } from "react-query";
import { useDispatch } from "react-redux";

const DeleteConfirm = (props: { refetch: Function; postId: string }) => {
  const { refetch, postId } = props;
  const { setPostToDelete } = adminDashboardAction;
  const dispatch = useDispatch();

  const deletePost = async () => {
    const response = await axios.delete(`/post/${postId}`);
    return response.data;
  };

  const { mutate: deleteMutate } = useMutation(deletePost, {
    onSuccess: () => {
      refetch();
      closeWindow();
    },
  });

  const closeWindow = () => {
    dispatch(setPostToDelete(null));
  };

  return (
    <>
      <div className="w-[350px] h-[200px] bg-white rounded-[8px] p-[10px]">
        <div className="font-[500] text-center text-[18px] mt-[30px]">
          Видалити пост?
        </div>
        <div className="flex justify-center gap-[30px] mt-[40px]">
          <button
            className="px-[15px] py-[5px] rounded-[6px] w-[75px] border-[2px] border-green-400 bg-green-200 font-[500]"
            onClick={() => {
              deleteMutate();
            }}
          >
            Так
          </button>
          <button
            className="px-[15px] py-[5px] rounded-[6px] w-[75px] border-[2px] border-red-400 bg-red-200 font-[500]"
            onClick={() => closeWindow()}
          >
            Ні
          </button>
        </div>
      </div>
    </>
  );
};

export default DeleteConfirm;
