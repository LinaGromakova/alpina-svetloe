import { ListItem } from '../../../ui/ListItem/ListItem';
import { Paragraph } from '../../../ui/Paragraph/Paragraph';

export function ContentLayout({ content, parSize }) {
  const { data, type, signature } = content || {};
  return (
    <>
      {type === 'list' ? (
        <ul className='list-disc'>
          {data?.map((el, index) => (
            <ListItem
              key={index}
              text={el.text}
              className={parSize}
              bold={el.bold}
            />
          ))}
          {signature && (
            <Paragraph
              text={signature}
              bold
              className='ml-6'
            />
          )}
        </ul>
      ) : (
        <>
          {data?.map((el, index) => (
            <Paragraph
              key={index}
              title={el?.title}
              text={el.text}
              bold={el.bold}
              className={parSize}
            />
          ))}
        </>
      )}
    </>
  );
}
