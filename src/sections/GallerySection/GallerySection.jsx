import { Fullscreen } from './layouts/Fullscreen';
import { ThreeColumns } from './layouts/ThreeColumns';
import { TwoColumns } from './layouts/TwoColumns';
import * as images from './assets';

export function GallerySection() {
  return (
    <section className='max-w-full h-auto overflow-x-hidden'>
      <TwoColumns
        srcOne={images.src1}
        srcTwo={images.src2}
        w1='w-3/5'
        w2='w-2/5'
      ></TwoColumns>
      <TwoColumns
        srcOne={images.src3}
        srcTwo={images.src4}
        w1='w-4/5'
        w2='w-2/5'
      ></TwoColumns>
      <TwoColumns
        srcOne={images.src5}
        srcTwo={images.src6}
        w1='w-1/2'
        w2='w-1/2'
      ></TwoColumns>
      <Fullscreen src={images.src7}></Fullscreen>
      <TwoColumns
        srcOne={images.src8}
        srcTwo={images.src9}
        w1='w-7/12'
        w2='w-5/12'
      ></TwoColumns>
      <TwoColumns
        srcOne={images.src10}
        srcTwo={images.src11}
        w1='w-3/5'
        w2='w-2/5'
      ></TwoColumns>
      <ThreeColumns
        srcOne={images.src12}
        srcTwo={images.src13}
        srcThree={images.src14}
        w1='w-[62%]'
        w2='w-2/5'
      ></ThreeColumns>
      <Fullscreen src={images.src15}></Fullscreen>
    </section>
  );
}
