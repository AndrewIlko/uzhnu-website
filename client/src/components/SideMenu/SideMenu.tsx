import { useSelector } from "react-redux";
import BurgerMenu from "../Header/BurgerMenu";
import { navItems } from "@/static-data";
import Link from "next/link";
import { globalAction } from "@/redux/slices/globalSlice";
import { useDispatch } from "react-redux";
import { Fragment } from "react";
import uuid from "react-uuid";
import { useRouter } from "next/router";
import SideMenuItem from "./SideMenuItem";

const SideBarNav = () => {
  const { setIsSideMenu } = globalAction;
  const dispatch = useDispatch();
  const { pathname } = useRouter();

  const handleClick = () => {
    dispatch(setIsSideMenu(false));
  };

  return (
    <>
      <ul className="flex flex-col gap-[10px]">
        {navItems.map((navItem) => {
          const { link, title } = navItem;
          return (
            <SideMenuItem
              key={uuid()}
              link={link}
              onClick={() => handleClick()}
              isSelected={
                link == "/" ? pathname == link : pathname.includes(link)
              }
            >
              {title}
            </SideMenuItem>
          );
        })}
      </ul>
    </>
  );
};

const SideMenu = () => {
  const { isSideMenu } = useSelector((state: any) => state.global);
  const { setIsSideMenu } = globalAction;
  const dispatch = useDispatch();

  const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const target = e.target as HTMLElement;
    if (target.dataset.name == "sidemenu-bg") {
      dispatch(setIsSideMenu(false));
    }
  };

  return (
    <>
      <div
        data-name="sidemenu-bg"
        className={`h-full w-full fixed top-0 right-0 bg-[rgb(0,0,0,0.20)] flex justify-end sidemenu ${
          isSideMenu ? "sidemenu__active" : ""
        } `}
        onClick={(e) => handleClick(e)}
      >
        <div
          className="w-[300px] h-full bg-white shadow px-[20px] py-[10px]"
          style={{
            transform: `translateX(${isSideMenu ? "0" : "310"}px)`,
            transition: "transform 0.3s ease-in-out",
          }}
        >
          <div className="flex flex-col gap-[30px]">
            <BurgerMenu />
            <SideBarNav />
          </div>
        </div>
      </div>
    </>
  );
};

export default SideMenu;
