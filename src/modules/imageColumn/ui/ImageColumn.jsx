import clsx from 'clsx';

export function ImageColumn({ imageSrc, className, fit }) {
  return (
    <div className={clsx('self-stretch', className)}>
      <img
        src={imageSrc}
        loading='lazy'
        alt='imageColumn'
        className={clsx('h-full w-full', fit ? fit : 'object-cover')}
      />
    </div>
  );
}
