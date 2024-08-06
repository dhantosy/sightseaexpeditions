import ImageOne from '@public/assets/images/gallery/lombok-dive-1.jpg';
import ImageTwo from '@public/assets/images/gallery/lombok-dive-2.jpg';
import ImageThree from '@public/assets/images/gallery/lombok-dive-3.jpg';
import ImageFour from '@public/assets/images/gallery/lombok-dive-4.jpg';

export const EVENT_TITLE_FULL = 'Dive Lombok: Your Underwater Oasis';
export const EVENT_TITLE = 'Lombok Dive Center';
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
    value: 'fun_dives',
    label: 'Fun Dives'
  },
  {
    value: 'padi_dive_course',
    label: 'PADI Dive Course',
  },
]


export const diveCenterLombokData = [
  {
    diveDestination: 'Belongas Bay 3 Dives',
    price: '2,400,000',
    currency: 'IDR',
    type: 'fun_dives',
    label: 'Fun Dives',
  },
  {
    diveDestination: 'Belongas Bay 2 Dives',
    price: '1,750,000',
    currency: 'IDR',
    type: 'fun_dives',
    label: 'Fun Dives',
  },
  {
    diveDestination: 'South `Secret` Gilis 1 Dive',
    price: '750,000',
    currency: 'IDR',
    type: 'fun_dives',
    label: 'Fun Dives',
  },
  {
    diveDestination: 'South `Secret` Gilis 2 Dives',
    price: '1,300,000',
    currency: 'IDR',
    type: 'fun_dives',
    label: 'Fun Dives',
  },
  {
    diveDestination: 'South `Secret` Gilis 3 Dives',
    price: '1,850,000',
    currency: 'IDR',
    type: 'fun_dives',
    label: 'Fun Dives',
  },
  {
    diveDestination: 'South `Secret` Gilis - Night Dive',
    price: '850,000',
    currency: 'IDR',
    type: 'fun_dives',
    label: 'Fun Dives',
  },
  {
    diveDestination: 'Discover Scuba Dive 1 Dive',
    price: '950,000',
    currency: 'IDR',
    type: 'padi_dive_course',
    label: 'PADI Dive Course'
  },
  {
    diveDestination: 'Discover Scuba Dive 2 Dives',
    price: '1,750,000',
    currency: 'IDR',
    type: 'padi_dive_course',
    label: 'PADI Dive Course'
  },
  {
    diveDestination: 'Open Water Course',
    price: '6,000,000',
    currency: 'IDR',
    type: 'padi_dive_course',
    label: 'PADI Dive Course'
  },
  {
    diveDestination: 'Advance Open Water Course',
    price: '5,000,000',
    currency: 'IDR',
    type: 'padi_dive_course',
    label: 'PADI Dive Course'
  },
  {
    diveDestination: 'Adventure Dive',
    price: '950,000',
    currency: 'IDR',
    type: 'padi_dive_course',
    label: 'PADI Dive Course'
  },
  {
    diveDestination: 'Refresher / Scuba Review 1 Dive',
    price: '950,000',
    currency: 'IDR',
    type: 'padi_dive_course',
    label: 'PADI Dive Course'
  },
  {
    diveDestination: 'Refresher / Scuba Review 2 Dives',
    price: '1,600,000',
    currency: 'IDR',
    type: 'padi_dive_course',
    label: 'PADI Dive Course'
  },
];

export const packagesInclude = [
  'All divers are required to have a dive computer & SMB for diving Belongas.',
  'Dive computers can be rented in advance at a cost of IDR 100,000 per day',
];
