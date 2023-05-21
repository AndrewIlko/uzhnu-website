import { adminDashboardAction } from "@/redux/slices/adminDashboardSlice";
import axios from "axios";
import { type } from "os";
import { useMutation } from "react-query";
import { useDispatch } from "react-redux";

const DeleteConfirm = (props: { refetch: Function; postId: string }) => {
  const { refetch, postId } = props;
  const { setPostToDelete, setAlert } = adminDashboardAction;
  const dispatch = useDispatch();

  const deletePost = async () => {
    const response = await axios.delete(`/post/${postId}`);
    return response.data;
  };

  const { mutate: deleteMutate } = useMutation(deletePost, {
    onSuccess: () => {
      refetch();
      dispatch(
        setAlert({
          status: true,
          type: "success",
          text: "Пост було успішно видалено",
        })
      );
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
            className="px-[15px] py-[5px] rounded-[6px] w-[75px] bg-green-500 text-white font-[500]"
            onClick={() => {
              deleteMutate();
            }}
          >
            Так
          </button>
          <button
            className="px-[15px] py-[5px] rounded-[6px] w-[75px] bg-red-500 text-white font-[500]"
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
