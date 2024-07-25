import HeroListPage from '@/components/partial/HeroListPage';
import CardHorizontalItem from '@/components/ui/CardHorizontalItem';
import ImageBanner from '@public/assets/images/gallery/liveaboard-banner-1.jpg'
import { upcomingLiveaboard } from '@/data/upcomingEvents';
import SectionInstagram from '@/components/partial/SectionInstagram';
import SectionTestimonials from '@/components/partial/SectionTestimonials';
import { instagramImages } from '@/data/gallery';
import { testimonials } from '@/data/testimonials';

export default function DivingTripsPage() {

  return (
    <main>
      <HeroListPage
        title='Liveaboard'
        subtitle='Liveaboard vessels provide extended access to remote dive sites, optimizing underwater exploration opportunities.'
        img={ImageBanner.src}
        imgAlt='Liveaboard Page Image Banner'
        blurDataUrl={ImageBanner.blurDataURL}
      />
      <div className='container px-4 lg:px-8 my-10'>
        <h2 className='mb-1 lg:mb-3 whitespace-pre-line leading-tight md:leading-snug text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight'>Upcoming Liveaboard</h2>
        <div className='flex flex-wrap -mx-3'>
          {upcomingLiveaboard?.map(({ img, imgAlt, blurDataUrl, title, location, date, url, price, available, shipName, currency }, index) => {

            return (
              <div key={index} className='basis-full 2lg:basis-1/2 p-3 grow-0 flex-shrink-0'>
                <CardHorizontalItem
                  img={img}
                  imgAlt={imgAlt}
                  blurDataUrl={blurDataUrl}
                  url={url}
                  title={title}
                  location={location || ''}
                  date={date || ''}
                  price={price || ''}
                  available={available}
                  shipName={shipName}
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
