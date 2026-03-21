export function Fullscreen({ src, altImage }) {
  return (
    <article className='w-full'>
      <img
        className='w-full '
        src={src}
        alt={altImage}
      />
    </article>
  );
}
