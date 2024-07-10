import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/Button'
import { FaLocationDot, FaCalendar, FaUsers } from 'react-icons/fa6';
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
  unit,
  type,
}: CardVerticalItemProp) {

  return (
    <Link href={url} className='relative top-0 overflow-hidden block rounded-2xl transition-all hover:-top-1 group'>
      <div className='border border-slate-200 rounded-2xl p-3'>
        <div className='relative rounded-2xl shadow-xl overflow-hidden'>
          <div className='relative w-full pb-[85%]'>
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
        <div className='pt-5 pb-0 overflow-hidden'>
          <h3 className='leading-snug lg:line-clamp-1 text-lg uppercase font-semibold font-montserrat mb-4'>{title}</h3>
          <div className='flex gap-3 items-center mb-2 text-sm opacity-70'>
            <FaLocationDot />
            <span>{location}</span>
          </div>
          <div className='flex gap-3 items-center mb-2 text-sm opacity-70'>
            <FaCalendar />
            <span>{date}</span>
          </div>
          <div className='flex gap-3 items-center mb-2 text-sm opacity-70'>
            <FaUsers />
            <span>{type}</span>
          </div>
          <div className='mt-5 flex flex-col gap-4 3lg:items-end 3lg:flex-row justify-between'>
            <div>
              <span className='text-sm block opacity-70'>Starts from</span>
              <span className='text-base font-semibold'>{price} </span>
              <span className='text-sm opacity-70'>{unit}</span>
            </div>
            <div>
              <Button variant='secondary' size='sm' className='mt-2 3lg:mt-0 w-full 3lg:w-auto'>
                Book Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
};
