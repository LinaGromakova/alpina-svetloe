import { useEffect } from 'react';

export function useEmblaWheel(emblaApi) {
  useEffect(() => {
    if (!emblaApi) return;
    const emblaNode = emblaApi.rootNode();
    const onWheel = (e) => {
      if (Math.abs(e.deltaY) < Math.abs(e.deltaX)) return;
      e.stopImmediatePropagation();
      e.preventDefault();
      if (e.deltaY > 0) emblaApi.scrollNext();
      else emblaApi.scrollPrev();
    };
    emblaNode.addEventListener('wheel', onWheel, { passive: false });

    return () => {
      emblaNode.removeEventListener('wheel', onWheel);
    };
  }, [emblaApi]);
}
