import { clsx } from 'clsx';

export function MainTitle({ text, titleSize }) {
  return (
    <h2
      className={clsx(
        'font-bold mb-6 text-dark-blue text-5xl',
        titleSize === 'base' ? 'text-2xl' : 'text-[36px]',
      )}
    >
      {text}
    </h2>
  );
}
