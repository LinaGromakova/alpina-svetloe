import clsx from 'clsx';
import { CaptionTitle } from '../CaptionTitle';
export function Paragraph({ text, bold, className, title }) {
  return (
    <p
      className={clsx(
        'text-2xl pb-4',
        bold ? 'text-dark-blue font-bold' : 'text-foreground',
        className,
      )}
    >
      {title && <CaptionTitle text={title}> </CaptionTitle>}
      {text}
    </p>
  );
}
