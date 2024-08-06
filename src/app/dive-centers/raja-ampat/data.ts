import ImageOne from '@public/assets/images/gallery/raja-ampat-1.jpg';
import ImageTwo from '@public/assets/images/gallery/raja-ampat-dive-2.jpg';
import ImageThree from '@public/assets/images/gallery/raja-ampat-dive-3.jpg';
import ImageFour from '@public/assets/images/gallery/raja-ampat-dive-4.jpg';

export const EVENT_TITLE_FULL = 'Raja Ampat Dive Center: Your Gateway to Underwater Paradise';
export const EVENT_TITLE = 'Raja Ampat Dive Center';
export const EVENT_DATE = 'Available Upon Request';
export const PAGE_TYPE = 'Dive Centers';
export const EVENT_AVAILABILITY = true;

export const images = [
  {
    img: ImageOne.src,
    imgAlt: '',
    blurDataUrl: ImageOne.blurDataURL,
  },
  {
    img: ImageTwo.src,
    imgAlt: '',
    blurDataUrl: ImageTwo.blurDataURL,
  },
  {
    img: ImageThree.src,
    imgAlt: '',
    blurDataUrl: ImageThree.blurDataURL,
  },
  {
    img: ImageFour.src,
    imgAlt: '',
    blurDataUrl: ImageFour.blurDataURL,
  },
];

export const categoryListOption = [
  {
    value: '',
    label: 'Select Category'
  },
  {
    value: 'two_dives',
    label: 'Two Dives'
  },
  {
    value: 'three_dives',
    label: 'Three Dives'
  },
  {
    value: 'dive_course',
    label: 'Dive Course',
  },
]


export const diveCenterData = [
  {
    diveDestination: '1 pax / day',
    price: '2,600,000',
    currency: 'from IDR',
    type: 'two_dives',
    label: 'Two Dives',
  },
  {
    diveDestination: '2 - 4 pax / day',
    price: '1,900,000',
    currency: 'from IDR',
    type: 'two_dives',
    label: 'Two Dives',
  },
  {
    diveDestination: 'more than 5 pax / day',
    price: '1,700,000',
    currency: 'from IDR',
    type: 'two_dives',
    label: 'Two Dives',
  },
  {
    diveDestination: '1 pax / day',
    price: '3,100,000',
    currency: 'from IDR',
    type: 'three_dives',
    label: 'Three Dives',
  },
  {
    diveDestination: '2 - 4 pax / day',
    price: '2,300,000',
    currency: 'from IDR',
    type: 'three_dives',
    label: 'Three Dives',
  },
  {
    diveDestination: 'more than 5 pax / day',
    price: '1,900,000',
    currency: 'from IDR',
    type: 'three_dives',
    label: 'Three Dives',
  },
  {
    diveDestination: 'Discover Scuba Dive',
    price: '1,250,000',
    currency: 'IDR',
    type: 'dive_course',
    label: 'PADI Dive Course'
  },
  {
    diveDestination: 'Open Water Course (ADS Japan)',
    price: '6,000,000',
    currency: 'IDR',
    type: 'dive_course',
    label: 'PADI Dive Course'
  },
  {
    diveDestination: 'Open Water Course (PADI)',
    price: '8,000,000',
    currency: 'IDR',
    type: 'dive_course',
    label: 'PADI Dive Course'
  },
];

export const packagesInclude = [
  'Speedboat',
  'Dive Master',
  'Dive Equipments',
  'Snacks',
  'Location Fee',
];
