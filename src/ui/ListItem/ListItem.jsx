import clsx from 'clsx';

export function ListItem({ text, className }) {
  return (
    <li
      className={clsx(
        'text-xl lg:text-2xl pb-4 text-foreground ml-6 leading-6 ',
        className,
      )}
    >
      {text}
    </li>
  );
}
