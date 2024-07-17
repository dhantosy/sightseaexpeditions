import { StickyBookingSectionProp } from './types';
import { FaXmark } from 'react-icons/fa6';

export default function StickyBookingSection({
  children,
  title,
  isBookFormShow,
  onCloseClick
}: StickyBookingSectionProp) {

  return (
    <div className='basis-full lg:basis-1/3 flex-shrink-0'>
      <div className={isBookFormShow ? 'w-full lg:w-auto left-0 bottom-0 lg:bottom-auto fixed lg:sticky lg:top-28 px-0 lg:pl-5 z-50 lg:z-20 mt-12 lg:mt-0 transition-all' : 'w-full lg:w-auto left-0 -bottom-full lg:bottom-auto fixed lg:sticky lg:top-28 px-0 lg:pl-5 z-50 lg:z-20 mt-12 lg:mt-0 transition-all'}>
        <div className='relative bg-white rounded-t-3xl lg:rounded-3xl border border-slate-100 shadow-lg px-5 lg:px-8 pt-10 pb-8'>
          <div className='opacity-70 absolute right-3 top-3 cursor-pointer block lg:hidden' onClick={onCloseClick}>
            <FaXmark size={24} />
          </div>
          <div className='mb-4 text-lg md:text-xl font-semibold uppercase'>
            {title}
          </div>
          {children}
        </div>
      </div>
    </div>
  )
};
