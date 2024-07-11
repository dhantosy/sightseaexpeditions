'use client'

import { useCallback, useState } from 'react';
import { FaCheck } from "react-icons/fa6";
import { Button } from '@/components/ui/Button';
import { AccordionTableProp } from './types';

export default function AccordionTable({ isExpand, title, tableTitle, tableItems, tableItemsClass, tableItemsClassTitle, includedList, handleTableItemClick }: AccordionTableProp) {
  const [isOpen, setIsOpen] = useState(isExpand);

  const handleClick = useCallback(() => {
    setIsOpen(!isOpen);
  }, [isOpen]);

  return (
    <div className='bg-slate-100 rounded-3xl overflow-hidden'>
      <div onClick={handleClick} className='cursor-pointer items-center flex justify-between text-base lg:text-2xl font-semibold p-5 gap-4'>
        <h3 className='font-montserrat uppercase tracking-wide font-bold lg:font-semibold'>{title}</h3>
        <div className='text-sm lg:text-base opacity-70'>{isOpen ? <span>collapse</span> : <span>expand</span>}</div>
      </div>
      <div className={isOpen ? 'block p-5 pt-0' : 'hidden p-5 pt-0'}>
        {includedList?.length ? (
          <div className='mb-7 mt-3'>
            <h4 className='mb-5 font-medium'>What`s Included:</h4>
            <div className='flex flex-wrap opacity-70'>
              {includedList.map((item) => {
                return (
                  <div key={item} className='flex items-baseline basis-full lg:basis-1/3 flex-shrink-0 flex-grow-0 gap-2 mb-3 px-3'>
                    <FaCheck size={12} />
                    <div className=''>{item}</div>
                  </div>
                )
              })}
            </div>
          </div>
        ) : null}
        <div className='bg-white rounded-3xl overflow-hidden'>
          <div className='flex px-2 py-5 text-lg uppercase font-semibold'>
            {tableTitle.map((title, index) => {
              return (
                <div key={title} className={index === 0 ? tableItemsClassTitle : tableItemsClass}>
                  <h4>{title}</h4>
                </div>
              )
            })}
          </div>
          {tableItems.map(({ diveDestination, totalDive, price, currency, program, duration, minimumPerson, type }, index) => {
            return (
              <div
                key={index}
                className='flex gap-1 lg:gap-0 flex-wrap py-4 px-2 border-t-2 hover:bg-slate-50 text-sm cursor-pointer'
                onClick={() => { handleTableItemClick(diveDestination, type) }}
              >
                <div className={tableItemsClassTitle}>{diveDestination}</div>
                {totalDive && <div className={tableItemsClass}>{totalDive}</div>}
                {program && <div className={tableItemsClass}>{program}</div>}
                {duration && <div className={tableItemsClass}>{duration}</div>}
                {minimumPerson && <div className={tableItemsClass}>{minimumPerson}</div>}
                <div className={tableItemsClass}>{`${currency} ${price}`}</div>
                <div className='basis-full mx-2 mt-3 lg:hidden'>
                  <Button type='button' variant='secondary' size='sm' className='w-full'>
                    Book
                  </Button>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
