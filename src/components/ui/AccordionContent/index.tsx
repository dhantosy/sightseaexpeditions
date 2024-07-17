'use client'

import { useCallback, useState } from 'react';
import { AccordionContentProp } from './types';

export default function AccordionTable({ isExpand, title, children }: AccordionContentProp) {
  const [isOpen, setIsOpen] = useState(isExpand);

  const handleClick = useCallback(() => {
    setIsOpen(!isOpen);
  }, [isOpen]);

  return (
    <div className='bg-slate-100 rounded-3xl overflow-hidden'>
      <div onClick={handleClick} className='cursor-pointer items-baseline flex justify-between text-base lg:text-xl font-semibold p-5 gap-4'>
        <h3 className='font-montserrat uppercase tracking-wide font-bold lg:font-semibold'>{title}</h3>
        <div className='text-sm lg:text-base opacity-70'>{isOpen ? <span>collapse</span> : <span>expand</span>}</div>
      </div>
      <div className={isOpen ? 'block p-5 pt-0' : 'hidden p-5 pt-0'}>
        {children}
      </div>
    </div>
  )
}
