interface ImagesProp {
  src: string;
  srcBlurData?: string;
  alt: string;
}

export interface SectionInfoProp {
  titleTop: string,
  titleMain: string,
  images: ImagesProp[],
  description: string,
}
