import Link from 'next/link'
import Image from 'next/image'
import { FaLocationDot, FaCalendar, FaRegEye } from 'react-icons/fa6';
import { MdScubaDiving } from "react-icons/md";
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
}: CardHorizontalItemProp) {

  return (
    <Link href={url} className='relative block top-0 overflow-hidden rounded-2xl transition-all hover:-top-1 group'>
      <div className='flex flex-wrap border border-slate-200 rounded-2xl p-3'>
        <div className='relative basis-[100%] md:basis-[40%] p-7 grow-0 rounded-2xl shadow-lg overflow-hidden'>
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
        <div className='relative py-2 pl-7 pr-1 basis-[100%] md:basis-[60%] grow-0'>
          <div className='flex gap-3'>
            <div className='flex px-3 py-1 text-sm items-center gap-2 rounded-full bg-sky-100 text-sky-900'>
              <span><MdScubaDiving /></span>
              <span>{highlight?.diveCount}</span>
            </div>
            <div className='flex px-3 py-1 text-sm items-center gap-2 rounded-full bg-orange-100 text-orange-700'>
              <span><FaRegEye /></span>
              <span>{highlight?.attraction}</span>
            </div>
          </div>
          <h3 className='text-lg uppercase font-semibold font-montserrat mb-3 mt-3'>{title}</h3>
          <div className='flex gap-3 items-center mb-2 text-sm opacity-70'>
            <FaLocationDot />
            <span>{location}</span>
          </div>
          <div className='flex gap-3 items-center mb-2 text-sm opacity-70'>
            <FaCalendar />
            <span>{date}</span>
          </div>
          <div className='mt-3 absolute bottom-3'>
            <span className='text-sm'>From </span>
            <span className='text-lg font-bold'>{price} </span>
            <span className='text-sm'>/ pax</span>
          </div>
        </div>
      </div>
    </Link>
  )
};
