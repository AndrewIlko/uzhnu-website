import Container from "@/components/Container";
import DeanCard from "@/components/DeanCard";
import DepartmentsList from "@/components/DepartmentsList";
import Main from "@/components/Main/Main";
import Head from "next/head";

import kytImage from "../../../assets/images/people/kyt.jpg";

const AboutBlock = () => {
  return (
    <>
      <div className="flex flex-col max-w-[750px] rounded-[8px] bg-white pt-[24px] px-[30px] pb-[30px]">
        <div className="px-[10px] text-[32px] font-[600]">
          <h1 className="text-center">
            КАФЕДРА ІНФОРМАТИКИ ТА ФІЗИКО-МАТЕМАТИЧНИХ ДИСЦИПЛІН
          </h1>
        </div>
        <div className="mt-[25px]">
          <p className="leading-[24px] indent-10">
            Кафедра інформатики та фізико-математичних дисциплін функціонує з 1
            вересня 1996 року, коли почалися заняття на факультеті інформатики.
            Перша назва кафедри – «Кафедра фізико-математичних дисциплін». З 1
            вересня 2005 року, в зв’язку з відкриттям на її базі нової
            спеціальності "Програмне забезпечення автоматизованих систем",
            кафедра стала випусковою за освітньо-кваліфікаційними рівнями
            бакалавр, спеціаліст, магістр і отримала назву «Кафедра програмного
            забезпечення автоматизованих систем та фізико-математичних
            дисциплін». З 17 жовтня 2011 р., в зв’язку з реорганізацією
            факультету інформатики у факультет інформаційних технологій вона
            носить назву «Кафедра інформатики та фізико-математичних дисциплін».
            З 1-го вересня 2018 року кафедра стала випусковою за спеціальністю
            126 "Інформаційні системи та технології".
          </p>
          <div className="flex flex-col mt-[15px] ml-[50px]">
            <div>За час існування кафедри її завідувачами були:</div>
            <ul className="flex flex-col gap-[10px] list-disc">
              <li>
                Буледза Андрій Васильович – кандидат фізико-математичних наук,
                доцент, професор кафедри (1.09.1996 р – 31.12.1998 р.);
              </li>
              <li>
                Лавер Олександр Георгійович – кандидат фізико-математичних наук,
                доцент, професор кафедри (1.01.1999 р. – 7.01.2009 р.);
              </li>
              <li>
                Ващук Федір Григорійович – доктор технічних наук, професор
                (8.01.2009 р. –17.10.2011 р.). Заступником завідувача кафедри
                був Лавер Олександр Георгійович;
              </li>
              <li>
                Лавер Олександр Георгійович – кандидат фізико-математичних наук,
                доцент, професор кафедри (16.12.2013 р. – 5.03.2021 р.)
              </li>
              <li>
                Кут Василь Іванович – кандидат технічних наук, доцент, доцент
                кафедри з 4.11.2021р.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

const FizMath = () => {
  return (
    <>
      <Head>
        <title>Fiz-math | UZHNU</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main>
        <Container>
          <div className="flex flex-col flex-1 py-[30px]">
            <div className="flex gap-[30px] px-[25px] flex-1">
              <AboutBlock />
              <div className="flex flex-col h-fit sticky top-[30px] min-w-[350px]">
                <DeanCard
                  image={{ url: kytImage, className: "max-w-[243px]" }}
                  title="Завідувач кафедри:"
                  fullname="Кут Василь Іванович"
                  description="кандидат технічних наук, доцент"
                />
                <DepartmentsList className="mt-[30px]" />
              </div>
            </div>
          </div>
        </Container>
      </Main>
    </>
  );
};

export default FizMath;
