import { clsx } from 'clsx';

export function MainTitle({ text, titleSize }) {
  return (
    <h2
      className={clsx(
        'font-bold mb-6 text-dark-blue',
        titleSize === 'base'
          ? 'lg:text-5xl text-4xl max-sm:text-3xl'
          : 'lg:text-4xl text-3xl',
      )}
    >
      {text}
    </h2>
  );
}
