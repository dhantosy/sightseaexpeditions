import ImageBali from '@public/assets/images/dive-center/bali.jpg'
import ImageLombok from '@public/assets/images/dive-center/lombok.jpg'
import ImageGorontalo from '@public/assets/images/dive-center/gorontalo.jpg'
import ImageAlor from '@public/assets/images/dive-center/alor.jpeg'
import ImageRajaAmpat from '@public/assets/images/dive-center/raja-ampat.jpg'

export const diveCentersList = [
  {
    img: ImageBali.src,
    imgAlt: 'bali photo banner',
    blurDataUrl: ImageBali.blurDataURL,
    title: 'Bali',
    url: '/dive-centers/bali',
  },
  {
    img: ImageLombok.src,
    imgAlt: 'lombok photo banner',
    blurDataUrl: ImageLombok.blurDataURL,
    title: 'Lombok',
    url: '/',
  },
  {
    img: ImageGorontalo.src,
    imgAlt: 'gorontalo photo banner',
    blurDataUrl: ImageGorontalo.blurDataURL,
    title: 'Gorontalo',
    url: '/',
  },
  {
    img: ImageAlor.src,
    imgAlt: 'alor photo banner',
    blurDataUrl: ImageAlor.blurDataURL,
    title: 'Alor',
    url: '/dive-centers/alor',
  },
  {
    img: ImageRajaAmpat.src,
    imgAlt: 'raja ampat photo banner',
    blurDataUrl: ImageRajaAmpat.blurDataURL,
    title: 'Raja Ampat',
    url: '/',
  },
]
