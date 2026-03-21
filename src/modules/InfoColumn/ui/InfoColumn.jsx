import clsx from 'clsx';
import { MainTitle } from '../../../ui/MainTitle';
import { Paragraph } from '../../../ui/Paragraph';
import { CaptionTitle } from '../../../ui/CaptionTitle';
import { ListItem } from '../../../ui/ListItem';

export function InfoColumn({
  className,
  title,
  info,
  parSize,
  infoType,
  subtitle,
  titleSize,
}) {
  return (
    <article className={clsx('flex flex-col justify-center', className)}>
      <MainTitle
        variant='dark-blue'
        text={title}
        titleSize={titleSize}
      ></MainTitle>
      {subtitle && (
        <h4 className='text-2xl font-bold text-dark-blue mb-6'>{subtitle}</h4>
      )}
      {infoType === 'list' ? (
        <ul className='list-disc'>
          {info.map((el, index) => (
            <ListItem
              key={index}
              text={el.text}
              className={parSize}
            ></ListItem>
          ))}
        </ul>
      ) : (
        <>
          {info.map((el, index) => (
            <>
              {el.title && <CaptionTitle text={el.title}></CaptionTitle>}
              <Paragraph
                key={index}
                text={el.text}
                bold={el.bold}
                className={parSize}
              ></Paragraph>
            </>
          ))}
        </>
      )}
    </article>
  );
}
