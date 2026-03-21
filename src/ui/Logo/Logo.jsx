import LogoImage from './assets/logo.png';
import { styles } from './styles/styles';

export function Logo({ variant }) {
  const style = styles[variant];
  return (
    <img
      alt='Альпина-Светлое'
      src={LogoImage}
      className={style}
    />
  );
}
