import { adminDashboardAction } from "@/redux/slices/adminDashboardSlice";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

const AlertAdminDashboard = () => {
  const {
    alert: { type, text, status },
  } = useSelector((state: any) => state.adminDashboard);

  const { setAlert } = adminDashboardAction;
  const dispatch = useDispatch();
  const styleObject: { [key: string]: any } = {
    success: {
      block: "bg-green-100 text-[#03543F] border-green-500",
    },
    error: {
      block: "bg-red-100 text-[#9B1C1C] border-red-500",
    },
  };

  const styles = styleObject[type];

  useEffect(() => {
    if (status) {
      const timeout = setTimeout(() => {
        dispatch(setAlert({ status: false, type: null, text: null }));
      }, 3000);
      return () => clearTimeout(timeout);
    }
  }, [type]);

  if (!status) {
    return <></>;
  }

  return (
    <>
      <div className="fixed top-[10px] left-0 w-full flex justify-center font-inter">
        <div
          className={`text-[14px] pt-[15px] pr-[15px] pb-[17px] pl-[17px] flex gap-[17px] items-center border rounded-[8px] absolute ${styles.block}`}
          role={type}
        >
          <div className="text-[14px] flex gap-[10px] font-[500]">
            <span className="font-[700]">
              {`${type.charAt(0).toUpperCase()}${type.slice(1)}`}!
            </span>
            <span>{text}</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default AlertAdminDashboard;
