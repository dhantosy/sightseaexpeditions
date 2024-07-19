import { FaQuoteLeft } from 'react-icons/fa';
import { FaStar } from 'react-icons/fa6';
import { TestimonialItemProp } from './types'

export default function TestimonialItem({
  review,
  name,
  source,
  date,
}: TestimonialItemProp) {

  return (
    <div className='border border-slate-200 rounded-2xl p-3 mb-12 sm:mb-16'>
      <div className='relative shadow-xl p-6 bg-white overflow-hidden rounded-2xl'>
        <div className='absolute top-6 right-6 opacity-30'><FaQuoteLeft size={16} /></div>
        <div className='relative flex gap-1 text-orange-400 mb-3'>
          {Array.apply(null, Array(5)).map((_, i) => {
            return (
              <FaStar key={i} />
            )
          })}
        </div>
        <p className='mb-3 text-bluePrimary/60'>{review}</p>
        <div>
          <h5 className='text-lg font-montserrat font-semibold mb-2'>{name}</h5>
          <h6 className='text-bluePrimary/60 text-sm'>{date}</h6>
          <span className='text-bluePrimary/50 text-sm'>Source: {source}</span>
        </div>
      </div>
    </div>
  )
};
