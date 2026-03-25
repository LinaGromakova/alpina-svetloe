import clsx from 'clsx';
import { ImageColumn } from '../../modules/imageColumn/ui';
import { InfoColumn } from '../../modules/InfoColumn/ui';
import { styleForAdaptive } from './styleForAdaptive/styleForAdaptive';

export function InfoSection({ order, className = {}, info }) {
  const { imgClassName, infoClassName, containerStyles, parSize, imgFit } =
    className;
  const { sectionStyles, imgStyles, infoStyles } =
    styleForAdaptive[info.typeAdaptive];
  return (
    <section
      className={clsx(
        `flex bg-white h-auto relative lg:whitespace-pre-line mt-[2.5%]
        whitespace-normal justify-between max-md:justify-center items-center min-h-dvh`,
        order === 'img&text' ? 'flex-row' : 'flex-row-reverse',
        containerStyles,
        sectionStyles,
      )}
    >
      <ImageColumn
        imageSrc={info.imgSrc}
        fit={imgFit}
        className={clsx(imgStyles, imgClassName)}
      ></ImageColumn>
      <InfoColumn
        className={clsx('bg-white py-[2%]', infoStyles, infoClassName)}
        logo={info.logo}
        title={info.title}
        parSize={parSize}
        info={info.data}
        titleSize='base'
        signature={info.signature}
        infoType={info.type}
      ></InfoColumn>
    </section>
  );
}
