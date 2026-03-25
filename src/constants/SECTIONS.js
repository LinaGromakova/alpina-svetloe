import * as images from '../assets/index.js';
export const SECTIONS = [
  {
    order: 'img&text',
    typeAdaptive: 'fullscreen',
    sectionType: 'infoBlock',
    logo: {
      variant: 'sm',
      styles:
        'absolute right-16 bottom-10 max-md:bottom-2 max-md:right-2 max-sm:relative max-sm:order-3 max-sm:mx-auto',
    },
    type: 'paragraph',
    imgSrc: images.src1,
    title: `Альпина Светлое — \n Ваш капитал в стиле шале. \nВаш отдых — круглый год`,
    data: [
      {
        text: `Эксклюзивный закрытый поселок 
из 18 коттеджей в едином стиле
`,
      },
      {
        text: `Ленинградская область, п. Светлое 
5–7 минут от курорта «Золотая Долина»`,
      },
      { text: 'Старт продаж: Март 2026', bold: true },
    ],
    styles: {
      imgClassName: 'w-2/5',
      infoClassName: 'max-w-3/5 lg:px-25 px-10 ',
    },
  },
  {
    order: 'text&img',
    typeAdaptive: 'fullscreen',
    type: 'paragraph',
    sectionType: 'gradientBlock',
    backSrc: images.src2,
    title: `Концепция проекта — \n не просто дома, а сообщество`,
    data: [
      {
        text: `Это не просто недвижимость.
Это статус, образ жизни и умное вложение в комфорт
`,
      },
      { text: `Закрытая территория с охраной — приватность и безопасность` },
      {
        text: `Единые стандарты благоустройства — поселок остаётся красивым годами
`,
      },
    ],
    styles: { parSize: 'max-w-[500px]' },
  },
  {
    order: 'img&text',
    typeAdaptive: 'cards',
    sectionType: 'infoBlock',
    type: 'paragraph',
    imgSrc: images.src3,
    title: `Локация — \n идеальный \n треугольник: \n город, горы, \n озеро`,

    data: [
      {
        title: 'Санкт-Петербург: \n',
        text: `85 км / 1 час
по качественной трассе`,
      },
      {
        title: '«Золотая Долина»: \n',
        text: `5–7 минут — 12 трасс,
перепад 105 м`,
      },
      {
        title: 'Красное озеро: \n',
        text: `в нескольких минутах — пляж,
прокат лодок, вейкборд`,
      },
      {
        text: `В 2026 году стартует строительство нового горнолыжного комплекса в Коробицыно (14 млрд руб.)`,
      },
    ],
    styles: {
      imgFit: 'object-contain',
      imgClassName: 'w-full bg-linear-to-b from-green from-40% to-dark-green',
      infoClassName: 'lg:w-[45%] w-10/12 lg:px-20 px-10',
    },
  },
  {
    order: 'img&text',
    typeAdaptive: 'fullscreen',
    sectionType: 'gradientBlock',
    type: 'list',
    backSrc: images.src4,
    circleGallery: [
      { srcCircle: images.srcCicle2 },
      { srcCircle: images.srcCicle1 },
      { srcCircle: images.srcCicle4 },
      { srcCircle: images.srcCicle3 },
    ],
    title: `«Золотая Долина» —\n ваш личный пропуск \n к склонам`,
    data: [
      { text: `12 горнолыжных трасс разного уровня сложности` },
      { text: `Максимальный перепад высот для региона — 105 метров` },
      { text: `Самая длинная трасса — 1100 метров` },
      { text: `Искусственное оснежение: сезон с ноября по апрель` },
      {
        text: `Инфраструктура: прокат экипировки, инструкторы, рестораны, спа-комплекс`,
      },
    ],
    styles: {
      imgClassName: '',
      infoClassName: 'w-1/2 lg:px-25 px-10',
    },
  },
  {
    order: 'img&text',
    typeAdaptive: 'fullscreen',
    sectionType: 'infoCardBlock',
    type: 'list',
    backSrc: images.src5,
    title: `Красное озеро —\n летняя жемчужина \n Карельского перешейка`,
    subtitle: `Сезонный ритм жизни владельца:\n зима, весна, лето, осень`,
    data: [
      { text: `Чистая вода для купания и рыбалки круглый год` },
      {
        text: `Инфраструктура пляжа: шезлонги, вип-зона с детским бассейном, раздевалки, душ, летний ресторан`,
      },
      {
        text: `Развлечения: лучный тир, пляжный волейбол, батут, вейкборд, лодки, катамараны`,
      },
      { text: `Сосновый бор, чистейший воздух, отсутствие комаров` },
    ],
    styles: {
      imgClassName: '',
      parSize: 'max-w-[350px]',
      infoClassName:
        'py-7 w-130.5 from-white from-20% via-white/50 via-40% to-white/15',
    },
  },
  {
    order: 'text&img',
    typeAdaptive: 'fullscreen',
    sectionType: 'infoCardBlock',
    type: 'list',
    backSrc: images.src2,
    title: '',
    data: [
      {
        text: `Коттеджи из высококачественного
клееного бруса на монолитном
фундаменте`,
      },
      {
        text: `Натуральное дерево, двускатные
крыши, большие террасы`,
      },
      { text: `Площадь дома: от 250 м²` },
      { text: `Площадь участка: от 9 соток` },
      {
        text: `Полностью мебелированы и готовы
к проживанию — заезжайте сразу
после покупки`,
      },
    ],
    styles: {
      containerStyles: 'px-[4%] py-[12%] max-md:py-[20%]',
      infoClassName: `relative from-white/80 from-75% w-[500px]
        to-white/40 py-1 before:content-["Архитектурная_концепция"] 
        before:block before:absolute max-md:before:text-4xl
        before:-top-20 before:left-0 max-md:before:left-auto
        before:text-light-beige before:font-bold before:text-5xl 
        md:before:whitespace-nowrap whitespace-normal`,
    },
  },
  {
    order: 'text&img',
    typeAdaptive: 'fullscreen',
    sectionType: 'infoBlock',
    type: 'list',
    imgSrc: images.src6,
    title: `Сердце дома —\nдетали, которые \n делают жизнь \n комфортной`,
    data: [
      {
        text: `Настоящий камин в гостиной —
источник тепла и атмосферы
после дня на склонах`,
      },
      {
        text: `Финская сауна с дровяной печью
— отдых в любое время года`,
      },
      {
        text: `Просторный гараж от 30 м² с
зонами хранения для авто, лыж,
сноубордов, квадроциклов,
снегоходов`,
      },
      {
        text: `Техническое помещение для
сушки экипировки`,
      },
      {
        text: `Экологичные, морозостойкие
материалы для северного
климата`,
      },
    ],
    styles: {
      imgClassName: 'w-1/2',
      infoClassName: 'lg:px-25 px-10 w-1/2',
    },
  },
  { sectionType: 'gallery' },
  {
    order: 'img&text',
    typeAdaptive: 'fullscreen',
    sectionType: 'infoBlock',
    type: 'list',
    imgSrc: images.src7,
    title: `Участок \n и благоустройство \n — ваша частная \n территория`,
    data: [
      {
        text: `Огороженная территория с откатными воротами`,
      },
      {
        text: `Отсыпанная зона парковки`,
      },
      {
        text: `Благоустроенная мангальная зона с зоной отдыха`,
      },
      {
        text: `Возможность ландшафтного дизайна по вашему вкусу`,
      },
    ],
    styles: {
      imgClassName: 'w-4/5',
      infoClassName: 'w-3/5 lg:px-25 px-10',
      parSize: 'max-w-[300px]',
    },
  },
  {
    order: 'img&text',
    sectionType: 'infoBlock',
    typeAdaptive: 'cards',
    type: 'paragraph',
    imgSrc: images.src8,
    title: `Поселковая \n инфраструктура \n «под ключ»`,
    data: [
      {
        title: `Коммуникации:`,
        text: `собственная
  артезианская скважина, магистральный газ,
  электроснабжение 15 кВт, канализация,
  высокоскоростной интернет`,
      },
      {
        title: `Безопасность:`,
        text: `круглосуточный пост охраны,
  КПП с контролем доступа, видеонаблюдение
  периметра`,
      },
      {
        title: `Комфорт:`,
        text: `детская площадка с безопасным
  покрытием, зона отдыха для взрослых,
  гостевая парковка, централизованная
  площадка ТКО, уличное освещение,
  асфальтированные дороги`,
      },
      {
        title: `Управление:`,
        text: `профессиональная
  управляющая компания для обслуживания и
  сдачи домов в аренду (по желанию)`,
      },
    ],
    styles: {
      imgClassName: 'w-1/2',
      infoClassName: 'w-1/2 px-15 px-10',
      parSize: 'inline-block',
    },
  },
  {
    order: 'text&img',
    sectionType: 'gradientBlock',
    typeAdaptive: 'fullscreen',
    logo: {
      variant: 'md',
      styles: 'sm:mb-8 sm:ml-10 ml-5 mb-4',
    },
    type: 'list',
    backSrc: images.src9,
    title: `Почему это выгодная инвестиция для вас?`,
    data: [
      {
        text: 'Курортная локация = стабильный спрос круглый год',
      },
      {
        text: 'Арендная доходность: до 30–50 тыс. руб./сутки в пик сезона',
      },
      {
        text: 'Годовой доход от аренды: 1,5–2,2 млн.руб. при средней загрузке 45–50%',
      },
      {
        text: 'Срок окупаемости через аренду: 7–12 лет (при сохранении актива в собственности)',
      },
      {
        text: 'Эксклюзивность: всего 18 лотов — ограниченное предложение поддерживает рост стоимости',
      },
      {
        text: 'Готовность к эксплуатации: минимум скрытых затрат, быстрый старт для проживания или аренды',
      },
    ],
    styles: { parSize: 'max-w-[475px]' },
  },
  {
    order: 'img&text',
    typeAdaptive: 'fullscreen',
    sectionType: 'infoBlock',
    type: 'list',
    imgSrc: images.src10,
    title: `Целевая аудитория — \n для кого этот поселок?`,
    data: [
      {
        text: 'Состоятельные петербуржцы 35–50 лет, уставшие от массовых поселков',
      },
      {
        text: 'Семьи с детьми, ценящие безопасность и природу',
      },
      {
        text: 'Активные лыжники и любители горнолыжного отдыха',
      },
      {
        text: 'Те, кто ищет загородный дом с атмосферой горнолыжного курорта в часе от города',
      },
      {
        text: 'Инвесторы, ищущие ликвидный актив с пассивным доходом',
      },
    ],
    signature: `Вы получаете не просто дом.
  Вы получаете готовый образ жизни:
  утро на склонах, день у озера,
  вечер у камина — всё в одном месте.`,
    styles: {
      imgClassName: 'w-1/2',
      infoClassName: 'w-1/2 lg:px-25 px-10',
      parSize: 'max-w-[380px]',
    },
  },
  {
    order: 'img&text',
    typeAdaptive: 'fullscreen',
    sectionType: 'infoCardBlock',
    type: 'paragraph',
    backSrc: images.src2,
    title: `Ваш следующий шаг`,
    data: [
      {
        title: 'Старт продаж:',
        text: 'Март 2026 года',
      },
      {
        title: 'Количество лотов:',
        text: '18 эксклюзивных участков',
      },
      {
        title: 'Цена:',
        text: `уточняется при обращении
  (сегмент 30–35 млн руб.).
  Ипотека от банков-партнеров. Рассрочка до 1 года.
  Скидки при покупке на старте продаж.`,
      },
      {
        title: 'Что включено:',
        text: `готовый меблированный
  дом, участок, подведённые коммуникации,
  инфраструктура поселка`,
      },
      {
        title: 'Застройщик:',
        text: 'строительная компания «ПЕТРОТЕХ ИНЖИНИРИНГ»',
      },
      {
        title: 'Телефон:',
        text: '+7 (812) 900-72-67',
      },
      {
        title: 'Email:',
        text: 'info@alpina-svetloe.ru',
      },
    ],
    styles: {
      infoClassName:
        'from-white from-40% via-90% via-white/60  to-white/60 py-10 px-10',
      parSize: `max-w-[600px] nth-of-type-5:max-w-[450px] nth-of-type-5:ml-auto
              nth-of-type-6:max-w-[450px] nth-of-type-6:ml-auto nth-of-type-6:-mb-4
              nth-of-type-5:-mb-4 nth-of-type-7:-mb-4
              nth-of-type-7:max-w-[450px] nth-of-type-7:ml-auto
              max-md:nth-of-type-5:max-w-[260px]
              max-md:nth-of-type-6:max-w-[260px]
              max-md:nth-of-type-7:max-w-[260px]
              `,
    },
  },
];
