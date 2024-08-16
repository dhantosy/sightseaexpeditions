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
];
