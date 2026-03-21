import clsx from 'clsx';

export function ListItem({ text, className }) {
  return (
    <li
      className={clsx(
        'text-xl pb-4.5 text-foreground ml-6 leading-6',
        className,
      )}
    >
      {text}
    </li>
  );
}
