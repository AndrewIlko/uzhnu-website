import Head from "next/head";
import Main from "../../components/Main/Main";
import { useRouter } from "next/router";

const Block404 = () => {
  const router = useRouter();
  return (
    <>
      <div className="w-full h-full flex-1 flex justify-center">
        <div className="flex flex-col items-center mt-[120px] select-none">
          <h1 className="text-[86px] font-[600]">404</h1>
          <button
            className="px-[15px] py-[10px] bg-black mt-[20px] rounded-[6px] text-white font-[500]"
            onClick={() => router.replace("/")}
          >
            Повернутись на головну
          </button>
        </div>
      </div>
    </>
  );
};

const Error404 = () => {
  return (
    <>
      <Head>
        <title>404</title>
      </Head>
      <Main>
        <Block404 />
      </Main>
    </>
  );
};

export default Error404;
