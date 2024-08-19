import HeroListPage from '@/components/partial/HeroListPage';
import CardHorizontalItem from '@/components/ui/CardHorizontalItem';
import ImageBanner from '@public/assets/images/gallery/diving-trip-banner-1.jpg'
import { divingTripsData } from '@/data/divingTrips';
import SectionInstagram from '@/components/partial/SectionInstagram';
import SectionTestimonials from '@/components/partial/SectionTestimonials';
import { instagramImages } from '@/data/gallery';
import { testimonials } from '@/data/testimonials';

export default function DivingTripsPage() {

  return (
    <main>
      <HeroListPage
        title='Diving Trips'
        subtitle='Expect amazing underwater sights and unforgettable encounters with incredible sea creatures. Diving adventures await!'
        img={ImageBanner.src}
        imgAlt='Diving Trips Page Image Banner'
        blurDataUrl={ImageBanner.blurDataURL}
      />
      <div className='container px-4 lg:px-8 my-10'>
        <h2 className='mb-1 lg:mb-3 whitespace-pre-line leading-tight md:leading-snug text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight'>Upcoming Diving Trips</h2>
        <div className='flex flex-wrap -mx-3'>
          {divingTripsData?.map(({ img, imgAlt, blurDataUrl, title, location, date, url, price, highlight, available, currency, category }, index) => {

            return (
              <div key={index} className='basis-full 2lg:basis-1/2 p-3 grow-0 flex-shrink-0'>
                <CardHorizontalItem
                  img={img}
                  imgAlt={imgAlt}
                  blurDataUrl={blurDataUrl}
                  url={`/${category}/${url}`}
                  title={title}
                  location={location || ''}
                  date={date || ''}
                  price={price || ''}
                  highlight={highlight}
                  available={available}
                  currency={currency}
                />
              </div>
            )
          })}
        </div>
      </div>
      <SectionTestimonials testimonials={testimonials} />
      <SectionInstagram titleMain='@sightsea' titleTop='Follow Us on Instagram' gallery={instagramImages} />
    </main>
  )
};
