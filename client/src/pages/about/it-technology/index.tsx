import Container from "@/components/Container";
import DeanCard from "@/components/DeanCard";
import DepartmentsList from "@/components/DepartmentsList";
import Main from "@/components/Main/Main";
import Head from "next/head";

import mizaImage from "../../../assets/images/people/miza.jpg";
import image1 from "../../../assets/images/it-technology/image1.jpg";
import image2 from "../../../assets/images/it-technology/image2.jpg";
import image3 from "../../../assets/images/it-technology/image3.jpg";
import image4 from "../../../assets/images/it-technology/image4.jpg";
import image5 from "../../../assets/images/it-technology/image5.jpg";
import image6 from "../../../assets/images/it-technology/image6.jpg";
import image7 from "../../../assets/images/it-technology/image7.jpg";
import Image from "next/image";
import Link from "next/link";

const AboutBlock = () => {
  return (
    <>
      <div className="flex flex-col max-w-[750px] rounded-[8px] bg-white pt-[24px] px-[30px] pb-[30px]">
        <div className="px-[10px] text-[32px] font-[600]">
          <h1 className="text-center">
            КАФЕДРА ІНФОРМАЦІЙНИХ УПРАВЛЯЮЧИХ СИСТЕМ ТА ТЕХНОЛОГІЙ
          </h1>
        </div>
        <div className="mt-[25px] leading-[24px]">
          <p className="indent-10 mb-[15px]">
            Кафедра інформаційних управляючих систем та технологій була створена
            в 2000 р. шляхом поділу кафедри інформатики та інформаційних
            технологій на дві кафедри: інформаційних управляючих систем та
            технологій і загальної інформатики та математичного моделювання.
            Першим завідувачем кафедри був д.т.н., проф. Василенко Ю.А.
          </p>
          <p className="indent-10">
            Кафедра є випусковою і здійснює підготовку фахівців-програмістів за
            спеціальністю 122 «Комп’ютерні науки» (бакалавр, магістр та доктор
            філософії). Випускники кафедри інформаційних управляючих систем та
            технологій здобувають кваліфікацію «Фахівець з розробки комп’ютерних
            програм».
          </p>
          <div className="mt-[15px]">
            <Image src={image1} alt="image1" className="w-full rounded-[8px]" />
          </div>
          <p className="indent-10">
            Високий рівень підготовки зі спеціальності 122 «Комп’ютерні науки»
            забезпечує потужний{" "}
            <Link href={"/"} className="text-blue-500">
              колектив кафедри інформаційних управляючих систем та технологій
            </Link>
            .
          </p>
          <p className="indent-10 mt-[15px]">
            Студенти спеціальності 122 «Комп’ютерні науки» потрапляють під час
            навчання на стажування в такі всесвітньо відомі ІТ-корпорації, як
            Google, MicroSoft, Huawei. Студенти, аспіранти та викладачі кафедри
            беруть активну участь в роботі журі фінального етапу Всеукраїнської
            учнівської олімпіади з інформатики та Всеукраїнського турніру юних
            інформатиків, а також є авторами задач на престижних всеукраїнських
            та міжнародних змаганнях.
          </p>
          <div className="mt-[15px] flex flex-col gap-[10px]">
            <Image src={image2} alt="image2" className="w-full rounded-[8px]" />
            <Image src={image3} alt="image3" className="w-full rounded-[8px]" />
            <Image src={image4} alt="image4" className="w-full rounded-[8px]" />
          </div>
          <p className="indent-10">
            При кафедрі працює студентський гурток зі спортивного програмування
            (керівники: к.т.н., доц. Міца О.В., ст. викл. Вапнічний С.Д. та
            аспірант Оришич С.С.). Студенти, які займаються в гуртку, виборюють
            високі місця на змаганнях різного рівня, в тому числі міжнародних
            студентських олімпіадах з програмування. Зокрема, є віце-чемпіонами
            в 2016 році та чемпіонами в 2017 році чемпіонату України зі
            спортивного програмування, триразовими призерами чемпіонату
            Південно-Східної Європи з програмування, а також посіли 34 місце в
            світі в 2017 році (м.Рапід-Сіті, США) та 31 місце в світі в 2018
            році в (м. Пекін, Китай).
          </p>
          <p className="indent-10 mt-[15px]">
            Кафедра є основним ядром при організації та проведенні Міжнародної
            літньої школи з програмування, яка проходить кожного року у серпні
            місяці в Ужгороді і на якій збираються кращі студенти-програмісти
            України та ближнього зарубіжжя .
          </p>
          <div className="mt-[15px]">
            <Image src={image5} alt="image5" className="w-full rounded-[8px]" />
          </div>
          <p className="indent-10">
            Також при кафедрі працює студентський гурток з робототехніки
            (керівники: ст. викл. Вапнічний С.Д., доц. Левчук О.М.). Під
            керівництвом доцента кафедри інформаційних управляючих систем та
            технологій Левчука О.М. студенти, які займаються в гуртку з
            робототехніки, виграли «срібло» на Всеукраїнському конкурсі
            професійної майстерності (робототехніка) WorldSkills Ukraine у 2017
            році. Серед розробок студентів −{" "}
            <a
              href="https://mediacenter.uzhnu.edu.ua/news/studenty-ajtivtsi-skonstruyuvaly-vlasnyj-3d-prynter/2020-01-21-39952"
              target="_blank"
              className="text-blue-500"
            >
              власний 3D принтер.
            </a>
          </p>
          <div className="flex flex-col gap-[10px] ml-[40px] mt-[15px]">
            <div>
              Студенти, які навчаються за спеціальністю 122 «Комп’ютерні науки»
              отримують ґрунтовні знання з:
            </div>
            <ul className="flex flex-col gap-[10px]">
              <li>-фундаментального програмування;</li>
              <li>
                -веб-технологій, веб-дизайну, програмування та підтримка
                веб-застосувань;
              </li>
              <li>-інтелектуального аналізу даних;</li>
              <li>-нейромереж, штучного інтелекту, машинного навчання;</li>
              <li>-інтернет клієнт-серверних систем та баз даних;</li>
              <li>-комп’ютерних мереж та захисту інформації.</li>
            </ul>
          </div>
          <div className="mt-[15px]">
            <Image src={image6} alt="image6" className="w-full rounded-[8px]" />
          </div>
          <p className="indent-10">
            На кафедрі виконується велика кількість наукових досліджень,
            тематика яких досить різноманітна, адаптована до сучасних наукових
            тенденцій та регіональних потреб. Кафедра має широкі наукові зв'язки
            з провідними науковими організаціями та вищими навчальними закладами
            України та ближнього зарубіжжя, зокрема з Інститутом кібернетики ім.
            В.М.Глушкова НАН України, з Національним технічним університетом
            України "Київський політехнічний інститут", Ужгородським інститутом
            електронної фізики НАН України, Харківським національним
            університетом радіоелектроніки, Білоруським державним університетом,
            Академією транспорту, інформатики і комунікацій (Молдова),
            Європейським університетом (Грузія), Університетом м. Аль-Айн
            (Об'єднані Арабські Емірати) та іншими установами.
          </p>
          <div className="mt-[15px]">
            <Image src={image7} alt="image7" className="w-full rounded-[8px]" />
          </div>
        </div>
      </div>
    </>
  );
};

const ItTechnology = () => {
  return (
    <>
      <Head>
        <title>It-technology | UZHNU</title>
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
                  image={{ url: mizaImage, className: "max-w-[243px]" }}
                  title="Завідувач кафедри:"
                  fullname="Міца Олександр Володимирович"
                  description="доктор технічних наук, професор"
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

export default ItTechnology;
