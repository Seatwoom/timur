// src/data/categories.js
export const categories = [
  {
    id: 0,
    name: "Elements",
    items: [
      {
        id: "el-1",
        name: "Легкові автомобілі",
        image: "/Photos/section/section1.png",
        description: "Деталі двигуна та компоненти",
      },
      {
        id: "el-2",
        name: "Вантажні автомобілі/Спецтехніка",
        image: "/Photos/section/section2.png",
        description: "Деталі трансмісії та запчастини",
      },
      {
        id: "el-3",
        name: "Інструменти та обладнання",
        image: "/Photos/section/section3.png",
        description: "Компоненти підвіски",
      },
    ],
  },
  {
    id: 1,
    name: "Categories",
    items: [
      {
        id: "cat-1",
        name: "Фільтри",
        image: "/Photos/categories/cat2.png",
        description: "Запчастини для легкових автомобілів",
      },
      {
        id: "cat-2",
        name: "Масло",
        image: "/Photos/categories/cat3.jpg",
        description: "Запчастини для грузових автомобілів",
      },
      {
        id: "cat-3",
        name: "Гальмівна система",
        image: "/Photos/categories/cat5.png",
        description: "Запчастини для спецтехніки",
      },
      {
        id: "cat-4",
        name: "Підвіска",
        image: "/Photos/categories/cat4.jpg",
        description: "Запчастини для мотоциклів",
      },
      {
        id: "cat-5",
        name: "ДВС",
        image: "/Photos/categories/cat1.png",
        description: "Інструменти та обладнання",
      },
    ],
  },
  {
    id: 2,
    name: "Brands",
    items: [
      {
        id: "brand-1",
        name: "FEBI",
        image: "/Photos/brands/febi.png",
        description:
          "Один з провідних виробників незалежного післяпродажного обслуговування автомобілів.",
        categories: [
          "Пневматика",
          "Гальма",
          "Елементи кузова",
          "Зчеплення",
          "Охолодження та обігрів",
          "Електрика",
          "Двигун",
          "Прокладки та сальники",
          "Випускна система",
          "Фільтри",
          "Паливна система",
          "Привід",
          "Оливи, авторідини",
          "Підшипники",
          "Підвіска",
          "Двигун",
          "Рульове управління",
          "Підвіска колеса",
        ],
      },
      {
        id: "brand-2",
        name: "KNECHT",
        image: "/Photos/brands/knecht.png",
        description:
          "Ассортимент включає фільтри автомобільні. Виробник поставляє продукцію на конвеер Daimler - Chrysler, Volkswagen, Audi, Fiat, Toyota, Peugeot - Citroen, MAN, Volvo, Scania, RVI, DAF, Ford.",
        categories: ["Фільтри"],
      },
      {
        id: "brand-3",
        name: "LEMFORDER",
        image: "/Photos/brands/lemforder.png",
        description:
          "ZF пропонує широкий спектр рішень в області зчеплення, амортизаторів, елементів підвіски, систем рульового керування та трансмісії в якості яке характеризується як оригінальна продукція.",
        categories: ["Підвіска", "Рульове управління"],
      },
      {
        id: "brand-4",
        name: "DELPHI",
        image: "/Photos/brands/delphi.png",
        description:
          "Компанія Delphi Technologies, із присутністю у більш ніж 150 країнах та глобальній мережі понад 2400 центрів обслуговування, надає післяпродажну технічну підтримку, що відповідає специфікації OE, від компонентів до складних програмних рішень.",
        categories: [
          "Гальма",
          "Електрика",
          "Паливна система",
          "Підвіска",
          "Рульове управління",
        ],
      },
      {
        id: "brand-5",
        name: "DENSO",
        image: "/Photos/brands/denso.png",
        description:
          "Denso є постачальником багатьох компонентів електричної системи двигунів та автомобілів на конвеєр та вторинний ринок запасних частин.",
        categories: ["Електрика", "Очищення скла"],
      },
      {
        id: "brand-6",
        name: "MAHLE",
        image: "/Photos/brands/mahle.png",
        description:
          "MAHLE корпорація яка виробляє високоякісні поршні,гільзи циліндрів,ремонтні комплекти,клапани,направляючі клапанів,масляні фільтри,паливні,гідравлічні повітряні та фільтри салону для всіх видів вантажних та легкових автомобілів.",
        categories: ["Двигун"],
      },
      {
        id: "brand-7",
        name: "MANN FILTER",
        image: "/Photos/brands/mann.png",
        description:
          "MANN-FILTER, лідируючий світовий бренд фільтрів преміум-класу, забезпечує 100% виконання оригінальних вимог автовиробників, що визначає відмінні експлуатаційні характеристики для вторинного ринку запчастин.",
        categories: ["Фільтри"],
      },
      {
        id: "brand-8",
        name: "MOTUL",
        image: "/Photos/brands/motul.png",
        description: "Виробник високоякісних мастильних матеріалів",
        categories: ["Моторні мастила", "Оливи, авторідини"],
      },
      {
        id: "brand-9",
        name: "NGK",
        image: "/Photos/brands/ngk.png",
        description:
          "Фірма NGK є світовим лідером у виробництві свічок запалювання для автомобілів та мотоциклів.",
        categories: ["Електрика"],
      },
      {
        id: "brand-10",
        name: "NISSENS",
        image: "/Photos/brands/nissens.png",
        description:
          "За роки своєї роботи компанія Nissens вклала значні кошти в дослідження і розробку компонентів систем охолодження двигуна та автомобільних кліматичних систем. 95-річний досвід технологічних розробок і виробництва дозволяє Nissens задовольняти потреби клієнтів в найширшій номенклатурі високоякісних запасних частин.",
        categories: ["Охолодження та обігрів"],
      },
      {
        id: "brand-11",
        name: "CARTECHNIC",
        image: "/Photos/brands/cartechnic.png",
        description:
          "Торгова марка, що належить ATR Німеччина (Inter Cars є членом ATR з 1999 року).",
        categories: ["Електрика"],
      },
      {
        id: "brand-12",
        name: "BTA",
        image: "/Photos/brands/bta.png",
        description:
          "Широкий асортимент продукції БТА зкладається з комплектів колісних підшипників і маточини, а також його герметиків, роликів, хрестовин і опор приводних валів.",
        categories: ["Підшипники"],
      },
      {
        id: "brand-13",
        name: "BOSCH",
        image: "/Photos/brands/bosch.png",
        description:
          "Bosch Automotive є всесвітньо відомим виробником запасних частин для автомобілів як для конвеєрної збірки так і на вторинному ринку.",
        categories: [
          "Пасковий привід",
          "Гальма",
          "Електрика",
          "Двигун",
          "Фільтри",
          "Паливна система",
          "Освітлення",
          "Очищення скла",
        ],
      },
      {
        id: "brand-14",
        name: "SACHS",
        image: "/Photos/brands/sachs.png",
        description:
          "ZF пропонує широкий спектр рішень в області зчеплення, амортизаторів, елементів підвіски, систем рульового керування та трансмісії в якості яке характеризується як оригінальна продукція.",
        categories: [
          "Підвіска кабіни",
          "Шасі",
          "Зчеплення",
          "Охолодження та обігрів",
          "Підвіска",
          "Рульове управління",
        ],
      },
      {
        id: "brand-15",
        name: "ABE",
        image: "/Photos/brands/abe.png",
        description:
          "Пропозиція ABE включає в себе широкий спектр запасних частин для гальмівних систем.",
        categories: ["Гальма"],
      },
      {
        id: "brand-16",
        name: "TEXTAR",
        image: "/Photos/brands/textar.png",
        description:
          "TMD Friction є провідним у світі виробником гальмівних колодок та гальмівних накладок для легкових і вантажних автомобілів.",
        categories: ["Гальма"],
      },
      {
        id: "brand-17",
        name: "WIX FILTERS",
        image: "/Photos/brands/wix.png",
        description:
          "WIX FILTERS це американський виробник фільтрів. Він має 79 патентів США на відповідність суворим стандартам в розробці і виробництві фільтрів.",
        categories: ["Фільтри"],
      },
      {
        id: "brand-18",
        name: "4MAX",
        image: "/Photos/brands/4max.png",
        description:
          "4MAX це власний комерційний бренд для запасних частин компании Inter Cars SA. Партнерами в виробництві продукції 4max є підприємства, котрі співпрацюють з відомими торгівельними марками.",
        categories: [
          "Пневматика",
          "Охолодження та обігрів",
          "Електрика",
          "Двигун",
          "Випускна система",
          "Гідравліка",
        ],
      },
      {
        id: "brand-19",
        name: "ABRO",
        image: "/Photos/brands/abro.png",
        description:
          "Вже понад три чверті століття компанія ABRO не тільки послідовно виступає за якість у виготовленні автохімії, але й сумлінно дотримується цієї точки зору, втілюючи її в свої продукти.",
        categories: ["Оливи, авторідини"],
      },
      {
        id: "brand-20",
        name: "AKVILON",
        image: "/Photos/brands/akvilon.png",
        description:
          "«AKVILON» – це відомий український виробник автохімічної продукції. Асортимент продукції включає охолоджуючі та гальмівні рідини, зимові та літні очисники скла, моторні та трансмісійні оливи представлені практично у всіх регіонах України.",
        categories: ["Оливи, авторідини"],
      },
      {
        id: "brand-21",
        name: "AUTOFREN",
        image: "/Photos/brands/autofren.png",
        description:
          "Seins AUTOFREN, заснована в 1972 році в іспанському місті Eugi, почала свою діяльність з виробництва гумових деталей, гальмівних систем.",
        categories: ["Пневматика", "Зчеплення", "Гідравліка"],
      },
      {
        id: "brand-22",
        name: "AUTLOG",
        image: "/Photos/brands/autlog.png",
        description:
          "Компанія Autlog пропонує асортимент запасних частин для двигунів та підвіски автомобіля.",
        categories: ["Електрика"],
      },
      {
        id: "brand-23",
        name: "BERAL",
        image: "/Photos/brands/beral.png",
        description:
          "З 1942 року компанія Federal-Mogul представила бренд BERAL, яка поставляє на ринок для вантажних автомобілів і автобусів високоякісних колодок і накладок.",
        categories: ["Гальма"],
      },
      {
        id: "brand-24",
        name: "BILSTEIN",
        image: "/Photos/brands/bilstein.png",
        description:
          "Компанія Bilstein було засновано в 1873 році в Німеччині в Altenvoede.",
        categories: ["Підвіска"],
      },
      {
        id: "brand-25",
        name: "CASTROL",
        image: "/Photos/brands/castrol.png",
        description:
          "Castrol є лідером на ринку мастильних матеріалів, технічних та експлуатаційних рідин.",
        categories: ["Оливи, авторідини"],
      },
      {
        id: "brand-26",
        name: "COMMA",
        image: "/Photos/brands/comma.png",
        description:
          "Comma є виробником широкого спектру мастильних матеріалів для сучасних дизельних і бензинових двигунів.",
        categories: ["Оливи, авторідини"],
      },
      {
        id: "brand-27",
        name: "CONTITECH",
        image: "/Photos/brands/contitech.png",
        description:
          "Continental AG є глобальним постачальником шин,компонентів підвіски,інтелектуальних систем безпеки,ременів ГРМ,комплектів ГРМ,клинових та доріжкових ременів.",
        categories: ["Пасковий привід", "Підвіска"],
      },
      {
        id: "brand-28",
        name: "CORTECO",
        image: "/Photos/brands/corteco.png",
        description:
          "CORTECO® є фахівцем для незалежного вторинного ринку (IAM) у рамках групи Freudenberg.",
        categories: ["Двигун"],
      },
      {
        id: "brand-29",
        name: "CTR",
        image: "/Photos/brands/ctr.png",
        description:
          "Корейська компанія CTR з 1973 року є одним з провідних постачальників детелей підвіски і системи рульового управління для потреб першої установки на транспортному засобі корпорацій Kia, Hyundai, General Motors тощо.",
        categories: ["Рульове управління"],
      },
      {
        id: "brand-30",
        name: "CURTY-PAYEN",
        image: "/Photos/brands/curty-payen.png",
        description:
          "Payen - марка компанії Federal Mogul, під якою виробляються сальники і прокладки, в тому числі і для головок циліндрів, з'єднання для термостатів, водяних насосів, карбюраторів тощо.",
        categories: ["Двигун"],
      },
      {
        id: "brand-31",
        name: "DAYCO",
        image: "/Photos/brands/dayco.png",
        description:
          "Світовий лідер у виробництві ременів ГРМ,комплектів ГРМ,клинових ременів та гумових шлангів для автомобілів всіх марок.",
        categories: ["Пасковий привід"],
      },
      {
        id: "brand-32",
        name: "DIESEL TECHNIC",
        image: "/Photos/brands/diesel-technic.png",
        description:
          "DIESEL TECHNIC Group є одним з найбільших постачальників повного спектру запасних частин для комерційного транспорту на світовому вторинному ринку.",
        categories: [
          "Аксесуари",
          "Пневматика",
          "Гальма",
          "Шасі",
          "Зчеплення",
          "Охолодження та обігрів",
          "Електрика",
          "Двигун",
          "Прокладки та сальники",
          "Випускна система",
          "Фільтри",
          "Привід",
          "Гідравліка",
          "Підшипники",
          "Підвіска",
        ],
      },
      {
        id: "brand-33",
        name: "DONALDSON",
        image: "/Photos/brands/donaldson.png",
        description:
          "DONALDSON є провідним світовим постачальником систем фільтрації і запасних частин.",
        categories: ["Фільтри"],
      },
      {
        id: "brand-34",
        name: "ELRING",
        image: "/Photos/brands/elring.png",
        description:
          "Elring надає комплексні ущільнення для головного ремонту двигуна, ремонт головки та картера двигуна, мостів і коробки передач та інших агрегатів.",
        categories: ["Двигун"],
      },
      {
        id: "brand-35",
        name: "FAG",
        image: "/Photos/brands/fag.png",
        description:
          "Компанія Schaeffler Group, якій з 2001 року належить бренд FAG, має дочірні компанії та торгові представництва у всіх основних промислових країнах світу.",
        categories: [
          "Пневматика",
          "Зчеплення",
          "Електрика",
          "Підшипники",
          "Підвіска",
        ],
      },
      {
        id: "brand-36",
        name: "FERODO",
        image: "/Photos/brands/ferodo.png",
        description:
          "Ferodo є всесвітньо відомий бренд з виробництва гальмівних колодок та дисків автомобіля. Продукція цієї фірми використовується як на конвеєрній збірці, так і на вторинному ринку запасних частин.",
        categories: ["Гальма"],
      },
      {
        id: "brand-37",
        name: "FRECCIA",
        image: "/Photos/brands/freccia.png",
        description:
          "FRECCIA дуже добре відомий бренд і цінується у всьому світі завдяки вісімдесятирічному досвіду у виробництві клапанів для двигунів",
        categories: ["Двигун"],
      },
      {
        id: "brand-38",
        name: "FUCHS",
        image: "/Photos/brands/fuchs.png",
        description:
          "Компанія Fuchs Oil, заснована в 1931 році, є всесвітньо відомим концерном, найбільшим серед незалежних виробників мастильних матеріалів.",
        categories: ["Оливи, авторідини"],
      },
      {
        id: "brand-39",
        name: "GULF",
        image: "/Photos/brands/gulf.png",
        description:
          "Gulf Oil була заснована в 1901 році під час відкриття джерел видобутку нафти в Спіндлтопі, штат Техас. Продукти бренду Gulf присутні більш, ніж в 100 країнах по всьому світу.",
        categories: ["Оливи, авторідини"],
      },
      {
        id: "brand-40",
        name: "HALDEX",
        image: "/Photos/brands/haldex.png",
        description:
          "HALDEX є провідним виробником автоматичних гальмівних важелів, гальмівні супорти і пневматичні системи ABS, EBS для вантажного автотранспорту.",
        categories: ["Пневматика", "Гальма"],
      },
      {
        id: "brand-41",
        name: "HANS PRIES",
        image: "/Photos/brands/hans-pries.png",
        description:
          "Два пріоритети сформували Групу Hans PRIES з моменту заснування компанії в 1954 році рівень задоволеності клієнтів і якості продукції.",
        categories: [
          "Зчеплення",
          "Охолодження та обігрів",
          "Електрика",
          "Двигун",
          "Паливна система",
          "Підвіска",
          "Рульове управління",
          "Підвіска карданного валу",
          "Підвіска колеса",
        ],
      },
      {
        id: "brand-42",
        name: "HELLA",
        image: "/Photos/brands/hella.png",
        description:
          "Hella KGaA Hueck & Co - відомий німецький виробник і постачальник в області автомобільних компонентів системи освітлення, електронних частин і постачальник запасних частин і аксесуарів післяпродажного обслуговування.",
        categories: ["Елементи кузова", "Електрика", "Освітлення"],
      },
      {
        id: "brand-43",
        name: "HEPU",
        image: "/Photos/brands/hepu.png",
        description:
          "HEPU Autoteile GmbH є німецькою компанією і вже більше 40 років виробляє водяні насоси високої якості для автомобілів.",
        categories: ["Охолодження та обігрів"],
      },
      {
        id: "brand-44",
        name: "IMPERGOM",
        image: "/Photos/brands/impergom.png",
        description:
          "IMPERGOM виробляє гумові та каучуково-металеві запасні частини для італійських, європейських і азіатських автомобілів.",
        categories: ["Підвіска", "Рульове управління"],
      },
      {
        id: "brand-45",
        name: "INA",
        image: "/Photos/brands/ina.png",
        description:
          "INA - бренд компанії Schaeffler Automotive. INA являє собою лінійку підшипників високої якості, а саме підшипники кочення, сферичні підшипники ковзання, підшипники ковзання та лінійні продукти.",
        categories: ["Пасковий привід", "Двигун"],
      },
      {
        id: "brand-46",
        name: "JC PREMIUM",
        image: "/Photos/brands/jc-premium.png",
        description:
          "Асортимент включає в себе повний спектр фільтрів для легкових автомобілів европейского та азійського виробництва.",
        categories: ["Фільтри"],
      },
      {
        id: "brand-47",
        name: "KAYABA",
        image: "/Photos/brands/kayaba.png",
        description:
          "Світовий лідер в розробці і виробництві найсучасніших амортизаторів.",
        categories: ["Підвіска"],
      },
      {
        id: "brand-48",
        name: "LESJOFORS",
        image: "/Photos/brands/lesjofors.png",
        description:
          "Lesjofors є одним з найбільших виробників пружин підвіски в Європі.",
        categories: ["Підвіска", "Рульове управління"],
      },
      {
        id: "brand-49",
        name: "LIQUI MOLY",
        image: "/Photos/brands/liqui-moly.png",
        description: "Liqui Moly пропонує повний спектр моторних олив.",
        categories: ["Оливи, авторідини"],
      },
      {
        id: "brand-50",
        name: "LOCTITE",
        image: "/Photos/brands/loctite.png",
        description:
          "Клеї, герметики, фіксатори, змащувальні матеріали, антикорозійні матеріали, очисники торгової марки LOCTITE від компанії Henkel.",
        categories: ["Оливи, авторідини"],
      },
      {
        id: "brand-51",
        name: "LPR",
        image: "/Photos/brands/lpr.png",
        description:
          "Фірма LPR має п'ятидесятирічний досвід у виробництві гальмівних систем.",
        categories: ["Гальма", "Привід", "Гідравліка"],
      },
      {
        id: "brand-52",
        name: "LUK",
        image: "/Photos/brands/luk.png",
        description:
          "Заснована в 1965 році, німецька компанія LuK з першого дня випускала продукцію і компоненти систем зчеплення.",
        categories: ["Зчеплення"],
      },
      {
        id: "brand-53",
        name: "MAGNUM TECHNOLOGY",
        image: "/Photos/brands/magnum-technology.png",
        description:
          "Лінійка продуктів бренду Magnum Technology, створена для задоволення потреб клієнтів на незалежному вторинному ринку.",
        categories: [
          "Підвіска кабіни",
          "Шасі",
          "Підвіска",
          "Рульове управління",
        ],
      },
      {
        id: "brand-54",
        name: "MAGNETI MARELLI",
        image: "/Photos/brands/magneti-marelli.png",
        description:
          "Magneti Marelli Aftermarket (група FIAT) є одним з ведучих постачальниців запасних частин та діагностичного обладнання.",
        categories: [
          "Охолодження та обігрів",
          "Електрика",
          "Паливна система",
          "Освітлення",
          "Підвіска",
          "Рульове управління",
        ],
      },
      {
        id: "brand-55",
        name: "METGUM",
        image: "/Photos/brands/metgum.png",
        description:
          'Українське підприємство під торговою маркою "MetGum" виробляє резино-металеві автозапчастини для іномарок (сайлентблоки, пильовики, втулки стабілізатора, подушки двигуна і ресор) до автомобілів моделей, найбільш поширених на території України, відповідно до технічних умов затверджених Держстандартом України.',
        categories: ["Підвіска", "Рульове управління"],
      },
      {
        id: "brand-56",
        name: "MOBIL",
        image: "/Photos/brands/mobil.png",
        description:
          "Компанія пропонує високоякісні мастильні матеріали, вироблені на базі повного мінерального і синтетичного спектру моторних масел для легкових автомобілів, вантажних автомобілів, мотоциклів і спеціального обладнання, трансмісійних олив, охолоджуючих рідин, гальмівних рідин і мастильних матеріалів.",
        categories: ["Оливи, авторідини"],
      },
      {
        id: "brand-57",
        name: "MONROE",
        image: "/Photos/brands/monroe.png",
        description:
          "Один з провідних виробників і постачальників амортизаторів - тільки в своїх європейських заводах виробляють понад 100 тисяч. штук амортизаторів на день.",
        categories: ["Підвіска кабіни", "Шасі", "Підвіска"],
      },
      {
        id: "brand-58",
        name: "MOOG",
        image: "/Photos/brands/moog.png",
        description:
          "MOOG є частиною Federal-Mogul Corporation. Асортимент бренду MOOG включає в себе компоненти для підвіски і рульового управління для моделей автомобілів американського, європейського і азіатського виробництва.",
        categories: ["Підвіска", "Рульове управління"],
      },
      {
        id: "brand-59",
        name: "NEXUS",
        image: "/Photos/brands/nexus.png",
        description:
          "Nexus Automotive це широкий спектр частин зчеплення автомобілів, вироблених в Європі і Азії, а також для комерційних транспортних засобів. Розроблений досвідченими інженерами і випробувані в самих екстремальних умовах.",
        categories: ["Зчеплення"],
      },
      {
        id: "brand-60",
        name: "NRF",
        image: "/Photos/brands/nrf.png",
        description:
          "NRF є одним з лідерів ринку в сфері проектування, виробництва і продажу, а також післяпродажного обслуговування систем опалення, охолодження і клімат-контролю для легких автомобілів і вантажівок.",
        categories: ["Охолодження та обігрів"],
      },
      {
        id: "brand-61",
        name: "OSRAM",
        image: "/Photos/brands/osram.png",
        description:
          "Osram є одним з найбільших в світі виробників освітлення.",
        categories: ["Освітлення"],
      },
      {
        id: "brand-62",
        name: "PRESTO",
        image: "/Photos/brands/presto.png",
        description:
          "Продукція під торговою маркою Presto виробляється на заводі концерну Motip Dupli Group в Німеччині та Нідерланди.",
        categories: ["Оливи, авторідини"],
      },
      {
        id: "brand-63",
        name: "PRISTA",
        image: "/Photos/brands/prista.png",
        description:
          "Prista Oil–болгарська компанія зі штаб-квартирою в місті Русе, що займається виробництвом 150 видів моторних олив і промислових мастильних матеріалів, а також їх розподілом, транспортуванням і зберіганням, очищенням наслідків забруднення нафтового виробництва і переробки автомобільних акумуляторів.",
        categories: ["Оливи, авторідини"],
      },
      {
        id: "brand-64",
        name: "PURFLUX",
        image: "/Photos/brands/purflux.png",
        description:
          "Відділ фільтрів Sogefi - це один з провідних європейських виробників фільтрів пасажирських та вантажних автомобілів. Виробництво включає масляні фільтри, паливні, повітряні та фільтри салону, а також повні модулі фільтрів для первинного та вторинного ринків.",
        categories: ["Фільтри"],
      },
      {
        id: "brand-65",
        name: "QUICK BRAKE",
        image: "/Photos/brands/quick-brake.png",
        description:
          "Quick Brake (Brake Hose & Component Supplies (Pty) Ltd.; Данія) є виробником компонентів гальмівної системи автомобілів.",
        categories: ["Гальма"],
      },
      {
        id: "brand-66",
        name: "RAVENOL",
        image: "/Photos/brands/ravenol.png",
        description:
          "Компанія Ravensberger Schmirstoffvertrieb GmbH (Німеччина), що володіє брендом RAVENOL, заснована в 1946 році. На сьогодні є однією з найбільш ефективних торговельних марок мастильних матеріалів для продуктів преміум-класу в усьому світі.",
        categories: ["Моторні мастила", "Оливи, авторідини"],
      },
      {
        id: "brand-67",
        name: "SASIC",
        image: "/Photos/brands/sasic.png",
        description:
          "Виробник запасних частин для легкових автомобілів і вантажопасажирських автомобілів з 1927 року, компанія Sasic оточила себе надійними та ефективними партнерами, що дає їй можливість запропонувати Вам широкий асортимент якісної продукції і нововведень.",
        categories: ["Підвіска", "Рульове управління"],
      },
      {
        id: "brand-68",
        name: "SHELL",
        image: "/Photos/brands/shell.png",
        description:
          "Shell є одним з найбільших міжнародних ринків - нафтохімічної та енергетичної галузей. Пропозиція включає в себе високоякісні оливи для легкових автомобілів (лінія Shell Helix), вантажні автомобілі (лінія Shell Rimula), мотоцикли (авансовий) і цілий ряд мастильних матеріалів.",
        categories: ["Оливи, авторідини"],
      },
      {
        id: "brand-69",
        name: "SPIDAN",
        image: "/Photos/brands/spidan.png",
        description:
          "GKN Service International GmbH є частиною групи GKN. Під брендом SPIDAN фірма пропонує оригінальні привідні вали та комплекти пильників GKN а також додаткові компоненти, такі як пружини,елементи рульвого управління,підшипники маточини та багато іншого.",
        categories: ["Привід"],
      },
      {
        id: "brand-70",
        name: "TEDGUM",
        image: "/Photos/brands/tedgum.png",
        description:
          "Компанія була заснована в 1993 році і вже через короткий проміжок часу, динамічно розвиваючись, взяла на себе самостійне виробництво компонентів з гуми і метал.",
        categories: ["Підвіска", "Рульове управління"],
      },
      {
        id: "brand-71",
        name: "THERMOTEC",
        image: "/Photos/brands/thermotec.png",
        description:
          "Thermotec продукції включає в себе широкий спектр запасних частин для систем кондиціонування та охолодження для легкових автомобілів, мікроавтобусів і вантажних автомобілів.",
        categories: ["Охолодження та обігрів"],
      },
      {
        id: "brand-72",
        name: "TOTAL",
        image: "/Photos/brands/total.png",
        description:
          "Компанія Total є всесвітньо відомою міжнародною енергетичною компанією, головною метою якої є задоволення постійно зростаючого попиту на паливно-мастильні матеріали. Це четверта за величиною корпорація в світі нафти і палива, а також виробник автомобільних хімічних речовин світового класу.",
        categories: ["Оливи, авторідини"],
      },
      {
        id: "brand-73",
        name: "TRW AUTOMOTIVE",
        image: "/Photos/brands/trw.png",
        description:
          "TRW Automotive є провідним виробником систем безпеки для автомобільної промисловості.",
        categories: [
          "Пневматика",
          "Гальма",
          "Зчеплення",
          "Гідравліка",
          "Підвіска",
          "Рульове управління",
        ],
      },
      {
        id: "brand-74",
        name: "VAICO",
        image: "/Photos/brands/vaico.png",
        description:
          "У сфері двигунів продукти VAICO досягли рівня відомого бренду на світовому вільному ринку запчастин. В асортимент входять більш 19 000 високоякісних запчастин в 150 різних товарних групах, таких як рульове управління, гальма, охолодження, фільтри, експлуатаційні матеріали (моторні та трансмісійні масла) тощо.",
        categories: ["Фільтри"],
      },
      {
        id: "brand-75",
        name: "VALEO",
        image: "/Photos/brands/valeo.png",
        description:
          "Місцем народження корпорації Valeo є Сен-Уан, де в 1923 році Ежен Буіссон відкрив завод з виробництва гальмівних колодок і накладок зчеплення.",
        categories: [
          "Зчеплення",
          "Охолодження та обігрів",
          "Електрика",
          "Очищення скла",
        ],
      },
      {
        id: "brand-76",
        name: "VARTA",
        image: "/Photos/brands/varta.png",
        description:
          "Varta Akumulatory це європейська частина поточної світової індустрії Johnson Controls Power Solutions, одна з багатьох, які належать до американської компанії JCI Inc.",
        categories: ["Електрика"],
      },
      {
        id: "brand-77",
        name: "VERNET",
        image: "/Photos/brands/vernet.png",
        description:
          "VERNET – виробник що належить американській групі Magnum.",
        categories: ["Охолодження та обігрів", "Електрика"],
      },
      {
        id: "brand-78",
        name: "WD-40",
        image: "/Photos/brands/wd40.png",
        description:
          "WD-40 – американська компанія і торгова марка відомого аерозольного препарату.",
        categories: ["Оливи, авторідини"],
      },
      {
        id: "brand-79",
        name: "YAMATO",
        image: "/Photos/brands/yamato.png",
        description:
          "Деталі підвіски і рульового управління YAMATO призначені для японських і корейських автомобілів.",
        categories: ["Рульове управління"],
      },
    ],
  },
  {
    id: 3,
    name: "PassengerCarCategories",
    items: [
      {
        id: "pass-1",
        name: "ДВИГУН",
        image: "/Photos/categories/engine.png",
        subcategories: [
          {
            id: "eng-1",
            name: "Блок двигуна",
          },
          {
            id: "eng-2",
            name: "Головка циліндра",
          },
          {
            id: "eng-3",
            name: "Змащення двигуна",
          },
          {
            id: "eng-4",
            name: "Газорозподільний механізм (ГРМ)",
          },
          {
            id: "eng-5",
            name: "Компоненти приводного ременя",
          },
          {
            id: "eng-6",
            name: "Турбокомпресор / нагнітач/ компоненти",
          },
          {
            id: "eng-7",
            name: "Двигун / частковий двигун",
          },
          {
            id: "eng-8",
            name: "Комплекти прокладок двигуна",
          },
          {
            id: "eng-9",
            name: "Підвіска двигуна / коробки",
          },
        ],
      },
      {
        id: "pass-2",
        name: "ФІЛЬТРА",
        image: "/Photos/categories/filters.png",
        subcategories: [
          {
            id: "fil-1",
            name: "Масляний фільтр / корпус / прокладка",
          },
          {
            id: "fil-2",
            name: "Паливний фільтр / корпус / прокладка",
          },
          {
            id: "fil-3",
            name: "Повітряний фільтр / корпус / прокладка",
          },
          {
            id: "fil-4",
            name: "Фільтр для кабіни / корпус / прокладка",
          },
          {
            id: "fil-5",
            name: "Пдравлічний фільтр",
          },
          {
            id: "fil-6",
            name: "Фільтр сечовини",
          },
          {
            id: "fil-7",
            name: "LPG / CNG фільтр",
          },
          {
            id: "fil-8",
            name: "Набір фільтрів",
          },
        ],
      },
      {
        id: "pass-3",
        name: "ПІДВІСКА",
        image: "/Photos/categories/suspension.png",
        subcategories: [
          {
            id: "sus-1",
            name: "Сайленблок",
          },
          {
            id: "sus-2",
            name: "Важіль",
          },
          {
            id: "sus-3",
            name: "Рульове управління",
          },
          {
            id: "sus-4",
            name: "Стабілізатор",
          },
          {
            id: "sus-5",
            name: "Опора стабілізатора",
          },
          {
            id: "sus-6",
            name: "Торсіон",
          },
          {
            id: "sus-7",
            name: "Підшипник / ступиця колеса",
          },
          {
            id: "sus-8",
            name: "Комплект ремонту підвіски коліс",
          },
          {
            id: "sus-9",
            name: "Підвіска балки / елементи",
          },
        ],
      },
      {
        id: "pass-4",
        name: "АМОРТИЗАЦІЯ",
        image: "/Photos/categories/shock-absorbers.png",
        subcategories: [
          {
            id: "amort-1",
            name: "Амортизатори",
          },
          {
            id: "amort-2",
            name: "Пружини",
          },
          {
            id: "amort-3",
            name: "Ресори",
          },
        ],
      },
      {
        id: "pass-5",
        name: "СИСТЕМА ЗАПАЛЮВАННЯ",
        image: "/Photos/categories/ignition.png",
        subcategories: [
          {
            id: "ign-1",
            name: "Котушка запалювання",
          },
          {
            id: "ign-2",
            name: "Блок управління",
          },
          {
            id: "ign-3",
            name: "Розподільник запалювання",
          },
          {
            id: "ign-4",
            name: "Свічка запалювання",
          },
          {
            id: "ign-5",
            name: "Привід розподільника запалювання",
          },
          {
            id: "ign-6",
            name: "Кабель / компоненти запалювання",
          },
          {
            id: "ign-7",
            name: "Резистор",
          },
        ],
      },
      {
        id: "pass-6",
        name: "КОРОБКА ПЕРЕДАЧ",
        image: "/Photos/categories/transmission.png",
        subcategories: [
          {
            id: "trans-1",
            name: "Ручна коробка передач",
          },
          {
            id: "trans-2",
            name: "Автоматична коробка передач",
          },
          {
            id: "trans-3",
            name: "Планетарна коробка передач",
          },
          {
            id: "trans-4",
            name: "Підвіска двигуна / коробки",
          },
        ],
      },
      {
        id: "pass-7",
        name: "ЗЧЕПЛЕННЯ",
        image: "/Photos/categories/clutch.png",
        subcategories: [
          {
            id: "clutch-1",
            name: "Комплект зчеплення",
          },
          {
            id: "clutch-2",
            name: "Компоненти зчеплення",
          },
          {
            id: "clutch-3",
            name: "Керування зчепленням",
          },
          {
            id: "clutch-4",
            name: "Гідрокінетична муфта",
          },
        ],
      },
      {
        id: "pass-8",
        name: "ГАЛЬМІВНА СИСТЕМА",
        image: "/Photos/categories/brakes.png",
        subcategories: [
          {
            id: "brake-1",
            name: "Гальмівна накладка",
          },
          {
            id: "brake-2",
            name: "Гальмівний диск",
          },
          {
            id: "brake-3",
            name: "Дискове гальмо",
          },
          {
            id: "brake-4",
            name: "Монтажні частини дискового гальма",
          },
          {
            id: "brake-5",
            name: "Гальмівний барабан",
          },
          {
            id: "brake-6",
            name: "Барабанний гальмівний циліндр",
          },
          {
            id: "brake-7",
            name: "Монтажні частини барабанного гальма",
          },
          {
            id: "brake-8",
            name: "Головний циліндр",
          },
          {
            id: "brake-9",
            name: "Антиблокувальна система (ABS)",
          },
          {
            id: "brake-10",
            name: "Стояночний гальмо",
          },
        ],
      },
      {
        id: "pass-9",
        name: "РУЛЬОВА СИСТЕМА",
        image: "/Photos/categories/steering.png",
        subcategories: [
          {
            id: "steer-1",
            name: "Передача елементів",
          },
          {
            id: "steer-2",
            name: "Рульовий механізм",
          },
          {
            id: "steer-3",
            name: "Система допомоги",
          },
          {
            id: "steer-4",
            name: "Рульова колонка",
          },
          {
            id: "steer-5",
            name: "Демпфер рульового управління",
          },
        ],
      },
      {
        id: "pass-10",
        name: "СИСТЕМА ОХОЛОДЖЕННЯ",
        image: "/Photos/categories/cooling.png",
        subcategories: [
          {
            id: "cool-1",
            name: "Насос охолоджуючої рідини",
          },
          {
            id: "cool-2",
            name: "Радіатор двигуна",
          },
          {
            id: "cool-3",
            name: "Охолоджувач палива",
          },
          {
            id: "cool-4",
            name: "Вентилятор",
          },
          {
            id: "cool-5",
            name: "Термостат",
          },
          {
            id: "cool-6",
            name: "Термоперемикач",
          },
          {
            id: "cool-7",
            name: "Розширювальний бак",
          },
          {
            id: "cool-8",
            name: "Інтеркулер",
          },
          {
            id: "cool-9",
            name: "Охолодження мастила",
          },
          {
            id: "cool-10",
            name: "Фланець системи охолодження",
          },
          {
            id: "cool-11",
            name: "Патрубки",
          },
          {
            id: "cool-12",
            name: "Перемикач / датчик",
          },
          {
            id: "cool-13",
            name: "Фільтр охолоджуючої рідини",
          },
        ],
      },
      {
        id: "pass-11",
        name: "СИСТЕМА ВПУСКУ/ВИПУСКУ",
        image: "/Photos/categories/exhaust.png",
        subcategories: [
          {
            id: "exh-1",
            name: "Вихлопна система",
          },
          {
            id: "exh-2",
            name: "Система впуску",
          },
        ],
      },
      {
        id: "pass-12",
        name: "ПАЛИВНА СИСТЕМА",
        image: "/Photos/categories/fuel.png",
        subcategories: [
          {
            id: "fuel-1",
            name: "Паливний насос",
          },
          {
            id: "fuel-2",
            name: "Лямбда-зонд",
          },
          {
            id: "fuel-3",
            name: "Паливний насос високого тиску",
          },
          {
            id: "fuel-4",
            name: "Система Сommon-Rail",
          },
          {
            id: "fuel-5",
            name: "Клапани паливних систем",
          },
          {
            id: "fuel-6",
            name: "Центральний впорскування / контроль",
          },
          {
            id: "fuel-7",
            name: "Накопичувач тиску / розподільник тиску",
          },
          {
            id: "fuel-8",
            name: "Інжектор / інжектори / Компоненти",
          },
          {
            id: "fuel-9",
            name: "Система живлення карбюратора",
          },
          {
            id: "fuel-10",
            name: "Троси/тяги",
          },
          {
            id: "fuel-11",
            name: "Охолоджувач палива",
          },
          {
            id: "fuel-12",
            name: "Паливний бак / компоненти",
          },
          {
            id: "fuel-13",
            name: "Паливні шланги / лінії",
          },
        ],
      },
      {
        id: "pass-13",
        name: "КУЗОВ/ОСВІТЛЕННЯ/ДЗЕРКАЛА",
        image: "/Photos/categories/body.png",
        subcategories: [
          {
            id: "body-1",
            name: "Освітлення / елементи",
          },
          {
            id: "body-2",
            name: "Кузов",
          },
          {
            id: "body-3",
            name: "Пластмаси / дефлектори",
          },
          {
            id: "body-4",
            name: "Аварійні накладки / накладки",
          },
          {
            id: "body-5",
            name: "Дзеркала / елементи",
          },
          {
            id: "body-6",
            name: "Елементи фіксації",
          },
          {
            id: "body-7",
            name: "Кабіна водія",
          },
          {
            id: "body-8",
            name: "Спойлери/Чохли/ Повітрозабірники",
          },
        ],
      },
    ],
  },
  {
    id: 5,
    name: "ToolsCategories",
    items: [
      {
        id: "tools-1",
        name: "ОБЛАДНАННЯ ДЛЯ МАЙСТЕРНІ",
        image: "/Photos/categories/workshop.png",
        subcategories: [
          {
            id: "workshop-2",
            name: "Діагностика",
          },
          {
            id: "workshop-3",
            name: "Кондиціонування",
          },
          {
            id: "workshop-4",
            name: "Обслуга коліс і шин",
          },
          {
            id: "workshop-5",
            name: "Підйомники",
          },
          {
            id: "workshop-6",
            name: "Точкові підйомники (жаби), опори, крани",
          },
          {
            id: "workshop-7",
            name: "Обслуга масел, змащень та робочих рідин",
          },
          {
            id: "workshop-8",
            name: "Обслуга гальмівної системи",
          },
          {
            id: "workshop-9",
            name: "Обслуга акумуляторів та електричної системи",
          },
        ],
      },
      {
        id: "tools-2",
        name: "РУЧНІ ІНСТРУМЕНТИ",
        image: "/Photos/categories/hand-tools.png",
        subcategories: [
          {
            id: "hand-1",
            name: "Набори інструментів",
          },
          {
            id: "hand-2",
            name: "Плоскогубці, гайкові ключі",
          },
          {
            id: "hand-3",
            name: "Ключі з тріскачкою",
          },
          {
            id: "hand-4",
            name: "Головки і аксесуари",
          },
          {
            id: "hand-5",
            name: "Кусачки, клещі, комбіновані клещі",
          },
          {
            id: "hand-6",
            name: "Молотки",
          },
          {
            id: "hand-7",
            name: "Біти, викрутки",
          },
          {
            id: "hand-8",
            name: "Динамометричні ключі",
          },
        ],
      },
      {
        id: "tools-3",
        name: "ЕЛЕКТРОІНСТРУМЕНТ",
        image: "/Photos/categories/power-tools.png",
        subcategories: [
          {
            id: "power-1",
            name: "Дрилі, шуруповерти",
          },
          {
            id: "power-2",
            name: "Ударні гайковерти",
          },
          {
            id: "power-3",
            name: "Шліфувальники",
          },
          {
            id: "power-4",
            name: "Пилки, різаки та аксесуари",
          },
          {
            id: "power-5",
            name: "Полірувальники",
          },
        ],
      },
    ],
  },
];

export default categories;
