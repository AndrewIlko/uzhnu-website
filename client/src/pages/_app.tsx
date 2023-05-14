import Header from "@/components/Header/Header";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Footer from "@/components/Footer/Footer";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Provider } from "react-redux";
import store from "@/redux/store";
import Layout from "@/components/Layout";
import { QueryClient, QueryClientProvider } from "react-query";
import SideMenu from "@/components/SideMenu/SideMenu";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          <Layout>
            <Header />
            <Component {...pageProps} />
            <Footer />
          </Layout>
          <SideMenu />
        </Provider>
      </QueryClientProvider>
    </>
  );
}
