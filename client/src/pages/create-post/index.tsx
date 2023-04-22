import Container from "@/components/Container";
import Main from "@/components/Main/Main";
import axios from "axios";
import { useEffect, useState } from "react";
import uuid from "react-uuid";
import { updateObj } from "@/helpers";
import useFetchData from "@/custom-hooks/useFetchData";
const secretPassword = "0992310257";

const CreatePost = () => {
  const [password, setPassword] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);

  const [postResult, setPostResult] = useState(null);
  const [form, setForm] = useState({
    title: "",
    postLink: "",
    countOfViews: 0,
    categoryID: "",
    date: "",
  });

  const { data: newsCategories } = useFetchData(
    "http://localhost:8000/news-categories"
  );

  const postData = async () => {
    const data = await axios
      .post("http://localhost:8000/create-post", form)
      .then((res) => res.data);

    setPostResult(data && true);
    setForm((prev) => updateObj(prev, "title", ""));
    setForm((prev) => updateObj(prev, "postLink", ""));
  };

  useEffect(() => {
    if (postResult) {
      const timeOut = setTimeout(() => {
        setPostResult(null);
      }, 2000);
      return () => clearTimeout(timeOut);
    }
  }, [postResult]);

  const verifyPassword = () => {
    if (password == secretPassword) {
      setIsAdmin(true);
    }
    setPassword("");
  };

  console.log(newsCategories);
  console.log(form);
  return (
    <>
      <Main>
        <Container>
          <div className="flex justify-center min-h-[300px] mt-[30px] w-full px-[25px]">
            <div className="flex flex-col gap-[25px]">
              <h1 className="text-[24px] font-[500] text-center font">
                Форма для створення постів
              </h1>
              {!isAdmin && (
                <>
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      verifyPassword();
                    }}
                  >
                    <div className="flex flex-col gap-[5px]">
                      <label htmlFor="post-form-password" className="ml-[5px]">
                        Пароль
                      </label>
                      <input
                        type="password"
                        id="post-form-password"
                        required
                        className="px-[15px] py-[6px] border"
                        value={password}
                        onChange={(e) => {
                          setPassword(e.target.value);
                        }}
                      />
                    </div>
                    <div className="flex justify-center mt-[15px]">
                      <button className="px-[20px] py-[10px] bg-teal-700 hover:bg-teal-800 transition-bg duration-300 rounded-md text-white font-[500] text-[14px]">
                        Unlock form
                      </button>
                    </div>
                  </form>
                </>
              )}
              {isAdmin && (
                <>
                  <form
                    className="flex flex-col gap-[10px]"
                    onSubmit={(e) => {
                      e.preventDefault();
                      postData();
                    }}
                  >
                    <div className="flex flex-col gap-[5px]">
                      <label htmlFor="post-title" className="ml-[5px]">
                        Заголовок
                      </label>
                      <input
                        type="text"
                        id="post-title"
                        required
                        className="px-[15px] py-[6px] border"
                        value={form["title"]}
                        onChange={(e) => {
                          setForm((prev) =>
                            updateObj(prev, "title", e.target.value)
                          );
                        }}
                      />
                    </div>
                    <div className="flex flex-col gap-[5px]">
                      <label htmlFor="post-link" className="ml-[5px]">
                        Посилання
                      </label>
                      <input
                        type="text"
                        id="post-link"
                        required
                        className="px-[15px] py-[6px] border"
                        value={form["postLink"]}
                        onChange={(e) => {
                          setForm((prev) =>
                            updateObj(prev, "postLink", e.target.value)
                          );
                        }}
                      />
                    </div>
                    <div className="flex flex-col gap-[5px]">
                      <label htmlFor="post-date" className="ml-[5px]">
                        Дата
                      </label>
                      <input
                        type="date"
                        id="post-date"
                        required
                        className="px-[15px] py-[6px] border"
                        value={form["date"]}
                        onChange={(e) => {
                          setForm((prev) =>
                            updateObj(prev, "date", e.target.value)
                          );
                        }}
                      />
                    </div>
                    <div className="flex flex-col gap-[5px]">
                      <label htmlFor="post-link" className="ml-[5px]">
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
                        className="px-[15px] py-[6px] border outline-none"
                      >
                        <option value="">Оберіть категорію</option>
                        {newsCategories.map(
                          (category: { _id: string; name: string }) => {
                            const { _id: id, name } = category;
                            return (
                              <option key={uuid()} value={id}>
                                {name}
                              </option>
                            );
                          }
                        )}
                      </select>
                    </div>
                    <div className="flex justify-center mt-[15px]">
                      <button
                        className={`px-[20px] py-[10px] w-[125px] ${
                          postResult == null
                            ? "bg-teal-700 hover:bg-teal-800"
                            : postResult == true
                            ? "bg-green-700"
                            : "bg-red-700"
                        } transition-bg duration-300 rounded-md text-white font-[500] text-[14px]`}
                      >
                        {postResult == null
                          ? "Додати пост"
                          : postResult
                          ? "Успішно"
                          : "Помилка"}
                      </button>
                    </div>
                  </form>
                </>
              )}
            </div>
          </div>
        </Container>
      </Main>
    </>
  );
};

export default CreatePost;
