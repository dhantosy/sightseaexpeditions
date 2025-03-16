import {
  ImageBimaMain,
  ImageBimaTwo,
  ImageBimaThree,
  ImageBimaFour,
  ImageBimaFive,
  ImageBandarNeiraOne,
  ImageBandarNeiraTwo,
  ImageBandarNeiraThree,
  ImageBandarNeiraFour,
  ImageBandarNeiraFive,
  ImageWayagMain,
  ImageMaldivesOne,
  ImageMaldivesTwo,
  ImageMisoolRajaAmpatOne,
  ImageMisoolRajaAmpatThree,
  ImagePalawanOne,
  ImagePalawanTwo,
  ImageLabuanBajoFour,
  ImageTimorLesteOne,
  ImageTimorLesteTwo,
  ImageTimorLesteThree,
  ImageLombokTwo,
  ImageMalapascuaMain,
  ImageSipadanMain,
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
    img: ImageMalapascuaMain.src,
    imgAlt: 'Malapascua Dive Trip',
    blurDataUrl: ImageMalapascuaMain.blurDataURL,
    title: 'Malapascua Dive Trip',
    location: 'Philippines',
    date: 'May 3rd - 6th, 2025',
    endDate: {
      day: 1,
      month: 11,
      year: 2025
    },
    url: 'malapascua-dive-trip',
    price: '7,9jt',
    priceNum: '7900000',
    currency: 'IDR',
    duration: '6 days',
    highlight: {
      diveCount: '6 dives',
      type: 'Land Based'
    },
    available: false,
    multiCurrencies: false,
    category: 'diving-trips',
    metaDescription: 'Experience an unforgettable land-based diving trip in Malapascua, home to the famous thresher sharks, vibrant coral reefs, and diverse marine life. Explore world-class dive sites and enjoy the beauty of this tropical paradise.',
    metaKeywords: 'Malapascua diving, land-based diving Malapascua, thresher shark diving, Philippines scuba diving, Malapascua dive sites, best diving in Malapascua, coral reef diving, underwater adventure, diving trips Philippines, Malapascua marine life.',
    overview: 'Experience an unforgettable land-based diving trip in Malapascua, home to the famous thresher sharks, vibrant coral reefs, and diverse marine life. Explore world-class dive sites and enjoy the beauty of this tropical paradise.',
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
        label: 'Select Room Type'
      },
      {
        value: 'Gardern View Room',
        label: 'Gardern View Room'
      },
      {
        value: 'Beach View Room',
        label: 'Beach View Room'
      },
    ],
    pricePerRoom: [
      {
        price: '7,900,000',
        currency: 'IDR',
        roomType: 'Gardern View Room',
        category: 'Domestic / KITAS',
      },
      {
        price: '9,500,000',
        currency: 'IDR',
        roomType: 'Beach View Room',
        category: 'Domestic / KITAS',
      },
      {
        price: '7,900,000',
        currency: 'IDR',
        roomType: 'Gardern View Room',
        category: 'foreigner',
      },
      {
        price: '9,500,000',
        currency: 'IDR',
        roomType: 'Beach View Room',
        category: 'foreigner',
      },
    ],
    schedule: [
      {
        time: 'Day 1',
        descList: [
          '⁠Depart from Cebu before 11am',
          '⁠Transfer by car to Bantanyan',
          '⁠Transfer by boat to Malap',
          '⁠Arrive in Malapascua Island',
          '⁠Hotel check in',
        ]
      },
      {
        time: 'Day 2',
        descList: [
          '⁠3x boat dives for thresher & tiger shark',
        ]
      },
      {
        time: 'Day 3',
        descList: [
          '3x boat dives for thresher & tiger shark',
        ]
      },
      {
        time: 'Day 4',
        descList: [
          'Hotel check out',
          '⁠Transfer by boat to Bantanyan',
          '⁠Transfer by car to Cebu Airport',
        ]
      },
    ],
    include: [
      '6x thresher & tiger shark dives',
      '⁠4D3N stay at Dive Resort with breakdast.',
      'Weight, tanks & local dive guide',
      '⁠Underwater documentation',
      '⁠Marine and environmental fee',
      '⁠Private airport van transfer',
      '⁠Private  boat transfer',
    ],
    notes: [
      'Exclude ⁠Any personal expenditure such as laundry, personal medicine, etc',
      'Exclude lunch & dinner',
      'Exclude ⁠Airfare to/from Cebu',
      'Dive equipment rental is available',
      '⁠Tip for local guide',
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
        img: ImageMalapascuaMain.src,
        imgAlt: '',
        blurDataUrl: ImageMalapascuaMain.blurDataURL,
      },
      {
        img: ImageBandarNeiraFour.src,
        imgAlt: '',
        blurDataUrl: ImageBandarNeiraFour.blurDataURL,
      },
      {
        img: ImageBandarNeiraThree.src,
        imgAlt: '',
        blurDataUrl: ImageBandarNeiraThree.blurDataURL,
      },
      {
        img: ImageBandarNeiraFive.src,
        imgAlt: '',
        blurDataUrl: ImageBandarNeiraFive.blurDataURL,
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
    price: '28,5jt',
    priceNum: '28500000',
    currency: 'IDR',
    duration: '7 days',
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
    img: ImageSipadanMain.src,
    imgAlt: 'Sipadan Dive Trip',
    blurDataUrl: ImageSipadanMain.blurDataURL,
    title: 'Sipadan Diving Trip',
    location: 'Malaysia',
    date: 'Apr 4th - 7th, 2025',
    endDate: {
      day: 1,
      month: 11,
      year: 2025
    },
    url: 'sipadan-diving-trip',
    price: '12,5jt',
    priceNum: '12500000',
    currency: 'IDR',
    duration: '4 days',
    highlight: {
      diveCount: '6 dives',
      type: 'Land Based'
    },
    available: true,
    multiCurrencies: false,
    category: 'diving-trips',
    metaDescription: 'Explore the world-class diving destination of Sipadan, Malaysia. Encounter vibrant coral reefs, majestic sea turtles, schools of barracuda, and hammerhead sharks in crystal-clear waters. Book your Sipadan diving trip today for an unforgettable underwater adventure!',
    metaKeywords: 'Sipadan diving, Malaysia dive trips, scuba diving Sipadan, Sipadan Island diving, best dive sites Malaysia, barracuda point, turtle cavern, Sipadan liveaboard, dive packages Sipadan, Sipadan marine life',
    overview: 'Sipadan Island, located off the coast of Sabah, Malaysia, is one of the world’s top dive destinations, renowned for its crystal-clear waters, abundant marine life, and dramatic coral walls. A protected marine park, Sipadan offers encounters with barracuda tornadoes, reef sharks, sea turtles, and mesmerizing underwater caves. Due to conservation efforts, daily dive permits are limited, ensuring an exclusive and pristine experience for certified divers. Our Sipadan dive trips include guided dives, permit arrangements, and accommodation options ranging from budget-friendly lodges to luxury resorts. Whether you`re an experienced diver or looking for an unforgettable adventure, Sipadan promises a once-in -a - lifetime diving experience.',
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
        label: 'Select Package Type'
      },
      {
        value: '4D3N - Uncle Chang Homestay',
        label: '4D3N - Uncle Chang Homestay'
      },
      {
        value: '4D3N - Light House Hotel',
        label: '4D3N - Light House Hotel'
      },
    ],
    pricePerRoom: [
      {
        price: '12,500,000',
        currency: 'IDR',
        roomType: '4D3N - Uncle Chang Homestay',
        category: 'Domestic / KITAS',
      },
      {
        price: '14,000,000',
        currency: 'IDR',
        roomType: '4D3N - Light House Hotel',
        category: 'Domestic / KITAS',
      },
      {
        price: '12,500,000',
        currency: 'IDR',
        roomType: '4D3N - Uncle Chang Homestay',
        category: 'foreigner',
      },
      {
        price: '14,000,000',
        currency: 'IDR',
        roomType: '4D3N - Light House Hotel',
        category: 'foreigner',
      },
    ],
    schedule: [
      {
        time: 'Day 1',
        descList: [
          '⁠Depart from Tawau before 6pm',
          '⁠Transfer by van to Semporna',
          '⁠Hotel c/i',
          '⁠Free time',
        ]
      },
      {
        time: 'Day 2',
        descList: [
          '⁠2x boat dives tp Sipadan & 1x to Mabul',
        ]
      },
      {
        time: 'Day 3',
        descList: [
          '⁠⁠2x boat dives tp Sipadan & 1x to Mabul',
        ]
      },
      {
        time: 'Day 4',
        descList: [
          '⁠Hotel c/o',
          '⁠Transfer by van to Tawau Airport',
          'SEA YOU NEXT TRIP!',
        ]
      },
    ],
    include: [
      '⁠4x boat dive in Sipadan Island',
      '⁠⁠2x boat dive in Mabul Island',
      '⁠4D3N stay base on twin share + breakfast',
      '⁠Lunch during diving activity',
      '⁠Weight, tanks & local dive guide',
      '⁠Marine and environmental fee',
      '⁠Private airport van transfer',
    ],
    notes: [
      'Exclude ⁠Any personal expenditure such as laundry, personal medicine, etc',
      'Exclude dinner',
      'Exclude ⁠Airfare to/from Tawau',
      'Dive equipment rental is available',
      '⁠⁠Tip for local guide 125k / day',
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
        img: ImageSipadanMain.src,
        imgAlt: '',
        blurDataUrl: ImageSipadanMain.blurDataURL,
      },
      {
        img: ImageBandarNeiraFour.src,
        imgAlt: '',
        blurDataUrl: ImageBandarNeiraFour.blurDataURL,
      },
      {
        img: ImageBandarNeiraThree.src,
        imgAlt: '',
        blurDataUrl: ImageBandarNeiraThree.blurDataURL,
      },
      {
        img: ImageBandarNeiraFive.src,
        imgAlt: '',
        blurDataUrl: ImageBandarNeiraFive.blurDataURL,
      },
    ],
  },
  {
    img: ImageBandarNeiraFour.src,
    imgAlt: 'Maratua Dive Trip',
    blurDataUrl: ImageBandarNeiraFour.blurDataURL,
    title: 'Maratua Diving Trip',
    location: 'Kalimantan',
    date: 'Apr 17th - 21st, 2025',
    endDate: {
      day: 1,
      month: 11,
      year: 2025
    },
    url: 'maratua-diving-trip',
    price: '11jt',
    priceNum: '11000000',
    currency: 'IDR',
    duration: '5 days',
    highlight: {
      diveCount: '9 dives',
      type: 'Land Based'
    },
    available: true,
    multiCurrencies: false,
    category: 'diving-trips',
    metaDescription: 'Explore the breathtaking underwater world of Maratua with our exclusive dive trips. Encounter vibrant coral reefs, majestic manta rays, and thrilling drift dives in one of Indonesia’s top diving destinations. Book your Maratua diving adventure today!',
    metaKeywords: 'Maratua diving, Maratua dive trips, Indonesia diving, best dive sites Maratua, manta ray diving, drift diving Indonesia, coral reef diving, scuba diving Maratua, dive resorts Maratua, Maratua Island underwater',
    overview: 'Maratua Island, located in the heart of the Coral Triangle, offers some of Indonesia`s most spectacular diving experiences.Known for its rich marine biodiversity, crystal- clear waters, and dramatic underwater landscapes, Maratua is a paradise for divers seeking adventure.Highlights include thrilling drift dives at The Channel, encounters with manta rays at Sangalaki, and the vibrant coral gardens of Kakaban.Whether you`re an experienced diver or a beginner, Maratua provides unforgettable underwater encounters. Our dive trips offer expert guides, comfortable accommodations, and seamless logistics to ensure a stress-free and exhilarating experience. Join us for a world-class dive adventure in Maratua!',
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
        label: 'Select Package Type'
      },
      {
        value: 'Ocean View Villa',
        label: 'Ocean View Villa'
      },
      {
        value: 'Deluxe Forest',
        label: 'Deluxe Forest'
      },
      {
        value: 'Standard Garden',
        label: 'Standard Garden'
      },
    ],
    pricePerRoom: [
      {
        price: '17,500,000',
        currency: 'IDR',
        roomType: 'Ocean View Villa',
        category: 'Domestic / KITAS',
      },
      {
        price: '15,000,000',
        currency: 'IDR',
        roomType: 'Deluxe Forest',
        category: 'Domestic / KITAS',
      },
      {
        price: '11,000,000',
        currency: 'IDR',
        roomType: 'Standard Garden',
        category: 'Domestic / KITAS',
      },
      {
        price: '17,500,000',
        currency: 'IDR',
        roomType: 'Ocean View Villa',
        category: 'foreigner',
      },
      {
        price: '15,000,000',
        currency: 'IDR',
        roomType: 'Deluxe Forest',
        category: 'foreigner',
      },
      {
        price: '11,000,000',
        currency: 'IDR',
        roomType: 'Standard Garden',
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
      '⁠Berau / Maratua Airport transfer',
      '⁠4 nights at GNMR on twin sharing basis',
      'Full meals (breakfast, lunch, snack & dinner)',
      '9x dives for 5D4N package with tanks & weight',
      'Land & sea transportation',
      'Entrance fee Maratua, Kakaban & Sangkalaki',
    ],
    notes: [
      'Exclude ⁠Any personal expenditure such as laundry, personal medicine, etc',
      'Travel insurance',
      'Exclude ⁠Airfare',
      'Dive equipment rental is available',
      'Crew gratitude / tip IDR 150k/day/pax',
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
        img: ImageBandarNeiraFour.src,
        imgAlt: '',
        blurDataUrl: ImageBandarNeiraFour.blurDataURL,
      },
      {
        img: ImageBandarNeiraFour.src,
        imgAlt: '',
        blurDataUrl: ImageBandarNeiraFour.blurDataURL,
      },
      {
        img: ImageBandarNeiraThree.src,
        imgAlt: '',
        blurDataUrl: ImageBandarNeiraThree.blurDataURL,
      },
      {
        img: ImageBandarNeiraFive.src,
        imgAlt: '',
        blurDataUrl: ImageBandarNeiraFive.blurDataURL,
      },
    ],
  },
  {
    img: ImageBimaTwo.src,
    imgAlt: 'Coron Dive Trip',
    blurDataUrl: ImageBimaTwo.blurDataURL,
    title: 'Coron Dive Trip',
    location: 'Philippines',
    date: 'Apr 27th - May 1st, 2025',
    endDate: {
      day: 1,
      month: 11,
      year: 2025
    },
    url: 'coron-dive-trip',
    price: '9,9jt',
    priceNum: '9900000',
    currency: 'IDR',
    duration: '4 days',
    highlight: {
      diveCount: '6 dives',
      type: 'Land Based'
    },
    available: true,
    multiCurrencies: false,
    category: 'diving-trips',
    metaDescription: 'Explore the breathtaking underwater world of Coron with our land-based diving trips. Discover vibrant coral reefs, stunning WWII wrecks, and diverse marine life while enjoying comfortable accommodations on land. Book your adventure today!',
    metaKeywords: 'Coron diving trip, land-based diving Coron, scuba diving Coron, wreck diving Philippines, Coron dive sites, reef diving Coron, underwater adventure, diving vacation, dive travel Coron, best diving spots in Coron',
    overview: 'Explore the breathtaking underwater world of Coron with our land-based diving trips. Discover vibrant coral reefs, stunning WWII wrecks, and diverse marine life while enjoying comfortable accommodations on land. Book your adventure today!',
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
        label: 'Select Package Type'
      },
      {
        value: '4D3N',
        label: '4D3N'
      },
      {
        value: '5D4N - Island Hopping',
        label: '5D4N - Island Hopping'
      },
      {
        value: '5D4N - Dugong dive',
        label: '5D4N - Dugong dive'
      },
    ],
    pricePerRoom: [
      {
        price: '9,900,000',
        currency: 'IDR',
        roomType: '4D3N',
        category: 'Domestic / KITAS',
      },
      {
        price: '11,000,000',
        currency: 'IDR',
        roomType: '5D4N - Island Hopping',
        category: 'Domestic / KITAS',
      },
      {
        price: '13,000,000',
        currency: 'IDR',
        roomType: '5D4N - Dugong dive',
        category: 'Domestic / KITAS',
      },
      {
        price: '9,900,000',
        currency: 'IDR',
        roomType: '4D3N',
        category: 'foreigner',
      },
      {
        price: '11,000,000',
        currency: 'IDR',
        roomType: '5D4N - Island Hopping',
        category: 'foreigner',
      },
      {
        price: '13,000,000',
        currency: 'IDR',
        roomType: '5D4N - Dugong dive',
        category: 'foreigner',
      },
    ],
    schedule: [
      {
        time: 'Day 1',
        descList: [
          'Arrive at Coron Island',
          '⁠Trasfer from airport to the hotel',
          '⁠Free time',
        ]
      },
      {
        time: 'Day 2',
        descList: [
          '3x dives',
          '⁠Olympia Maru wreck, ⁠Kogyo Maru Wreck, ⁠Murazan Maru Wreck',
        ]
      },
      {
        time: 'Day 3',
        descList: [
          '3x dives',
          '⁠Akishushima Maru Wreck, ⁠Akikawa  Maru Wreck, ⁠Lusong Gunboat Wreck',
        ]
      },
      {
        time: 'Day 4',
        descList: [
          '2 options, Beach or Lake Hopping',
          '⁠Barracuda Lake',
          '⁠Twin Lagoon',
          '⁠Turtle point',
        ]
      },
      {
        time: 'Day 5',
        descList: [
          '⁠Breakfast',
          '⁠Transfer to Coron Airport',
          'SEA YOU NEXT TRIP',
        ]
      },
    ],
    include: [
      '⁠Exclusive tour with private boat',
      '⁠3-4 nights at Venus Royal hotel on twin sharing basis',
      'Weight, tanks & local dive guide',
      '⁠Breakfast & Lunch during activities',
      '⁠Marine and environmental fee',
      '⁠Private airport transfer',
    ],
    notes: [
      'Exclude ⁠Any personal expenditure such as laundry, personal medicine, etc',
      'Exclude dinner',
      'Exclude ⁠Airfare to/from Coron',
      'Dive equipment rental is available',
      '⁠Single supplement 750k / night',
      '⁠⁠Tip for local guide 125k / day',
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
        img: ImageMalapascuaMain.src,
        imgAlt: '',
        blurDataUrl: ImageMalapascuaMain.blurDataURL,
      },
      {
        img: ImageBandarNeiraFour.src,
        imgAlt: '',
        blurDataUrl: ImageBandarNeiraFour.blurDataURL,
      },
      {
        img: ImageBandarNeiraThree.src,
        imgAlt: '',
        blurDataUrl: ImageBandarNeiraThree.blurDataURL,
      },
      {
        img: ImageBandarNeiraFive.src,
        imgAlt: '',
        blurDataUrl: ImageBandarNeiraFive.blurDataURL,
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
  {
    img: ImageMaldivesTwo.src,
    imgAlt: 'Maldives Trip',
    blurDataUrl: ImageMaldivesTwo.blurDataURL,
    title: 'Maldives Dive Trip with Maldives Legend Odyssey',
    location: 'Maldives',
    date: 'May 24th - 31st, 2025',
    endDate: {
      day: 2,
      month: 2,
      year: 2025
    },
    url: 'maldives-dive-trip-legend-odyssey',
    price: '1,750',
    priceNum: '1750',
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
        value: 'Room 4 & 5 - Lower Deck',
        label: 'Room 4 & 5 - Lower Deck'
      },
      {
        value: 'Room 1, 2, 3, 6, 7, 8 - Lower Deck',
        label: 'Room 1, 2, 3, 6, 7, 8 - Lower Deck'
      },
      {
        value: 'Room 9 - 11 - Upper Deck',
        label: 'Room 9 - 11 - Upper Deck'
      },
    ],
    pricePerRoom: [
      {
        price: '1,750',
        currency: 'USD',
        roomType: 'Room 4 & 5 - Lower Deck',
        category: 'Domestic / KITAS',
      },
      {
        price: '1,850',
        currency: 'USD',
        roomType: 'Room 1, 2, 3, 6, 7, 8 - Lower Deck',
        category: 'Domestic / KITAS',
      },
      {
        price: '2,050',
        currency: 'USD',
        roomType: 'Room 9 - 11 - Upper Deck',
        category: 'Domestic / KITAS',
      },
      {
        price: '1,750',
        currency: 'USD',
        roomType: 'Room 4 & 5 - Lower Deck',
        category: 'foreigner',
      },
      {
        price: '1,850',
        currency: 'USD',
        roomType: 'Room 1, 2, 3, 6, 7, 8 - Lower Deck',
        category: 'foreigner',
      },
      {
        price: '2,050',
        currency: 'USD',
        roomType: 'Room 9 - 11 - Upper Deck',
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
      '⁠Meals – Daily Breakfast, Lunch and Dinner on board.',
      'Free Coffee, Tea & Snack on board.',
      '⁠Up to 17 dives with experience local guide (1:6)',
      'Male Airport Transfer.',
      'GST 12% Taxes.',
      'Underwater documentation.',
    ],
    notes: [
      'Exclude All flight and taxes',
      'Green Tax - USD 42,-',
      'BBQ Dinner at Desert Island - USD 10,- /pax.',
      'Deep South Fuel surcharge USD 100,-.',
      'Equipment Rental.',
      'Exclude dive guide ratio 1:6',
      'BCD USD$8 / day',
      'REG USD$8 / day',
      'Wetsuit USD$8 / day',
      'Fin USD$5 / day',
      'Mask & Snorkel USD$8 / day',
      'Reef Hook USD$5 / day',
      'Dive Computer USD$5 / dive',
      'Upgrade to 15 ltr tank USD$5 / dive',
      'Torch USD$10 per day',
      'Travel and dive insurance (recommended)',
      'Exclude Porter services',
      'Tips for boat crew (USD 100,- / pax Mandatory)',
      'Exclude drink from the bar',
      'For Nitrox Air usage 12ltr tank (certified Nitrox Diver only) ADD another USD 10 per dive/tank',
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
    img: ImageBandarNeiraThree.src,
    imgAlt: 'Luwuk - Tompotika Dive Trip',
    blurDataUrl: ImageBandarNeiraThree.blurDataURL,
    title: 'Luwuk - Tompotika Dive Trip',
    location: 'Indonesia',
    date: 'Jun 6th - 10th, 2025',
    endDate: {
      day: 1,
      month: 11,
      year: 2025
    },
    url: 'luwuk-tompotika-dive-trip',
    price: '12jt',
    priceNum: '12000000',
    currency: 'IDR',
    duration: '4 days',
    highlight: {
      diveCount: '5 dives',
      type: 'Land Based'
    },
    available: true,
    multiCurrencies: false,
    category: 'diving-trips',
    metaDescription: 'Explore the breathtaking underwater world of Luwuk - Tompotika on a land-based diving trip. Discover pristine coral reefs, diverse marine life, and crystal-clear waters in one of Indonesia’s hidden diving paradises. Book your adventure today!',
    metaKeywords: 'Luwuk diving, Tompotika diving, land-based diving Indonesia, dive trip Luwuk, best dive sites Sulawesi, scuba diving Luwuk Tompotika, underwater paradise Indonesia, coral reefs Luwuk, diving tour Indonesia, marine biodiversity Sulawesi',
    overview: 'Explore the breathtaking underwater world of Luwuk - Tompotika on a land-based diving trip. Discover pristine coral reefs, diverse marine life, and crystal-clear waters in one of Indonesia’s hidden diving paradises. Book your adventure today!',
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
        label: 'Select Package Type'
      },
      {
        value: '4D3N',
        label: '4D3N'
      },
      {
        value: '5D4N',
        label: '5D4N'
      },
    ],
    pricePerRoom: [
      {
        price: '12,000,000',
        currency: 'IDR',
        roomType: '4D3N',
        category: 'Domestic / KITAS',
      },
      {
        price: '14,500,000',
        currency: 'IDR',
        roomType: '5D4N',
        category: 'Domestic / KITAS',
      },
      {
        price: '12,000,000',
        currency: 'IDR',
        roomType: '4D3N',
        category: 'foreigner',
      },
      {
        price: '14,500,000',
        currency: 'IDR',
        roomType: '5D4N',
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
      'Airport transfer',
      'Breakfast,lunch dinner',
      'Weight, tanks & local dive guide',
      '5 boat dives with tanks & weight',
      'Unlimited dive at Tompotika house reef (non guided)',
      'Kayaks and bicycle use in the limit of availability',
      '4D3N stay at Tompotika Dive Lodge (twin share basis)',
      '2D1N stay at hotel in Luwuk for Paisupok trip',
      'Private land & sea transportation during the trip',
      'Underwater & aerial documentation',
    ],
    notes: [
      'Exclude ⁠Any personal expenditure such as laundry, personal medicine, etc',
      'Exclude domestic flight',
      'Additional dive or night dive 650k / dive',
      'Dive equipment rental 650k / day',
      'Nitrox use 75k / tank',
      '⁠⁠Tip for local guide 150k / day',
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
        img: ImageBandarNeiraThree.src,
        imgAlt: '',
        blurDataUrl: ImageBandarNeiraThree.blurDataURL,
      },
      {
        img: ImageBandarNeiraFour.src,
        imgAlt: '',
        blurDataUrl: ImageBandarNeiraFour.blurDataURL,
      },
      {
        img: ImageBandarNeiraThree.src,
        imgAlt: '',
        blurDataUrl: ImageBandarNeiraThree.blurDataURL,
      },
      {
        img: ImageBandarNeiraFive.src,
        imgAlt: '',
        blurDataUrl: ImageBandarNeiraFive.blurDataURL,
      },
    ],
  },
  {
    img: ImageBimaMain.src,
    imgAlt: 'BIMA -  KOMODO LOB Trip',
    blurDataUrl: ImageBimaMain.blurDataURL,
    title: 'Bima - Komodo Dive Trip with Majestic Voyager',
    location: 'West Komodo, Indonesia',
    date: 'Jun 24th - 29th, 2024',
    endDate: {
      day: 21,
      month: 8,
      year: 2024
    },
    url: 'bima-komodo-majestic-voyager',
    price: '21jt',
    priceNum: '21000000',
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
        price: '21,000,000',
        currency: 'IDR',
        roomType: 'Deluxe - Lower Deck',
        category: 'Domestic / KITAS',
      },
      {
        price: '24,000,000',
        currency: 'IDR',
        roomType: 'Executive - Upper Deck',
        category: 'Domestic / KITAS',
      },
      {
        price: '26,000,000',
        currency: 'IDR',
        roomType: 'Suite - Main Deck',
        category: 'Domestic / KITAS',
      },
      {
        price: '1,700',
        currency: 'USD',
        roomType: 'Deluxe - Lower Deck',
        category: 'foreigner',
      },
      {
        price: '1,900',
        currency: 'USD',
        roomType: 'Executive - Upper Deck',
        category: 'foreigner',
      },
      {
        price: '2,100',
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
      '⁠return airport transfers in Bajo',
      '⁠5 nights in AC cabin on twin share basis',
      'Full Onboard Meals, Tea, Coffee, & Softdrinks.',
      '14 Dives with Tanks, Weight, & Belt.',
      'English Speaking Cruise Director.',
      'Divemaster with 1:4 Ratio.',
      'Underwater Documentation.',
    ],
    notes: [
      'Port Clearance Fee (IDR 400rb / day for domestic).',
      'Port Clearance Fee (USD 25 / day for foreigner).',
      'Dive equipment rental is available for IDR 400,000 / day.',
      'Boat Crew Tips IDR 200rb / day',
      'The price excludes airflight tickets to Komodo.',
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
    img: ImageBandarNeiraTwo.src,
    imgAlt: 'Banda Neira Trip',
    blurDataUrl: ImageBandarNeiraTwo.blurDataURL,
    title: 'Banda Neira Dive Trip with Majestic Voyager - September',
    location: 'Maluku, Indonesia',
    date: 'Sep 21st - 27th, 2025',
    endDate: {
      day: 1,
      month: 11,
      year: 2025
    },
    url: 'banda-neira-majestic-voyager-september',
    price: '2,800',
    priceNum: '2800',
    currency: 'USD',
    duration: '7 days',
    highlight: {
      diveCount: '+15 dives',
      type: 'LOB'
    },
    available: false,
    multiCurrencies: true,
    category: 'diving-trips',
    metaDescription: 'Embark on an extraordinary journey through time and tide with a liveaboard diving trip to Banda Neira. This captivating Indonesian archipelago, steeped in colonial history and volcanic allure, offers a unique blend of topside exploration and breathtaking underwater adventures.',
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
        price: '29,500,000',
        currency: 'IDR',
        roomType: 'Deluxe - Lower Deck',
        category: 'Domestic / KITAS',
      },
      {
        price: '32,000,000',
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
      'Return airport transfers in Ambon.',
      '⁠6 nights in AC Cabins aboard on sharing basis.',
      '⁠Full onboard meals, tea, coffee, softdrink & water.',
      '⁠Historical & Heritage land tour at Banda Neira.',
      '⁠Unlimited tea, coffee, softdrink and mineral water.',
      '⁠15+ dives with tanks, weight & weight belt.',
      'English speaking cruise director.',
      'Dive master & local dive guide.',
      'Underwater photo/video documentation.',
    ],
    notes: [
      '⁠Exclude airflight tickets to Ambon.',
      'Port Clearance Fee (USD 25 / day for foreigner).',
      'Dive equipment rental is available for IDR 400,000 / day.',
      'Crew gratitudes min. IDR 200rb / day / pax.',
      '⁠Port clearance fee IDR 250k / day / pax (domestic).',
      '⁠Port clearance fee  USD 25,- / day / pax (foreigner).',
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
        img: ImageBandarNeiraFour.src,
        imgAlt: '',
        blurDataUrl: ImageBandarNeiraFour.blurDataURL,
      },
      {
        img: ImageBandarNeiraThree.src,
        imgAlt: '',
        blurDataUrl: ImageBandarNeiraThree.blurDataURL,
      },
      {
        img: ImageBandarNeiraFive.src,
        imgAlt: '',
        blurDataUrl: ImageBandarNeiraFive.blurDataURL,
      },
    ],
  },
  {
    img: ImageBandarNeiraTwo.src,
    imgAlt: 'Banda Neira Trip',
    blurDataUrl: ImageBandarNeiraTwo.blurDataURL,
    title: 'Banda Neira Dive Trip with Oceanix Voyager - September',
    location: 'Maluku, Indonesia',
    date: 'Sep 29th - Oct 4th, 2025',
    endDate: {
      day: 1,
      month: 11,
      year: 2025
    },
    url: 'banda-neira-oceanix-voyager-September',
    price: '2,290',
    priceNum: '2290',
    currency: 'USD',
    duration: '6 days',
    highlight: {
      diveCount: '+15 dives',
      type: 'LOB'
    },
    available: true,
    multiCurrencies: true,
    category: 'diving-trips',
    metaDescription: 'Embark on an extraordinary journey through time and tide with a liveaboard diving trip to Banda Neira. This captivating Indonesian archipelago, steeped in colonial history and volcanic allure, offers a unique blend of topside exploration and breathtaking underwater adventures.',
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
        price: '29,500,000',
        currency: 'IDR',
        roomType: 'Deluxe - Lower Deck',
        category: 'Domestic / KITAS',
      },
      {
        price: '33,000,000',
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
        price: '2,150',
        currency: 'USD',
        roomType: 'Deluxe - Lower Deck',
        category: 'foreigner',
      },
      {
        price: '2,550',
        currency: 'USD',
        roomType: 'Executive - Upper Deck',
        category: 'foreigner',
      },
      {
        price: '2,750',
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
      // 'Return airport transfers in Ambon.',
      // '⁠6 nights in AC Cabins aboard on sharing basis.',
      // '⁠Full onboard meals, tea, coffee, softdrink & water.',
      // '⁠Historical & Heritage land tour at Banda Neira.',
      // '⁠Unlimited tea, coffee, softdrink and mineral water.',
      // '⁠15+ dives with tanks, weight & weight belt.',
      // 'English speaking cruise director.',
      // 'Dive master & local dive guide.',
      // 'Underwater photo/video documentation.',
    ],
    notes: [
      // '⁠Exclude airflight tickets to Ambon.',
      // 'Port Clearance Fee (USD 25 / day for foreigner).',
      // 'Dive equipment rental is available for IDR 400,000 / day.',
      // 'Crew gratitudes min. IDR 200rb / day / pax.',
      // '⁠Port clearance fee IDR 250k / day / pax (domestic).',
      // '⁠Port clearance fee  USD 25,- / day / pax (foreigner).',
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
        img: ImageBandarNeiraTwo.src,
        imgAlt: '',
        blurDataUrl: ImageBandarNeiraTwo.blurDataURL,
      },
      {
        img: ImageBandarNeiraFour.src,
        imgAlt: '',
        blurDataUrl: ImageBandarNeiraFour.blurDataURL,
      },
      {
        img: ImageBandarNeiraThree.src,
        imgAlt: '',
        blurDataUrl: ImageBandarNeiraThree.blurDataURL,
      },
      {
        img: ImageBandarNeiraFive.src,
        imgAlt: '',
        blurDataUrl: ImageBandarNeiraFive.blurDataURL,
      },
    ],
  },
  {
    img: ImageBimaThree.src,
    imgAlt: 'Ambon, Suanggi, Banda Dive Trip with Majestic Voyager',
    blurDataUrl: ImageBimaThree.blurDataURL,
    title: 'Ambon, Suanggi, Banda Dive Trip with Majestic Voyager',
    location: 'Ambon, Indonesia',
    date: 'Oct 12th - 17th, 2025',
    endDate: {
      day: 1,
      month: 11,
      year: 2025
    },
    url: 'ambon-suanggi-banda-dive-majestic-voyager',
    price: '1,975',
    priceNum: '1975',
    currency: 'USD',
    duration: '6 days',
    highlight: {
      diveCount: '12 dives',
      type: 'LOB'
    },
    available: true,
    multiCurrencies: true,
    category: 'diving-trips',
    metaDescription: 'Experience an unforgettable liveaboard diving adventure in Ambon, Suanggi, and Banda. Explore vibrant coral reefs, encounter rare marine life, and dive into the rich history of the Banda Sea. Join us for an extraordinary underwater journey!',
    metaKeywords: 'liveaboard diving, Ambon diving, Suanggi diving, Banda diving, Banda Sea diving, Indonesia liveaboard, coral reefs, underwater adventure, scuba diving trip, dive Banda Islands, Ambon liveaboard, Suanggi dive sites',
    overview: 'Experience an unforgettable liveaboard diving adventure in Ambon, Suanggi, and Banda. Explore vibrant coral reefs, encounter rare marine life, and dive into the rich history of the Banda Sea. Join us for an extraordinary underwater journey!',
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
        price: '26,500,000',
        currency: 'IDR',
        roomType: 'Deluxe - Lower Deck',
        category: 'Domestic / KITAS',
      },
      {
        price: '29,000,000',
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
        price: '1,975',
        currency: 'USD',
        roomType: 'Deluxe - Lower Deck',
        category: 'foreigner',
      },
      {
        price: '2,275',
        currency: 'USD',
        roomType: 'Executive - Upper Deck',
        category: 'foreigner',
      },
      {
        price: '2,475',
        currency: 'USD',
        roomType: 'Suite - Main Deck',
        category: 'foreigner',
      },
    ],
    schedule: [
      {
        time: 'Day 1 - Ambon Island',
        descList: [
          'Ambon Island, 1-2 dives',
          'Our staff will meet you at Pattimura Airport and take you to Majestic Voyager, Partimura airport is very close to where the boat is anchored. Arrivals before midday are appreciated for check dive potential.',
          '⁠Divesite usually Laha jetty for a check dive',
          '⁠Muck diving, many unusual critters similar to Lembeh.',
          '⁠Sail overnight to Banda Islands. '
        ]
      },
      {
        time: 'Day 2 - Banda Island',
        descList: [
          '⁠⁠Dive sites around Soangi Island including: Soangi drop-off, Jackpot reef, & Ping-Pong. - Early chance to see schooling hammerhead sharks in action.',
          '',
          '⁠Moor up at Tanjung Burung, Banda Islands',
        ]
      },
      {
        time: 'Day 3 - Banda Island',
        descList: [
          '⁠Dive sites around Hatta Island including Tanjung Buton, Hole in the Wall, and Karang Hatta',
          '⁠Next good chances to see schooling hammerhead sharks.',
          '⁠Anchor overnight in a Banda-Neira, a secluded bay at the foot of Gunung Api.',
        ]
      },
      {
        time: 'Day 4 - Banda Island',
        descList: [
          '⁠⁠Dive sites in Banda Islands include Pohon Miring, Batu Kapal, Pulau Pisang, & Jackpot',
          '⁠⁠Return to Soangi Island for last dive for last schooling hammerhead action potential & shorter overnight sail to Nusalaut Island.',
          '⁠an early morning land tour to the colonial town of Banda Neira and it`s Fort Belgica is a possible alternative to Pohon Miring',
          '⁠Sail overnight to Ameth village, Nusalaut Island.',
        ]
      },
      {
        time: 'Day 5 - Nusalaut Island & Saparua Island.',
        descList: [
          '⁠⁠⁠Dive sites include Ameth & Pombo Booi.',
          '⁠⁠⁠Afternoon & evening sail to Ambon Island, Laha village.',
        ]
      },
      {
        time: 'Day 6 - Ambon Island - Laha',
        descList: [
          '⁠⁠⁠Dive sites include Ameth & Pombo Booi.',
          '⁠⁠Check-out, check-in & fly away.',
        ]
      },
    ],
    include: [
      'Return airport transfers in Ambon.',
      '⁠5 nights in AC Cabins aboard on sharing basis.',
      '⁠Full onboard meals, tea, coffee, softdrink & water.',
      '⁠Historical & Heritage land tour at Banda Neira.',
      '⁠Unlimited tea, coffee, softdrink and mineral water.',
      '12 dives with tanks, weight & weight belt.',
      'English speaking cruise director.',
      'Dive master & local dive guide.',
      'Underwater photo/video documentation.',
    ],
    notes: [
      '⁠Exclude airflight tickets to Ambon.',
      'Port Clearance Fee (USD 25 / day for foreigner).',
      'Dive equipment rental is available for IDR 400,000 / day.',
      'Crew gratitudes min. IDR 200rb / day / pax.',
      '⁠Port clearance fee IDR 250k / day / pax (domestic).',
      '⁠Port clearance fee  USD 25,- / day / pax (foreigner).',
      '⁠Banda Sea trips can be tailored.',
      'Diving days: 5 days (at least 12 dives depending on plan, maybe possible to squeeze a night dive in if desired, number of check dives on first day depends on guest arrival & clearance).'
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
        img: ImageBimaThree.src,
        imgAlt: '',
        blurDataUrl: ImageBimaThree.blurDataURL,
      },
      {
        img: ImageBandarNeiraFour.src,
        imgAlt: '',
        blurDataUrl: ImageBandarNeiraFour.blurDataURL,
      },
      {
        img: ImageBandarNeiraThree.src,
        imgAlt: '',
        blurDataUrl: ImageBandarNeiraThree.blurDataURL,
      },
      {
        img: ImageBandarNeiraFive.src,
        imgAlt: '',
        blurDataUrl: ImageBandarNeiraFive.blurDataURL,
      },
    ],
  },
  {
    img: ImageTimorLesteOne.src,
    imgAlt: 'Timor Leste - Atauro Island Diving Trip',
    blurDataUrl: ImageTimorLesteOne.blurDataURL,
    title: 'Timor Leste - Atauro Island Diving Trip',
    location: 'Indonesia',
    date: 'Oct 22nd - 25th, 2025',
    endDate: {
      day: 1,
      month: 11,
      year: 2025
    },
    url: 'timor-leste-atauro-island-diving-trip',
    price: '950',
    priceNum: '950',
    currency: 'USD',
    duration: '4 days',
    highlight: {
      diveCount: '4 dives',
      type: 'Land Based'
    },
    available: true,
    multiCurrencies: false,
    category: 'diving-trips',
    metaDescription: 'Discover the pristine waters of Atauro Island, Timor-Leste—one of the world`s best diving destinations. Experience vibrant coral reefs, incredible marine biodiversity, and crystal- clear waters on unforgettable dive trips.',
    metaKeywords: 'Atauro Island diving, Timor-Leste diving, scuba diving Atauro, coral reefs Timor-Leste, best dive sites Timor, marine biodiversity, Atauro snorkeling, dive trips Timor-Leste, diving tours, eco-diving Timor',
    overview: 'Atauro Island, located just off the coast of Timor-Leste, is a hidden gem for divers seeking untouched marine ecosystems. Known for its world-class coral reefs, abundant marine life, and exceptional visibility, Atauro boasts some of the highest recorded biodiversity in the world. Divers can explore vibrant coral gardens, steep drop-offs, and drift dives teeming with tropical fish, sharks, and rays.',
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
        label: 'Select Package Type'
      },
      {
        value: 'Timor Hotel Plaza',
        label: 'Timor Hotel Plaza'
      },
    ],
    pricePerRoom: [
      {
        price: '950',
        currency: 'USD',
        roomType: 'Timor Hotel Plaza',
        category: 'Domestic / KITAS',
      },
      {
        price: '950',
        currency: 'USD',
        roomType: 'Timor Hotel Plaza',
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
      'Airport transfer',
      'Hotel - DC - Hotel transfer',
      'Breakfast and lunch during scuba activity',
      '3 nights stay at Timor Plaza Hotel with twin share basis',
      '4x boat dives with tank & weight',
    ],
    notes: [
      'Exclude ⁠Any personal expenditure such as laundry, personal medicine, etc',
      'Exclude Dinner',
      'Exclude ⁠Airfare',
      'Dive equipment rental is available',
      'Tip for local guide USD 15,- / day dive',
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
        img: ImageTimorLesteOne.src,
        imgAlt: '',
        blurDataUrl: ImageTimorLesteOne.blurDataURL,
      },
      {
        img: ImageBandarNeiraFour.src,
        imgAlt: '',
        blurDataUrl: ImageBandarNeiraFour.blurDataURL,
      },
      {
        img: ImageBandarNeiraThree.src,
        imgAlt: '',
        blurDataUrl: ImageBandarNeiraThree.blurDataURL,
      },
      {
        img: ImageBandarNeiraFive.src,
        imgAlt: '',
        blurDataUrl: ImageBandarNeiraFive.blurDataURL,
      },
    ],
  },
  {
    img: ImageTimorLesteTwo.src,
    imgAlt: 'Timor Leste - Whale Watching Trip',
    blurDataUrl: ImageTimorLesteTwo.blurDataURL,
    title: 'Timor Leste - Whale Watching Trip',
    location: 'Indonesia',
    date: 'Oct 24nd - 28th, 2025',
    endDate: {
      day: 1,
      month: 11,
      year: 2025
    },
    url: 'timor-leste-whale-watching-diving-trip',
    price: '1,500',
    priceNum: '1500',
    currency: 'USD',
    duration: '5 days',
    highlight: {
      diveCount: '3 dives',
      type: 'Land Based'
    },
    available: true,
    multiCurrencies: false,
    category: 'diving-trips',
    metaDescription: 'Experience world-class diving and breathtaking whale watching in Timor-Leste, one of the last untouched marine paradises. Encounter vibrant coral reefs, diverse marine life, and seasonal whale migrations in crystal-clear waters. Book your adventure today!',
    metaKeywords: 'Timor-Leste diving, Timor-Leste whale watching, dive trips Timor-Leste, best diving Asia, scuba diving Timor, marine life Timor-Leste, whale migration Timor, coral reefs Timor, snorkeling Timor-Leste, dive travel Timor.',
    overview: 'Timor-Leste offers some of the most pristine and biodiverse waters in the world, making it a top destination for both diving enthusiasts and whale watchers. Located in the heart of the Coral Triangle, its reefs are teeming with vibrant marine life, including turtles, reef sharks, and countless fish species.',
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
        label: 'Select Package Type'
      },
      {
        value: 'Timor Hotel Plaza',
        label: 'Timor Hotel Plaza'
      },
    ],
    pricePerRoom: [
      {
        price: '1500',
        currency: 'USD',
        roomType: 'Timor Hotel Plaza',
        category: 'Domestic / KITAS',
      },
      {
        price: '1500',
        currency: 'USD',
        roomType: 'Timor Hotel Plaza',
        category: 'foreigner',
      },
    ],
    schedule: [
      {
        time: 'Day 1',
        descList: [
          '⁠arrive at Dili Airport',
          '⁠hotel checkin',
          '⁠free time',
        ]
      },
      {
        time: 'Day 2',
        descList: [
          '⁠early bfast',
          '⁠whale hunting/searching',
          '⁠lunch',
          '⁠dive-1',
          '⁠back to hotel',
          '⁠free time'
        ]
      },
      {
        time: 'Day 3',
        descList: [
          '⁠early bfast',
          '⁠whale hunting/searching',
          '⁠lunch',
          '⁠dive-2',
          '⁠back to hotel',
          '⁠free time',
        ]
      },
      {
        time: 'Day 4',
        descList: [
          '⁠early bfast',
          '⁠dive-3',
          '⁠lunch',
          '⁠whale hunting/searching',
          '⁠back to hotel',
          '⁠free time',
        ]
      },
      {
        time: 'Day 5',
        descList: [
          '⁠Airport transfer',
          '⁠Sea you next trip',
        ]
      },
    ],
    include: [
      'Snorkeling gear (mask, snorkel & scuba fins)',
      'Airport transfer',
      'Hotel - DC - Hotel transfer',
      'Breakfast and lunch during activity',
      '4 nights stay at Timor Plaza Hotel with twin share basis',
      '3 days swim/freedive activity',
      'Dive guide ratio 5:1',
    ],
    notes: [
      'Exclude ⁠Any personal expenditure such as laundry, personal medicine, etc',
      'VOA $30,- for non Indo citizen',
      'scuba activity $125/dive',
      'Exclude Dinner',
      'Exclude ⁠Airfare',
      'Dive equipment rental is available',
      'Tip for local guide',
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
        img: ImageTimorLesteTwo.src,
        imgAlt: '',
        blurDataUrl: ImageTimorLesteTwo.blurDataURL,
      },
      {
        img: ImageBandarNeiraFour.src,
        imgAlt: '',
        blurDataUrl: ImageBandarNeiraFour.blurDataURL,
      },
      {
        img: ImageBandarNeiraThree.src,
        imgAlt: '',
        blurDataUrl: ImageBandarNeiraThree.blurDataURL,
      },
      {
        img: ImageBandarNeiraFive.src,
        imgAlt: '',
        blurDataUrl: ImageBandarNeiraFive.blurDataURL,
      },
    ],
  },
];
