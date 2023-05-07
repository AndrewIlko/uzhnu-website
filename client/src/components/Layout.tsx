import { fetchNewsCategories } from "@/redux/slices/globalSlice";
import axios from "axios";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

axios.defaults.baseURL = "http://localhost:8000";

const Layout = ({ children }: { children: any }) => {
  const dispatch = useDispatch<any>();
  const { isAddPost } = useSelector((state: any) => state.adminDashboard);

  useEffect(() => {
    dispatch(fetchNewsCategories());
  }, [dispatch]);

  useEffect(() => {
    const body = document.querySelector("body");
    if (isAddPost) {
      body!.style.overflowY = "hidden";
    } else {
      body!.style.overflowY = "scroll";
    }
  }, [isAddPost]);

  return <>{children}</>;
};

export default Layout;
