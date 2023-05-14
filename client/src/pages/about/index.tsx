import Container from "@/components/Container";
import Main from "@/components/Main/Main";
import Head from "next/head";
import Image from "next/image";

import image1 from "../../assets/images/about/image1.jpg";
import image2 from "../../assets/images/about/image2.jpg";
import image3 from "../../assets/images/about/image3.jpg";
import image4 from "../../assets/images/about/image4.jpg";

import povhanImage from "../../assets/images/people/povhan.jpg";
import DepartmentsList from "@/components/DepartmentsList";
import DeanCard from "@/components/DeanCard";
import AboutInfoWrapper from "@/components/About/AboutInfoWrapper";

const AboutBlock = () => {
  return (
    <div className="flex flex-col max-w-[750px] rounded-[8px]">
      <div className="px-[10px] text-[32px] font-[600]">
        <h1 className="text-center">ФАКУЛЬТЕТ ІНФОРМАЦІЙНИХ ТЕХНОЛОГІЙ</h1>
      </div>
      <div className="mt-[25px]">
        <p className="leading-[24px] indent-10">
          Факультет інформаційних технологій веде свою історію з 1 вересня 1996
          року, коли приступили до навчання найперші 20 студентів. Нині, на
          денній та заочній формах навчання факультету інформаційних технологій
          нараховується близько 500 студентів. Такий показник засвідчує добрий
          статус підрозділу – число абітурієнтів, які бажають учитися на
          факультеті, постійно зростає. Ось, наприклад, тенденції останнього
          часу. Якщо у 2015–2016 н. р. на перший курс денного відділення було
          набрано 62 колишніх школярів, то через рік на перший курс зарахували
          74 студентів, а в 2017–2018 н. р. вже 82 чоловік. З урахуванням охочих
          учитися на заочному відділенні та випускників природничо-гуманітарного
          коледжу УжНУ, які побажали продовжити здобувати освіту на факультеті
          інформаційних технологій, у 2015–2016 н. р. було набрано 115 нових
          студентів, у 2016–2017 н. р. – 120, а у 2017– 2018 н. р. – 124. У
          2018-2019 н.р. на факультет поступило 170 абітурієнтів. Причому число
          студентів-контрактників перевищило кількість тих, хто навчається
          коштом держбюджету. Тобто факультет з року в рік стає все більш
          привабливим і прибутковим.
        </p>
        <div className="flex flex-col my-[30px]">
          <Image
            className="rounded-[8px]"
            alt="photo"
            title="photo"
            src={image1}
          />
          <em className="text-center my-[10px]">
            Першокурсники факультету інформаційних технологій разом з
            викладачами
          </em>
        </div>
        <div className="leading-[24px]">
          <p className="indent-10 mb-[10px]">
            Велику допомогу в становленні факультету інформаційних технологій
            надав декан факультету інформатики та обчислювальної техніки
            Національного технічного університету «Київський політехнічний
            інститут», д.т.н., проф. Павлов Олександр Анатолійович.
          </p>
          <p className="indent-10 mb-[10px]">
            У перші роки існування факультету він викладав важливі спецкурси для
            студентів-ІТшників. Навчальні плани та навчальні програми факультету
            інформаційних технологій побудовані за відповідними навчальними
            планами і програмами факультету інформатики та обчислювальної
            техніки Національного технічного університету «Київський
            політехнічний інститут». І на сьогоднішній день високошановний проф.
            Павлов О.А. підтримує активні зв’язки з факультетом, до народження
            якого має безпосереднє відношення: він неодноразово запрошується
            головою ДЕК факультету інформаційних технологій.
          </p>
          <p className="indent-10">
            Велику роль у становленні факультету інформаційних технологій
            відіграли його декани: доктор технічних наук, професор Ю. Василенко
            (1996-2000 рр.), кандидат фізико-математичних наук, доцент С. Поляк
            (2000-2003 рр.), кандидат фізико-математичних наук, доцент В. Бунда
            (вересень-грудень 2003 р.), кандидат фізико-математичних наук,
            доцент О. Лавер (2003-2006 рр.), кандидат фізико-математичних наук,
            доцент С. Бунда (2006-2010 рр.), кандидат фізико-математичних наук,
            доцент Ю. Білак (2010-2011 рр.). На сьогодні деканом факультету
            інформаційних технологій є кандидат технічних наук, доцент І.
            Повхан.
          </p>
        </div>
        <div className="flex flex-col my-[30px]">
          <Image
            className="rounded-[8px]"
            alt="photo"
            title="photo"
            src={image2}
          />
          <em className="text-center my-[10px]">
            Декан факультету інформаційних технологій, доцент Повхан Ігор
            Федорович
          </em>
        </div>
        <div className="leading-[24px]">
          <p className="indent-10">
            Навчальний процес на факультеті інформаційних технологій ДВНЗ “УжНУ”
            забезпечують три кафедри:
          </p>
          <ul className="ml-[50px] flex flex-col list-disc my-[10px]">
            <li>
              інформаційних управляючих систем і технологій (ІУСТ) − випускова
              кафедра, завідувач кафедри – доц. Міца О.В., Відмінник освіти
              України;
            </li>
            <li>
              програмного забезпечення систем (ПЗС) − випускова кафедра,
              завідувач кафедри – доц. Білак Ю.Ю.;
            </li>
            <li>
              інформатики та фізико-математичних дисциплін (ІФМД) − випускова
              кафедра, завідувач кафедри – доц. Лавер О.Г., Відмінник освіти
              України.
            </li>
          </ul>
          <p>Кількість комп’ютеризованих робочих місць перевищує 100.</p>
          <p>
            Факультет інформаційних технологій Ужгородського університету готує
            фахівців за спеціальностями:
          </p>
          <ul className="ml-[50px] flex flex-col list-disc my-[10px]">
            <li>
              121 – «Інженерія програмного забезпечення» (бакалавр, магістр);
            </li>
            <li>
              122 – «Комп’ютерні науки та інформаційні технології» (бакалавр,
              магістр та доктор філософії), на рівні бакалавра тут дві
              спеціалізації – «Комп’ютерні науки» й «Інформатика»;
            </li>
            <li>
              126 – «Інформаційні системи і технології» – відкрита в 2018-2019
              н.р.
            </li>
          </ul>
          <p>
            Суттєвою особливістю факультету є молодий вік його викладачів, який
            складає в середньому 35 – 40 років. Водночас, викладачі більш
            старшого віку щедро діляться набутим досвідом з молодшими колегами.
          </p>
          <div className="flex flex-col my-[30px]">
            <Image
              className="rounded-[8px]"
              alt="photo"
              title="photo"
              src={image3}
            />
            <em className="text-center my-[10px]">
              Професорсько-викладацький склад ФІТ
            </em>
          </div>
          <p>
            Багато викладачів факультету без перебільшення можна назвати його
            флагманами. В першу чергу це:
          </p>
          <p>
            Міца Володимир Михайлович – доктор фізико-математичних наук,
            професор, Заслужений діяч науки і техніки України, академік Академії
            наук вищої школи України, зовнішній член Угорської академії наук;
          </p>

          <p>
            Завілопуло Анатолій Миколайович - доктор фізико-математичних наук,
            професор, лауреат Державної премії України;
          </p>
          <p>
            Лавер Олександр Георгійович, Міца Олександр Володимирович, Кляп
            Маріанна Іванівна – кандидати наук, доценти, Відмінники освіти
            України.
          </p>
          <p>
            У 2018-2019 н.р. на факультеті інформаційних технологій працювало 40
            викладачів, у тому числі 5 докторів наук (12,5% загальної
            кількості), 23 кандидати наук (57,5%), та 12 асистентів та старших
            викладачів (30%).
          </p>
          <p>
            Колектив факультету інформаційних технологій відзначається великою
            працьовитістю у науковій та навчально-методичній роботі. Усього його
            викладачами видано 22 монографії, 11 навчальних посібників з грифом
            МОН України та 92 навчальних та навчально-методичних посібників та
            матеріалів і це не рахуючи кількох сотень наукових статей, багато з
            яких знаходяться в науково-метричних базах даних. Так з 2012 року
            світ побачили наступні монографії викладачів факультету
          </p>
          <ul className="ml-[50px] flex flex-col list-decimal my-[10px]">
            <li>
              Дурняк Б.В., Лях І.М. Захист даних в електронних засобах масової
              інформації-Львів: Видавництво Української академії друкарства,
              2012.-154с.
            </li>
            <li>
              Кляп М.І. та ін.. Інноваційні технології в розвитку наукової думки
              сьогодення: теоретико-практичний аналіз та науково-аналітичні
              коментарі – Кіровоград: КП: Поліграфія, 2015 – 168 с. – С.97-128.
            </li>
            <li>
              Дурняк Б.В., Шевченко О.В., Лях І.М. Управління комунікаційними
              системами електронних засобів масової інформації. – Львів: Укр.
              акад. друкарства, 2016. – 156 с.
            </li>
            <li>
              Міца В.М. та ін.. Атмосферна корозія телекомунікаційних оптичних
              середовищ для халькогенідної фотоніки: склоподібний і кристалічний
              дисульфід германію. – Ужгород, Будапешт, Дебрицен: Вид-во «ФОП
              Сабов А.М.», 2017 – 128 с.
            </li>
            <li>
              Veretennikova N., Kunanets N., Kut V., Pasichnyk V., Rzheuskiy A.
              Cloud managers in the information support of virtual scientific
              teams. – Mauritius: LapLambert Academic Publishing, 2018. – ISBN
              978-613-8-38720-6. - 71 p.
            </li>
            <li>
              Доцент Лавер О.Г. підготував до друку монографію «Війни та
              народонаселення країн світу у ХХ-ХХІ століттях (1900-2016 рр.).
              Статистичне дослідження. Монографія. Видання друге перероблене і
              доповнене» . – Ужгород: Вид-во RIK. - 760 с (в друці).
            </li>
            <li>
              Випущено посібник з грифом МОН України Кляп М.І., Ващенко І.В.
              Конфліктологія та теорія переговорів: Навчальний посібник. - К..:
              Знання, 2013. – 407 с. – (Вища освіта ХХІ століття). Рекомендовано
              МОН молодь спорту України, Лист від 21.11.2012р. №1/11/18119
            </li>
          </ul>
          <div>
            <p>
              Також було випущено багато навчально-методичних посібників
              основними з яких є:
            </p>
            <ul className="ml-[50px] my-[10px] list-decimal">
              <li className="mb-[10px]">
                Левчук О.М. Комп’ютерні системи та мережі: програмна підтримка.-
                Навчально-методичний посібник – Ужгород: 2013, 64 с.
              </li>
              <li className="mb-[10px]">
                Стецюк П.І., Міца О.В.,Пецко В.І. Мережні інформаційні
                технології.- Методичні рекомендації до вивчення курсу – Ужгород:
                2014, 65 с.{" "}
              </li>
              <Image
                className="float-right m-[30px] rounded-[8px]"
                alt="photo"
                title="photo"
                src={image4}
                width={300}
              />
              <li className="mb-[10px]">
                Лях І.М. Забезпечення надійності функціонування комп’ютерних
                систем.- Навчально-методичний посібник – Ужгород: 2015, 56 с.
              </li>

              <li className="mb-[10px]">
                Білак Ю.Ю.,Лавер В.О., Лях І.М., Андрашко Ю.В. Інформатика та
                інформаційні технології. Частина 1. – Ужгород: ПП «Аудор –
                Шарк», 2015. – 96 с.
              </li>
              <li className="mb-[10px]">
                Горгош Л.І., Білак. Ю.Ю. Текстові редактори та текстові
                процесори: навчально-методичний посібник – Ужгород: ПП
                "АУТДОР-ШАРК", 2016. –128с.
              </li>
              <li className="mb-[10px]">
                Літня школа з програмування (Ужгород, 31 липня – 7 серпня 2016
                року) : Матеріали лекцій, умови та розбір задач / За ред.
                Олександра Міци, Сергія Оришича. – Ужгород: Видавництво «ФОП
                Сабов А.М.», 2017. – 164 с.
              </li>
              <li className="mb-[10px]">
                Дурняк Б.В., Чумакевич В.О., Лях І.М., Яцун А.М. Основи
                електропостачання АПК: навчальний посібник. – Львів: Україниська
                академія друкарства, 2017. – 544 с.
              </li>
              <li className="mb-[10px]">
                Матяшовська Б.О. Математична статистика. Навчальний посібник з
                виконання лабораторних робіт для студентів факультету
                інформаційних технологій. – Ужгород, 2018. – 96 с.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

const About = () => {
  const departments = [
    {
      title: "Кафедра програмного забезпечення систем",
      link: "/about/software",
    },
    {
      title: "Кафедра інформаційних управляючих систем та технологій",
      link: "/about/it-technology",
    },
    {
      title: "Кафедра інформатики та фізико-математичних дисциплін",
      link: "/about/fiz-math",
    },
  ];

  return (
    <>
      <Head>
        <title>Про нас | UZHNU</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main>
        <Container>
          <div className="flex flex-col flex-1 py-[30px]">
            <div className="flex flex-col-reverse lg:flex-row gap-[15px] px-[25px] flex-1">
              <AboutInfoWrapper>
                <AboutBlock />
              </AboutInfoWrapper>
              <div className="flex flex-col h-fit lg:sticky lg:top-[30px]">
                <DeanCard
                  image={{ url: povhanImage }}
                  title="Декан факультету:"
                  fullname="Повхан Ігор Федорович"
                  description="кандидат технічних наук"
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

export default About;
