import Link from 'next/link'
import Image from 'next/image'
import { FaLocationDot, FaCalendar, FaTents, FaShip } from 'react-icons/fa6';
import { MdScubaDiving } from 'react-icons/md';
import { Button } from '@/components/ui/Button'
import { CardHorizontalItemProp } from './types'

export default function CardHorizontalItem({
  img,
  imgAlt,
  blurDataUrl,
  title,
  location,
  date,
  url,
  price,
  highlight,
  available,
  shipName,
  currency,
}: CardHorizontalItemProp) {

  return (
    <Link href={url} className='relative block top-0 overflow-hidden rounded-2xl transition-all hover:-top-1 group'>
      <div className='flex flex-wrap border border-slate-200 rounded-2xl p-3'>
        <div className='relative basis-full md:basis-[40%] grow-0 rounded-2xl shadow-xl overflow-hidden'>
          <div className='relative w-full pb-[60%] md:pb-[85%] 2lg:pb-[125%] 3lg:pb-[85%]'>
            <Image
              src={img}
              alt={imgAlt}
              sizes='100vw, 33vw'
              style={{ objectFit: 'cover' }}
              placeholder='blur'
              blurDataURL={blurDataUrl}
              fill
            />
            <div className='absolute font-semibold top-2 left-2 text-sm'>
              {available ? (
                <span className='border-emerald-300 rounded-full overflow-hidden bg-emerald-100 text-emerald-600 px-4 py-1 inline-block'>Spots Open</span>
              ) : (
                  <span className='border-red-300 rounded-full overflow-hidden bg-red-100 text-red-600 px-4 py-1 inline-block'>Fully Booked</span>
              )}
            </div>
          </div>
        </div>
        <div className='relative pb-0 md:pb-2 pt-2 mt-4 md:mt-0 md:pl-6 md:pr-1 basis-full md:basis-[60%] grow-0'>
          {highlight?.diveCount ? (
            <div className='flex flex-col 2xs:flex-row 2lg:flex-col 3lg:flex-row gap-3 mb-4'>
              <div className='w-fit flex px-3 py-1 text-sm items-center gap-2 rounded-full bg-sky-100 text-sky-900'>
                <span><MdScubaDiving /></span>
                <span>{highlight?.diveCount}</span>
              </div>
              <div className='w-fit flex px-3 py-1 text-sm items-center gap-2 rounded-full bg-orange-100 text-orange-700'>
                <span><FaTents /></span>
                <span>{highlight?.type}</span>
              </div>
            </div>
          ) : null}
          <h3 className='text-lg uppercase font-semibold font-montserrat mb-4 lg:line-clamp-1 leading-snug'>{title}</h3>
          {shipName && (
            <div className='flex gap-3 items-center mb-2 text-sm opacity-70'>
              <FaShip />
              <span>{shipName}</span>
            </div>
          )}
          <div className='flex gap-3 items-center mb-2 text-sm opacity-70'>
            <FaLocationDot />
            <span>{location}</span>
          </div>
          <div className='flex gap-3 items-center mb-2 text-sm opacity-70'>
            <FaCalendar />
            <span>{date}</span>
          </div>
          <div className='2xs:items-end mt-7 md:mt-4 2lg:mt-10 md:absolute 2lg:relative 3lg:absolute bottom-1 left-0 flex justify-between w-full pl-0 md:pl-6 2lg:pl-0 3lg:pl-6 gap-3 flex-col 2xs:flex-row'>
            <div>
              <span className='text-sm block opacity-70'>Starts from </span>
              {price ? (
                <>
                  <span className='text-base font-bold'>{`${currency} ${price}`} </span>
                  <span className='text-sm opacity-70'>/ person</span>
                </>
              ) : (
                  <span className='text-base font-bold'>To be announced</span>
              )}
            </div>
            <div>
              <Button variant='secondary' size='sm' className='w-full 2xs:w-auto'>
                See Detail
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
};
