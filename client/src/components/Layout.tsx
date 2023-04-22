import { fetchNewsCategories } from "@/redux/slices/globalSlice";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

const Layout = ({ children }: { children: any }) => {
  const dispatch = useDispatch<any>();

  useEffect(() => {
    dispatch(fetchNewsCategories());
  }, [dispatch]);

  return <>{children}</>;
};

export default Layout;
