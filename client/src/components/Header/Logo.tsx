import Link from "next/link";

const Logo = () => {
  return (
    <>
      <Link href="/">
        <div className="text-neutral-900 text-[21px] font-[500] flex items-center gap-[10px]">
          UZHNU
          <img
            src="https://emojiguide.com/wp-content/uploads/platform/twitter/44352.png"
            className="w-[25px]"
          />
        </div>
      </Link>
    </>
  );
};

export default Logo;
