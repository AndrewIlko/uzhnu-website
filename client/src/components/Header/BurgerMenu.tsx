import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { globalAction } from "@/redux/slices/globalSlice";

const BurgerMenu = () => {
  const { isSideMenu } = useSelector((state: any) => state.global);
  const { setIsSideMenu } = globalAction;
  const dispatch = useDispatch();
  return (
    <>
      <button
        className="bg-black rounded-[8px] w-[40px] h-[40px] flex justify-center items-center"
        onClick={() => dispatch(setIsSideMenu(!isSideMenu))}
      >
        <div
          className={`hamburger scale-[0.60] ${isSideMenu ? "is-active" : ""}`}
          id="hamburger-1"
        >
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
        </div>
      </button>
    </>
  );
};

export default BurgerMenu;
