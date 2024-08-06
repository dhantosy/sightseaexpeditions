import ImageGalleryOne from '@public/assets/images/gallery/palawan-1.jpg';
import ImageGalleryTwo from '@public/assets/images/diving/bima-2.jpg';
import ImageGalleryThree from '@public/assets/images/diving/bima-3.jpg';
import ImageGalleryFour from '@public/assets/images/diving/bima-4.jpg';

import ImageSuiteOne from '@public/assets/images/cabin/majestic-voyager-suite-1.jpg';
import ImageSuiteTwo from '@public/assets/images/cabin/majestic-voyager-suite-2.jpg';
import ImageSuiteThree from '@public/assets/images/cabin/majestic-voyager-suite-3.jpg';
import ImageSuiteFour from '@public/assets/images/cabin/majestic-voyager-suite-4.jpg';
import ImageSuiteFive from '@public/assets/images/cabin/majestic-voyager-suite-5.jpg';
import ImageExecutiveOne from '@public/assets/images/cabin/majestic-voyager-executive-1.jpg';
import ImageExecutiveTwo from '@public/assets/images/cabin/majestic-voyager-executive-2.jpg';
import ImageExecutiveThree from '@public/assets/images/cabin/majestic-voyager-executive-3.jpg';
import ImageExecutiveFour from '@public/assets/images/cabin/majestic-voyager-executive-4.jpg';
import ImageExecutiveFive from '@public/assets/images/cabin/majestic-voyager-executive-5.jpg';
import ImageExecutiveSix from '@public/assets/images/cabin/majestic-voyager-executive-6.jpg';
import ImageExecutiveSeven from '@public/assets/images/cabin/majestic-voyager-executive-7.jpg';
import ImageDeluxeOne from '@public/assets/images/cabin/majestic-voyager-deluxe-1.jpg';
import ImageDeluxeTwo from '@public/assets/images/cabin/majestic-voyager-deluxe-2.jpg';
import ImageDeluxeThree from '@public/assets/images/cabin/majestic-voyager-deluxe-3.jpg';
import ImageDeluxeFour from '@public/assets/images/cabin/majestic-voyager-deluxe-4.jpg';
import ImageDeluxeFive from '@public/assets/images/cabin/majestic-voyager-deluxe-5.jpg';
import ImageDeluxeSix from '@public/assets/images/cabin/majestic-voyager-deluxe-6.jpg';
import ImageDeluxeSeven from '@public/assets/images/cabin/majestic-voyager-deluxe-7.jpg';
import ImageDeluxeEight from '@public/assets/images/cabin/majestic-voyager-deluxe-8.jpg';
import ImageDeluxeNine from '@public/assets/images/cabin/majestic-voyager-deluxe-9.jpg';
import { upcomingDivingTrips } from '@/data/upcomingEvents';

export const EVENT_TITLE_FULL = 'Lebaran Escape Tubbataha Reef Dive Trip with MY Resolute';

const findEventData = upcomingDivingTrips.find((item) => {
  return item.title === EVENT_TITLE_FULL;
});

export const PRICE_PER_PERSON = findEventData?.priceNum;
export const EVENT_TITLE = 'Lebaran Escape Tubbatha Reef' || '';
export const EVENT_DATE = findEventData?.date;
export const EVENT_TYPE = 'LOB';
export const PAGE_TYPE = 'Diving Trips';
export const EVENT_AVAILABILITY = findEventData?.available;
export const EVENT_OVERVIEW = 'Embark on an unforgettable voyage to Tubbataha Reefs Natural Park, a UNESCO World Heritage Site and global crown jewel of marine biodiversity. Accessible only by liveaboard, a Tubbataha diving trip promises an unparalleled exploration of vibrant coral reefs, encounters with majestic marine life, and a retreat into a protected paradise.';

export const categoryListOption = [
  {
    value: '',
    label: 'Select Category'
  },
  {
    value: 'Domestic / KITAS',
    label: 'Domestic / KITAS Holder'
  },
  {
    value: 'foreigner',
    label: 'Foreigner'
  },
];

export const roomTypeListOption = [
  {
    value: '',
    label: 'Select Cabin Type'
  },
  {
    value: 'Superior Cabin',
    label: 'Superior Cabin'
  },
  {
    value: 'Deluxe Cabin',
    label: 'Deluxe Cabin'
  },
];

export const roomGallery = [
  {
    roomType: 'Suite - Main Deck',
    include: [
      'Private Jacuzzi',
      'Sea View Balcony',
      'Twin Bed',
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
      {
        img: ImageSuiteTwo.src,
        imgAlt: '',
        blurDataUrl: ImageSuiteTwo.blurDataURL,
      },
      {
        img: ImageSuiteThree.src,
        imgAlt: '',
        blurDataUrl: ImageSuiteThree.blurDataURL,
      },
      {
        img: ImageSuiteFour.src,
        imgAlt: '',
        blurDataUrl: ImageSuiteFour.blurDataURL,
      },
      {
        img: ImageSuiteFive.src,
        imgAlt: '',
        blurDataUrl: ImageSuiteFive.blurDataURL,
      },
    ],
  },
  {
    roomType: 'Executive - Upper Deck',
    include: [
      'Sea View Balcony',
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
      {
        img: ImageExecutiveTwo.src,
        imgAlt: '',
        blurDataUrl: ImageExecutiveTwo.blurDataURL,
      },
      {
        img: ImageExecutiveThree.src,
        imgAlt: '',
        blurDataUrl: ImageExecutiveThree.blurDataURL,
      },
      {
        img: ImageExecutiveFour.src,
        imgAlt: '',
        blurDataUrl: ImageExecutiveFour.blurDataURL,
      },
      {
        img: ImageExecutiveFive.src,
        imgAlt: '',
        blurDataUrl: ImageExecutiveFive.blurDataURL,
      },
      {
        img: ImageExecutiveSix.src,
        imgAlt: '',
        blurDataUrl: ImageExecutiveSix.blurDataURL,
      },
      {
        img: ImageExecutiveSeven.src,
        imgAlt: '',
        blurDataUrl: ImageExecutiveSeven.blurDataURL,
      },
    ],
  },
  {
    roomType: 'Deluxe - Lower Deck',
    include: [
      'Twin Bed',
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
      {
        img: ImageDeluxeTwo.src,
        imgAlt: '',
        blurDataUrl: ImageDeluxeTwo.blurDataURL,
      },
      {
        img: ImageDeluxeThree.src,
        imgAlt: '',
        blurDataUrl: ImageDeluxeThree.blurDataURL,
      },
      {
        img: ImageDeluxeFour.src,
        imgAlt: '',
        blurDataUrl: ImageDeluxeFour.blurDataURL,
      },
      {
        img: ImageDeluxeFive.src,
        imgAlt: '',
        blurDataUrl: ImageDeluxeFive.blurDataURL,
      },
      {
        img: ImageDeluxeSix.src,
        imgAlt: '',
        blurDataUrl: ImageDeluxeSix.blurDataURL,
      },
      {
        img: ImageDeluxeSeven.src,
        imgAlt: '',
        blurDataUrl: ImageDeluxeSeven.blurDataURL,
      },
      {
        img: ImageDeluxeEight.src,
        imgAlt: '',
        blurDataUrl: ImageDeluxeEight.blurDataURL,
      },
      {
        img: ImageDeluxeNine.src,
        imgAlt: '',
        blurDataUrl: ImageDeluxeNine.blurDataURL,
      },
    ],
  },
]

export const dataMain = [
  {
    price: '2,590',
    currency: 'USD',
    roomType: 'Superior Cabin',
    category: 'Domestic / KITAS',
  },
  {
    price: '2,790',
    currency: 'USD',
    roomType: 'Deluxe Cabin',
    category: 'Domestic / KITAS',
  },
  {
    price: '2,590',
    currency: 'USD',
    roomType: 'Superior Cabin',
    category: 'foreigner',
  },
  {
    price: '2,790',
    currency: 'USD',
    roomType: 'Deluxe Cabin',
    category: 'foreigner',
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

export const schedule = [
  {
    time: '',
    descList: []
  },
];

export const notes = [
  'Exclude International or domestic air transportation, hotels and meals before and after the cruise.',
  'Exclude Dive, travel and medical insurances.',
  'Exclude Soft drinks, beer, wine or spirits.',
  'Exclude Diving equipment rental.',
  'Exclude Nitrox fills.',
  'Exclude Park entrance fee.',
  'Exclude Dive Permit USD.100,-/person.',
  'Exclude Fuel surcharge – USD 100,-/person.',
  'Exclude Tips, laundry.',
];

export const include = [
  'Full board accommodation in a twin sharing cabin.',
  'Meals, snacks, tea, coffee, juice and drinking water.',
  'Diving (4 non deco dives a day), service of a dive master, full dive tanks and weights belts.',
  'Land transfer to/from the ship.',
];
