import Link from 'next/link'
import Image from 'next/image'
import { FaLocationDot, FaCalendar } from 'react-icons/fa6';
import { CardVerticalItemProp } from './types'

export default function CardVerticalItem({
  img,
  imgAlt,
  blurDataUrl,
  title,
  location,
  date,
  url,
  price,
}: CardVerticalItemProp) {

  return (
    <Link href={url} className='relative top-0 overflow-hidden block rounded-2xl transition-all hover:-top-1 group'>
      <div className='border border-slate-200 rounded-2xl p-3'>
        <div className='relative rounded-2xl shadow-lg overflow-hidden'>
          <div className='w-full pb-[85%]'>
            <Image
              src={img}
              alt={imgAlt}
              sizes='100vw, 33vw'
              style={{ objectFit: 'cover' }}
              placeholder='blur'
              blurDataURL={blurDataUrl}
              fill
            />
          </div>
        </div>
        <div className='py-5 overflow-hidden'>
          <h3 className='line-clamp-1 text-lg uppercase font-semibold font-montserrat mb-3'>{title}</h3>
          <div className='flex gap-3 items-center mb-2 text-sm opacity-70'>
            <FaLocationDot />
            <span>{location}</span>
          </div>
          <div className='flex gap-3 items-center mb-2 text-sm opacity-70'>
            <FaCalendar />
            <span>{date}</span>
          </div>
          <div className='mt-3'>
            <span className='text-sm'>From </span>
            <span className='text-lg font-bold'>{price} </span>
            <span className='text-sm'>/ pax</span>
          </div>
        </div>
      </div>
    </Link>
  )
};
