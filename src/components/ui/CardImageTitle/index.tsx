import Link from 'next/link'
import Image from 'next/image'
import { CardImageTitleProp } from './types'

export default function CardImageTitle({
  img,
  imgAlt,
  blurDataUrl,
  title,
  url,
}: CardImageTitleProp) {

  return (
    <Link href={url} className='relative top-0 overflow-hidden block rounded-2xl transition-all hover:-top-1 group w-full'>
      <div className='border border-slate-200 rounded-2xl p-3'>
        <div className='relative rounded-2xl shadow-xl overflow-hidden'>
          <div className='relative w-full pb-[65%]'>
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
        <div className='pt-5'>
          <h3 className='text-lg text-center uppercase font-semibold font-montserrat mb-3'>{title}</h3>
        </div>
      </div>
    </Link>
  )
};
