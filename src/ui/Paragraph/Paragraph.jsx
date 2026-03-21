import clsx from 'clsx';

export function Paragraph({ text, bold, className }) {
  return (
    <p
      className={clsx(
        'text-2xl pb-8',
        bold ? 'text-dark-blue font-bold' : 'text-foreground',
        className,
      )}
    >
      {text}
    </p>
  );
}
