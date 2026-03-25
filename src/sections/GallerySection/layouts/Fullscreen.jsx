export function Fullscreen({ src, altImage }) {
  return (
    <article className='w-full'>
      <img
        className='w-full'
        loading='lazy'
        src={src}
        alt={altImage}
      />
    </article>
  );
}
