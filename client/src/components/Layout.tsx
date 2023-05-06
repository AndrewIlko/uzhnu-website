import { fetchNewsCategories } from "@/redux/slices/globalSlice";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

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
