import { Header } from '../../components/Header';
import { Logo } from '../../ui/Logo';

export function PreviewSection() {
  return (
    <section className='h-dvh w-full flex items-center justify-center bg-light-beige '>
      <Header />
      <Logo variant='lg' />
    </section>
  );
}
