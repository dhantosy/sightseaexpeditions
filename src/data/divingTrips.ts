import {
  ImageBimaMain,
  ImageBimaTwo,
  ImageBimaThree,
  ImageBimaFour,
  ImageBandarNeiraOne,
  ImageBandarNeiraTwo,
  ImageWayagMain,
  ImageMaldivesOne,
  ImageMaldivesTwo,
  ImageMisoolRajaAmpatOne,
  ImageMisoolRajaAmpatThree,
  ImagePalawanOne,
  ImagePalawanTwo,
  ImageLabuanBajoFour
} from './images/locations';

import {
  MajesticVoyageMain,
  MajesticVoyagerSuiteOne,
  MajesticVoyagerSuiteTwo,
  MajesticVoyagerSuiteThree,
  MajesticVoyagerSuiteFour,
  MajesticVoyagerSuiteFive,
  MajesticVoyagerExecutiveOne,
  MajesticVoyagerExecutiveTwo,
  MajesticVoyagerExecutiveThree,
  MajesticVoyagerExecutiveFour,
  MajesticVoyagerExecutiveFive,
  MajesticVoyagerExecutiveSix,
  MajesticVoyagerExecutiveSeven,
  MajesticVoyagerDeluxeOne,
  MajesticVoyagerDeluxeTwo,
  MajesticVoyagerDeluxeThree,
  MajesticVoyagerDeluxeFour,
  MajesticVoyagerDeluxeFive,
  MajesticVoyagerDeluxeSix,
  MajesticVoyagerDeluxeSeven,
  MajesticVoyagerDeluxeEight,
  MajesticVoyagerDeluxeNine,
} from './ships/majesticVoyager';

import {
  KaiaLiveaboardMain,
  KaiaLiveaboardCabinOne,
  KaiaLiveaboardCabinTwo
} from './ships/kaiaLiveaboard';

import {
  VeloceanMain,
  VeloceanGalleryFive,
  VeloceanGalleryThree,
  VeloceanSuiteOne,
  VeloceanExecutiveOne,
  VeloceanDeluxeOne,
} from './ships/veloceanLiveaboard';

export const divingTripsData = [
  {
    img: ImageBimaMain.src,
    imgAlt: 'Bima Trip',
    blurDataUrl: ImageBimaMain.blurDataURL,
    title: 'Bima Dive Trip with Majestic Voyager',
    location: 'West Komodo, Indonesia',
    date: 'Aug 17th - 21st, 2024',
    endDate: {
      day: 21,
      month: 8,
      year: 2024
    },
    url: 'bima-west-komodo-majestic-voyager',
    price: '19jt',
    priceNum: '19000000',
    currency: 'IDR',
    duration: '4 days',
    highlight: {
      diveCount: '11 dives',
      type: 'LOB'
    },
    available: false,
    multiCurrencies: true,
    category: 'diving-trips',
    metaDescription: 'Embark on an extraordinary underwater journey with our curated collection of luxury dive trips. Explore pristine dive sites, encounter incredible marine life, and indulge in unparalleled comfort aboard our hand-picked liveaboard vessels. Discover your perfect dive vacation today.',
    metaKeywords: 'luxury dive trips, liveaboard diving, dive vacations, curated dive experiences, dive destinations, diving holidays, premium dive trips, exclusive dive travel, dive trip planner, best dive trips, diving adventures, underwater exploration',
    overview: 'Bima, One of the Indonesia`s hidden gem. Sightsea Expeditions offers a liveaboard diving experience unlike any other. Venture beyond the crowds and discover a world teeming with fascinating critters and unique marine life on a luxurious liveaboard vessel.',
    categoryListOption: [
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
    ],
    roomTypeListOption: [
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
    ],
    pricePerRoom: [
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
    ],
    schedule: [
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
    ],
    include: [
      'Airport Transfer.',
      '4 Nights in AC Cabin on Twin Share Basis.',
      'Full Onboard Meals, Tea, Coffee, & Softdrinks.',
      '10 Dives with Tanks, Weight, & Belt.',
      'English Speaking Cruise Director.',
      'Divemaster with 1:4 Ratio.',
      'Underwater Documentation.',
      'Free Nitrox for whom certified (earlybird).',
    ],
    notes: [
      'Port Clearance Fee (IDR 400rb / day for domestic).',
      'Port Clearance Fee (USD 25 / day for foreigner).',
      'Dive equipment rental is available for IDR 400,000 / day.',
      'Boat Crew Tips IDR 200rb / day',
      'The price excludes airflight tickets.',
    ],
    roomGallery: [
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
        roomImages: [
          {
            img: MajesticVoyagerSuiteOne.src,
            imgAlt: '',
            blurDataUrl: MajesticVoyagerSuiteOne.blurDataURL,
          },
          {
            img: MajesticVoyagerSuiteTwo.src,
            imgAlt: '',
            blurDataUrl: MajesticVoyagerSuiteTwo.blurDataURL,
          },
          {
            img: MajesticVoyagerSuiteThree.src,
            imgAlt: '',
            blurDataUrl: MajesticVoyagerSuiteThree.blurDataURL,
          },
          {
            img: MajesticVoyagerSuiteFour.src,
            imgAlt: '',
            blurDataUrl: MajesticVoyagerSuiteFour.blurDataURL,
          },
          {
            img: MajesticVoyagerSuiteFive.src,
            imgAlt: '',
            blurDataUrl: MajesticVoyagerSuiteFive.blurDataURL,
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
        roomImages: [
          {
            img: MajesticVoyagerExecutiveOne.src,
            imgAlt: '',
            blurDataUrl: MajesticVoyagerExecutiveOne.blurDataURL,
          },
          {
            img: MajesticVoyagerExecutiveTwo.src,
            imgAlt: '',
            blurDataUrl: MajesticVoyagerExecutiveTwo.blurDataURL,
          },
          {
            img: MajesticVoyagerExecutiveThree.src,
            imgAlt: '',
            blurDataUrl: MajesticVoyagerExecutiveThree.blurDataURL,
          },
          {
            img: MajesticVoyagerExecutiveFour.src,
            imgAlt: '',
            blurDataUrl: MajesticVoyagerExecutiveFour.blurDataURL,
          },
          {
            img: MajesticVoyagerExecutiveFive.src,
            imgAlt: '',
            blurDataUrl: MajesticVoyagerExecutiveFive.blurDataURL,
          },
          {
            img: MajesticVoyagerExecutiveSix.src,
            imgAlt: '',
            blurDataUrl: MajesticVoyagerExecutiveSix.blurDataURL,
          },
          {
            img: MajesticVoyagerExecutiveSeven.src,
            imgAlt: '',
            blurDataUrl: MajesticVoyagerExecutiveSeven.blurDataURL,
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
        roomImages: [
          {
            img: MajesticVoyagerDeluxeOne.src,
            imgAlt: '',
            blurDataUrl: MajesticVoyagerDeluxeOne.blurDataURL,
          },
          {
            img: MajesticVoyagerDeluxeTwo.src,
            imgAlt: '',
            blurDataUrl: MajesticVoyagerDeluxeTwo.blurDataURL,
          },
          {
            img: MajesticVoyagerDeluxeThree.src,
            imgAlt: '',
            blurDataUrl: MajesticVoyagerDeluxeThree.blurDataURL,
          },
          {
            img: MajesticVoyagerDeluxeFour.src,
            imgAlt: '',
            blurDataUrl: MajesticVoyagerDeluxeFour.blurDataURL,
          },
          {
            img: MajesticVoyagerDeluxeFive.src,
            imgAlt: '',
            blurDataUrl: MajesticVoyagerDeluxeFive.blurDataURL,
          },
          {
            img: MajesticVoyagerDeluxeSix.src,
            imgAlt: '',
            blurDataUrl: MajesticVoyagerDeluxeSix.blurDataURL,
          },
          {
            img: MajesticVoyagerDeluxeSeven.src,
            imgAlt: '',
            blurDataUrl: MajesticVoyagerDeluxeSeven.blurDataURL,
          },
          {
            img: MajesticVoyagerDeluxeEight.src,
            imgAlt: '',
            blurDataUrl: MajesticVoyagerDeluxeEight.blurDataURL,
          },
          {
            img: MajesticVoyagerDeluxeNine.src,
            imgAlt: '',
            blurDataUrl: MajesticVoyagerDeluxeNine.blurDataURL,
          },
        ],
      },
    ],
    gallery: [
      {
        img: ImageBimaMain.src,
        imgAlt: '',
        blurDataUrl: ImageBimaMain.blurDataURL,
      },
      {
        img: ImageBimaTwo.src,
        imgAlt: '',
        blurDataUrl: ImageBimaTwo.blurDataURL,
      },
      {
        img: ImageBimaThree.src,
        imgAlt: '',
        blurDataUrl: ImageBimaThree.blurDataURL,
      },
      {
        img: ImageBimaFour.src,
        imgAlt: '',
        blurDataUrl: ImageBimaFour.blurDataURL,
      },
    ],
  },
  {
    img: ImageLabuanBajoFour.src,
    imgAlt: 'Komodo Trip',
    blurDataUrl: ImageLabuanBajoFour.blurDataURL,
    title: 'Komodo Dive Trip with Kaia Liveaboard',
    location: 'Maluku, Indonesia',
    date: 'Sep 4th - 8th, 2024',
    endDate: {
      day: 8,
      month: 9,
      year: 2024
    },
    url: 'komodo-kaia-liveaboard',
    price: '18,5jt',
    priceNum: '18500000',
    currency: 'IDR',
    duration: '4 days',
    highlight: {
      diveCount: '10+ dives',
      type: 'LOB'
    },
    available: true,
    multiCurrencies: false,
    category: 'diving-trips',
    metaDescription: 'Experience the magic of Komodo with our exclusive liveaboard cruises. Discover pristine dive sites teeming with marine life, encounter iconic Komodo dragons, and indulge in luxury. Our carefully curated itineraries offer the ultimate Komodo adventure.',
    metaKeywords: 'Komodo dive trips, Komodo liveaboard, Komodo diving, luxury Komodo cruises, Komodo National Park, Komodo dragons, Komodo dive vacation, dive Komodo, Komodo dive sites, Komodo dive itinerary, Komodo diving holidays, Komodo dive travel, Komodo dive packages',
    overview: 'Experience the magic of Komodo with our exclusive liveaboard cruises. Discover pristine dive sites teeming with marine life, encounter iconic Komodo dragons, and indulge in luxury. Our carefully curated itineraries offer the ultimate Komodo adventure.',
    categoryListOption: [
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
    ],
    roomTypeListOption: [
      {
        value: '',
        label: 'Select Cabin Type'
      },
      {
        value: 'Main Deck',
        label: 'Main Deck'
      },
    ],
    pricePerRoom: [
      {
        price: '18,500,000',
        currency: 'IDR',
        roomType: 'Main Deck',
        category: 'Domestic / KITAS',
      },
      {
        price: '18,500,000',
        currency: 'IDR',
        roomType: 'Main Deck',
        category: 'foreigner',
      },
    ],
    schedule: [
      {
        time: '',
        descList: []
      },
    ],
    include: [
      'Airport Transfer in Labuan Bajo.',
      '4 Nights in AC Cabins Aboard on Sharing Basis.',
      'Full Onboard Meals.',
      'Unlimited tea, coffee, softdrinks and mineral water.',
      '10+ Dives with Tanks, Weight, & Belt.',
      'English Speaking Cruise Director.',
      'Divemaster & Local Dive Guide.',
      'Underwater Documentation.',
    ],
    notes: [
      'Port Clearance Fee (IDR 1jt / pax).',
      'Dive equipment rental is available',
      'Alocolic beverages are available.',
      'Boat crew tip gratuities IDR 200rb / day / pax',
      'The price excludes airflight tickets.',
    ],
    roomGallery: [
      {
        roomType: 'Main Deck',
        include: [
          'Ocean View',
          'Double Bed',
          'Private Bathroom',
        ],
        roomImages: [
          {
            img: KaiaLiveaboardCabinOne.src,
            imgAlt: '',
            blurDataUrl: KaiaLiveaboardCabinOne.blurDataURL,
          },
          {
            img: KaiaLiveaboardCabinTwo.src,
            imgAlt: '',
            blurDataUrl: KaiaLiveaboardCabinTwo.blurDataURL,
          },
        ],
      },
    ],
    gallery: [
      {
        img: ImageLabuanBajoFour.src,
        imgAlt: '',
        blurDataUrl: ImageLabuanBajoFour.blurDataURL,
      },
      {
        img: ImageBimaTwo.src,
        imgAlt: '',
        blurDataUrl: ImageBimaTwo.blurDataURL,
      },
      {
        img: ImageBimaThree.src,
        imgAlt: '',
        blurDataUrl: ImageBimaThree.blurDataURL,
      },
      {
        img: KaiaLiveaboardMain.src,
        imgAlt: '',
        blurDataUrl: KaiaLiveaboardMain.blurDataURL,
      },
    ],
  },
  {
    img: ImageBandarNeiraOne.src,
    imgAlt: 'Banda Neira Trip',
    blurDataUrl: ImageBandarNeiraOne.blurDataURL,
    title: 'Banda Neira Dive Trip with Majestic Voyager - September',
    location: 'Maluku, Indonesia',
    date: 'Sep 25th - Oct 1st, 2024',
    endDate: {
      day: 1,
      month: 10,
      year: 2024
    },
    url: 'banda-neira-majestic-voyager-september',
    price: '28,5jt',
    priceNum: '28500000',
    currency: 'IDR',
    duration: '4 days',
    highlight: {
      diveCount: '17 dives',
      type: 'LOB'
    },
    available: false,
    multiCurrencies: true,
    category: 'diving-trips',
    metaDescription: 'Embark on an extraordinary underwater journey with our curated collection of luxury dive trips. Explore pristine dive sites, encounter incredible marine life, and indulge in unparalleled comfort aboard our hand-picked liveaboard vessels. Discover your perfect dive vacation today.',
    metaKeywords: 'luxury dive trips, liveaboard diving, dive vacations, curated dive experiences, dive destinations, diving holidays, premium dive trips, exclusive dive travel, dive trip planner, best dive trips, diving adventures, underwater exploration',
    overview: 'Embark on an extraordinary journey through time and tide with a liveaboard diving trip to Banda Neira. This captivating Indonesian archipelago, steeped in colonial history and volcanic allure, offers a unique blend of topside exploration and breathtaking underwater adventures.',
    categoryListOption: [
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
    ],
    roomTypeListOption: [
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
    ],
    pricePerRoom: [
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
    ],
    schedule: [
      {
        time: '',
        descList: []
      },
    ],
    include: [
      'Airport Transfer.',
      '4 Nights in AC Cabin on Twin Share Basis.',
      'Full Onboard Meals, Tea, Coffee, & Softdrinks.',
      '11 Dives with Tanks, Weight, & Belt.',
      'English Speaking Cruise Director.',
      'Divemaster with 1:4 Ratio.',
      'Underwater Documentation.',
      'Free Nitrox for whom certified (earlybird).',
    ],
    notes: [
      'Port Clearance Fee (IDR 400rb / day for domestic).',
      'Port Clearance Fee (USD 25 / day for foreigner).',
      'Dive equipment rental is available for IDR 400,000 / day.',
      'Boat Crew Tips IDR 200rb / day',
      'The price excludes airflight tickets.',
    ],
    roomGallery: [
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
        roomImages: [
          {
            img: MajesticVoyagerSuiteOne.src,
            imgAlt: '',
            blurDataUrl: MajesticVoyagerSuiteOne.blurDataURL,
          },
          {
            img: MajesticVoyagerSuiteTwo.src,
            imgAlt: '',
            blurDataUrl: MajesticVoyagerSuiteTwo.blurDataURL,
          },
          {
            img: MajesticVoyagerSuiteThree.src,
            imgAlt: '',
            blurDataUrl: MajesticVoyagerSuiteThree.blurDataURL,
          },
          {
            img: MajesticVoyagerSuiteFour.src,
            imgAlt: '',
            blurDataUrl: MajesticVoyagerSuiteFour.blurDataURL,
          },
          {
            img: MajesticVoyagerSuiteFive.src,
            imgAlt: '',
            blurDataUrl: MajesticVoyagerSuiteFive.blurDataURL,
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
        roomImages: [
          {
            img: MajesticVoyagerExecutiveOne.src,
            imgAlt: '',
            blurDataUrl: MajesticVoyagerExecutiveOne.blurDataURL,
          },
          {
            img: MajesticVoyagerExecutiveTwo.src,
            imgAlt: '',
            blurDataUrl: MajesticVoyagerExecutiveTwo.blurDataURL,
          },
          {
            img: MajesticVoyagerExecutiveThree.src,
            imgAlt: '',
            blurDataUrl: MajesticVoyagerExecutiveThree.blurDataURL,
          },
          {
            img: MajesticVoyagerExecutiveFour.src,
            imgAlt: '',
            blurDataUrl: MajesticVoyagerExecutiveFour.blurDataURL,
          },
          {
            img: MajesticVoyagerExecutiveFive.src,
            imgAlt: '',
            blurDataUrl: MajesticVoyagerExecutiveFive.blurDataURL,
          },
          {
            img: MajesticVoyagerExecutiveSix.src,
            imgAlt: '',
            blurDataUrl: MajesticVoyagerExecutiveSix.blurDataURL,
          },
          {
            img: MajesticVoyagerExecutiveSeven.src,
            imgAlt: '',
            blurDataUrl: MajesticVoyagerExecutiveSeven.blurDataURL,
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
        roomImages: [
          {
            img: MajesticVoyagerDeluxeOne.src,
            imgAlt: '',
            blurDataUrl: MajesticVoyagerDeluxeOne.blurDataURL,
          },
          {
            img: MajesticVoyagerDeluxeTwo.src,
            imgAlt: '',
            blurDataUrl: MajesticVoyagerDeluxeTwo.blurDataURL,
          },
          {
            img: MajesticVoyagerDeluxeThree.src,
            imgAlt: '',
            blurDataUrl: MajesticVoyagerDeluxeThree.blurDataURL,
          },
          {
            img: MajesticVoyagerDeluxeFour.src,
            imgAlt: '',
            blurDataUrl: MajesticVoyagerDeluxeFour.blurDataURL,
          },
          {
            img: MajesticVoyagerDeluxeFive.src,
            imgAlt: '',
            blurDataUrl: MajesticVoyagerDeluxeFive.blurDataURL,
          },
          {
            img: MajesticVoyagerDeluxeSix.src,
            imgAlt: '',
            blurDataUrl: MajesticVoyagerDeluxeSix.blurDataURL,
          },
          {
            img: MajesticVoyagerDeluxeSeven.src,
            imgAlt: '',
            blurDataUrl: MajesticVoyagerDeluxeSeven.blurDataURL,
          },
          {
            img: MajesticVoyagerDeluxeEight.src,
            imgAlt: '',
            blurDataUrl: MajesticVoyagerDeluxeEight.blurDataURL,
          },
          {
            img: MajesticVoyagerDeluxeNine.src,
            imgAlt: '',
            blurDataUrl: MajesticVoyagerDeluxeNine.blurDataURL,
          },
        ],
      },
    ],
    gallery: [
      {
        img: ImageBandarNeiraOne.src,
        imgAlt: '',
        blurDataUrl: ImageBandarNeiraOne.blurDataURL,
      },
      {
        img: ImageBimaTwo.src,
        imgAlt: '',
        blurDataUrl: ImageBimaTwo.blurDataURL,
      },
      {
        img: ImageBimaThree.src,
        imgAlt: '',
        blurDataUrl: ImageBimaThree.blurDataURL,
      },
      {
        img: MajesticVoyageMain.src,
        imgAlt: '',
        blurDataUrl: MajesticVoyageMain.blurDataURL,
      },
    ],
  },
  {
    img: ImageBandarNeiraTwo.src,
    imgAlt: 'Banda Neira Trip',
    blurDataUrl: ImageBandarNeiraTwo.blurDataURL,
    title: 'Banda Neira Dive Trip with Majestic Voyager - October',
    location: 'Maluku, Indonesia',
    date: 'Oct 26th - Nov 1st, 2024',
    endDate: {
      day: 1,
      month: 11,
      year: 2024
    },
    url: 'banda-neira-majestic-voyager-october',
    price: '28,5jt',
    priceNum: '28500000',
    currency: 'IDR',
    duration: '4 days',
    highlight: {
      diveCount: '17 dives',
      type: 'LOB'
    },
    available: true,
    multiCurrencies: true,
    category: 'diving-trips',
    metaDescription: 'Embark on an extraordinary underwater journey with our curated collection of luxury dive trips. Explore pristine dive sites, encounter incredible marine life, and indulge in unparalleled comfort aboard our hand-picked liveaboard vessels. Discover your perfect dive vacation today.',
    metaKeywords: 'luxury dive trips, liveaboard diving, dive vacations, curated dive experiences, dive destinations, diving holidays, premium dive trips, exclusive dive travel, dive trip planner, best dive trips, diving adventures, underwater exploration',
    overview: 'Experience the magic of Komodo with our exclusive liveaboard cruises. Discover pristine dive sites teeming with marine life, encounter iconic Komodo dragons, and indulge in luxury. Our carefully curated itineraries offer the ultimate Komodo adventure.',
    categoryListOption: [
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
    ],
    roomTypeListOption: [
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
    ],
    pricePerRoom: [
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
    ],
    schedule: [
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
    ],
    include: [
      'Airport Transfer.',
      '4 Nights in AC Cabin on Twin Share Basis.',
      'Full Onboard Meals, Tea, Coffee, & Softdrinks.',
      '11 Dives with Tanks, Weight, & Belt.',
      'English Speaking Cruise Director.',
      'Divemaster with 1:4 Ratio.',
      'Underwater Documentation.',
      'Free Nitrox for whom certified (earlybird).',
    ],
    notes: [
      'Port Clearance Fee (IDR 400rb / day for domestic).',
      'Port Clearance Fee (USD 25 / day for foreigner).',
      'Dive equipment rental is available for IDR 400,000 / day.',
      'Boat Crew Tips IDR 200rb / day',
      'The price excludes airflight tickets.',
    ],
    roomGallery: [
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
        roomImages: [
          {
            img: MajesticVoyagerSuiteOne.src,
            imgAlt: '',
            blurDataUrl: MajesticVoyagerSuiteOne.blurDataURL,
          },
          {
            img: MajesticVoyagerSuiteTwo.src,
            imgAlt: '',
            blurDataUrl: MajesticVoyagerSuiteTwo.blurDataURL,
          },
          {
            img: MajesticVoyagerSuiteThree.src,
            imgAlt: '',
            blurDataUrl: MajesticVoyagerSuiteThree.blurDataURL,
          },
          {
            img: MajesticVoyagerSuiteFour.src,
            imgAlt: '',
            blurDataUrl: MajesticVoyagerSuiteFour.blurDataURL,
          },
          {
            img: MajesticVoyagerSuiteFive.src,
            imgAlt: '',
            blurDataUrl: MajesticVoyagerSuiteFive.blurDataURL,
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
        roomImages: [
          {
            img: MajesticVoyagerExecutiveOne.src,
            imgAlt: '',
            blurDataUrl: MajesticVoyagerExecutiveOne.blurDataURL,
          },
          {
            img: MajesticVoyagerExecutiveTwo.src,
            imgAlt: '',
            blurDataUrl: MajesticVoyagerExecutiveTwo.blurDataURL,
          },
          {
            img: MajesticVoyagerExecutiveThree.src,
            imgAlt: '',
            blurDataUrl: MajesticVoyagerExecutiveThree.blurDataURL,
          },
          {
            img: MajesticVoyagerExecutiveFour.src,
            imgAlt: '',
            blurDataUrl: MajesticVoyagerExecutiveFour.blurDataURL,
          },
          {
            img: MajesticVoyagerExecutiveFive.src,
            imgAlt: '',
            blurDataUrl: MajesticVoyagerExecutiveFive.blurDataURL,
          },
          {
            img: MajesticVoyagerExecutiveSix.src,
            imgAlt: '',
            blurDataUrl: MajesticVoyagerExecutiveSix.blurDataURL,
          },
          {
            img: MajesticVoyagerExecutiveSeven.src,
            imgAlt: '',
            blurDataUrl: MajesticVoyagerExecutiveSeven.blurDataURL,
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
        roomImages: [
          {
            img: MajesticVoyagerDeluxeOne.src,
            imgAlt: '',
            blurDataUrl: MajesticVoyagerDeluxeOne.blurDataURL,
          },
          {
            img: MajesticVoyagerDeluxeTwo.src,
            imgAlt: '',
            blurDataUrl: MajesticVoyagerDeluxeTwo.blurDataURL,
          },
          {
            img: MajesticVoyagerDeluxeThree.src,
            imgAlt: '',
            blurDataUrl: MajesticVoyagerDeluxeThree.blurDataURL,
          },
          {
            img: MajesticVoyagerDeluxeFour.src,
            imgAlt: '',
            blurDataUrl: MajesticVoyagerDeluxeFour.blurDataURL,
          },
          {
            img: MajesticVoyagerDeluxeFive.src,
            imgAlt: '',
            blurDataUrl: MajesticVoyagerDeluxeFive.blurDataURL,
          },
          {
            img: MajesticVoyagerDeluxeSix.src,
            imgAlt: '',
            blurDataUrl: MajesticVoyagerDeluxeSix.blurDataURL,
          },
          {
            img: MajesticVoyagerDeluxeSeven.src,
            imgAlt: '',
            blurDataUrl: MajesticVoyagerDeluxeSeven.blurDataURL,
          },
          {
            img: MajesticVoyagerDeluxeEight.src,
            imgAlt: '',
            blurDataUrl: MajesticVoyagerDeluxeEight.blurDataURL,
          },
          {
            img: MajesticVoyagerDeluxeNine.src,
            imgAlt: '',
            blurDataUrl: MajesticVoyagerDeluxeNine.blurDataURL,
          },
        ],
      },
    ],
    gallery: [
      {
        img: ImageBandarNeiraTwo.src,
        imgAlt: '',
        blurDataUrl: ImageBandarNeiraTwo.blurDataURL,
      },
      {
        img: ImageBimaTwo.src,
        imgAlt: '',
        blurDataUrl: ImageBimaTwo.blurDataURL,
      },
      {
        img: ImageBimaThree.src,
        imgAlt: '',
        blurDataUrl: ImageBimaThree.blurDataURL,
      },
      {
        img: MajesticVoyageMain.src,
        imgAlt: '',
        blurDataUrl: MajesticVoyageMain.blurDataURL,
      },
    ],
  },
  {
    img: ImageMisoolRajaAmpatOne.src,
    imgAlt: 'Velocean raja ampat liveaboard',
    blurDataUrl: ImageMisoolRajaAmpatOne.blurDataURL,
    title: 'Misool Dive Trip with Velocean',
    location: 'Raja Ampat, Indonesia',
    date: 'Dec 8th - 16th, 2024',
    endDate: {
      day: 16,
      month: 12,
      year: 2024
    },
    url: 'raja-ampat-misool-velocean',
    price: '5,500',
    priceNum: '5500',
    currency: 'USD',
    duration: '8 days',
    highlight: {
      diveCount: 'TBA',
      type: 'LOB'
    },
    available: false,
    multiCurrencies: false,
    category: 'diving-trips',
    metaDescription: 'Experience the pinnacle of diving luxury with Velocean Raja Ampat. Immerse yourself in the breathtaking beauty of this underwater wonderland, teeming with vibrant coral reefs and extraordinary marine life. Our curated liveaboard adventure offers unparalleled comfort, world-class diving, and personalized service.',
    metaKeywords: 'Velocean Raja Ampat, Raja Ampat diving, luxury dive trip, liveaboard Raja Ampat, dive vacation Indonesia, Raja Ampat liveaboard, premium dive experience, underwater paradise, marine biodiversity, luxury diving, dive travel, curated dive vacations, dive into perfection',
    overview: 'With VELOCEAN, Sightsea Expeditions is crafting a personalized itinerary that whisks you away to hidden reefs teeming with life, pristine beaches where time slows down, and luxurious liveaboards that put comfort at the forefront. Dive into paradise and create memories that will leave you breathless.',
    categoryListOption: [
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
    ],
    roomTypeListOption: [
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
    ],
    pricePerRoom: [
      {
        price: '5,900',
        currency: 'USD',
        roomType: 'Platinum Oceanfront Suites',
        category: 'Domestic / KITAS',
      },
      {
        price: '5,190',
        currency: 'USD',
        roomType: 'Elite Ocean Suites',
        category: 'Domestic / KITAS',
      },
      {
        price: '4,950',
        currency: 'USD',
        roomType: 'Signature Single Suites',
        category: 'Domestic / KITAS',
      },
      {
        price: '5,900',
        currency: 'USD',
        roomType: 'Platinum Oceanfront Suites',
        category: 'foreigner',
      },
      {
        price: '5,190',
        currency: 'USD',
        roomType: 'Elite Ocean Suites',
        category: 'foreigner',
      },
      {
        price: '4,950',
        currency: 'USD',
        roomType: 'Signature Single Suites',
        category: 'foreigner',
      },
    ],
    schedule: [
      {
        time: '',
        descList: []
      },
    ],
    include: [
      'All meals (5x daily), & beverages onboard, except alcohol.',
      'Coffee, tea, juices, snacks available for 24hrs',
      '24hrs simple food service (eg. indomie, fried rice, fried noodle, etc).',
      'Nitrox for whom certified.',
      'Inhouse satellite wifi',
      'Transport from and to the Velocean',
      'Hygiene and sanitary kits.',
      'Limited laundry service.',
      'All taxes and Marine Park Fee.'
    ],
    notes: [
      'The price excludes airflight tickets.',
      'Alcoholic beverages is available for extra charge.',
      'Scuba diving gear is available for rental.',
      'Personal Insurance is not covered.',
      'Crew tip gratitude is suggested.',
    ],
    roomGallery: [
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
        roomImages: [
          {
            img: VeloceanSuiteOne.src,
            imgAlt: '',
            blurDataUrl: VeloceanSuiteOne.blurDataURL,
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
        roomImages: [
          {
            img: VeloceanExecutiveOne.src,
            imgAlt: '',
            blurDataUrl: VeloceanExecutiveOne.blurDataURL,
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
        roomImages: [
          {
            img: VeloceanDeluxeOne.src,
            imgAlt: '',
            blurDataUrl: VeloceanDeluxeOne.blurDataURL,
          },
        ],
      },
    ],
    gallery: [
      {
        img: ImageMisoolRajaAmpatOne.src,
        imgAlt: '',
        blurDataUrl: ImageMisoolRajaAmpatOne.blurDataURL,
      },
      {
        img: VeloceanMain.src,
        imgAlt: '',
        blurDataUrl: VeloceanMain.blurDataURL,
      },
      {
        img: VeloceanGalleryFive.src,
        imgAlt: '',
        blurDataUrl: VeloceanGalleryFive.blurDataURL,
      },
      {
        img: VeloceanGalleryThree.src,
        imgAlt: '',
        blurDataUrl: VeloceanGalleryThree.blurDataURL,
      },
    ],
  },
  {
    img: ImageMisoolRajaAmpatOne.src,
    imgAlt: 'Misool Trip',
    blurDataUrl: ImageMisoolRajaAmpatOne.blurDataURL,
    title: 'Misool Dive Trip with Majestic Voyager',
    location: 'Raja Ampat, Indonesia',
    date: 'Dec 18th - 24th, 2024',
    endDate: {
      day: 24,
      month: 12,
      year: 2024
    },
    url: 'raja-ampat-misool-majestic-voyager',
    price: '29,5jt',
    priceNum: '29500000',
    currency: 'IDR',
    duration: '4 days',
    highlight: {
      diveCount: '17 dives',
      type: 'LOB'
    },
    available: true,
    multiCurrencies: true,
    category: 'diving-trips',
    metaDescription: 'Embark on an extraordinary underwater journey with our curated collection of luxury dive trips. Explore pristine dive sites, encounter incredible marine life, and indulge in unparalleled comfort aboard our hand-picked liveaboard vessels. Discover your perfect dive vacation today.',
    metaKeywords: 'luxury dive trips, liveaboard diving, dive vacations, curated dive experiences, dive destinations, diving holidays, premium dive trips, exclusive dive travel, dive trip planner, best dive trips, diving adventures, underwater exploration',
    overview: 'Embark on a voyage of discovery to Misool, the heart of Raja Ampat and a crown jewel of Indonesian diving. A Misool liveaboard adventure unlocks a world of unparalleled biodiversity, breathtaking underwater landscapes, and encounters that will leave you speechless.',
    categoryListOption: [
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
    ],
    roomTypeListOption: [
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
    ],
    pricePerRoom: [
      {
        price: '29,500,000',
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
    ],
    schedule: [
      {
        time: '',
        descList: []
      },
    ],
    include: [
      'Airport Transfer in Sorong.',
      '6 Nights in AC Cabin on Twin Share Basis.',
      'Full Onboard Meals, Tea, Coffee, & Softdrinks.',
      '17 Dives with Tanks, Weight, & Belt.',
      'English Speaking Cruise Director.',
      'Divemaster with 1:4 Ratio.',
      'Underwater Documentation.',
      'Free Nitrox for whom certified (earlybird).',
    ],
    notes: [
      'Port Clearance Fee (IDR 200rb / day for domestic).',
      'Port Clearance Fee (USD 25 / day for foreigner).',
      'Dive equipment rental is available for IDR 400,000 / day.',
      'R4 PIN IDR 500rb for domestic.',
      'R4 PIN USD 75 for foreigner.',
      'Boat Crew Tips IDR 200rb / day',
      'The price excludes airflight tickets.',
    ],
    roomGallery: [
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
        roomImages: [
          {
            img: MajesticVoyagerSuiteOne.src,
            imgAlt: '',
            blurDataUrl: MajesticVoyagerSuiteOne.blurDataURL,
          },
          {
            img: MajesticVoyagerSuiteTwo.src,
            imgAlt: '',
            blurDataUrl: MajesticVoyagerSuiteTwo.blurDataURL,
          },
          {
            img: MajesticVoyagerSuiteThree.src,
            imgAlt: '',
            blurDataUrl: MajesticVoyagerSuiteThree.blurDataURL,
          },
          {
            img: MajesticVoyagerSuiteFour.src,
            imgAlt: '',
            blurDataUrl: MajesticVoyagerSuiteFour.blurDataURL,
          },
          {
            img: MajesticVoyagerSuiteFive.src,
            imgAlt: '',
            blurDataUrl: MajesticVoyagerSuiteFive.blurDataURL,
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
        roomImages: [
          {
            img: MajesticVoyagerExecutiveOne.src,
            imgAlt: '',
            blurDataUrl: MajesticVoyagerExecutiveOne.blurDataURL,
          },
          {
            img: MajesticVoyagerExecutiveTwo.src,
            imgAlt: '',
            blurDataUrl: MajesticVoyagerExecutiveTwo.blurDataURL,
          },
          {
            img: MajesticVoyagerExecutiveThree.src,
            imgAlt: '',
            blurDataUrl: MajesticVoyagerExecutiveThree.blurDataURL,
          },
          {
            img: MajesticVoyagerExecutiveFour.src,
            imgAlt: '',
            blurDataUrl: MajesticVoyagerExecutiveFour.blurDataURL,
          },
          {
            img: MajesticVoyagerExecutiveFive.src,
            imgAlt: '',
            blurDataUrl: MajesticVoyagerExecutiveFive.blurDataURL,
          },
          {
            img: MajesticVoyagerExecutiveSix.src,
            imgAlt: '',
            blurDataUrl: MajesticVoyagerExecutiveSix.blurDataURL,
          },
          {
            img: MajesticVoyagerExecutiveSeven.src,
            imgAlt: '',
            blurDataUrl: MajesticVoyagerExecutiveSeven.blurDataURL,
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
        roomImages: [
          {
            img: MajesticVoyagerDeluxeOne.src,
            imgAlt: '',
            blurDataUrl: MajesticVoyagerDeluxeOne.blurDataURL,
          },
          {
            img: MajesticVoyagerDeluxeTwo.src,
            imgAlt: '',
            blurDataUrl: MajesticVoyagerDeluxeTwo.blurDataURL,
          },
          {
            img: MajesticVoyagerDeluxeThree.src,
            imgAlt: '',
            blurDataUrl: MajesticVoyagerDeluxeThree.blurDataURL,
          },
          {
            img: MajesticVoyagerDeluxeFour.src,
            imgAlt: '',
            blurDataUrl: MajesticVoyagerDeluxeFour.blurDataURL,
          },
          {
            img: MajesticVoyagerDeluxeFive.src,
            imgAlt: '',
            blurDataUrl: MajesticVoyagerDeluxeFive.blurDataURL,
          },
          {
            img: MajesticVoyagerDeluxeSix.src,
            imgAlt: '',
            blurDataUrl: MajesticVoyagerDeluxeSix.blurDataURL,
          },
          {
            img: MajesticVoyagerDeluxeSeven.src,
            imgAlt: '',
            blurDataUrl: MajesticVoyagerDeluxeSeven.blurDataURL,
          },
          {
            img: MajesticVoyagerDeluxeEight.src,
            imgAlt: '',
            blurDataUrl: MajesticVoyagerDeluxeEight.blurDataURL,
          },
          {
            img: MajesticVoyagerDeluxeNine.src,
            imgAlt: '',
            blurDataUrl: MajesticVoyagerDeluxeNine.blurDataURL,
          },
        ],
      },
    ],
    gallery: [
      {
        img: ImageMisoolRajaAmpatOne.src,
        imgAlt: '',
        blurDataUrl: ImageMisoolRajaAmpatOne.blurDataURL,
      },
      {
        img: ImageBimaTwo.src,
        imgAlt: '',
        blurDataUrl: ImageBimaTwo.blurDataURL,
      },
      {
        img: ImageBimaThree.src,
        imgAlt: '',
        blurDataUrl: ImageBimaThree.blurDataURL,
      },
      {
        img: MajesticVoyageMain.src,
        imgAlt: '',
        blurDataUrl: MajesticVoyageMain.blurDataURL,
      },
    ],
  },
  {
    img: ImageWayagMain.src,
    imgAlt: 'Wayag Trip',
    blurDataUrl: ImageWayagMain.blurDataURL,
    title: 'Wayag Dive Trip with Majestic Voyager',
    location: 'Raja Ampat, Indonesia',
    date: 'Dec 28th, 2024 - Jan 2nd, 2025',
    endDate: {
      day: 2,
      month: 1,
      year: 2025
    },
    url: 'raja-ampat-wayag-majestic-voyager',
    price: '26jt',
    priceNum: '26000000',
    currency: 'IDR',
    duration: '4 days',
    highlight: {
      diveCount: '14 dives',
      type: 'LOB'
    },
    available: true,
    multiCurrencies: true,
    category: 'diving-trips',
    metaDescription: 'Embark on a voyage of unparalleled beauty on a liveaboard diving trip to Wayag, nestled within the heart of Raja Ampat, Indonesia. This remote archipelago boasts some of the world`s most breathtaking scenery and a kaleidoscope of marine life, promising an unforgettable diving adventure.',
    metaKeywords: 'luxury dive trips, liveaboard diving, dive vacations, curated dive experiences, dive destinations, diving holidays, premium dive trips, exclusive dive travel, dive trip planner, best dive trips, diving adventures, underwater exploration',
    overview: 'Embark on a voyage of unparalleled beauty on a liveaboard diving trip to Wayag, nestled within the heart of Raja Ampat, Indonesia. This remote archipelago boasts some of the world`s most breathtaking scenery and a kaleidoscope of marine life, promising an unforgettable diving adventure.',
    categoryListOption: [
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
    ],
    roomTypeListOption: [
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
    ],
    pricePerRoom: [
      {
        price: '26,000,000',
        currency: 'IDR',
        roomType: 'Deluxe - Lower Deck',
        category: 'Domestic / KITAS',
      },
      {
        price: '28,000,000',
        currency: 'IDR',
        roomType: 'Executive - Upper Deck',
        category: 'Domestic / KITAS',
      },
      {
        price: '32,000,000',
        currency: 'IDR',
        roomType: 'Suite - Main Deck',
        category: 'Domestic / KITAS',
      },
      {
        price: '1,950',
        currency: 'USD',
        roomType: 'Deluxe - Lower Deck',
        category: 'foreigner',
      },
      {
        price: '2,150',
        currency: 'USD',
        roomType: 'Executive - Upper Deck',
        category: 'foreigner',
      },
      {
        price: '2,350',
        currency: 'USD',
        roomType: 'Suite - Main Deck',
        category: 'foreigner',
      },
    ],
    schedule: [
      {
        time: '',
        descList: []
      },
    ],
    include: [
      'Airport Transfer in Labuan Bajo.',
      '4 Nights in AC Cabins Aboard on Sharing Basis.',
      'Full Onboard Meals.',
      'Unlimited tea, coffee, softdrinks and mineral water.',
      '10+ Dives with Tanks, Weight, & Belt.',
      'English Speaking Cruise Director.',
      'Divemaster & Local Dive Guide.',
      'Underwater Documentation.',
    ],
    notes: [
      'Port Clearance Fee (IDR 1jt / pax).',
      'Dive equipment rental is available',
      'Alocolic beverages are available.',
      'Boat crew tip gratuities IDR 200rb / day / pax',
      'The price excludes airflight tickets.',
    ],
    roomGallery: [
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
        roomImages: [
          {
            img: MajesticVoyagerSuiteOne.src,
            imgAlt: '',
            blurDataUrl: MajesticVoyagerSuiteOne.blurDataURL,
          },
          {
            img: MajesticVoyagerSuiteTwo.src,
            imgAlt: '',
            blurDataUrl: MajesticVoyagerSuiteTwo.blurDataURL,
          },
          {
            img: MajesticVoyagerSuiteThree.src,
            imgAlt: '',
            blurDataUrl: MajesticVoyagerSuiteThree.blurDataURL,
          },
          {
            img: MajesticVoyagerSuiteFour.src,
            imgAlt: '',
            blurDataUrl: MajesticVoyagerSuiteFour.blurDataURL,
          },
          {
            img: MajesticVoyagerSuiteFive.src,
            imgAlt: '',
            blurDataUrl: MajesticVoyagerSuiteFive.blurDataURL,
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
        roomImages: [
          {
            img: MajesticVoyagerExecutiveOne.src,
            imgAlt: '',
            blurDataUrl: MajesticVoyagerExecutiveOne.blurDataURL,
          },
          {
            img: MajesticVoyagerExecutiveTwo.src,
            imgAlt: '',
            blurDataUrl: MajesticVoyagerExecutiveTwo.blurDataURL,
          },
          {
            img: MajesticVoyagerExecutiveThree.src,
            imgAlt: '',
            blurDataUrl: MajesticVoyagerExecutiveThree.blurDataURL,
          },
          {
            img: MajesticVoyagerExecutiveFour.src,
            imgAlt: '',
            blurDataUrl: MajesticVoyagerExecutiveFour.blurDataURL,
          },
          {
            img: MajesticVoyagerExecutiveFive.src,
            imgAlt: '',
            blurDataUrl: MajesticVoyagerExecutiveFive.blurDataURL,
          },
          {
            img: MajesticVoyagerExecutiveSix.src,
            imgAlt: '',
            blurDataUrl: MajesticVoyagerExecutiveSix.blurDataURL,
          },
          {
            img: MajesticVoyagerExecutiveSeven.src,
            imgAlt: '',
            blurDataUrl: MajesticVoyagerExecutiveSeven.blurDataURL,
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
        roomImages: [
          {
            img: MajesticVoyagerDeluxeOne.src,
            imgAlt: '',
            blurDataUrl: MajesticVoyagerDeluxeOne.blurDataURL,
          },
          {
            img: MajesticVoyagerDeluxeTwo.src,
            imgAlt: '',
            blurDataUrl: MajesticVoyagerDeluxeTwo.blurDataURL,
          },
          {
            img: MajesticVoyagerDeluxeThree.src,
            imgAlt: '',
            blurDataUrl: MajesticVoyagerDeluxeThree.blurDataURL,
          },
          {
            img: MajesticVoyagerDeluxeFour.src,
            imgAlt: '',
            blurDataUrl: MajesticVoyagerDeluxeFour.blurDataURL,
          },
          {
            img: MajesticVoyagerDeluxeFive.src,
            imgAlt: '',
            blurDataUrl: MajesticVoyagerDeluxeFive.blurDataURL,
          },
          {
            img: MajesticVoyagerDeluxeSix.src,
            imgAlt: '',
            blurDataUrl: MajesticVoyagerDeluxeSix.blurDataURL,
          },
          {
            img: MajesticVoyagerDeluxeSeven.src,
            imgAlt: '',
            blurDataUrl: MajesticVoyagerDeluxeSeven.blurDataURL,
          },
          {
            img: MajesticVoyagerDeluxeEight.src,
            imgAlt: '',
            blurDataUrl: MajesticVoyagerDeluxeEight.blurDataURL,
          },
          {
            img: MajesticVoyagerDeluxeNine.src,
            imgAlt: '',
            blurDataUrl: MajesticVoyagerDeluxeNine.blurDataURL,
          },
        ],
      },
    ],
    gallery: [
      {
        img: ImageWayagMain.src,
        imgAlt: '',
        blurDataUrl: ImageWayagMain.blurDataURL,
      },
      {
        img: ImageBimaTwo.src,
        imgAlt: '',
        blurDataUrl: ImageBimaTwo.blurDataURL,
      },
      {
        img: ImageBimaThree.src,
        imgAlt: '',
        blurDataUrl: ImageBimaThree.blurDataURL,
      },
      {
        img: MajesticVoyageMain.src,
        imgAlt: '',
        blurDataUrl: MajesticVoyageMain.blurDataURL,
      },
    ],
  },
  {
    img: ImageMaldivesTwo.src,
    imgAlt: 'Maldives Trip',
    blurDataUrl: ImageMaldivesTwo.blurDataURL,
    title: 'Best of Maldives Dive Trip with Maldives Mosaique',
    location: 'Maldives',
    date: 'Jan 26th - Feb 2nd, 2025',
    endDate: {
      day: 2,
      month: 2,
      year: 2025
    },
    url: 'best-of-maldives-dive-trip',
    price: '1,450',
    priceNum: '1450',
    currency: 'USD',
    duration: '4 days',
    highlight: {
      diveCount: '17 dives',
      type: 'LOB'
    },
    available: true,
    multiCurrencies: false,
    category: 'diving-trips',
    metaDescription: 'Embark on an extraordinary underwater journey with our curated collection of luxury dive trips. Explore pristine dive sites, encounter incredible marine life, and indulge in unparalleled comfort aboard our hand-picked liveaboard vessels. Discover your perfect dive vacation today.',
    metaKeywords: 'luxury dive trips, liveaboard diving, dive vacations, curated dive experiences, dive destinations, diving holidays, premium dive trips, exclusive dive travel, dive trip planner, best dive trips, diving adventures, underwater exploration',
    overview: 'Embark on a voyage of discovery unlike any other on a liveaboard diving trip to the Maldives.  This island paradise, famed for its turquoise waters and pristine coral reefs, offers an unparalleled underwater experience from the comfort and luxury of a liveaboard vessel.',
    categoryListOption: [
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
    ],
    roomTypeListOption: [
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
    ],
    pricePerRoom: [
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
    ],
    schedule: [
      {
        time: '',
        descList: []
      },
    ],
    include: [
      'Daily Breakfast, Lunch and Dinner on board.',
      'Free Coffee, Tea & Snack on board.',
      'Up to 17 dives with experience local guide (tanks, weights & belts).',
      'Male Airport Transfer.',
      'GST 12% Taxes.',
      'Underwater & aerial (drone) documentation.',
    ],
    notes: [
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
    ],
    roomGallery: [
      {
        roomType: '',
        include: [''],
        roomImages: [
          {
            img: '',
            imgAlt: '',
            blurDataUrl: '',
          },
        ],
      },
    ],
    gallery: [
      {
        img: ImageMaldivesTwo.src,
        imgAlt: '',
        blurDataUrl: ImageMaldivesTwo.blurDataURL,
      },
      {
        img: ImageBimaTwo.src,
        imgAlt: '',
        blurDataUrl: ImageBimaTwo.blurDataURL,
      },
      {
        img: ImageBimaThree.src,
        imgAlt: '',
        blurDataUrl: ImageBimaThree.blurDataURL,
      },
      {
        img: ImageMaldivesOne.src,
        imgAlt: '',
        blurDataUrl: ImageMaldivesOne.blurDataURL,
      },
    ],
  },
  {
    img: ImageMaldivesOne.src,
    imgAlt: 'Maldives Trip',
    blurDataUrl: ImageMaldivesOne.blurDataURL,
    title: 'Deep South Maldives Dive Trip with Maldives Mosaique',
    location: 'Maldives',
    date: 'Feb 16th - 23rd, 2025',
    endDate: {
      day: 23,
      month: 2,
      year: 2025
    },
    url: 'deep-south-maldives-dive-trip',
    price: '1,550',
    priceNum: '1550',
    currency: 'USD',
    duration: '4 days',
    highlight: {
      diveCount: '17 dives',
      type: 'LOB'
    },
    available: true,
    multiCurrencies: false,
    category: 'diving-trips',
    metaDescription: 'Escape the beaten path and delve into the pristine paradise of the Maldivian Southern Atolls on a luxurious liveaboard diving adventure.  Aboard your comfortable vessel, you`ll navigate a remote archipelago teeming with vibrant marine life, untouched reefs, and exhilarating encounters.',
    metaKeywords: 'luxury dive trips, liveaboard diving, dive vacations, curated dive experiences, dive destinations, diving holidays, premium dive trips, exclusive dive travel, dive trip planner, best dive trips, diving adventures, underwater exploration',
    overview: 'Escape the beaten path and delve into the pristine paradise of the Maldivian Southern Atolls on a luxurious liveaboard diving adventure.  Aboard your comfortable vessel, you`ll navigate a remote archipelago teeming with vibrant marine life, untouched reefs, and exhilarating encounters.',
    categoryListOption: [
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
    ],
    roomTypeListOption: [
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
    ],
    pricePerRoom: [
      {
        price: '1,550',
        currency: 'USD',
        roomType: 'R6 (Triple Bed) - Lower Deck',
        category: 'Domestic / KITAS',
      },
      {
        price: '1,550',
        currency: 'USD',
        roomType: 'R5 (Triple Bed) - Lower Deck',
        category: 'Domestic / KITAS',
      },
      {
        price: '1,750',
        currency: 'USD',
        roomType: 'R4 (Double Bed) - Lower Deck',
        category: 'Domestic / KITAS',
      },
      {
        price: '1,550',
        currency: 'USD',
        roomType: 'R3 (Bunk Bed) - Lower Deck',
        category: 'Domestic / KITAS',
      },
      {
        price: '1,550',
        currency: 'USD',
        roomType: 'R2 (Bunk Bed) - Lower Deck',
        category: 'Domestic / KITAS',
      },
      {
        price: '1,750',
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
        price: '1,550',
        currency: 'USD',
        roomType: 'R6 (Triple Bed) - Lower Deck',
        category: 'foreigner',
      },
      {
        price: '1,550',
        currency: 'USD',
        roomType: 'R5 (Triple Bed) - Lower Deck',
        category: 'foreigner',
      },
      {
        price: '1,750',
        currency: 'USD',
        roomType: 'R4 (Double Bed) - Lower Deck',
        category: 'foreigner',
      },
      {
        price: '1,550',
        currency: 'USD',
        roomType: 'R3 (Bunk Bed) - Lower Deck',
        category: 'foreigner',
      },
      {
        price: '1,550',
        currency: 'USD',
        roomType: 'R2 (Bunk Bed) - Lower Deck',
        category: 'foreigner',
      },
      {
        price: '1,750',
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
    ],
    schedule: [
      {
        time: '',
        descList: []
      },
    ],
    include: [
      'Daily Breakfast, Lunch and Dinner on board.',
      'Free Coffee, Tea & Snack on board.',
      'Up to 17 dives with experience local guide (tanks, weights & belts).',
      'Male Airport Transfer.',
      'GST 12% Taxes.',
      'Underwater & aerial (drone) documentation.',
    ],
    notes: [
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
    ],
    roomGallery: [
      {
        roomType: '',
        include: [''],
        roomImages: [
          {
            img: '',
            imgAlt: '',
            blurDataUrl: '',
          },
        ],
      },
    ],
    gallery: [
      {
        img: ImageMaldivesOne.src,
        imgAlt: '',
        blurDataUrl: ImageMaldivesOne.blurDataURL,
      },
      {
        img: ImageBimaTwo.src,
        imgAlt: '',
        blurDataUrl: ImageBimaTwo.blurDataURL,
      },
      {
        img: ImageBimaThree.src,
        imgAlt: '',
        blurDataUrl: ImageBimaThree.blurDataURL,
      },
      {
        img: ImageMaldivesTwo.src,
        imgAlt: '',
        blurDataUrl: ImageMaldivesTwo.blurDataURL,
      },
    ],
  },
  {
    img: ImagePalawanOne.src,
    imgAlt: 'Tubbataha Trip',
    blurDataUrl: ImagePalawanOne.blurDataURL,
    title: 'Lebaran Escape Tubbataha Reef Dive Trip with MY Resolute',
    location: 'Palawan, Philippines',
    date: 'Mar 26th - Apr 1st, 2025',
    endDate: {
      day: 1,
      month: 4,
      year: 2025
    },
    url: 'lebaran-escape-tubbataha-dive-trip',
    price: '2,590',
    priceNum: '2590',
    currency: 'USD',
    duration: '4 days',
    highlight: {
      diveCount: '16 dives',
      type: 'LOB'
    },
    available: true,
    multiCurrencies: false,
    category: 'diving-trips',
    metaDescription: 'Embark on an unforgettable voyage to Tubbataha Reefs Natural Park, a UNESCO World Heritage Site and global crown jewel of marine biodiversity. Accessible only by liveaboard, a Tubbataha diving trip promises an unparalleled exploration of vibrant coral reefs, encounters with majestic marine life, and a retreat into a protected paradise.',
    metaKeywords: 'luxury dive trips, liveaboard diving, dive vacations, curated dive experiences, dive destinations, diving holidays, premium dive trips, exclusive dive travel, dive trip planner, best dive trips, diving adventures, underwater exploration',
    overview: 'Embark on an unforgettable voyage to Tubbataha Reefs Natural Park, a UNESCO World Heritage Site and global crown jewel of marine biodiversity. Accessible only by liveaboard, a Tubbataha diving trip promises an unparalleled exploration of vibrant coral reefs, encounters with majestic marine life, and a retreat into a protected paradise.',
    categoryListOption: [
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
    ],
    roomTypeListOption: [
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
    ],
    pricePerRoom: [
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
    ],
    schedule: [
      {
        time: '',
        descList: []
      },
    ],
    include: [
      'Full board accommodation in a twin sharing cabin.',
      'Meals, snacks, tea, coffee, juice and drinking water.',
      'Diving (4 non deco dives a day), service of a dive master, full dive tanks and weights belts.',
      'Land transfer to/from the ship.',
    ],
    notes: [
      'Exclude International or domestic air transportation, hotels and meals before and after the cruise.',
      'Exclude Dive, travel and medical insurances.',
      'Exclude Soft drinks, beer, wine or spirits.',
      'Exclude Diving equipment rental.',
      'Exclude Nitrox fills.',
      'Exclude Park entrance fee.',
      'Exclude Dive Permit USD.100,-/person.',
      'Exclude Fuel surcharge – USD 100,-/person.',
      'Exclude Tips, laundry.',
    ],
    roomGallery: [
      {
        roomType: '',
        include: [''],
        roomImages: [
          {
            img: '',
            imgAlt: '',
            blurDataUrl: '',
          },
        ],
      },
    ],
    gallery: [
      {
        img: ImagePalawanOne.src,
        imgAlt: '',
        blurDataUrl: ImagePalawanOne.blurDataURL,
      },
      {
        img: ImageBimaTwo.src,
        imgAlt: '',
        blurDataUrl: ImageBimaTwo.blurDataURL,
      },
      {
        img: ImageBimaThree.src,
        imgAlt: '',
        blurDataUrl: ImageBimaThree.blurDataURL,
      },
      {
        img: ImagePalawanTwo.src,
        imgAlt: '',
        blurDataUrl: ImagePalawanTwo.blurDataURL,
      },
    ],
  },
  {
    img: ImageMisoolRajaAmpatThree.src,
    imgAlt: 'Misool Trip',
    blurDataUrl: ImageMisoolRajaAmpatThree.blurDataURL,
    title: 'Lebaran Escape Misool Dive Trip with Majestic Voyager',
    location: 'Raja Ampat, Indonesia',
    date: 'Mar 28rd - Apr 3rd, 2025',
    endDate: {
      day: 3,
      month: 4,
      year: 2025
    },
    url: 'lebaran-escape-misool-dive-trip',
    price: '29,5jt',
    priceNum: '29500000',
    currency: 'IDR',
    duration: '4 days',
    highlight: {
      diveCount: '17 dives',
      type: 'LOB'
    },
    available: true,
    multiCurrencies: true,
    category: 'diving-trips',
    metaDescription: 'Embark on a voyage of discovery to Misool, the heart of Raja Ampat and a crown jewel of Indonesian diving. A Misool liveaboard adventure unlocks a world of unparalleled biodiversity, breathtaking underwater landscapes, and encounters that will leave you speechless.',
    metaKeywords: 'luxury dive trips, liveaboard diving, dive vacations, curated dive experiences, dive destinations, diving holidays, premium dive trips, exclusive dive travel, dive trip planner, best dive trips, diving adventures, underwater exploration',
    overview: 'Embark on a voyage of discovery to Misool, the heart of Raja Ampat and a crown jewel of Indonesian diving. A Misool liveaboard adventure unlocks a world of unparalleled biodiversity, breathtaking underwater landscapes, and encounters that will leave you speechless.',
    categoryListOption: [
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
    ],
    roomTypeListOption: [
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
    ],
    pricePerRoom: [
      {
        price: '29,500,000',
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
    ],
    schedule: [
      {
        time: '',
        descList: []
      },
    ],
    include: [
      'Airport Transfer in Sorong.',
      '6 Nights in AC Cabin on Twin Share Basis.',
      'Full Onboard Meals, Tea, Coffee, & Softdrinks.',
      '17 Dives with Tanks, Weight, & Belt.',
      'English Speaking Cruise Director.',
      'Divemaster with 1:4 Ratio.',
      'Underwater Documentation.',
      'Free Nitrox for whom certified (earlybird).',
    ],
    notes: [
      'Port Clearance Fee (IDR 200rb / day for domestic).',
      'Port Clearance Fee (USD 25 / day for foreigner).',
      'Dive equipment rental is available for IDR 400,000 / day.',
      'R4 PIN IDR 500rb for domestic.',
      'R4 PIN USD 75 for foreigner.',
      'Boat Crew Tips IDR 200rb / day',
      'The price excludes airflight tickets.',
    ],
    roomGallery: [
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
        roomImages: [
          {
            img: MajesticVoyagerSuiteOne.src,
            imgAlt: '',
            blurDataUrl: MajesticVoyagerSuiteOne.blurDataURL,
          },
          {
            img: MajesticVoyagerSuiteTwo.src,
            imgAlt: '',
            blurDataUrl: MajesticVoyagerSuiteTwo.blurDataURL,
          },
          {
            img: MajesticVoyagerSuiteThree.src,
            imgAlt: '',
            blurDataUrl: MajesticVoyagerSuiteThree.blurDataURL,
          },
          {
            img: MajesticVoyagerSuiteFour.src,
            imgAlt: '',
            blurDataUrl: MajesticVoyagerSuiteFour.blurDataURL,
          },
          {
            img: MajesticVoyagerSuiteFive.src,
            imgAlt: '',
            blurDataUrl: MajesticVoyagerSuiteFive.blurDataURL,
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
        roomImages: [
          {
            img: MajesticVoyagerExecutiveOne.src,
            imgAlt: '',
            blurDataUrl: MajesticVoyagerExecutiveOne.blurDataURL,
          },
          {
            img: MajesticVoyagerExecutiveTwo.src,
            imgAlt: '',
            blurDataUrl: MajesticVoyagerExecutiveTwo.blurDataURL,
          },
          {
            img: MajesticVoyagerExecutiveThree.src,
            imgAlt: '',
            blurDataUrl: MajesticVoyagerExecutiveThree.blurDataURL,
          },
          {
            img: MajesticVoyagerExecutiveFour.src,
            imgAlt: '',
            blurDataUrl: MajesticVoyagerExecutiveFour.blurDataURL,
          },
          {
            img: MajesticVoyagerExecutiveFive.src,
            imgAlt: '',
            blurDataUrl: MajesticVoyagerExecutiveFive.blurDataURL,
          },
          {
            img: MajesticVoyagerExecutiveSix.src,
            imgAlt: '',
            blurDataUrl: MajesticVoyagerExecutiveSix.blurDataURL,
          },
          {
            img: MajesticVoyagerExecutiveSeven.src,
            imgAlt: '',
            blurDataUrl: MajesticVoyagerExecutiveSeven.blurDataURL,
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
        roomImages: [
          {
            img: MajesticVoyagerDeluxeOne.src,
            imgAlt: '',
            blurDataUrl: MajesticVoyagerDeluxeOne.blurDataURL,
          },
          {
            img: MajesticVoyagerDeluxeTwo.src,
            imgAlt: '',
            blurDataUrl: MajesticVoyagerDeluxeTwo.blurDataURL,
          },
          {
            img: MajesticVoyagerDeluxeThree.src,
            imgAlt: '',
            blurDataUrl: MajesticVoyagerDeluxeThree.blurDataURL,
          },
          {
            img: MajesticVoyagerDeluxeFour.src,
            imgAlt: '',
            blurDataUrl: MajesticVoyagerDeluxeFour.blurDataURL,
          },
          {
            img: MajesticVoyagerDeluxeFive.src,
            imgAlt: '',
            blurDataUrl: MajesticVoyagerDeluxeFive.blurDataURL,
          },
          {
            img: MajesticVoyagerDeluxeSix.src,
            imgAlt: '',
            blurDataUrl: MajesticVoyagerDeluxeSix.blurDataURL,
          },
          {
            img: MajesticVoyagerDeluxeSeven.src,
            imgAlt: '',
            blurDataUrl: MajesticVoyagerDeluxeSeven.blurDataURL,
          },
          {
            img: MajesticVoyagerDeluxeEight.src,
            imgAlt: '',
            blurDataUrl: MajesticVoyagerDeluxeEight.blurDataURL,
          },
          {
            img: MajesticVoyagerDeluxeNine.src,
            imgAlt: '',
            blurDataUrl: MajesticVoyagerDeluxeNine.blurDataURL,
          },
        ],
      },
    ],
    gallery: [
      {
        img: ImageMisoolRajaAmpatThree.src,
        imgAlt: '',
        blurDataUrl: ImageMisoolRajaAmpatThree.blurDataURL,
      },
      {
        img: ImageBimaTwo.src,
        imgAlt: '',
        blurDataUrl: ImageBimaTwo.blurDataURL,
      },
      {
        img: ImageBimaThree.src,
        imgAlt: '',
        blurDataUrl: ImageBimaThree.blurDataURL,
      },
      {
        img: MajesticVoyageMain.src,
        imgAlt: '',
        blurDataUrl: MajesticVoyageMain.blurDataURL,
      },
    ],
  },
  {
    img: ImagePalawanTwo.src,
    imgAlt: 'Tubbataha Trip',
    blurDataUrl: ImagePalawanTwo.blurDataURL,
    title: 'Tubbataha Dive Trip with MY Resolute',
    location: 'Palawan, Philippines',
    date: 'May 7th - 13th, 2025',
    endDate: {
      day: 13,
      month: 5,
      year: 2025
    },
    url: 'tubbataha-dive-trip',
    price: '2,590',
    priceNum: '2590',
    currency: 'USD',
    duration: '4 days',
    highlight: {
      diveCount: '16 dives',
      type: 'LOB'
    },
    available: true,
    multiCurrencies: false,
    category: 'diving-trips',
    metaDescription: 'Embark on an unforgettable voyage to Tubbataha Reefs Natural Park, a UNESCO World Heritage Site and global crown jewel of marine biodiversity. Accessible only by liveaboard, a Tubbataha diving trip promises an unparalleled exploration of vibrant coral reefs, encounters with majestic marine life, and a retreat into a protected paradise.',
    metaKeywords: 'luxury dive trips, liveaboard diving, dive vacations, curated dive experiences, dive destinations, diving holidays, premium dive trips, exclusive dive travel, dive trip planner, best dive trips, diving adventures, underwater exploration',
    overview: 'Embark on an unforgettable voyage to Tubbataha Reefs Natural Park, a UNESCO World Heritage Site and global crown jewel of marine biodiversity. Accessible only by liveaboard, a Tubbataha diving trip promises an unparalleled exploration of vibrant coral reefs, encounters with majestic marine life, and a retreat into a protected paradise.',
    categoryListOption: [
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
    ],
    roomTypeListOption: [
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
    ],
    pricePerRoom: [
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
    ],
    schedule: [
      {
        time: '',
        descList: []
      },
    ],
    include: [
      'Full board accommodation in a twin sharing cabin.',
      'Meals, snacks, tea, coffee, juice and drinking water.',
      'Diving (4 non deco dives a day), service of a dive master, full dive tanks and weights belts.',
      'Land transfer to/from the ship.',
    ],
    notes: [
      'Exclude International or domestic air transportation, hotels and meals before and after the cruise.',
      'Exclude Dive, travel and medical insurances.',
      'Exclude Soft drinks, beer, wine or spirits.',
      'Exclude Diving equipment rental.',
      'Exclude Nitrox fills.',
      'Exclude Park entrance fee.',
      'Exclude Dive Permit USD.100,-/person.',
      'Exclude Fuel surcharge – USD 100,-/person.',
      'Exclude Tips, laundry.',
    ],
    roomGallery: [
      {
        roomType: '',
        include: [''],
        roomImages: [
          {
            img: '',
            imgAlt: '',
            blurDataUrl: '',
          },
        ],
      },
    ],
    gallery: [
      {
        img: ImagePalawanTwo.src,
        imgAlt: '',
        blurDataUrl: ImagePalawanTwo.blurDataURL,
      },
      {
        img: ImageBimaTwo.src,
        imgAlt: '',
        blurDataUrl: ImageBimaTwo.blurDataURL,
      },
      {
        img: ImageBimaThree.src,
        imgAlt: '',
        blurDataUrl: ImageBimaThree.blurDataURL,
      },
      {
        img: ImagePalawanOne.src,
        imgAlt: '',
        blurDataUrl: ImagePalawanOne.blurDataURL,
      },
    ],
  },
];
