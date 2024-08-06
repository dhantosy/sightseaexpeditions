import ImageGalleryOne from '@public/assets/images/diving/bima-1.jpg';
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

export const EVENT_TITLE_FULL = 'Bima Dive Trip with Majestic Voyager';

const findEventData = upcomingDivingTrips.find((item) => {
  return item.title === EVENT_TITLE_FULL;
});

export const PRICE_PER_PERSON = findEventData?.priceNum;
export const EVENT_TITLE = 'Bima Dive Trip - Majestic Voyager' || '';
export const EVENT_DATE = findEventData?.date;
export const EVENT_TYPE = 'LOB';
export const PAGE_TYPE = 'Diving Trips';
export const EVENT_AVAILABILITY = findEventData?.available;
export const EVENT_OVERVIEW = 'Bima, One of the Indonesia`s hidden gem. Sightsea Expeditions offers a liveaboard diving experience unlike any other. Venture beyond the crowds and discover a world teeming with fascinating critters and unique marine life on a luxurious liveaboard vessel.';

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
    value: 'Suite - Main Deck',
    label: 'Suite - Main Deck'
  },
  {
    value: 'Executive - Upper Deck',
    label: 'Executive - Upper Deck'
  },
  {
    value: 'Deluxe - Lower Deck',
    label: 'Deluxe - Lower Deck'
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
    price: '19,000,000',
    currency: 'IDR',
    roomType: 'Deluxe - Lower Deck',
    category: 'Domestic / KITAS',
  },
  {
    price: '22,000,000',
    currency: 'IDR',
    roomType: 'Executive - Upper Deck',
    category: 'Domestic / KITAS',
  },
  {
    price: '25,000,000',
    currency: 'IDR',
    roomType: 'Suite - Main Deck',
    category: 'Domestic / KITAS',
  },
  {
    price: '1,500',
    currency: 'USD',
    roomType: 'Deluxe - Lower Deck',
    category: 'foreigner',
  },
  {
    price: '1,700',
    currency: 'USD',
    roomType: 'Executive - Upper Deck',
    category: 'foreigner',
  },
  {
    price: '1,900',
    currency: 'USD',
    roomType: 'Suite - Main Deck',
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
    time: 'Day 1 - Labuan Bajo',
    descList: [
      'Airport or Hotel Pickup.',
      'Lunch.',
      'Dive 1 (Check Dive at Sebayur).',
      'Dinner.',
    ]
  },
  {
    time: 'Day 2 - North Komodo',
    descList: [
      'Light Breakfast.',
      'Dive 2.',
      'Breakfast.',
      'Dive 3.',
      'Lunch.',
      'Dive 4.',
      'Cross to Bima.',
      'Dinner.',
    ]
  },
  {
    time: 'Day 3 - Gili Banta',
    descList: [
      'Light Breakfast.',
      'Dive 5.',
      'Breakfast.',
      'Dive 6.',
      'Lunch.',
      'Dive 7.',
      'Snack Time.',
      'Night Dive 8.',
      'Dinner.',
    ]
  },
  {
    time: 'Day 4 - Pulau Kelapa',
    descList: [
      'Light Breakfast.',
      'Dive 9.',
      'Breakfast.',
      'Dive 10.',
      'Lunch.',
      'Cross to Labuan Bajo.',
      'Dinner.',
    ]
  },
  {
    time: 'Day 5 - Labuan Bajo',
    descList: [
      'Breakfast.',
      'Airport / Hotel Transfer.',
    ]
  },
];

export const notes = [
  'Port Clearance Fee (IDR 400rb / day for domestic).',
  'Port Clearance Fee (USD 25 / day for foreigner).',
  'Dive equipment rental is available for IDR 400,000 / day.',
  'Boat Crew Tips IDR 200rb / day',
  'The price excludes airflight tickets.',
];

export const include = [
  'Airport Transfer.',
  '4 Nights in AC Cabin or Twin Share.',
  'Full Onboard Meals, Tea, Coffee, & Softdrinks.',
  '10 Dives with Tanks, Weight, & Belt.',
  'English Speaking Cruise Director.',
  'Divemaster with 1:4 Ratio.',
  'Underwater Documentation.',
  'Free Nitrox for whom certified (earlybird).',
];
