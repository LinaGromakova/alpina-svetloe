import { Link } from '../../ui/Link';
import { Logo } from '../../ui/Logo';

export function Header() {
  return (
    <header
      className='w-full flex md:px-10 px-5 py-4 bg-[#f8f9fa] absolute top-0 left-0 
    justify-between items-center md:text-base text-sm'
    >
      <div className='flex items-center'>
        <Logo variant='xs'></Logo>
        <h3 className='text-gray sm:ml-15 ml-2.5'>Альпина Светлое</h3>
      </div>
      <div className='max-sm:flex max-sm:flex-col'>
        <Link
          href='mailto:info@alpina-svetloe.ru'
          text='info@alpina-svetloe.ru'
        ></Link>
        <Link
          href='tel:+78129007267'
          className='sm:ml-7.5 max-sm:mt-2'
          filled={true}
          text=' + 7 (812) 900-72-67'
        ></Link>
      </div>
    </header>
  );
}
