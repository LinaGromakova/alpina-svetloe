import clsx from 'clsx';

export function ThreeColumns({
  srcOne,
  altOne,
  srcTwo,
  altTwo,
  srcThree,
  altThree,
  w1,
  w2,
}) {
  return (
    <article className='flex gap-4 max-md:gap-2'>
      <img
        className={clsx('object-cover object-center', w1)}
        loading='lazy'
        src={srcOne}
        alt={altOne}
      />
      <div className={clsx('flex flex-col gap-4 max-md:gap-2', w2)}>
        <img
          className={clsx('object-cover object-center w-full')}
          loading='lazy'
          src={srcTwo}
          alt={altTwo}
        />
        <img
          className='object-cover object-center w-full h-full'
          loading='lazy'
          src={srcThree}
          alt={altThree}
        />
      </div>
    </article>
  );
}
