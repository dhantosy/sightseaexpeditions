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
  ImageGalapagosMain,
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
  // {
  //   img: ImageMaldivesTwo.src,
  //   imgAlt: 'Maldives Trip',
  //   blurDataUrl: ImageMaldivesTwo.blurDataURL,
  //   title: 'Maldives Dive Trip with Maldives Legend Odyssey',
  //   location: 'Maldives',
  //   date: 'May 24th - 31st, 2025',
  //   endDate: {
  //     day: 2,
  //     month: 2,
  //     year: 2025
  //   },
  //   url: 'maldives-dive-trip-legend-odyssey',
  //   price: '1,750',
  //   priceNum: '1750',
  //   currency: 'USD',
  //   duration: '4 days',
  //   highlight: {
  //     diveCount: '17 dives',
  //     type: 'LOB'
  //   },
  //   available: true,
  //   multiCurrencies: false,
  //   category: 'diving-trips',
  //   metaDescription: 'Embark on an extraordinary underwater journey with our curated collection of luxury dive trips. Explore pristine dive sites, encounter incredible marine life, and indulge in unparalleled comfort aboard our hand-picked liveaboard vessels. Discover your perfect dive vacation today.',
  //   metaKeywords: 'luxury dive trips, liveaboard diving, dive vacations, curated dive experiences, dive destinations, diving holidays, premium dive trips, exclusive dive travel, dive trip planner, best dive trips, diving adventures, underwater exploration',
  //   overview: 'Embark on a voyage of discovery unlike any other on a liveaboard diving trip to the Maldives.  This island paradise, famed for its turquoise waters and pristine coral reefs, offers an unparalleled underwater experience from the comfort and luxury of a liveaboard vessel.',
  //   categoryListOption: [
  //     {
  //       value: '',
  //       label: 'Select Category'
  //     },
  //     {
  //       value: 'Domestic / KITAS',
  //       label: 'Domestic / KITAS Holder'
  //     },
  //     {
  //       value: 'foreigner',
  //       label: 'Foreigner'
  //     },
  //   ],
  //   roomTypeListOption: [
  //     {
  //       value: '',
  //       label: 'Select Cabin Type'
  //     },
  //     {
  //       value: 'Room 4 & 5 - Lower Deck',
  //       label: 'Room 4 & 5 - Lower Deck'
  //     },
  //     {
  //       value: 'Room 1, 2, 3, 6, 7, 8 - Lower Deck',
  //       label: 'Room 1, 2, 3, 6, 7, 8 - Lower Deck'
  //     },
  //     {
  //       value: 'Room 9 - 11 - Upper Deck',
  //       label: 'Room 9 - 11 - Upper Deck'
  //     },
  //   ],
  //   pricePerRoom: [
  //     {
  //       price: '1,750',
  //       currency: 'USD',
  //       roomType: 'Room 4 & 5 - Lower Deck',
  //       category: 'Domestic / KITAS',
  //     },
  //     {
  //       price: '1,850',
  //       currency: 'USD',
  //       roomType: 'Room 1, 2, 3, 6, 7, 8 - Lower Deck',
  //       category: 'Domestic / KITAS',
  //     },
  //     {
  //       price: '2,050',
  //       currency: 'USD',
  //       roomType: 'Room 9 - 11 - Upper Deck',
  //       category: 'Domestic / KITAS',
  //     },
  //     {
  //       price: '1,750',
  //       currency: 'USD',
  //       roomType: 'Room 4 & 5 - Lower Deck',
  //       category: 'foreigner',
  //     },
  //     {
  //       price: '1,850',
  //       currency: 'USD',
  //       roomType: 'Room 1, 2, 3, 6, 7, 8 - Lower Deck',
  //       category: 'foreigner',
  //     },
  //     {
  //       price: '2,050',
  //       currency: 'USD',
  //       roomType: 'Room 9 - 11 - Upper Deck',
  //       category: 'foreigner',
  //     },
  //   ],
  //   schedule: [
  //     {
  //       time: '',
  //       descList: []
  //     },
  //   ],
  //   include: [
  //     '⁠Meals – Daily Breakfast, Lunch and Dinner on board.',
  //     'Free Coffee, Tea & Snack on board.',
  //     '⁠Up to 17 dives with experience local guide (1:6)',
  //     'Male Airport Transfer.',
  //     'GST 12% Taxes.',
  //     'Underwater documentation.',
  //   ],
  //   notes: [
  //     'Exclude All flight and taxes',
  //     'Green Tax - USD 42,-',
  //     'BBQ Dinner at Desert Island - USD 10,- /pax.',
  //     'Deep South Fuel surcharge USD 100,-.',
  //     'Equipment Rental.',
  //     'Exclude dive guide ratio 1:6',
  //     'BCD USD$8 / day',
  //     'REG USD$8 / day',
  //     'Wetsuit USD$8 / day',
  //     'Fin USD$5 / day',
  //     'Mask & Snorkel USD$8 / day',
  //     'Reef Hook USD$5 / day',
  //     'Dive Computer USD$5 / dive',
  //     'Upgrade to 15 ltr tank USD$5 / dive',
  //     'Torch USD$10 per day',
  //     'Travel and dive insurance (recommended)',
  //     'Exclude Porter services',
  //     'Tips for boat crew (USD 100,- / pax Mandatory)',
  //     'Exclude drink from the bar',
  //     'For Nitrox Air usage 12ltr tank (certified Nitrox Diver only) ADD another USD 10 per dive/tank',
  //   ],
  //   roomGallery: [
  //     {
  //       roomType: '',
  //       include: [''],
  //       roomImages: [
  //         {
  //           img: '',
  //           imgAlt: '',
  //           blurDataUrl: '',
  //         },
  //       ],
  //     },
  //   ],
  //   gallery: [
  //     {
  //       img: ImageMaldivesTwo.src,
  //       imgAlt: '',
  //       blurDataUrl: ImageMaldivesTwo.blurDataURL,
  //     },
  //     {
  //       img: ImageBimaTwo.src,
  //       imgAlt: '',
  //       blurDataUrl: ImageBimaTwo.blurDataURL,
  //     },
  //     {
  //       img: ImageBimaThree.src,
  //       imgAlt: '',
  //       blurDataUrl: ImageBimaThree.blurDataURL,
  //     },
  //     {
  //       img: ImageMaldivesOne.src,
  //       imgAlt: '',
  //       blurDataUrl: ImageMaldivesOne.blurDataURL,
  //     },
  //   ],
  // },
  // {
  //   img: ImageBandarNeiraThree.src,
  //   imgAlt: 'Luwuk - Tompotika Dive Trip',
  //   blurDataUrl: ImageBandarNeiraThree.blurDataURL,
  //   title: 'Luwuk - Tompotika Dive Trip',
  //   location: 'Indonesia',
  //   date: 'Jun 6th - 10th, 2025',
  //   endDate: {
  //     day: 1,
  //     month: 11,
  //     year: 2025
  //   },
  //   url: 'luwuk-tompotika-dive-trip',
  //   price: '12jt',
  //   priceNum: '12000000',
  //   currency: 'IDR',
  //   duration: '4 days',
  //   highlight: {
  //     diveCount: '5 dives',
  //     type: 'Land Based'
  //   },
  //   available: true,
  //   multiCurrencies: false,
  //   category: 'diving-trips',
  //   metaDescription: 'Explore the breathtaking underwater world of Luwuk - Tompotika on a land-based diving trip. Discover pristine coral reefs, diverse marine life, and crystal-clear waters in one of Indonesia’s hidden diving paradises. Book your adventure today!',
  //   metaKeywords: 'Luwuk diving, Tompotika diving, land-based diving Indonesia, dive trip Luwuk, best dive sites Sulawesi, scuba diving Luwuk Tompotika, underwater paradise Indonesia, coral reefs Luwuk, diving tour Indonesia, marine biodiversity Sulawesi',
  //   overview: 'Explore the breathtaking underwater world of Luwuk - Tompotika on a land-based diving trip. Discover pristine coral reefs, diverse marine life, and crystal-clear waters in one of Indonesia’s hidden diving paradises. Book your adventure today!',
  //   categoryListOption: [
  //     {
  //       value: '',
  //       label: 'Select Category'
  //     },
  //     {
  //       value: 'Domestic / KITAS',
  //       label: 'Domestic / KITAS Holder'
  //     },
  //     {
  //       value: 'foreigner',
  //       label: 'Foreigner'
  //     },
  //   ],
  //   roomTypeListOption: [
  //     {
  //       value: '',
  //       label: 'Select Package Type'
  //     },
  //     {
  //       value: '4D3N',
  //       label: '4D3N'
  //     },
  //     {
  //       value: '5D4N',
  //       label: '5D4N'
  //     },
  //   ],
  //   pricePerRoom: [
  //     {
  //       price: '12,000,000',
  //       currency: 'IDR',
  //       roomType: '4D3N',
  //       category: 'Domestic / KITAS',
  //     },
  //     {
  //       price: '14,500,000',
  //       currency: 'IDR',
  //       roomType: '5D4N',
  //       category: 'Domestic / KITAS',
  //     },
  //     {
  //       price: '12,000,000',
  //       currency: 'IDR',
  //       roomType: '4D3N',
  //       category: 'foreigner',
  //     },
  //     {
  //       price: '14,500,000',
  //       currency: 'IDR',
  //       roomType: '5D4N',
  //       category: 'foreigner',
  //     },
  //   ],
  //   schedule: [
  //     {
  //       time: '',
  //       descList: []
  //     },
  //   ],
  //   include: [
  //     'Airport transfer',
  //     'Breakfast,lunch dinner',
  //     'Weight, tanks & local dive guide',
  //     '5 boat dives with tanks & weight',
  //     'Unlimited dive at Tompotika house reef (non guided)',
  //     'Kayaks and bicycle use in the limit of availability',
  //     '4D3N stay at Tompotika Dive Lodge (twin share basis)',
  //     '2D1N stay at hotel in Luwuk for Paisupok trip',
  //     'Private land & sea transportation during the trip',
  //     'Underwater & aerial documentation',
  //   ],
  //   notes: [
  //     'Exclude ⁠Any personal expenditure such as laundry, personal medicine, etc',
  //     'Exclude domestic flight',
  //     'Additional dive or night dive 650k / dive',
  //     'Dive equipment rental 650k / day',
  //     'Nitrox use 75k / tank',
  //     '⁠⁠Tip for local guide 150k / day',
  //   ],
  //   roomGallery: [
  //     {
  //       roomType: '',
  //       include: [''],
  //       roomImages: [
  //         {
  //           img: '',
  //           imgAlt: '',
  //           blurDataUrl: '',
  //         },
  //       ],
  //     },
  //   ],
  //   gallery: [
  //     {
  //       img: ImageBandarNeiraThree.src,
  //       imgAlt: '',
  //       blurDataUrl: ImageBandarNeiraThree.blurDataURL,
  //     },
  //     {
  //       img: ImageBandarNeiraFour.src,
  //       imgAlt: '',
  //       blurDataUrl: ImageBandarNeiraFour.blurDataURL,
  //     },
  //     {
  //       img: ImageBandarNeiraThree.src,
  //       imgAlt: '',
  //       blurDataUrl: ImageBandarNeiraThree.blurDataURL,
  //     },
  //     {
  //       img: ImageBandarNeiraFive.src,
  //       imgAlt: '',
  //       blurDataUrl: ImageBandarNeiraFive.blurDataURL,
  //     },
  //   ],
  // },
  // {
  //   img: ImageMaldivesOne.src,
  //   imgAlt: 'Maldives Trip',
  //   blurDataUrl: ImageMaldivesOne.blurDataURL,
  //   title: 'Maldives - Fuvahmulah Dive Trip',
  //   location: 'Maldives',
  //   date: 'Jun 5th - 9th, 2025',
  //   endDate: {
  //     day: 2,
  //     month: 2,
  //     year: 2025
  //   },
  //   url: 'maldives-fuvahmulah-dive-trip',
  //   price: '590',
  //   priceNum: '760',
  //   currency: 'USD',
  //   duration: '4 days',
  //   highlight: {
  //     diveCount: '6-9 dives',
  //     type: 'Landbase'
  //   },
  //   available: true,
  //   multiCurrencies: false,
  //   category: 'diving-trips',
  //   metaDescription: 'Discover world-class diving in Fuvahmulah, Maldives – home to tiger sharks, pristine coral reefs, and unmatched underwater adventures. Plan your perfect dive trip today.',
  //   metaKeywords: 'Fuvahmulah diving, Maldives dive trips, tiger shark dive, Fuvahmulah scuba diving, dive planner Maldives, best dive sites Fuvahmulah, Maldives diving guide, diving with tiger sharks, scuba Fuvahmulah, underwater adventures Maldives',
  //   overview: 'Discover world-class diving in Fuvahmulah, Maldives – home to tiger sharks, pristine coral reefs, and unmatched underwater adventures. Plan your perfect dive trip today.',
  //   categoryListOption: [
  //     {
  //       value: '',
  //       label: 'Select Category'
  //     },
  //     {
  //       value: 'Domestic / KITAS',
  //       label: 'Domestic / KITAS Holder'
  //     },
  //     {
  //       value: 'foreigner',
  //       label: 'Foreigner'
  //     },
  //   ],
  //   roomTypeListOption: [
  //     {
  //       value: '',
  //       label: 'Select Package Type'
  //     },
  //     {
  //       value: '4D3N (6 dives)',
  //       label: '4D3N (6 dives)'
  //     },
  //     {
  //       value: '5D4N (9 dives)',
  //       label: '5D4N (9 dives)'
  //     },
  //   ],
  //   pricePerRoom: [
  //     {
  //       price: '590',
  //       currency: 'USD',
  //       roomType: '4D3N (6 dives)',
  //       category: 'Domestic / KITAS',
  //     },
  //     {
  //       price: '760',
  //       currency: 'USD',
  //       roomType: '5D4N (9 dives)',
  //       category: 'Domestic / KITAS',
  //     },
  //     {
  //       price: '590',
  //       currency: 'USD',
  //       roomType: '4D3N (6 dives)',
  //       category: 'foreigner',
  //     },
  //     {
  //       price: '760',
  //       currency: 'USD',
  //       roomType: '5D4N (9 dives)',
  //       category: 'foreigner',
  //     },
  //   ],
  //   schedule: [
  //     {
  //       time: '',
  //       descList: []
  //     },
  //   ],
  //   include: [
  //     'Hotel Accommodation at The Shark Residence',
  //     'Full Board Meal (Breakfast, Lunch, Dinner) at Scuba Cafe',
  //     '3 Dives per day',
  //     'Airport to Hotel Transfer',
  //     'Hotel to Dive Boat Transfer',
  //     'Island Tour with Guide',
  //     'Welcome Drinks upon Arrival',
  //   ],
  //   notes: [
  //     'Exclude International flight to Male',
  //     'Domestc flight (Male - Fuvahmulah - Male) $285',
  //     'Dive Equipment Rental (Regulator, BCD, Wetsuit, Computer, 15L T ank) $5 per pcs / per day',
  //     'Extra Dive $55 per person',
  //     'Mandatory Dive Insurance',
  //     'Dive crew tip gratitude',
  //     'Porter services',
  //   ],
  //   roomGallery: [
  //     {
  //       roomType: '',
  //       include: [''],
  //       roomImages: [
  //         {
  //           img: '',
  //           imgAlt: '',
  //           blurDataUrl: '',
  //         },
  //       ],
  //     },
  //   ],
  //   gallery: [
  //     {
  //       img: ImageMaldivesOne.src,
  //       imgAlt: '',
  //       blurDataUrl: ImageMaldivesOne.blurDataURL,
  //     },
  //     {
  //       img: ImageBimaTwo.src,
  //       imgAlt: '',
  //       blurDataUrl: ImageBimaTwo.blurDataURL,
  //     },
  //     {
  //       img: ImageBimaThree.src,
  //       imgAlt: '',
  //       blurDataUrl: ImageBimaThree.blurDataURL,
  //     },
  //     {
  //       img: ImageMaldivesOne.src,
  //       imgAlt: '',
  //       blurDataUrl: ImageMaldivesOne.blurDataURL,
  //     },
  //   ],
  // },
  // {
  //   img: ImageBimaMain.src,
  //   imgAlt: 'BIMA -  KOMODO LOB Trip',
  //   blurDataUrl: ImageBimaMain.blurDataURL,
  //   title: 'Bima - Komodo Dive Trip with Majestic Voyager',
  //   location: 'West Komodo, Indonesia',
  //   date: 'Jun 24th - 29th, 2024',
  //   endDate: {
  //     day: 21,
  //     month: 8,
  //     year: 2024
  //   },
  //   url: 'bima-komodo-majestic-voyager',
  //   price: '21jt',
  //   priceNum: '21000000',
  //   currency: 'IDR',
  //   duration: '4 days',
  //   highlight: {
  //     diveCount: '14 dives',
  //     type: 'LOB'
  //   },
  //   available: true,
  //   multiCurrencies: true,
  //   category: 'diving-trips',
  //   metaDescription: 'Embark on an extraordinary underwater journey with our curated collection of luxury dive trips. Explore pristine dive sites, encounter incredible marine life, and indulge in unparalleled comfort aboard our hand-picked liveaboard vessels. Discover your perfect dive vacation today.',
  //   metaKeywords: 'luxury dive trips, liveaboard diving, dive vacations, curated dive experiences, dive destinations, diving holidays, premium dive trips, exclusive dive travel, dive trip planner, best dive trips, diving adventures, underwater exploration',
  //   overview: 'Bima, One of the Indonesia`s hidden gem. Sightsea Expeditions offers a liveaboard diving experience unlike any other. Venture beyond the crowds and discover a world teeming with fascinating critters and unique marine life on a luxurious liveaboard vessel.',
  //   categoryListOption: [
  //     {
  //       value: '',
  //       label: 'Select Category'
  //     },
  //     {
  //       value: 'Domestic / KITAS',
  //       label: 'Domestic / KITAS Holder'
  //     },
  //     {
  //       value: 'foreigner',
  //       label: 'Foreigner'
  //     },
  //   ],
  //   roomTypeListOption: [
  //     {
  //       value: '',
  //       label: 'Select Cabin Type'
  //     },
  //     {
  //       value: 'Suite - Main Deck',
  //       label: 'Suite - Main Deck'
  //     },
  //     {
  //       value: 'Executive - Upper Deck',
  //       label: 'Executive - Upper Deck'
  //     },
  //     {
  //       value: 'Deluxe - Lower Deck',
  //       label: 'Deluxe - Lower Deck'
  //     },
  //   ],
  //   pricePerRoom: [
  //     {
  //       price: '21,000,000',
  //       currency: 'IDR',
  //       roomType: 'Deluxe - Lower Deck',
  //       category: 'Domestic / KITAS',
  //     },
  //     {
  //       price: '24,000,000',
  //       currency: 'IDR',
  //       roomType: 'Executive - Upper Deck',
  //       category: 'Domestic / KITAS',
  //     },
  //     {
  //       price: '26,000,000',
  //       currency: 'IDR',
  //       roomType: 'Suite - Main Deck',
  //       category: 'Domestic / KITAS',
  //     },
  //     {
  //       price: '1,700',
  //       currency: 'USD',
  //       roomType: 'Deluxe - Lower Deck',
  //       category: 'foreigner',
  //     },
  //     {
  //       price: '1,900',
  //       currency: 'USD',
  //       roomType: 'Executive - Upper Deck',
  //       category: 'foreigner',
  //     },
  //     {
  //       price: '2,100',
  //       currency: 'USD',
  //       roomType: 'Suite - Main Deck',
  //       category: 'foreigner',
  //     },
  //   ],
  //   schedule: [
  //     {
  //       time: '',
  //       descList: []
  //     },
  //   ],
  //   include: [
  //     '⁠return airport transfers in Bajo',
  //     '⁠5 nights in AC cabin on twin share basis',
  //     'Full Onboard Meals, Tea, Coffee, & Softdrinks.',
  //     '14 Dives with Tanks, Weight, & Belt.',
  //     'English Speaking Cruise Director.',
  //     'Divemaster with 1:4 Ratio.',
  //     'Underwater Documentation.',
  //   ],
  //   notes: [
  //     'Port Clearance Fee (IDR 400rb / day for domestic).',
  //     'Port Clearance Fee (USD 25 / day for foreigner).',
  //     'Dive equipment rental is available for IDR 400,000 / day.',
  //     'Boat Crew Tips IDR 200rb / day',
  //     'The price excludes airflight tickets to Komodo.',
  //   ],
  //   roomGallery: [
  //     {
  //       roomType: 'Suite - Main Deck',
  //       include: [
  //         'Private Jacuzzi',
  //         'Sea View Balcony',
  //         'Twin Bed',
  //         'Air Conditioner',
  //         'Water Heater',
  //         'Private Bathroom',
  //       ],
  //       roomImages: [
  //         {
  //           img: MajesticVoyagerSuiteOne.src,
  //           imgAlt: '',
  //           blurDataUrl: MajesticVoyagerSuiteOne.blurDataURL,
  //         },
  //         {
  //           img: MajesticVoyagerSuiteTwo.src,
  //           imgAlt: '',
  //           blurDataUrl: MajesticVoyagerSuiteTwo.blurDataURL,
  //         },
  //         {
  //           img: MajesticVoyagerSuiteThree.src,
  //           imgAlt: '',
  //           blurDataUrl: MajesticVoyagerSuiteThree.blurDataURL,
  //         },
  //         {
  //           img: MajesticVoyagerSuiteFour.src,
  //           imgAlt: '',
  //           blurDataUrl: MajesticVoyagerSuiteFour.blurDataURL,
  //         },
  //         {
  //           img: MajesticVoyagerSuiteFive.src,
  //           imgAlt: '',
  //           blurDataUrl: MajesticVoyagerSuiteFive.blurDataURL,
  //         },
  //       ],
  //     },
  //     {
  //       roomType: 'Executive - Upper Deck',
  //       include: [
  //         'Sea View Balcony',
  //         'Twin Bed',
  //         'Air Conditioner',
  //         'Water Heater',
  //         'Private Bathroom',
  //       ],
  //       roomImages: [
  //         {
  //           img: MajesticVoyagerExecutiveOne.src,
  //           imgAlt: '',
  //           blurDataUrl: MajesticVoyagerExecutiveOne.blurDataURL,
  //         },
  //         {
  //           img: MajesticVoyagerExecutiveTwo.src,
  //           imgAlt: '',
  //           blurDataUrl: MajesticVoyagerExecutiveTwo.blurDataURL,
  //         },
  //         {
  //           img: MajesticVoyagerExecutiveThree.src,
  //           imgAlt: '',
  //           blurDataUrl: MajesticVoyagerExecutiveThree.blurDataURL,
  //         },
  //         {
  //           img: MajesticVoyagerExecutiveFour.src,
  //           imgAlt: '',
  //           blurDataUrl: MajesticVoyagerExecutiveFour.blurDataURL,
  //         },
  //         {
  //           img: MajesticVoyagerExecutiveFive.src,
  //           imgAlt: '',
  //           blurDataUrl: MajesticVoyagerExecutiveFive.blurDataURL,
  //         },
  //         {
  //           img: MajesticVoyagerExecutiveSix.src,
  //           imgAlt: '',
  //           blurDataUrl: MajesticVoyagerExecutiveSix.blurDataURL,
  //         },
  //         {
  //           img: MajesticVoyagerExecutiveSeven.src,
  //           imgAlt: '',
  //           blurDataUrl: MajesticVoyagerExecutiveSeven.blurDataURL,
  //         },
  //       ],
  //     },
  //     {
  //       roomType: 'Deluxe - Lower Deck',
  //       include: [
  //         'Twin Bed',
  //         'Air Conditioner',
  //         'Water Heater',
  //         'Private Bathroom',
  //       ],
  //       roomImages: [
  //         {
  //           img: MajesticVoyagerDeluxeOne.src,
  //           imgAlt: '',
  //           blurDataUrl: MajesticVoyagerDeluxeOne.blurDataURL,
  //         },
  //         {
  //           img: MajesticVoyagerDeluxeTwo.src,
  //           imgAlt: '',
  //           blurDataUrl: MajesticVoyagerDeluxeTwo.blurDataURL,
  //         },
  //         {
  //           img: MajesticVoyagerDeluxeThree.src,
  //           imgAlt: '',
  //           blurDataUrl: MajesticVoyagerDeluxeThree.blurDataURL,
  //         },
  //         {
  //           img: MajesticVoyagerDeluxeFour.src,
  //           imgAlt: '',
  //           blurDataUrl: MajesticVoyagerDeluxeFour.blurDataURL,
  //         },
  //         {
  //           img: MajesticVoyagerDeluxeFive.src,
  //           imgAlt: '',
  //           blurDataUrl: MajesticVoyagerDeluxeFive.blurDataURL,
  //         },
  //         {
  //           img: MajesticVoyagerDeluxeSix.src,
  //           imgAlt: '',
  //           blurDataUrl: MajesticVoyagerDeluxeSix.blurDataURL,
  //         },
  //         {
  //           img: MajesticVoyagerDeluxeSeven.src,
  //           imgAlt: '',
  //           blurDataUrl: MajesticVoyagerDeluxeSeven.blurDataURL,
  //         },
  //         {
  //           img: MajesticVoyagerDeluxeEight.src,
  //           imgAlt: '',
  //           blurDataUrl: MajesticVoyagerDeluxeEight.blurDataURL,
  //         },
  //         {
  //           img: MajesticVoyagerDeluxeNine.src,
  //           imgAlt: '',
  //           blurDataUrl: MajesticVoyagerDeluxeNine.blurDataURL,
  //         },
  //       ],
  //     },
  //   ],
  //   gallery: [
  //     {
  //       img: ImageBimaMain.src,
  //       imgAlt: '',
  //       blurDataUrl: ImageBimaMain.blurDataURL,
  //     },
  //     {
  //       img: ImageBimaTwo.src,
  //       imgAlt: '',
  //       blurDataUrl: ImageBimaTwo.blurDataURL,
  //     },
  //     {
  //       img: ImageBimaThree.src,
  //       imgAlt: '',
  //       blurDataUrl: ImageBimaThree.blurDataURL,
  //     },
  //     {
  //       img: ImageBimaFour.src,
  //       imgAlt: '',
  //       blurDataUrl: ImageBimaFour.blurDataURL,
  //     },
  //   ],
  // },
  // {
  //   img: ImageSipadanMain.src,
  //   imgAlt: 'Sipadan Dive Trip',
  //   blurDataUrl: ImageSipadanMain.blurDataURL,
  //   title: 'Sipadan Diving Trip',
  //   location: 'Malaysia',
  //   date: 'Jul 19th - 22nd, 2025',
  //   endDate: {
  //     day: 1,
  //     month: 11,
  //     year: 2025
  //   },
  //   url: 'sipadan-diving-trip',
  //   price: '12,5jt',
  //   priceNum: '12500000',
  //   currency: 'IDR',
  //   duration: '4 days',
  //   highlight: {
  //     diveCount: '6 dives',
  //     type: 'Land Based'
  //   },
  //   available: true,
  //   multiCurrencies: false,
  //   category: 'diving-trips',
  //   metaDescription: 'Plan your ultimate Sipadan diving adventure with our expert trip planner. Discover top dive sites, permits, accommodations, and travel tips for an unforgettable underwater experience in Malaysia’s world-renowned marine paradise.',
  //   metaKeywords: 'sipadan diving trip planner, sipadan dive permits, sipadan diving packages, sipadan island scuba diving, best time to dive in sipadan, sipadan dive resorts, sipadan diving malaysia, how to dive sipadan, sipadan marine life, scuba diving borneo',
  //   overview: 'Plan your ultimate Sipadan diving adventure with our expert trip planner. Discover top dive sites, permits, accommodations, and travel tips for an unforgettable underwater experience in Malaysia’s world-renowned marine paradise.',
  //   categoryListOption: [
  //     {
  //       value: '',
  //       label: 'Select Category'
  //     },
  //     {
  //       value: 'Domestic / KITAS',
  //       label: 'Domestic / KITAS Holder'
  //     },
  //     {
  //       value: 'foreigner',
  //       label: 'Foreigner'
  //     },
  //   ],
  //   roomTypeListOption: [
  //     {
  //       value: '',
  //       label: 'Select Package Type'
  //     },
  //     {
  //       value: '4D3N - Uncle Chang Homestay',
  //       label: '4D3N - Uncle Chang Homestay'
  //     },
  //     {
  //       value: '4D3N - Light House Hotel',
  //       label: '4D3N - Light House Hotel'
  //     },
  //   ],
  //   pricePerRoom: [
  //     {
  //       price: '12,500,000',
  //       currency: 'IDR',
  //       roomType: '4D3N - Uncle Chang Homestay',
  //       category: 'Domestic / KITAS',
  //     },
  //     {
  //       price: '14,000,000',
  //       currency: 'IDR',
  //       roomType: '4D3N - Light House Hotel',
  //       category: 'Domestic / KITAS',
  //     },
  //     {
  //       price: '12,500,000',
  //       currency: 'IDR',
  //       roomType: '4D3N - Uncle Chang Homestay',
  //       category: 'foreigner',
  //     },
  //     {
  //       price: '14,000,000',
  //       currency: 'IDR',
  //       roomType: '4D3N - Light House Hotel',
  //       category: 'foreigner',
  //     },
  //   ],
  //   schedule: [
  //     {
  //       time: 'Day 1',
  //       descList: [
  //         '⁠Depart from Tawau before evening',
  //         '⁠Transfer by van to Semporna',
  //         '⁠Hotel c/i',
  //         '⁠Free time',
  //       ]
  //     },
  //     {
  //       time: 'Day 2',
  //       descList: [
  //         '⁠2x boat dives tp Sipadan & 1x to Mabul',
  //       ]
  //     },
  //     {
  //       time: 'Day 3',
  //       descList: [
  //         '⁠⁠2x boat dives tp Sipadan & 1x to Mabul',
  //       ]
  //     },
  //     {
  //       time: 'Day 4',
  //       descList: [
  //         '⁠Hotel c/o',
  //         '⁠Transfer by van to Tawau Airport',
  //         'SEA YOU NEXT TRIP!',
  //       ]
  //     },
  //   ],
  //   include: [
  //     '⁠4x boat dive in Sipadan Island',
  //     '⁠⁠2x boat dive in Mabul Island',
  //     '⁠4D3N stay base on twin share + breakfast',
  //     '⁠Lunch during diving activity',
  //     '⁠Weight, tanks & local dive guide',
  //     '⁠Marine and environmental fee',
  //     '⁠Private airport van transfer',
  //   ],
  //   notes: [
  //     'Exclude ⁠Any personal expenditure such as laundry, personal medicine, etc',
  //     'Exclude dinner',
  //     'Exclude ⁠Airfare to/from Tawau',
  //     'Dive equipment rental is available',
  //     '⁠⁠Tip for local guide',
  //   ],
  //   roomGallery: [
  //     {
  //       roomType: '',
  //       include: [''],
  //       roomImages: [
  //         {
  //           img: '',
  //           imgAlt: '',
  //           blurDataUrl: '',
  //         },
  //       ],
  //     },
  //   ],
  //   gallery: [
  //     {
  //       img: ImageSipadanMain.src,
  //       imgAlt: '',
  //       blurDataUrl: ImageSipadanMain.blurDataURL,
  //     },
  //     {
  //       img: ImageBandarNeiraFour.src,
  //       imgAlt: '',
  //       blurDataUrl: ImageBandarNeiraFour.blurDataURL,
  //     },
  //     {
  //       img: ImageBandarNeiraThree.src,
  //       imgAlt: '',
  //       blurDataUrl: ImageBandarNeiraThree.blurDataURL,
  //     },
  //     {
  //       img: ImageBandarNeiraFive.src,
  //       imgAlt: '',
  //       blurDataUrl: ImageBandarNeiraFive.blurDataURL,
  //     },
  //   ],
  // },
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
    imgAlt: 'Timor Leste Whale Watching Trip',
    blurDataUrl: ImageTimorLesteOne.blurDataURL,
    title: 'Timor Leste Whale Watching Trip',
    location: 'Indonesia',
    date: 'Oct 19th - 22th, 2025',
    endDate: {
      day: 1,
      month: 11,
      year: 2025
    },
    url: 'timor-leste-whale-watching-diving-trip-batch-one',
    price: '1,100',
    priceNum: '1100',
    currency: 'USD',
    duration: '4 days',
    highlight: {
      diveCount: '',
      type: 'Land Based'
    },
    available: true,
    multiCurrencies: false,
    category: 'diving-trips',
    metaDescription: 'Discover the pristine waters of Timor-Leste—one of the world`s best diving destinations. Experience vibrant coral reefs, incredible marine biodiversity, and crystal-clear waters on unforgettable dive trips.',
    metaKeywords: 'Timor-Leste diving, scuba diving Atauro, coral reefs Timor-Leste, best dive sites Timor, marine biodiversity, dive trips Timor-Leste, diving tours, eco-diving Timor',
    overview: 'located just off the coast of Timor-Leste, is a hidden gem for divers seeking untouched marine ecosystems. Known for its world-class coral reefs, abundant marine life, and exceptional visibility, Atauro boasts some of the highest recorded biodiversity in the world. Divers can explore vibrant coral gardens, steep drop-offs, and drift dives teeming with tropical fish, sharks, and rays.',
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
        value: 'Timor Hotel Plaza 4D3N',
        label: 'Timor Hotel Plaza 4D3N'
      },
      {
        value: 'Timor Hotel Plaza 5D4N',
        label: 'Timor Hotel Plaza 5D4N'
      },
    ],
    pricePerRoom: [
      {
        price: '1100',
        currency: 'USD',
        roomType: 'Timor Hotel Plaza 4D3N',
        category: 'Domestic / KITAS',
      },
      {
        price: '1400',
        currency: 'USD',
        roomType: 'Timor Hotel Plaza 5D4N',
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
      'Snorkeling gear (mask, snorkel & scuba fins)',
      '2 full days swim / snorkeling / free diving activity',
      'Dive guide ratio 5:1',
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
    img: ImageTimorLesteOne.src,
    imgAlt: 'Timor Leste Whale Watching Trip',
    blurDataUrl: ImageTimorLesteOne.blurDataURL,
    title: 'Timor Leste Whale Watching Trip',
    location: 'Indonesia',
    date: 'Oct 21th - 25th, 2025',
    endDate: {
      day: 1,
      month: 11,
      year: 2025
    },
    url: 'timor-leste-whale-watching-diving-trip-batch-two',
    price: '1,500',
    priceNum: '1500',
    currency: 'USD',
    duration: '5 days',
    highlight: {
      diveCount: '',
      type: 'Land Based'
    },
    available: true,
    multiCurrencies: false,
    category: 'diving-trips',
    metaDescription: 'Discover the pristine waters of Timor-Leste—one of the world`s best diving destinations. Experience vibrant coral reefs, incredible marine biodiversity, and crystal-clear waters on unforgettable dive trips.',
    metaKeywords: 'Timor-Leste diving, scuba diving Atauro, coral reefs Timor-Leste, best dive sites Timor, marine biodiversity, dive trips Timor-Leste, diving tours, eco-diving Timor',
    overview: 'located just off the coast of Timor-Leste, is a hidden gem for divers seeking untouched marine ecosystems. Known for its world-class coral reefs, abundant marine life, and exceptional visibility, Atauro boasts some of the highest recorded biodiversity in the world. Divers can explore vibrant coral gardens, steep drop-offs, and drift dives teeming with tropical fish, sharks, and rays.',
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
        value: 'Timor Hotel Plaza 5D4N',
        label: 'Timor Hotel Plaza 5D4N'
      },
    ],
    pricePerRoom: [
      {
        price: '1500',
        currency: 'USD',
        roomType: 'Timor Hotel Plaza 5D4N',
        category: 'Domestic / KITAS',
      },
      {
        price: '1500',
        currency: 'USD',
        roomType: 'Timor Hotel Plaza 5D4N',
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
      '4 nights stay at Timor Plaza Hotel with twin share basis',
      'Snorkeling gear (mask, snorkel & scuba fins)',
      '3 full days swim / snorkeling / free diving activity',
      'Dive guide ratio 5:1',
    ],
    notes: [
      'Exclude ⁠Any personal expenditure such as laundry, personal medicine, etc',
      'Exclude Dinner',
      'Exclude ⁠Airfare',
      'VOA $30,- for non Indo citizen',
      'Scuba activity $125/dive',
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
    date: 'Oct 23rd - 26th, 2025',
    endDate: {
      day: 1,
      month: 11,
      year: 2025
    },
    url: 'timor-leste-whale-watching-diving-trip-batch-three',
    price: '1,000',
    priceNum: '1000',
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
        price: '1000',
        currency: 'USD',
        roomType: 'Timor Hotel Plaza',
        category: 'Domestic / KITAS',
      },
      {
        price: '1000',
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
  {
    img: ImageTimorLesteOne.src,
    imgAlt: 'Timor Leste Whale Watching Trip',
    blurDataUrl: ImageTimorLesteOne.blurDataURL,
    title: 'Timor Leste Whale Watching Trip',
    location: 'Indonesia',
    date: 'Oct 24th - 28th, 2025',
    endDate: {
      day: 1,
      month: 11,
      year: 2025
    },
    url: 'timor-leste-whale-watching-diving-trip-batch-four',
    price: '1,500',
    priceNum: '1500',
    currency: 'USD',
    duration: '5 days',
    highlight: {
      diveCount: '',
      type: 'Land Based'
    },
    available: true,
    multiCurrencies: false,
    category: 'diving-trips',
    metaDescription: 'Discover the pristine waters of Timor-Leste—one of the world`s best diving destinations. Experience vibrant coral reefs, incredible marine biodiversity, and crystal-clear waters on unforgettable dive trips.',
    metaKeywords: 'Timor-Leste diving, scuba diving Atauro, coral reefs Timor-Leste, best dive sites Timor, marine biodiversity, dive trips Timor-Leste, diving tours, eco-diving Timor',
    overview: 'located just off the coast of Timor-Leste, is a hidden gem for divers seeking untouched marine ecosystems. Known for its world-class coral reefs, abundant marine life, and exceptional visibility, Atauro boasts some of the highest recorded biodiversity in the world. Divers can explore vibrant coral gardens, steep drop-offs, and drift dives teeming with tropical fish, sharks, and rays.',
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
        value: 'Timor Hotel Plaza 5D4N',
        label: 'Timor Hotel Plaza 5D4N'
      },
    ],
    pricePerRoom: [
      {
        price: '1500',
        currency: 'USD',
        roomType: 'Timor Hotel Plaza 5D4N',
        category: 'Domestic / KITAS',
      },
      {
        price: '1500',
        currency: 'USD',
        roomType: 'Timor Hotel Plaza 5D4N',
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
      '4 nights stay at Timor Plaza Hotel with twin share basis',
      'Snorkeling gear (mask, snorkel & scuba fins)',
      '3 full days swim / snorkeling / free diving activity',
      'Dive guide ratio 5:1',
    ],
    notes: [
      'Exclude ⁠Any personal expenditure such as laundry, personal medicine, etc',
      'Exclude Dinner',
      'Exclude ⁠Airfare',
      'VOA $30,- for non Indo citizen',
      'Scuba activity $125/dive',
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
    img: ImageMisoolRajaAmpatOne.src,
    imgAlt: 'Misool Trip',
    blurDataUrl: ImageMisoolRajaAmpatOne.blurDataURL,
    title: 'Misool Raja Ampat Dive Trip with Majestic Voyager',
    location: 'Indonesia',
    date: 'Dec 28th, 2025 - Jan 3rd, 2026',
    endDate: {
      day: 1,
      month: 11,
      year: 2025
    },
    url: 'raja-ampat-misool-majestic-voyager',
    price: '3,600',
    priceNum: '3600',
    currency: 'USD',
    duration: '6 days',
    highlight: {
      diveCount: '16+ dives',
      type: 'LOB'
    },
    available: true,
    multiCurrencies: true,
    category: 'diving-trips',
    metaDescription: 'Explore the underwater paradise of Raja Ampat on an unforgettable liveaboard diving trip. Plan your dream dive adventure with vibrant coral reefs, rare marine life, and world-class dive sites in Indonesia’s most pristine waters.',
    metaKeywords: 'Raja Ampat liveaboard, diving trip Raja Ampat, Raja Ampat dive planner, Indonesia dive trip, scuba diving Raja Ampat, liveaboard Indonesia, Raja Ampat diving itinerary, best dive sites Raja Ampat, dive vacation Indonesia, luxury liveaboard Raja Ampat',
    overview: '',
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
        price: '31,500,000',
        currency: 'IDR',
        roomType: 'Executive - Upper Deck',
        category: 'Domestic / KITAS',
      },
      {
        price: '33,500,000',
        currency: 'IDR',
        roomType: 'Suite - Main Deck',
        category: 'Domestic / KITAS',
      },
      {
        price: '2,190',
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
      '⁠return airport transfers in Sorong',
      '⁠5 nights in AC cabin on twin share basis',
      '⁠full onboard meals, tea, coffee, softdrink',
      '⁠16+ dives with tanks, weight & weight belt.',
      'English speaking cruise director',
      '⁠dive master with ratio 1:4',
      'Underwater photo/video documentation.',
    ],
    notes: [
      '⁠Exclude airflight tickets to Sorong.',
      'Dive equipment rental is available for IDR 500,000 / day.',
      '⁠Port clearance fee IDR 250k / day / pax (domestic).',
      '⁠Port clearance fee  USD 25,- / day / pax (foreigner).',
      'Raja Ampat PIN IDR 500k (domestic)',
      'Raja Ampat PIN USD 75 (foreigner)',
      'Crew gratitudes min. IDR 200rb / day / pax.',
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
    img: ImageGalapagosMain.src,
    imgAlt: 'Galapagos LOB Dive Trip with MV Tiburon Explorer',
    blurDataUrl: ImageGalapagosMain.blurDataURL,
    title: 'Galapagos LOB Dive Trip with MV Tiburon Explorer',
    location: 'Indonesia',
    date: 'May 2nd - 9th, 2026',
    endDate: {
      day: 1,
      month: 11,
      year: 2025
    },
    url: 'galapagos-diving-trip',
    price: '6,295',
    priceNum: '6295',
    currency: 'USD',
    duration: '8 days',
    highlight: {
      diveCount: '',
      type: 'LOB'
    },
    available: false,
    multiCurrencies: false,
    category: 'diving-trips',
    metaDescription: 'Explore the world-famous Galapagos Islands on a once-in-a-lifetime diving trip. Discover pristine reefs, swim with hammerhead sharks, sea lions, and marine iguanas. Book your unforgettable Galapagos diving adventure now—perfect for both beginner and experienced divers!',
    metaKeywords: 'galapagos diving, galapagos diving trip, galapagos islands dive, liveaboard galapagos, galapagos scuba diving, galapagos underwater, galapagos sharks, galapagos marine life, diving holidays galapagos, scuba diving tours, best diving destinations, adventure travel, eco diving, wildlife encounters, pacific ocean diving, bucket list diving',
    overview: 'Explore the world-famous Galapagos Islands on a once-in-a-lifetime diving trip. Discover pristine reefs, swim with hammerhead sharks, sea lions, and marine iguanas. Book your unforgettable Galapagos diving adventure now—perfect for both beginner and experienced divers!',
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
        value: 'Lowerdeck Cabin',
        label: 'Lowerdeck Cabin'
      },
      {
        value: 'Upperdeck Cabin',
        label: 'Upperdeck Cabin'
      },
    ],
    pricePerRoom: [
      {
        price: '6295',
        currency: 'USD',
        roomType: 'Lowerdeck Cabin',
        category: 'Domestic / KITAS',
      },
      {
        price: '6295',
        currency: 'USD',
        roomType: 'Lowerdeck Cabin',
        category: 'foreigner',
      },
      {
        price: '6795',
        currency: 'USD',
        roomType: 'Upperdeck Cabin',
        category: 'Domestic / KITAS',
      },
      {
        price: '6795',
        currency: 'USD',
        roomType: 'Upperdeck Cabin',
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
      'All meals throught cruise',
      'Transfers in the islands.',
      'All diving excursions',
      'Bilingual dive master and assistant',
      'AIR tank',
      'Weights',
      'Coffee, tea , beer, spirit, wine and soft drinks.',
    ],
    notes: [
      'Full dive equipment',
      'NITROX optional $150 modation on board 8 days 7 night',
      'Air tickets mainland GYE/UIO - BALTRA roundtrip',
      'Galapagos national park tax $200 in cash only at Airport.',
      'Ingala tax $20 in cash only at Airport.',
      'Crew tip gratitude',
      'Fuel Surcharge $150 PP',
      'Travel and medical insurance',
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
        img: ImageGalapagosMain.src,
        imgAlt: '',
        blurDataUrl: ImageGalapagosMain.blurDataURL,
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
    img: ImageGalapagosMain.src,
    imgAlt: 'Galapagos LOB Dive Trip with MV Tiburon Explorer',
    blurDataUrl: ImageGalapagosMain.blurDataURL,
    title: 'Galapagos LOB Dive Trip with MV Tiburon Explorer',
    location: 'Indonesia',
    date: 'May 23rd - 30th, 2026',
    endDate: {
      day: 1,
      month: 11,
      year: 2025
    },
    url: 'galapagos-diving-trip-batch-two',
    price: '6,995',
    priceNum: '6995',
    currency: 'USD',
    duration: '8 days',
    highlight: {
      diveCount: '20 Dives',
      type: 'LOB'
    },
    available: true,
    multiCurrencies: false,
    category: 'diving-trips',
    metaDescription: 'Explore the world-famous Galapagos Islands on a once-in-a-lifetime diving trip. Discover pristine reefs, swim with hammerhead sharks, sea lions, and marine iguanas. Book your unforgettable Galapagos diving adventure now—perfect for both beginner and experienced divers!',
    metaKeywords: 'galapagos diving, galapagos diving trip, galapagos islands dive, liveaboard galapagos, galapagos scuba diving, galapagos underwater, galapagos sharks, galapagos marine life, diving holidays galapagos, scuba diving tours, best diving destinations, adventure travel, eco diving, wildlife encounters, pacific ocean diving, bucket list diving',
    overview: 'Explore the world-famous Galapagos Islands on a once-in-a-lifetime diving trip. Discover pristine reefs, swim with hammerhead sharks, sea lions, and marine iguanas. Book your unforgettable Galapagos diving adventure now—perfect for both beginner and experienced divers!',
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
        value: '8D7N',
        label: '8D7N'
      },
    ],
    pricePerRoom: [
      {
        price: '6995',
        currency: 'USD',
        roomType: '8D7N',
        category: 'Domestic / KITAS',
      },
      {
        price: '6995',
        currency: 'USD',
        roomType: '8D7N',
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
      'All meals through cruise',
      'Transfers in the islands.',
      'All diving excursions',
      'Bilingual dive master and assistant',
      'AIR tank',
      'Weights',
      'Coffee, tea , beer, spirit, wine and soft drinks.',
    ],
    notes: [
      'Full dive equipment available for rental',
      'NITROX optional $150 modation on board 8 days 7 night',
      'Air tickets mainland GYE/UIO - BALTRA roundtrip',
      'Galapagos national park tax $200 in cash only at Airport.',
      'Ingala tax $20 in cash only at Airport.',
      'Crew tip gratitude',
      'Fuel Surcharge $150 PP',
      'Exclude Travel and medical insurance',
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
        img: ImageGalapagosMain.src,
        imgAlt: '',
        blurDataUrl: ImageGalapagosMain.blurDataURL,
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
