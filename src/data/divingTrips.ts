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
  ImageMoalBoalMain,
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
  //   img: ImageBandarNeiraTwo.src,
  //   imgAlt: 'Banda Neira Trip',
  //   blurDataUrl: ImageBandarNeiraTwo.blurDataURL,
  //   title: 'Banda Neira Dive Trip with Majestic Voyager - September',
  //   location: 'Maluku, Indonesia',
  //   date: 'Sep 21st - 27th, 2025',
  //   endDate: {
  //     day: 1,
  //     month: 11,
  //     year: 2025
  //   },
  //   url: 'banda-neira-majestic-voyager-september',
  //   price: '2,800',
  //   priceNum: '2800',
  //   currency: 'USD',
  //   duration: '7 days',
  //   highlight: {
  //     diveCount: '+15 dives',
  //     type: 'LOB'
  //   },
  //   available: false,
  //   multiCurrencies: true,
  //   category: 'diving-trips',
  //   metaDescription: 'Embark on an extraordinary journey through time and tide with a liveaboard diving trip to Banda Neira. This captivating Indonesian archipelago, steeped in colonial history and volcanic allure, offers a unique blend of topside exploration and breathtaking underwater adventures.',
  //   metaKeywords: 'luxury dive trips, liveaboard diving, dive vacations, curated dive experiences, dive destinations, diving holidays, premium dive trips, exclusive dive travel, dive trip planner, best dive trips, diving adventures, underwater exploration',
  //   overview: 'Embark on an extraordinary journey through time and tide with a liveaboard diving trip to Banda Neira. This captivating Indonesian archipelago, steeped in colonial history and volcanic allure, offers a unique blend of topside exploration and breathtaking underwater adventures.',
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
  //       price: '29,500,000',
  //       currency: 'IDR',
  //       roomType: 'Deluxe - Lower Deck',
  //       category: 'Domestic / KITAS',
  //     },
  //     {
  //       price: '32,000,000',
  //       currency: 'IDR',
  //       roomType: 'Executive - Upper Deck',
  //       category: 'Domestic / KITAS',
  //     },
  //     {
  //       price: '35,000,000',
  //       currency: 'IDR',
  //       roomType: 'Suite - Main Deck',
  //       category: 'Domestic / KITAS',
  //     },
  //     {
  //       price: '2,290',
  //       currency: 'USD',
  //       roomType: 'Deluxe - Lower Deck',
  //       category: 'foreigner',
  //     },
  //     {
  //       price: '2,490',
  //       currency: 'USD',
  //       roomType: 'Executive - Upper Deck',
  //       category: 'foreigner',
  //     },
  //     {
  //       price: '2,690',
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
  //     'Return airport transfers in Ambon.',
  //     '⁠6 nights in AC Cabins aboard on sharing basis.',
  //     '⁠Full onboard meals, tea, coffee, softdrink & water.',
  //     '⁠Historical & Heritage land tour at Banda Neira.',
  //     '⁠Unlimited tea, coffee, softdrink and mineral water.',
  //     '⁠15+ dives with tanks, weight & weight belt.',
  //     'English speaking cruise director.',
  //     'Dive master & local dive guide.',
  //     'Underwater photo/video documentation.',
  //   ],
  //   notes: [
  //     '⁠Exclude airflight tickets to Ambon.',
  //     'Port Clearance Fee (USD 25 / day for foreigner).',
  //     'Dive equipment rental is available for IDR 400,000 / day.',
  //     'Crew gratitudes min. IDR 200rb / day / pax.',
  //     '⁠Port clearance fee IDR 250k / day / pax (domestic).',
  //     '⁠Port clearance fee  USD 25,- / day / pax (foreigner).',
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
  //       img: ImageBandarNeiraTwo.src,
  //       imgAlt: '',
  //       blurDataUrl: ImageBandarNeiraTwo.blurDataURL,
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
  //   img: ImageBandarNeiraTwo.src,
  //   imgAlt: 'Banda Neira Trip',
  //   blurDataUrl: ImageBandarNeiraTwo.blurDataURL,
  //   title: 'Banda Neira Dive Trip with Oceanix Voyager - September',
  //   location: 'Maluku, Indonesia',
  //   date: 'Sep 29th - Oct 4th, 2025',
  //   endDate: {
  //     day: 1,
  //     month: 11,
  //     year: 2025
  //   },
  //   url: 'banda-neira-oceanix-voyager-September',
  //   price: '2,290',
  //   priceNum: '2290',
  //   currency: 'USD',
  //   duration: '6 days',
  //   highlight: {
  //     diveCount: '+15 dives',
  //     type: 'LOB'
  //   },
  //   available: true,
  //   multiCurrencies: true,
  //   category: 'diving-trips',
  //   metaDescription: 'Embark on an extraordinary journey through time and tide with a liveaboard diving trip to Banda Neira. This captivating Indonesian archipelago, steeped in colonial history and volcanic allure, offers a unique blend of topside exploration and breathtaking underwater adventures.',
  //   metaKeywords: 'luxury dive trips, liveaboard diving, dive vacations, curated dive experiences, dive destinations, diving holidays, premium dive trips, exclusive dive travel, dive trip planner, best dive trips, diving adventures, underwater exploration',
  //   overview: 'Embark on an extraordinary journey through time and tide with a liveaboard diving trip to Banda Neira. This captivating Indonesian archipelago, steeped in colonial history and volcanic allure, offers a unique blend of topside exploration and breathtaking underwater adventures.',
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
  //       price: '29,500,000',
  //       currency: 'IDR',
  //       roomType: 'Deluxe - Lower Deck',
  //       category: 'Domestic / KITAS',
  //     },
  //     {
  //       price: '33,000,000',
  //       currency: 'IDR',
  //       roomType: 'Executive - Upper Deck',
  //       category: 'Domestic / KITAS',
  //     },
  //     {
  //       price: '35,000,000',
  //       currency: 'IDR',
  //       roomType: 'Suite - Main Deck',
  //       category: 'Domestic / KITAS',
  //     },
  //     {
  //       price: '2,150',
  //       currency: 'USD',
  //       roomType: 'Deluxe - Lower Deck',
  //       category: 'foreigner',
  //     },
  //     {
  //       price: '2,550',
  //       currency: 'USD',
  //       roomType: 'Executive - Upper Deck',
  //       category: 'foreigner',
  //     },
  //     {
  //       price: '2,750',
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
  //     // 'Return airport transfers in Ambon.',
  //     // '⁠6 nights in AC Cabins aboard on sharing basis.',
  //     // '⁠Full onboard meals, tea, coffee, softdrink & water.',
  //     // '⁠Historical & Heritage land tour at Banda Neira.',
  //     // '⁠Unlimited tea, coffee, softdrink and mineral water.',
  //     // '⁠15+ dives with tanks, weight & weight belt.',
  //     // 'English speaking cruise director.',
  //     // 'Dive master & local dive guide.',
  //     // 'Underwater photo/video documentation.',
  //   ],
  //   notes: [
  //     // '⁠Exclude airflight tickets to Ambon.',
  //     // 'Port Clearance Fee (USD 25 / day for foreigner).',
  //     // 'Dive equipment rental is available for IDR 400,000 / day.',
  //     // 'Crew gratitudes min. IDR 200rb / day / pax.',
  //     // '⁠Port clearance fee IDR 250k / day / pax (domestic).',
  //     // '⁠Port clearance fee  USD 25,- / day / pax (foreigner).',
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
  //       img: ImageBandarNeiraTwo.src,
  //       imgAlt: '',
  //       blurDataUrl: ImageBandarNeiraTwo.blurDataURL,
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
  //   img: ImageBimaThree.src,
  //   imgAlt: 'Ambon, Suanggi, Banda Dive Trip with Majestic Voyager',
  //   blurDataUrl: ImageBimaThree.blurDataURL,
  //   title: 'Ambon, Suanggi, Banda Dive Trip with Majestic Voyager',
  //   location: 'Ambon, Indonesia',
  //   date: 'Oct 12th - 17th, 2025',
  //   endDate: {
  //     day: 1,
  //     month: 11,
  //     year: 2025
  //   },
  //   url: 'ambon-suanggi-banda-dive-majestic-voyager',
  //   price: '1,975',
  //   priceNum: '1975',
  //   currency: 'USD',
  //   duration: '6 days',
  //   highlight: {
  //     diveCount: '12 dives',
  //     type: 'LOB'
  //   },
  //   available: true,
  //   multiCurrencies: true,
  //   category: 'diving-trips',
  //   metaDescription: 'Experience an unforgettable liveaboard diving adventure in Ambon, Suanggi, and Banda. Explore vibrant coral reefs, encounter rare marine life, and dive into the rich history of the Banda Sea. Join us for an extraordinary underwater journey!',
  //   metaKeywords: 'liveaboard diving, Ambon diving, Suanggi diving, Banda diving, Banda Sea diving, Indonesia liveaboard, coral reefs, underwater adventure, scuba diving trip, dive Banda Islands, Ambon liveaboard, Suanggi dive sites',
  //   overview: 'Experience an unforgettable liveaboard diving adventure in Ambon, Suanggi, and Banda. Explore vibrant coral reefs, encounter rare marine life, and dive into the rich history of the Banda Sea. Join us for an extraordinary underwater journey!',
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
  //       price: '26,500,000',
  //       currency: 'IDR',
  //       roomType: 'Deluxe - Lower Deck',
  //       category: 'Domestic / KITAS',
  //     },
  //     {
  //       price: '29,000,000',
  //       currency: 'IDR',
  //       roomType: 'Executive - Upper Deck',
  //       category: 'Domestic / KITAS',
  //     },
  //     {
  //       price: '32,000,000',
  //       currency: 'IDR',
  //       roomType: 'Suite - Main Deck',
  //       category: 'Domestic / KITAS',
  //     },
  //     {
  //       price: '1,975',
  //       currency: 'USD',
  //       roomType: 'Deluxe - Lower Deck',
  //       category: 'foreigner',
  //     },
  //     {
  //       price: '2,275',
  //       currency: 'USD',
  //       roomType: 'Executive - Upper Deck',
  //       category: 'foreigner',
  //     },
  //     {
  //       price: '2,475',
  //       currency: 'USD',
  //       roomType: 'Suite - Main Deck',
  //       category: 'foreigner',
  //     },
  //   ],
  //   schedule: [
  //     {
  //       time: 'Day 1 - Ambon Island',
  //       descList: [
  //         'Ambon Island, 1-2 dives',
  //         'Our staff will meet you at Pattimura Airport and take you to Majestic Voyager, Partimura airport is very close to where the boat is anchored. Arrivals before midday are appreciated for check dive potential.',
  //         '⁠Divesite usually Laha jetty for a check dive',
  //         '⁠Muck diving, many unusual critters similar to Lembeh.',
  //         '⁠Sail overnight to Banda Islands. '
  //       ]
  //     },
  //     {
  //       time: 'Day 2 - Banda Island',
  //       descList: [
  //         '⁠⁠Dive sites around Soangi Island including: Soangi drop-off, Jackpot reef, & Ping-Pong. - Early chance to see schooling hammerhead sharks in action.',
  //         '',
  //         '⁠Moor up at Tanjung Burung, Banda Islands',
  //       ]
  //     },
  //     {
  //       time: 'Day 3 - Banda Island',
  //       descList: [
  //         '⁠Dive sites around Hatta Island including Tanjung Buton, Hole in the Wall, and Karang Hatta',
  //         '⁠Next good chances to see schooling hammerhead sharks.',
  //         '⁠Anchor overnight in a Banda-Neira, a secluded bay at the foot of Gunung Api.',
  //       ]
  //     },
  //     {
  //       time: 'Day 4 - Banda Island',
  //       descList: [
  //         '⁠⁠Dive sites in Banda Islands include Pohon Miring, Batu Kapal, Pulau Pisang, & Jackpot',
  //         '⁠⁠Return to Soangi Island for last dive for last schooling hammerhead action potential & shorter overnight sail to Nusalaut Island.',
  //         '⁠an early morning land tour to the colonial town of Banda Neira and it`s Fort Belgica is a possible alternative to Pohon Miring',
  //         '⁠Sail overnight to Ameth village, Nusalaut Island.',
  //       ]
  //     },
  //     {
  //       time: 'Day 5 - Nusalaut Island & Saparua Island.',
  //       descList: [
  //         '⁠⁠⁠Dive sites include Ameth & Pombo Booi.',
  //         '⁠⁠⁠Afternoon & evening sail to Ambon Island, Laha village.',
  //       ]
  //     },
  //     {
  //       time: 'Day 6 - Ambon Island - Laha',
  //       descList: [
  //         '⁠⁠⁠Dive sites include Ameth & Pombo Booi.',
  //         '⁠⁠Check-out, check-in & fly away.',
  //       ]
  //     },
  //   ],
  //   include: [
  //     'Return airport transfers in Ambon.',
  //     '⁠5 nights in AC Cabins aboard on sharing basis.',
  //     '⁠Full onboard meals, tea, coffee, softdrink & water.',
  //     '⁠Historical & Heritage land tour at Banda Neira.',
  //     '⁠Unlimited tea, coffee, softdrink and mineral water.',
  //     '12 dives with tanks, weight & weight belt.',
  //     'English speaking cruise director.',
  //     'Dive master & local dive guide.',
  //     'Underwater photo/video documentation.',
  //   ],
  //   notes: [
  //     '⁠Exclude airflight tickets to Ambon.',
  //     'Port Clearance Fee (USD 25 / day for foreigner).',
  //     'Dive equipment rental is available for IDR 400,000 / day.',
  //     'Crew gratitudes min. IDR 200rb / day / pax.',
  //     '⁠Port clearance fee IDR 250k / day / pax (domestic).',
  //     '⁠Port clearance fee  USD 25,- / day / pax (foreigner).',
  //     '⁠Banda Sea trips can be tailored.',
  //     'Diving days: 5 days (at least 12 dives depending on plan, maybe possible to squeeze a night dive in if desired, number of check dives on first day depends on guest arrival & clearance).'
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
  //       img: ImageBimaThree.src,
  //       imgAlt: '',
  //       blurDataUrl: ImageBimaThree.blurDataURL,
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
  //   img: ImageTimorLesteOne.src,
  //   imgAlt: 'Timor Leste Whale Watching Trip',
  //   blurDataUrl: ImageTimorLesteOne.blurDataURL,
  //   title: 'Timor Leste Whale Watching Trip',
  //   location: 'Indonesia',
  //   date: 'Oct 19th - 22th, 2025',
  //   endDate: {
  //     day: 1,
  //     month: 11,
  //     year: 2025
  //   },
  //   url: 'timor-leste-whale-watching-diving-trip-batch-one',
  //   price: '1,100',
  //   priceNum: '1100',
  //   currency: 'USD',
  //   duration: '4 days',
  //   highlight: {
  //     diveCount: '',
  //     type: 'Land Based'
  //   },
  //   available: true,
  //   multiCurrencies: false,
  //   category: 'diving-trips',
  //   metaDescription: 'Discover the pristine waters of Timor-Leste—one of the world`s best diving destinations. Experience vibrant coral reefs, incredible marine biodiversity, and crystal-clear waters on unforgettable dive trips.',
  //   metaKeywords: 'Timor-Leste diving, scuba diving Atauro, coral reefs Timor-Leste, best dive sites Timor, marine biodiversity, dive trips Timor-Leste, diving tours, eco-diving Timor',
  //   overview: 'located just off the coast of Timor-Leste, is a hidden gem for divers seeking untouched marine ecosystems. Known for its world-class coral reefs, abundant marine life, and exceptional visibility, Atauro boasts some of the highest recorded biodiversity in the world. Divers can explore vibrant coral gardens, steep drop-offs, and drift dives teeming with tropical fish, sharks, and rays.',
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
  //       value: 'Timor Hotel Plaza 4D3N',
  //       label: 'Timor Hotel Plaza 4D3N'
  //     },
  //     {
  //       value: 'Timor Hotel Plaza 5D4N',
  //       label: 'Timor Hotel Plaza 5D4N'
  //     },
  //   ],
  //   pricePerRoom: [
  //     {
  //       price: '1100',
  //       currency: 'USD',
  //       roomType: 'Timor Hotel Plaza 4D3N',
  //       category: 'Domestic / KITAS',
  //     },
  //     {
  //       price: '1400',
  //       currency: 'USD',
  //       roomType: 'Timor Hotel Plaza 5D4N',
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
  //     'Hotel - DC - Hotel transfer',
  //     'Breakfast and lunch during scuba activity',
  //     '3 nights stay at Timor Plaza Hotel with twin share basis',
  //     'Snorkeling gear (mask, snorkel & scuba fins)',
  //     '2 full days swim / snorkeling / free diving activity',
  //     'Dive guide ratio 5:1',
  //   ],
  //   notes: [
  //     'Exclude ⁠Any personal expenditure such as laundry, personal medicine, etc',
  //     'Exclude Dinner',
  //     'Exclude ⁠Airfare',
  //     'Dive equipment rental is available',
  //     'Tip for local guide USD 15,- / day dive',
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
  //       img: ImageTimorLesteOne.src,
  //       imgAlt: '',
  //       blurDataUrl: ImageTimorLesteOne.blurDataURL,
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
  //   img: ImageTimorLesteOne.src,
  //   imgAlt: 'Timor Leste Whale Watching Trip',
  //   blurDataUrl: ImageTimorLesteOne.blurDataURL,
  //   title: 'Timor Leste Whale Watching Trip',
  //   location: 'Indonesia',
  //   date: 'Oct 21th - 25th, 2025',
  //   endDate: {
  //     day: 1,
  //     month: 11,
  //     year: 2025
  //   },
  //   url: 'timor-leste-whale-watching-diving-trip-batch-two',
  //   price: '1,500',
  //   priceNum: '1500',
  //   currency: 'USD',
  //   duration: '5 days',
  //   highlight: {
  //     diveCount: '',
  //     type: 'Land Based'
  //   },
  //   available: true,
  //   multiCurrencies: false,
  //   category: 'diving-trips',
  //   metaDescription: 'Discover the pristine waters of Timor-Leste—one of the world`s best diving destinations. Experience vibrant coral reefs, incredible marine biodiversity, and crystal-clear waters on unforgettable dive trips.',
  //   metaKeywords: 'Timor-Leste diving, scuba diving Atauro, coral reefs Timor-Leste, best dive sites Timor, marine biodiversity, dive trips Timor-Leste, diving tours, eco-diving Timor',
  //   overview: 'located just off the coast of Timor-Leste, is a hidden gem for divers seeking untouched marine ecosystems. Known for its world-class coral reefs, abundant marine life, and exceptional visibility, Atauro boasts some of the highest recorded biodiversity in the world. Divers can explore vibrant coral gardens, steep drop-offs, and drift dives teeming with tropical fish, sharks, and rays.',
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
  //       value: 'Timor Hotel Plaza 5D4N',
  //       label: 'Timor Hotel Plaza 5D4N'
  //     },
  //   ],
  //   pricePerRoom: [
  //     {
  //       price: '1500',
  //       currency: 'USD',
  //       roomType: 'Timor Hotel Plaza 5D4N',
  //       category: 'Domestic / KITAS',
  //     },
  //     {
  //       price: '1500',
  //       currency: 'USD',
  //       roomType: 'Timor Hotel Plaza 5D4N',
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
  //     'Hotel - DC - Hotel transfer',
  //     'Breakfast and lunch during scuba activity',
  //     '4 nights stay at Timor Plaza Hotel with twin share basis',
  //     'Snorkeling gear (mask, snorkel & scuba fins)',
  //     '3 full days swim / snorkeling / free diving activity',
  //     'Dive guide ratio 5:1',
  //   ],
  //   notes: [
  //     'Exclude ⁠Any personal expenditure such as laundry, personal medicine, etc',
  //     'Exclude Dinner',
  //     'Exclude ⁠Airfare',
  //     'VOA $30,- for non Indo citizen',
  //     'Scuba activity $125/dive',
  //     'Dive equipment rental is available',
  //     'Tip for local guide USD 15,- / day dive',
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
  //       img: ImageTimorLesteOne.src,
  //       imgAlt: '',
  //       blurDataUrl: ImageTimorLesteOne.blurDataURL,
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
    img: ImageMoalBoalMain.src,
    imgAlt: 'Moalboal Dive Trip',
    blurDataUrl: ImageMoalBoalMain.blurDataURL,
    title: 'Moalboal Dive Trip',
    location: 'Philippines',
    date: 'Jan 12th - 15th, 2026',
    endDate: {
      day: 1,
      month: 11,
      year: 2025
    },
    url: 'moalboal-diving-trip-2026',
    price: '7,5jt',
    priceNum: '7500000',
    currency: 'IDR',
    duration: '4 days',
    highlight: {
      diveCount: '6-8 Dives',
      type: 'Land Based'
    },
    available: true,
    multiCurrencies: false,
    category: 'diving-trips',
    metaDescription: 'Experience world-class diving in Moalboal with luxury comfort. Swim with sardine runs, vibrant reefs & turtles on an exclusive, premium dive trip.',
    metaKeywords: 'Moalboal dive trip, Luxury diving Moalboal, Moalboal sardine run dive, Premium scuba diving Moalboal, Moalboal diving packages, Turtles diving Moalboal, Luxury dive travel Philippines, Moalboal reef diving, Private Moalboal diving tours, Best Moalboal dive sites',
    overview: 'Experience world-class diving in Moalboal with luxury comfort. Swim with sardine runs, vibrant reefs & turtles on an exclusive, premium dive trip.',
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
        value: 'Beachfront Hotel 4D3N',
        label: 'Beachfront Hotel 4D3N'
      },
      {
        value: 'Beachfront Hotel 5D4N',
        label: 'Beachfront Hotel 5D4N'
      },
    ],
    pricePerRoom: [
      {
        price: '7,500,000',
        currency: 'IDR',
        roomType: 'Beachfront Hotel 4D3N',
        category: 'Domestic / KITAS',
      },
      {
        price: '7,500,000',
        currency: 'IDR',
        roomType: 'Beachfront Hotel 4D3N',
        category: 'foreigner',
      },
      {
        price: '9,500,000',
        currency: 'IDR',
        roomType: 'Beachfront Hotel 5D4N',
        category: 'Domestic / KITAS',
      },
      {
        price: '9,500,000',
        currency: 'IDR',
        roomType: 'Beachfront Hotel 5D4N',
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
      '⁠Private airport transfer',
      '⁠6-8 log dives with air & weights.',
      '⁠1:4 dive guide ratio',
      '⁠3-4 nights at beachfront hotel on twin sharing basis',
      '⁠Weight, tanks & local dive guide',
      '⁠Breakfast & Lunch during activities',
      '⁠Marine and environmental fee',
    ],
    notes: [
      'Exclude ⁠Any personal expenditure such as laundry, personal medicine, etc',
      'Exclude Dinner',
      'Exclude ⁠Airfare to/from Coron',
      'Dive equipment rental is available',
      'Tip for local guide 125k / day',
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
        img: ImageMoalBoalMain.src,
        imgAlt: '',
        blurDataUrl: ImageMoalBoalMain.blurDataURL,
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
    img: ImageMalapascuaMain.src,
    imgAlt: 'Malapascua Dive Trip',
    blurDataUrl: ImageMalapascuaMain.blurDataURL,
    title: 'Malapascua Dive Trip',
    location: 'Philippines',
    date: 'Jan 16th - 19th, 2026',
    endDate: {
      day: 1,
      month: 11,
      year: 2025
    },
    url: 'malapascua-diving-trip-2026',
    price: '7,9jt',
    priceNum: '7900000',
    currency: 'IDR',
    duration: '4 days',
    highlight: {
      diveCount: '6 Dives',
      type: 'Land Based'
    },
    available: true,
    multiCurrencies: false,
    category: 'diving-trips',
    metaDescription: 'Discover Malapascua’s world-famous thresher sharks in style. Enjoy luxury diving with pristine reefs, rare marine life & exclusive premium dive trips.',
    metaKeywords: 'Malapascua dive trip, Luxury diving Malapascua, Malapascua thresher shark dive, Premium scuba diving Malapascua, Malapascua diving packages, Malapascua reef diving, Luxury dive travel Philippines, Private Malapascua diving tours, Best Malapascua dive sites, Scuba diving Malapascua',
    overview: 'Discover Malapascua’s world-famous thresher sharks in style. Enjoy luxury diving with pristine reefs, rare marine life & exclusive premium dive trips.',
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
        value: 'Garden View',
        label: 'Garden View'
      },
      {
        value: 'Beachfront View',
        label: 'Beachfront View'
      },
    ],
    pricePerRoom: [
      {
        price: '7,900,000',
        currency: 'IDR',
        roomType: 'Garden View',
        category: 'Domestic / KITAS',
      },
      {
        price: '7,900,000',
        currency: 'IDR',
        roomType: 'Garden View',
        category: 'foreigner',
      },
      {
        price: '10,900,000',
        currency: 'IDR',
        roomType: 'Beachfront View',
        category: 'Domestic / KITAS',
      },
      {
        price: '10,900,000',
        currency: 'IDR',
        roomType: 'Beachfront View',
        category: 'foreigner',
      },
    ],
    schedule: [
      {
        time: 'Day 1',
        descList: [
          '⁠Depart from Cebu before 11am',
          '⁠Transfer by private van to Maya Port',
          '⁠Transfer by boat to Malap Island',
          '⁠Arrive in Malapascua Island',
          '⁠Hotel check-in',
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
          '⁠3x boat dives for thresher & tiger shark',
        ]
      },
      {
        time: 'Day 4',
        descList: [
          'Hotel check-out',
          '⁠Transfer by boat to Maya Port',
          '⁠Transfer by private van to Cebu Airport',
        ]
      },
    ],
    include: [
      '⁠6x thresher & tiger shark dives',
      '⁠4D3N stay on twin sharing basis with breakfast.',
      '⁠Weight, tanks & local dive guide',
      '⁠Underwater documentation',
      '⁠Marine and environmental fee',
      '⁠Private airport van transfer',
      '⁠Private boat transfer',
    ],
    notes: [
      'Exclude ⁠Any personal expenditure such as laundry, personal medicine, etc',
      'Exclude ⁠Lunch & dinner',
      'Exclude ⁠Airfare to/from Cebu',
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
        img: ImageMalapascuaMain.src,
        imgAlt: '',
        blurDataUrl: ImageMalapascuaMain.blurDataURL,
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
      {
        img: ImageBandarNeiraFour.src,
        imgAlt: '',
        blurDataUrl: ImageBandarNeiraFour.blurDataURL,
      },
    ],
  },
  {
    img: ImageWayagMain.src,
    imgAlt: 'Central Wayag LOB Dive Trip with Prestige Voyager - Lebaran Escape to Raja Ampat',
    blurDataUrl: ImageWayagMain.blurDataURL,
    title: 'Central Wayag LOB Dive Trip with Prestige Voyager - Lebaran Escape to Raja Ampat',
    location: 'Indonesia',
    date: 'Mar 16th - 21st, 2026',
    endDate: {
      day: 1,
      month: 11,
      year: 2025
    },
    url: 'central-wayag-lob-dive-trip-lebaran-2026',
    price: '28,5jt',
    priceNum: '28500000',
    currency: 'IDR',
    duration: '6 days',
    highlight: {
      diveCount: '14 Dives',
      type: 'LOB'
    },
    available: true,
    multiCurrencies: true,
    category: 'diving-trips',
    metaDescription: 'Dive into Wayag’s crystal lagoons and untouched reefs in pure luxury. Experience rare marine life, stunning karst islands & exclusive premium dive trips.',
    metaKeywords: 'Wayag dive trip, Luxury diving Wayag, Wayag scuba diving, Premium scuba diving Raja Ampat, Wayag reef diving, Luxury dive travel Indonesia, Private Wayag diving tours, Best Wayag dive sites, Raja Ampat luxury diving, Wayag diving packages',
    overview: 'Dive into Wayag’s crystal lagoons and untouched reefs in pure luxury. Experience rare marine life, stunning karst islands & exclusive premium dive trips.',
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
        value: 'Lower Deck',
        label: 'Lower Deck'
      },
      {
        value: 'Main Deck',
        label: 'Main Deck'
      },
      {
        value: 'Upper Deck',
        label: 'Upper Deck'
      },
    ],
    pricePerRoom: [
      {
        price: '28,500,000',
        currency: 'IDR',
        roomType: 'Lower Deck',
        category: 'Domestic / KITAS',
      },
      {
        price: '2150',
        currency: 'USD',
        roomType: 'Lower Deck',
        category: 'foreigner',
      },
      {
        price: '32,000,000',
        currency: 'IDR',
        roomType: 'Main Deck',
        category: 'Domestic / KITAS',
      },
      {
        price: '2550',
        currency: 'USD',
        roomType: 'Main Deck',
        category: 'foreigner',
      },
      {
        price: '35,000,000',
        currency: 'IDR',
        roomType: 'Upper Deck',
        category: 'Domestic / KITAS',
      },
      {
        price: '2750',
        currency: 'USD',
        roomType: 'Upper Deck',
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
      '⁠5 nights in AC Cabins aboard on sharing basis',
      '⁠full board meals, tea, coffee, softdrink & water',
      '⁠unlimited tea, coffee, softdrink and mineral water',
      '⁠14 dives with tanks, weight & weight belt',
      '⁠english speaking cruise director',
      '⁠dive master & local dive guide',
      '⁠underwater documentation',
    ],
    notes: [
      'Exclude ⁠airflight tickets to Sorong',
      'Dive equipment rental is available',
      '⁠crew gratitudes / tip min IDR 200k / day / pax',
      '⁠port clearance fee IDR 300k / day / pax (domestic)',
      '⁠port clesrance fee  USD 30,- / day / pax (foreigner)',
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
        img: ImageWayagMain.src,
        imgAlt: '',
        blurDataUrl: ImageWayagMain.blurDataURL,
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
    date: 'Apr 2nd - 8th, 2026',
    endDate: {
      day: 1,
      month: 11,
      year: 2025
    },
    url: 'raja-ampat-misool-majestic-voyager-april-2026',
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
        price: '29,500,000',
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
