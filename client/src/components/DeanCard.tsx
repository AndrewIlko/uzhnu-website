import Image, { StaticImageData } from "next/image";

type DeanCardType = {
  image: { url: StaticImageData; className?: string };
  title: string;
  fullname: string;
  description: string;
};

const DeanCard = (props: DeanCardType) => {
  const {
    image: { url, className },
    title,
    fullname,
    description,
  } = props;
  return (
    <div className="bg-white rounded-[8px] p-[15px] h-fit mx-auto">
      <Image
        src={url}
        className={`w-full rounded-[6px] max-w-[300px] mx-auto ${className}`}
        alt="photo"
      />
      <div className="flex flex-col text-center mt-[15px]">
        <h1 className="text-[18px] font-[500]">{title}</h1>
        <h1 className="text-[20px] font-[500]">{fullname}</h1>
        <h4 className="mt-[10px]">{description}</h4>
      </div>
    </div>
  );
};

export default DeanCard;
