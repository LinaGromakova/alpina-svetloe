import clsx from 'clsx';

export function Link({ href, text, filled, className }) {
  return (
    <a
      href={href}
      className={clsx(
        'text-gray hover:text-dark-blue transition-colors',
        filled &&
          'bg-light-blue md:p-3 p-2 rounded-xl whitespace-nowrap hover:opacity-80 transition-opacity',
        className,
      )}
    >
      {text}
    </a>
  );
}
