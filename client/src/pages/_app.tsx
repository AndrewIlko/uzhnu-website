import Header from "@/components/Header/Header";
import Logo from "@/components/Header/Logo";
import Navbar from "@/components/Header/Navbar/Navbar";
import NavbarItem from "@/components/Header/Navbar/NavbarItem";
import "@/styles/globals.css";
import uuid from "react-uuid";
import type { AppProps } from "next/app";
import Footer from "@/components/Footer/Footer";
import { NavItem } from "@/ts/types/app_types";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Provider } from "react-redux";
import store from "@/redux/store";
import Layout from "@/components/Layout";

export default function App({ Component, pageProps }: AppProps) {
  const navItems: NavItem[] = [
    {
      link: "/",
      title: "Головна",
    },
    {
      link: "/news",
      title: "Новини",
    },
    {
      link: "/about",
      title: "Про нас",
    },
    {
      link: "/info-center",
      title: "Інфо-центр",
    },
  ];

  return (
    <>
      <Provider store={store}>
        <Layout>
          <Header>
            <Logo />
            <div className="flex flex-1 justify-center">
              <Navbar>
                {navItems.map((item) => {
                  const { link, title } = item;
                  return (
                    <NavbarItem key={uuid()} link={link}>
                      {title}
                    </NavbarItem>
                  );
                })}
              </Navbar>
            </div>
          </Header>
          <Component {...pageProps} />
          <Footer />
        </Layout>
      </Provider>
    </>
  );
}
