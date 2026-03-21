import clsx from 'clsx';

export function ImageColumn({ imageSrc, className }) {
  return (
    <div className={clsx('h-full', className)}>
      <img
        src={imageSrc}
        alt='imageColumn'
        className='h-full w-full object-cover'
      />
    </div>
  );
}
