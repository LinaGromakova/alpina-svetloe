import clsx from 'clsx';

export function TwoColumns({ srcOne, altOne, srcTwo, altTwo, w1, w2 }) {
  return (
    <article className='flex gap-x-4 max-w-full '>
      <img
        className={clsx('object-cover object-center', w1)}
        src={srcOne}
        alt={altOne}
      />
      <img
        className={clsx('object-cover object-center', w2)}
        src={srcTwo}
        alt={altTwo}
      />
    </article>
  );
}
