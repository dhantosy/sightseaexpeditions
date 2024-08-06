import ImageGalleryOne from '@public/assets/images/gallery/maldives-1.jpg';
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

export const EVENT_TITLE_FULL = 'Best of Maldives Dive Trip with Maldives Mosaique';

const findEventData = upcomingDivingTrips.find((item) => {
  return item.title === EVENT_TITLE_FULL;
});

export const PRICE_PER_PERSON = findEventData?.priceNum;
export const EVENT_TITLE = 'Best of Maldives Dive Trip' || '';
export const EVENT_DATE = findEventData?.date;
export const EVENT_TYPE = 'LOB';
export const PAGE_TYPE = 'Diving Trips';
export const EVENT_AVAILABILITY = findEventData?.available;
export const EVENT_OVERVIEW = 'Embark on a voyage of discovery unlike any other on a liveaboard diving trip to the Maldives.  This island paradise, famed for its turquoise waters and pristine coral reefs, offers an unparalleled underwater experience from the comfort and luxury of a liveaboard vessel.';

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
    value: 'R6 (Triple Bed) - Lower Deck',
    label: 'R6 (Triple Bed) - Lower Deck'
  },
  {
    value: 'R5 (Triple Bed) - Lower Deck',
    label: 'R5 (Triple Bed) - Lower Deck'
  },
  {
    value: 'R4 (Double Bed) - Lower Deck',
    label: 'R4 (Double Bed) - Lower Deck'
  },
  {
    value: 'R3 (Bunk Bed) - Lower Deck',
    label: 'R3 (Bunk Bed) - Lower Deck'
  },
  {
    value: 'R2 (Bunk Bed) - Lower Deck',
    label: 'R2 (Bunk Bed) - Lower Deck'
  },
  {
    value: 'R1 (Double Bed) - Lower Deck',
    label: 'R1 (Double Bed) - Lower Deck'
  },
  {
    value: 'R7 (Double Bed) - Upper Deck with Balcony',
    label: 'R7 (Double Bed) - Upper Deck with Balcony'
  },
  {
    value: 'R8 (Double Bed) - Upper Deck with Balcony',
    label: 'R8 (Double Bed) - Upper Deck with Balcony'
  },
  {
    value: 'R9 (Twin Bed) - Upper Deck with Balcony',
    label: 'R9 (Twin Bed) - Upper Deck with Balcony'
  },
  {
    value: 'R10 (Twin Bed) - Upper Deck with Balcony',
    label: 'R10 (Twin Bed) - Upper Deck with Balcony'
  },
  {
    value: 'R11 (Sky Light Suite) - Upper Deck with Balcony',
    label: 'R11 (Sky Light Suite) - Upper Deck with Balcony'
  },
  {
    value: 'R12 - Upper Deck without Balcony',
    label: 'R12 - Upper Deck without Balcony'
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
    price: '1,450',
    currency: 'USD',
    roomType: 'R6 (Triple Bed) - Lower Deck',
    category: 'Domestic / KITAS',
  },
  {
    price: '1,450',
    currency: 'USD',
    roomType: 'R5 (Triple Bed) - Lower Deck',
    category: 'Domestic / KITAS',
  },
  {
    price: '1,650',
    currency: 'USD',
    roomType: 'R4 (Double Bed) - Lower Deck',
    category: 'Domestic / KITAS',
  },
  {
    price: '1,450',
    currency: 'USD',
    roomType: 'R3 (Bunk Bed) - Lower Deck',
    category: 'Domestic / KITAS',
  },
  {
    price: '1,450',
    currency: 'USD',
    roomType: 'R2 (Bunk Bed) - Lower Deck',
    category: 'Domestic / KITAS',
  },
  {
    price: '1,650',
    currency: 'USD',
    roomType: 'R1 (Double Bed) - Lower Deck',
    category: 'Domestic / KITAS',
  },
  {
    price: '1,950',
    currency: 'USD',
    roomType: 'R7 (Double Bed) - Upper Deck with Balcony',
    category: 'Domestic / KITAS',
  },
  {
    price: '1,950',
    currency: 'USD',
    roomType: 'R8 (Double Bed) - Upper Deck with Balcony',
    category: 'Domestic / KITAS',
  },
  {
    price: '1,950',
    currency: 'USD',
    roomType: 'R9 (Twin Bed) - Upper Deck with Balcony',
    category: 'Domestic / KITAS',
  },
  {
    price: '1,950',
    currency: 'USD',
    roomType: 'R10 (Twin Bed) - Upper Deck with Balcony',
    category: 'Domestic / KITAS',
  },
  {
    price: '2,150',
    currency: 'USD',
    roomType: 'R11 (Sky Light Suite) - Upper Deck with Balcony',
    category: 'Domestic / KITAS',
  },
  {
    price: '1,950',
    currency: 'USD',
    roomType: 'R12 - Upper Deck without Balcony',
    category: 'Domestic / KITAS',
  },
  {
    price: '1,450',
    currency: 'USD',
    roomType: 'R6 (Triple Bed) - Lower Deck',
    category: 'foreigner',
  },
  {
    price: '1,450',
    currency: 'USD',
    roomType: 'R5 (Triple Bed) - Lower Deck',
    category: 'foreigner',
  },
  {
    price: '1,650',
    currency: 'USD',
    roomType: 'R4 (Double Bed) - Lower Deck',
    category: 'foreigner',
  },
  {
    price: '1,450',
    currency: 'USD',
    roomType: 'R3 (Bunk Bed) - Lower Deck',
    category: 'foreigner',
  },
  {
    price: '1,450',
    currency: 'USD',
    roomType: 'R2 (Bunk Bed) - Lower Deck',
    category: 'foreigner',
  },
  {
    price: '1,650',
    currency: 'USD',
    roomType: 'R1 (Double Bed) - Lower Deck',
    category: 'foreigner',
  },
  {
    price: '1,950',
    currency: 'USD',
    roomType: 'R7 (Double Bed) - Upper Deck with Balcony',
    category: 'foreigner',
  },
  {
    price: '1,950',
    currency: 'USD',
    roomType: 'R8 (Double Bed) - Upper Deck with Balcony',
    category: 'foreigner',
  },
  {
    price: '1,950',
    currency: 'USD',
    roomType: 'R9 (Twin Bed) - Upper Deck with Balcony',
    category: 'foreigner',
  },
  {
    price: '1,950',
    currency: 'USD',
    roomType: 'R10 (Twin Bed) - Upper Deck with Balcony',
    category: 'foreigner',
  },
  {
    price: '2,150',
    currency: 'USD',
    roomType: 'R11 (Sky Light Suite) - Upper Deck with Balcony',
    category: 'foreigner',
  },
  {
    price: '1,950',
    currency: 'USD',
    roomType: 'R12 - Upper Deck without Balcony',
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
  'Exclude All flight and taxes',
  'Green Tax - USD 42,-',
  'BBQ Dinner at Desert Island - USD 10,- /pax.',
  'Deep South Fuel surcharge USD 100,-.',
  'Tiger shark zoo fee USD 35,- (optional)',
  'Equipment Rental.',
  'Exclude dive guide ratio 1:6',
  'BCD USD$8 / day',
  'REG USD$10 / day',
  'Wetsuit USD$6 / day',
  'Fin USD$6 / day',
  'Mask & Snorkel USD$6 / day',
  'Reef Hook USD$5 / day',
  'Dive Computer USD$12 / day',
  'Upgrade to 15 ltr tank USD$105 / trip',
  'Torch USD$10 per day',
  'Travel and dive insurance (recommended)',
  'Porter services',
  'Tips for boat crew (USD 100,- / pax Mandatory)',
  'Private dive guide USD 100,- / day.',
  'Exclude drink from the bar',
  'For Nitrox Air usage 12ltr tank(certified Nitrox Diver only) ADD another USD 90,- / trip',
];

export const include = [
  'Daily Breakfast, Lunch and Dinner on board.',
  'Free Coffee, Tea & Snack on board.',
  'Up to 17 dives with experience local guide (tanks, weights & belts).',
  'Male Airport Transfer.',
  'GST 12% Taxes.',
  'Underwater & aerial (drone) documentation.',
];
