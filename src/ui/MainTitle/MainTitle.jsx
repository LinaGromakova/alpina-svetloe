import { clsx } from 'clsx';
import { styles } from './styles/styles';

export function MainTitle({ text, variant }) {
  const style = styles[variant];
  return <h3 className={clsx(style, 'text-3xl')}>{text}</h3>;
}
