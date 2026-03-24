export const styleForAdaptive = {
  fullscreen: {
    sectionStyles: 'max-md:relative',
    imgStyles: `max-md:absolute max-md:w-full max-md:h-full
    max-md:justify-center max-md:bg-transparent`,
    infoStyles:
      'max-md:z-10 max-md:bg-white/75 max-md:rounded-xl max-md:max-w-11/12 max-md:w-auto max-md:min-w-9/12 max-md:my-[5%]',
  },
  cards: {
    sectionStyles: 'max-md:flex-col',
    imgStyles: `max-md:w-full max-md:h-full`,
    infoStyles:
      'max-md:max-w-11/12 max-md:w-auto max-md:min-w-9/12 max-md:my-[5%] max-md:px-5',
  },
};
