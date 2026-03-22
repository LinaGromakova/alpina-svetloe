import { AboutSection } from './sections/AboutSection';
import { ActivitiesSection } from './sections/ActivitiesSection';
import { AmenitiesSection } from './sections/AmenitiesSection';
import { ConceptSection } from './sections/ConceptSection';
import { GallerySection } from './sections/GallerySection';
import { LocationInfoSection } from './sections/LocationInfoSection';
import { PreviewSection } from './sections/PreviewSection';
import { PrivateInfoSection } from './sections/PrivateInfoSection';
import { RedLakeSection } from './sections/RedLakeSection';
import { SectionPhilosophy } from './sections/SectionPhilosophy';
import * as images from './assets';
import { InfoSection } from './sections/InfoSection/InfoSection';
import { GradientSection } from './sections/GradientSection';
import { InfoCardSection } from './sections/InfoCardSection/InfoCardSection';

const INFO = [
  {
    type: 'paragraph',
    imgSrc: images.src1,
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
  },
  {
    logo: true,
    type: 'list',
    backSrc: images.src2,
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
  },
  {
    type: 'list',
    imgSrc: images.src3,
    title: `Целевая аудитория — для кого этот поселок?`,
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
  },
  {
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
  },
];

function App() {
  return (
    <div className='font-sans w-full h-full'>
      <PreviewSection></PreviewSection>
      <AboutSection></AboutSection>
      <SectionPhilosophy></SectionPhilosophy>
      <LocationInfoSection></LocationInfoSection>
      <ActivitiesSection></ActivitiesSection>
      <RedLakeSection></RedLakeSection>
      <ConceptSection></ConceptSection>
      <AmenitiesSection></AmenitiesSection>
      <GallerySection></GallerySection>
      <PrivateInfoSection></PrivateInfoSection>
      <InfoSection
        order='img&text'
        info={INFO[0]}
      ></InfoSection>
      <GradientSection
        order='text$img'
        info={INFO[1]}
      ></GradientSection>
      <InfoSection
        order='img&text'
        info={INFO[2]}
        className={{ imgClassName: 'w-1/2', infoClassName: 'w-1/2' }}
      ></InfoSection>
      <InfoCardSection
        order='img&text'
        info={INFO[3]}
      ></InfoCardSection>
    </div>
  );
}

export default App;
