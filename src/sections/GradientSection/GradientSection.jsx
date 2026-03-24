import clsx from 'clsx';
import { ImageColumn } from '../../modules/imageColumn/ui';
import { InfoColumn } from '../../modules/InfoColumn/ui';

export function GradientSection({ order, className = {}, info }) {
  const { imgClassName, infoClassName, parSize } = className;
  return (
    <section
      className={clsx(
        `w-full min-h-dvh h-auto flex relative max-md:justify-center
        lg:whitespace-pre-line whitespace-normal
         bg-linear-to-l from-white via-white/70 md:to-white/15 to-white/40`,
        order !== 'img&text' && 'bg-linear-to-r',
      )}
    >
      <InfoColumn
        title={info.title}
        parSize={parSize}
        logo={info.logo}
        info={info.data}
        infoType={info.type}
        titleSize='base'
        className={clsx(
          'z-20 lg:px-25 px-10 max-md:w-auto my-[5%]',
          order === 'img&text' && 'ml-auto',
          infoClassName,
        )}
      ></InfoColumn>
      <ImageColumn
        imageSrc={info.backSrc}
        className={clsx('absolute w-full -z-10 h-full', imgClassName)}
      ></ImageColumn>
    </section>
  );
}
