import ImageGalleryOne from '@public/assets/images/liveaboard/salacia/logo-salacia.jpg'
import ImageGalleryTwo from '@public/assets/images/gallery/lombok-dive-2.jpg';
import ImageGalleryThree from '@public/assets/images/liveaboard/salacia/salacia-image-1.jpg'
import ImageGalleryFour from '@public/assets/images/liveaboard/salacia/salacia-image-2.jpg'

import ImageSuiteOne from '@public/assets/images/liveaboard/velocean/suite-1.jpg';
import ImageExecutiveOne from '@public/assets/images/liveaboard/velocean/suite-2.jpg';
import ImageDeluxeOne from '@public/assets/images/liveaboard/velocean/suite-3.jpg';

export const EVENT_TITLE_FULL = 'Salacia Cruises';

export const PRICE_PER_PERSON = '';
export const EVENT_TITLE = 'Salacia Cruises' || '';
export const PAGE_TYPE = 'Liveaboard';
export const EVENT_AVAILABILITY = false;

export const roomTypeListOption = [
  {
    value: '',
    label: 'Select Cabin Type'
  },
  {
    value: 'Platinum Oceanfront Suites',
    label: 'Platinum Oceanfront Suites'
  },
  {
    value: 'Elite Ocean Suites',
    label: 'Elite Ocean Suites'
  },
  {
    value: 'Signature Single Suites',
    label: 'Signature Single Suites'
  },
];

export const roomGallery = [
  {
    roomType: 'Platinum Oceanfront Suites',
    include: [
      'Spacious Cabin Area',
      'Sea View',
      'Double Bed',
      'Sofas',
      'Air Conditioner',
      'Water Heater',
      'Private Bathroom',
    ],
    gallery: [
      {
        img: ImageSuiteOne.src,
        imgAlt: '',
        blurDataUrl: ImageSuiteOne.blurDataURL,
      },
    ],
  },
  {
    roomType: 'Elite Ocean Suites',
    include: [
      'Twin Bed',
      'Air Conditioner',
      'Water Heater',
      'Private Bathroom',
    ],
    gallery: [
      {
        img: ImageExecutiveOne.src,
        imgAlt: '',
        blurDataUrl: ImageExecutiveOne.blurDataURL,
      },
    ],
  },
  {
    roomType: 'Signature Single Suites',
    include: [
      'Single Bed',
      'Private Working Space',
      'Air Conditioner',
      'Water Heater',
      'Private Bathroom',
    ],
    gallery: [
      {
        img: ImageDeluxeOne.src,
        imgAlt: '',
        blurDataUrl: ImageDeluxeOne.blurDataURL,
      },
    ],
  },
]

export const dataMain = [
  {
    price: '5,900',
    currency: 'USD',
    roomType: 'Platinum Oceanfront Suites',
  },
  {
    price: '5,190',
    currency: 'USD',
    roomType: 'Elite Ocean Suites',
  },
  {
    price: '4,068',
    currency: 'USD',
    roomType: 'Signature Single Suites',
  },
];

export const images = [
  {
    img: ImageGalleryOne.src,
    imgAlt: '',
    blurDataUrl: ImageGalleryOne.blurDataURL,
  },
  {
    img: ImageGalleryTwo.src,
    imgAlt: '',
    blurDataUrl: ImageGalleryTwo.blurDataURL,
  },
  {
    img: ImageGalleryThree.src,
    imgAlt: '',
    blurDataUrl: ImageGalleryThree.blurDataURL,
  },
  {
    img: ImageGalleryFour.src,
    imgAlt: '',
    blurDataUrl: ImageGalleryFour.blurDataURL,
  },
];

export const notes = [
  'The price displayed may be subjected to change based on the specific operator`s rates and availability.',
  'The availability of the cabin at the selected date may be subjected to change based on the liveaboard operator availability.',
  'Once you made your booking, we will get back to you as soon as possible to provide updates of your booking.',
];

export const include = [
  'All meals (5x daily), & beverages onboard, except alcohol.',
  'Coffee, tea, juices, snacks available for 24hrs',
  '24hrs simple food service (eg. indomie, fried rice, fried noodle, etc).',
  'Nitrox for whom certified.',
  'Inhouse satellite wifi',
  'Transport from and to the Velocean',
  'Hygiene and sanitary kits.',
  'Limited laundry service.',
  'All taxes and Marine Park Fee.'
];
