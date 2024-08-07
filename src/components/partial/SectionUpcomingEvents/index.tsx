import Title from '@/components/ui/Title';
import { SectionUpcomingEventsProp } from './types';
import { Button } from '@/components/ui/Button';
import CardVerticalItem from '@/components/ui/CardVerticalItem';
import CardHorizontalItem from '@/components/ui/CardHorizontalItem';
import CardImageTitle from '@/components/ui/CardImageTitle';
import Link from 'next/link';

export default function SectionUpcomingEvents({
  titleTop,
  titleMain,
  btnUrl,
  btnText,
  events,
  cardClass,
  cardType,
  cardSlide,
}: SectionUpcomingEventsProp) {

  return (
    <section className='relative z-10 container my-12 lg:my-16 px-4 lg:px-8'>
      <Title
        titleTop={titleTop}
        titleMain={titleMain}
      />
      <div className='-mx-3'>
        <div className={cardSlide ? 'flex pt-5 md:pt-7 pb-3 mb-2 w-full mx-auto flex-nowrap overflow-x-auto' : 'my-3 flex flex-wrap'}>
          {events?.map(({ img, imgAlt, blurDataUrl, title, location, date, url, price, highlight, type, unit, available, currency, liveaboard, description }, index) => {

            if (cardType === 'horizontal') {
              return (
                <div key={index} className={cardClass}>
                  <CardHorizontalItem
                    img={img}
                    imgAlt={imgAlt}
                    blurDataUrl={blurDataUrl}
                    url={url}
                    title={title}
                    location={location || ''}
                    date={date || ''}
                    price={price || ''}
                    highlight={highlight}
                    available={available || false}
                    currency={currency || ''}
                    liveaboard={liveaboard}
                    description={description}
                  />
                </div>
              )
            }

            if (cardType === 'imageTitle') {
              return (
                <div key={index} className={cardClass}>
                  <CardImageTitle
                    img={img}
                    imgAlt={imgAlt}
                    blurDataUrl={blurDataUrl}
                    url={url}
                    title={title}
                  />
                </div>
              )
            }

            return (
              <div key={index} className={cardClass}>
                <CardVerticalItem
                  img={img}
                  imgAlt={imgAlt}
                  blurDataUrl={blurDataUrl}
                  url={url}
                  title={title}
                  location={location || ''}
                  date={date || ''}
                  price={price || ''}
                  type={type || ''}
                  unit={unit || ''}
                  currency={currency || ''}
                />
              </div>
            )
          })}
        </div>
      </div>
      {btnUrl && (
        <div className='flex justify-center'>
          <Button asChild size='md' className='uppercase flex-grow lg:flex-grow-0'>
            <Link href={btnUrl} aria-label={btnText}>{btnText}</Link>
          </Button>
        </div>
      )}
    </section>
  )
};
