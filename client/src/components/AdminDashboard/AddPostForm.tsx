import { updateObj } from "@/helpers";
import { adminDashboardAction } from "@/redux/slices/adminDashboardSlice";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { FormEvent, useMemo, useState } from "react";
import { useMutation } from "react-query";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import uuid from "react-uuid";
import SimpleLoader from "../Loader/SimpleLoader";

const AddPostForm = (props: { refetch: Function }) => {
  const { refetch } = props;
  const initialState = useMemo(() => {
    return {
      title: "",
      postLink: "",
      countOfViews: 0,
      categoryID: "",
      date: "",
    };
  }, []);
  const { setIsAddPost, setAlert } = adminDashboardAction;
  const newsCategories = useSelector(
    (state: any) => state.global["news-categories"].data
  );
  const [form, setForm] = useState(initialState);
  const dispatch = useDispatch();

  const postData = async () => {
    try {
      await axios.post("/post/create", form);
    } catch (e) {
      console.log(e);
    }
  };

  const { mutate, isLoading } = useMutation(postData, {
    onSuccess: () => {
      dispatch(setIsAddPost(false));
      dispatch(
        setAlert({
          status: true,
          type: "success",
          text: "Пост було успішно додано",
        })
      );
      refetch();
    },
  });

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    mutate();
  };
  return (
    <>
      <div className="w-[450px] bg-white rounded-[8px] relative px-[25px] py-[20px] flex flex-col items-center">
        <h1 className="font-[500] text-[21px]">Форма для створення постів</h1>
        <form
          className="flex flex-1 flex-col w-full mt-[30px]"
          onSubmit={submitHandler}
        >
          <div className="flex flex-col gap-[5px] mb-[15px]">
            <label htmlFor="post-title" className=" text-[14px] font-[500]">
              Заголовок
            </label>
            <input
              type="text"
              id="post-title"
              required
              className="px-[15px] py-[6px] border rounded-[6px] outline-none"
              value={form["title"]}
              onChange={(e) => {
                setForm((prev) => updateObj(prev, "title", e.target.value));
              }}
            />
          </div>
          <div className="flex flex-col gap-[5px] mb-[15px]">
            <label htmlFor="post-link" className="text-[14px] font-[500]">
              Посилання
            </label>
            <input
              type="text"
              id="post-link"
              required
              className="px-[15px] py-[6px] border rounded-[6px] outline-none"
              value={form["postLink"]}
              onChange={(e) => {
                setForm((prev) => updateObj(prev, "postLink", e.target.value));
              }}
            />
          </div>
          <div className="flex flex-col gap-[5px] mb-[15px]">
            <label htmlFor="post-date" className=" text-[14px] font-[500]">
              Дата
            </label>
            <input
              type="date"
              id="post-date"
              required
              className="px-[15px] py-[6px] border rounded-[6px] outline-none"
              value={form["date"]}
              onChange={(e) => {
                setForm((prev) => updateObj(prev, "date", e.target.value));
              }}
            />
          </div>
          <div className="flex flex-col gap-[5px]">
            <label htmlFor="post-link" className="text-[14px] font-[500]">
              Категорія
            </label>
            <select
              required
              value={form["categoryID"]}
              onChange={(e) => {
                setForm((prev) =>
                  updateObj(prev, "categoryID", e.target.value)
                );
              }}
              className="px-[15px] py-[6px] border rounded-[6px] outline-none text-[14px]"
            >
              <option value="">Оберіть категорію</option>
              {newsCategories.map((category: { _id: string; name: string }) => {
                const { _id: id, name } = category;
                return (
                  <option key={uuid()} value={id}>
                    {name}
                  </option>
                );
              })}
            </select>
          </div>
          <button
            disabled={isLoading}
            className="bg-black py-[10px] mt-[30px] text-white font-[500] rounded-[6px] flex justify-center items-center"
          >
            {isLoading && (
              <>
                <SimpleLoader className="w-[18px] h-[18px] fill-slate-600" />
              </>
            )}
            Додати
          </button>
        </form>
        <button
          className="absolute top-[10px] right-[10px]"
          onClick={() => dispatch(setIsAddPost(false))}
        >
          <FontAwesomeIcon className="w-[25px] h-[25px]" icon={faXmark} />
        </button>
      </div>
    </>
  );
};

export default AddPostForm;
