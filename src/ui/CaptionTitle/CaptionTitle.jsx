import clsx from 'clsx';

export function CaptionTitle({ text, className }) {
  return (
    <span
      className={clsx(
        'lg:text-2xl text-xl font-bold text-dark-blue',
        className,
      )}
    >
      {text + ' '}
    </span>
  );
}
