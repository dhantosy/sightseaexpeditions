import ImageOne from '@public/assets/images/gallery/diving-1.jpg';
import ImageTwo from '@public/assets/images/gallery/raja-ampat-dive-2.jpg';
import ImageThree from '@public/assets/images/gallery/raja-ampat-dive-3.jpg';
import ImageFour from '@public/assets/images/gallery/raja-ampat-dive-4.jpg';

export const EVENT_TITLE_FULL = 'Gorontalo Dive Center: Your Next Dive Adventure';
export const EVENT_TITLE = 'Gorontalo Dive Center';
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
    value: 'dive_package',
    label: 'Dive Package'
  },
  {
    value: 'dive_course',
    label: 'Dive Course',
  },
]


export const diveCenterData = [
  {
    diveDestination: '5 days / 4 nights',
    totalDive: '9 Dives',
    minimumPerson: 'Minimum 4 Guests',
    price: '6,500,000',
    currency: 'IDR',
    type: 'dive_package',
    label: 'Dive Package',
  },
  {
    diveDestination: 'Discover Scuba Dive',
    price: '1,250,000',
    currency: 'IDR',
    type: 'dive_course',
    label: 'PADI Dive Course'
  },
  {
    diveDestination: 'PADI Open Water Dive',
    price: '6,000,000',
    currency: 'IDR',
    type: 'dive_course',
    label: 'PADI Dive Course'
  },
  {
    diveDestination: 'PADI Advance Open Water Dive',
    price: '5,500,000',
    currency: 'IDR',
    type: 'dive_course',
    label: 'PADI Dive Course'
  },
  {
    diveDestination: 'PADI Rescue + EFR',
    price: '7,500,000',
    currency: 'IDR',
    type: 'dive_course',
    label: 'PADI Dive Course'
  },
  {
    diveDestination: 'PADI Dive Master',
    price: '16,000,000',
    currency: 'IDR',
    type: 'dive_course',
    label: 'PADI Dive Course'
  },
  {
    diveDestination: 'PADI Specialty Dive',
    price: '3,500,000',
    currency: 'IDR',
    type: 'dive_course',
    label: 'PADI Dive Course'
  },
  {
    diveDestination: 'ADS Open Water Dive',
    price: '3,500,000',
    currency: 'IDR',
    type: 'dive_course',
    label: 'PADI Dive Course'
  },
  {
    diveDestination: 'ADS Advance Open Water Dive',
    price: '2,500,000',
    currency: 'IDR',
    type: 'dive_course',
    label: 'PADI Dive Course'
  },
  {
    diveDestination: 'SSI Open Water Dive',
    price: '4,000,000',
    currency: 'IDR',
    type: 'dive_course',
    label: 'PADI Dive Course'
  },
  {
    diveDestination: 'SSI Advance Open Water Dive',
    price: '3,000,000',
    currency: 'IDR',
    type: 'dive_course',
    label: 'PADI Dive Course'
  },
];

export const packagesInclude = [
  'Resort Sharing Room',
  'Boat',
  'Tanks, Belt, Weight',
  'DM guide ratio 4:1',
  'National Park Fee',
  'Underwater Photo',
  'Airport Transfer',
  'Breakfast, lunch, & snacks',
  'Group Leader',
];
