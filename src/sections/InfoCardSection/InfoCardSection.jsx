import clsx from 'clsx';
import { ImageColumn } from '../../modules/imageColumn/ui';
import { InfoColumn } from '../../modules/InfoColumn/ui';

export function InfoCardSection({ order, className = {}, info }) {
  const { imgClassName, infoClassName, parSize, containerStyles } = className;
  return (
    <section
      className={clsx(
        `w-full min-h-dvh h-auto flex relative  md:mt-[2.5%] mt-[10%]
        max-md:items-center lg:whitespace-pre-line whitespace-normal max-md:justify-center`,
        containerStyles || 'items-center',
      )}
    >
      <ImageColumn
        imageSrc={info.backSrc}
        className={clsx('absolute w-full top-0 left-0 h-full', imgClassName)}
      ></ImageColumn>
      <InfoColumn
        title={info.title}
        titleType={info.titleType}
        subtitle={info.subtitle}
        info={info.data}
        infoType={info.type}
        parSize={parSize}
        titleSize='sm'
        className={clsx(
          `relative
         bg-linear-to-t 
         h-max px-7 max-md:px-5 py-[2%] my-[5%] max-md:w-auto max-md:max-w-11/12 max-md:py-[5%]
         max-md:via-white/90
         `,
          order === 'img&text'
            ? 'ml-auto max-md:ml-0 md:right-[4%]'
            : 'mr-auto max-md:mr-0 md:left-[4%]',
          infoClassName
            ? infoClassName
            : 'from-white from-40% via-90% via-white/60  to-white/60',
        )}
      ></InfoColumn>
    </section>
  );
}
