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
}: SectionUpcomingEventsProp) {

  return (
    <section className='relative z-10 container my-20 px-4 lg:px-8'>
      <Title
        titleTop={titleTop}
        titleMain={titleMain}
      />
      <div className='my-3 flex flex-wrap -mx-4'>
        {events?.map(({ img, imgAlt, blurDataUrl, title, location, date, url, price, duration, highlight }, index) => {

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
                  duration={duration || ''}
                  highlight={highlight}
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
                duration={duration || ''}
              />
            </div>
          )
        })}
      </div>
      <div className='text-center'>
        <Button asChild size='md' className='uppercase'>
          <Link href={btnUrl} aria-label={btnText}>{btnText}</Link>
        </Button>
      </div>
    </section>
  )
};
