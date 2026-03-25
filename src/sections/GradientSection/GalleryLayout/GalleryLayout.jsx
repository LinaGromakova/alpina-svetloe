export function GalleryLayout({ images }) {
  return (
    <div className='grid grid-cols-2 grid-rows-2 gap-0.5 mx-auto h-auto'>
      {images.map((image, idx) => (
        <img
          key={idx}
          src={image.srcCircle}
          loading='lazy'
          className='max-w-70 max-h-70 w-70 h-70 object-cover
           rounded-full odd:self-end odd:justify-self-end odd:max-w-60 odd:max-h-60 odd:w-60 odd:h-60'
        />
      ))}
    </div>
  );
}
