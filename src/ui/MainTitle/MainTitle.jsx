import { clsx } from 'clsx';
import { styles } from './styles/styles';

export function MainTitle({ text, variant, titleSize }) {
  const style = styles[variant];
  return (
    <h2
      className={clsx(
        style,
        'font-bold mb-10',
        titleSize === 'base' ? 'text-2xl' : 'text-[36px]',
      )}
    >
      {text}
    </h2>
  );
}
