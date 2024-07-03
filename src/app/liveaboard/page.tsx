import HeroListPage from '@/components/partial/HeroListPage';
import CardHorizontalItem from '@/components/ui/CardHorizontalItem';
import ImageBanner from '@public/assets/images/gallery/liveaboard-banner-1.jpg'
import { upcomingLiveaboard } from '@/data/upcomingEvents';

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
        <h2 className='mb-1 lg:mb-3 whitespace-pre-line leading-tight md:leading-snug text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight'>Upcoming Liveaboard</h2>
        <div className='flex flex-wrap -mx-4'>
          {upcomingLiveaboard?.map(({ img, imgAlt, blurDataUrl, title, location, date, url, price, duration }, index) => {

            return (
              <div key={index} className='basis-[100%] 2lg:basis-[50%] p-4 grow-0 flex-shrink-0'>
                <CardHorizontalItem
                  img={img}
                  imgAlt={imgAlt}
                  blurDataUrl={blurDataUrl}
                  url={url}
                  title={title}
                  location={location || ''}
                  date={date || ''}
                  price={price || ''}
                  duration={duration || ''}
                />
              </div>
            )
          })}
        </div>
      </div>
    </main>
  )
};
