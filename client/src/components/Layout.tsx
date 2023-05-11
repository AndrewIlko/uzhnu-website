import { fetchNewsCategories } from "@/redux/slices/globalSlice";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

axios.defaults.baseURL = "http://localhost:8000";

const Layout = ({ children }: { children: any }) => {
  const dispatch = useDispatch<any>();

  useEffect(() => {
    dispatch(fetchNewsCategories());
  }, [dispatch]);

  return <>{children}</>;
};

export default Layout;
