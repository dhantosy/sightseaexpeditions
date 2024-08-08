import ImageGalleryOne from '@public/assets/images/gallery/banda-neira-2.jpg';
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

export const EVENT_TITLE_FULL = 'Banda Neira Dive Trip with Majestic Voyager - October';

const findEventData = upcomingDivingTrips.find((item) => {
  return item.title === EVENT_TITLE_FULL;
});

export const PRICE_PER_PERSON = findEventData?.priceNum;
export const EVENT_TITLE = 'Bandar Neira Dive - Majestic Voyager' || '';
export const EVENT_DATE = findEventData?.date;
export const EVENT_TYPE = 'LOB';
export const PAGE_TYPE = 'Diving Trips';
export const EVENT_AVAILABILITY = findEventData?.available;
export const EVENT_OVERVIEW = 'Embark on an extraordinary journey through time and tide with a liveaboard diving trip to Banda Neira. This captivating Indonesian archipelago, steeped in colonial history and volcanic allure, offers a unique blend of topside exploration and breathtaking underwater adventures.';

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
    price: '28,500,000',
    currency: 'IDR',
    roomType: 'Deluxe - Lower Deck',
    category: 'Domestic / KITAS',
  },
  {
    price: '31,000,000',
    currency: 'IDR',
    roomType: 'Executive - Upper Deck',
    category: 'Domestic / KITAS',
  },
  {
    price: '35,000,000',
    currency: 'IDR',
    roomType: 'Suite - Main Deck',
    category: 'Domestic / KITAS',
  },
  {
    price: '2,290',
    currency: 'USD',
    roomType: 'Deluxe - Lower Deck',
    category: 'foreigner',
  },
  {
    price: '2,490',
    currency: 'USD',
    roomType: 'Executive - Upper Deck',
    category: 'foreigner',
  },
  {
    price: '2,690',
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
    time: 'Day 1 - Check In',
    descList: [
      'Check Dive at Ambon Bay'
    ]
  },
  {
    time: 'Day 2 - Suanggi',
    descList: [
      '4 Dives',
      'Hammerhead Hunting'
    ]
  },
  {
    time: 'Day 3 - Manuk',
    descList: [
      '4 Dives',
      'Coconut Reef',
      'Bubble Reef',
      'Sea Snake',
      'Lunch.',
      'Manuk Corner',
      'Chance to see Hammie and many sea snakes',
    ]
  },
  {
    time: 'Day 4 - Karang Hatta & Banda Neira',
    descList: [
      '4 Dives',
      'Karang Hatta',
      'Lava Flow',
      'Batu Kapal',
      'Visit Banda Neira /or/ dive Mandarin',
    ]
  },
  {
    time: 'Day 5 - Ai & Run',
    descList: [
      '3 Dives',
      'Batu Udang',
      'Batu Payong',
      'Run',
      'Chance to see hammie'
    ]
  },
  {
    time: 'Day 6 - Suanggi',
    descList: [
      '2 Dives',
      'Hammerhead Hunting',
    ]
  },
  {
    time: 'Day 7 - Checkout',
    descList: [
      'Checkout'
    ]
  },
];

export const notes = [
  'Port Clearance Fee (IDR 200rb / day for domestic).',
  'Port Clearance Fee (USD 25 / day for foreigner).',
  'Dive equipment rental is available for IDR 400,000 / day.',
  'Boat Crew Gratitudes IDR 200rb / day / pax.',
  'The price excludes airflight tickets.',
];

export const include = [
  'Airport Transfer in Ambon.',
  '6 Nights in AC Cabins Aboard on Sharing Basis.',
  'Full Onboard Meals, Tea, Coffee, & Softdrinks.',
  'Historical & Heritage Land Tour at Banda Neira.',
  'Unlimited tea, coffee, softdrinks and mineral water.',
  '17 Dives with Tanks, Weight, & Belt.',
  'English Speaking Cruise Director.',
  'Divemaster & Local Dive Guide.',
  'Underwater Documentation.',
];
