import clsx from 'clsx';
import { MainTitle } from '../../../ui/MainTitle';
import { Paragraph } from '../../../ui/Paragraph';
import { ListItem } from '../../../ui/ListItem';
import { Logo } from '../../../ui/Logo';

export function InfoColumn({
  className,
  title,
  info,
  parSize,
  infoType,
  subtitle,
  titleSize,
  signature,
  logo,
}) {
  return (
    <article
      className={clsx(
        'flex flex-col justify-center max-md:relative',
        className,
      )}
    >
      {logo && (
        <Logo
          variant={logo.variant}
          className={logo.styles}
        ></Logo>
      )}
      <MainTitle
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
              bold={el.bold}
            ></ListItem>
          ))}
          {signature && (
            <Paragraph
              text={signature}
              bold
              className='ml-6'
            ></Paragraph>
          )}
        </ul>
      ) : (
        <>
          {info.map((el, index) => (
            <Paragraph
              key={index}
              title={el?.title}
              text={el.text}
              bold={el.bold}
              className={parSize}
            ></Paragraph>
          ))}
        </>
      )}
    </article>
  );
}
