import useWindowWidth from "@/custom-hooks/useWindowWidth";
import Container from "../Container";
import Logo from "./Logo";
import Navbar from "./Navbar/Navbar";
import { navItems } from "@/static-data";
import NavbarItem from "./Navbar/NavbarItem";
import uuid from "react-uuid";
import BurgerMenu from "./BurgerMenu";
import { useRouter } from "next/router";

const Header = () => {
  const width = useWindowWidth();
  const { pathname } = useRouter();

  return (
    <>
      <header className="w-full h-[60px] bg-white">
        <Container>
          <div className="w-full h-full px-[25px] flex justify-between items-center">
            <Logo />
            {width && width >= 768 && (
              <div className="flex flex-1 justify-center">
                <Navbar>
                  {navItems.map((item) => {
                    const { link, title } = item;
                    return (
                      <NavbarItem
                        key={uuid()}
                        link={link}
                        isSelected={
                          link == "/"
                            ? pathname == link
                            : pathname.includes(link)
                        }
                      >
                        {title}
                      </NavbarItem>
                    );
                  })}
                </Navbar>
              </div>
            )}
            {width && width < 768 && (
              <>
                <BurgerMenu />
              </>
            )}
          </div>
        </Container>
      </header>
    </>
  );
};

export default Header;
