import Lenis from 'lenis';
import { useEffect } from 'react';
export function useLenis() {
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.02,
      duration: 2,
      smoothWheel: true,
      syncTouch: true,
    });
    function raf(time) {
      window.lenis = lenis;
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
    return () => lenis.destroy();
  }, []);
}
