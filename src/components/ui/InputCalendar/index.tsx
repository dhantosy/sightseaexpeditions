import React, { useState, useRef } from "react";
import { Calendar } from '@nextui-org/react';
import { format } from 'date-fns';
import { today, getLocalTimeZone } from "@internationalized/date";
import useClickOutside from '@/hooks/useClickOutside';
import { InputCalendarProp } from './types';

const InputCalendar = ({ setDate, showCalendar, handleCloseCalendar, unavailableDates, errorMessage }: InputCalendarProp) => {
  const [selectedDate, setSelectedDate] = useState('');
  const calendarRef = useRef<HTMLDivElement>(null);

  useClickOutside(calendarRef, () => handleCloseCalendar(false));
  
  const handleChange = (value: any) => {
    const parseDate = Date.parse(value.toString());
    const formatDate = format(parseDate, 'dd MMMM yyyy');

    setSelectedDate(formatDate);
    setDate(value);
    handleCloseCalendar(false);
  };

  return (
    <div className='calendar-widget relative z-40'>
      <div onClick={() => handleCloseCalendar(true)} className='relative cursor-pointer after:content-[""] after:absolute after:w-full after:h-full after:top-0 after:left-0 after:z-20'>
        <label htmlFor='datepicker' className='text-slate-600 font-medium text-sm'>Select Date</label>
        <input
          name='datepicker'
          className='block mt-1 px-4 py-2 w-full border border-slate-200 rounded-xl disabled:bg-white focus:border-slate-200 focus:shadow-sm focus-visible:outline-0 focus-visible:border-slate-400'
          value={selectedDate}
          onChange={handleChange}
          placeholder='Click to Select Date'
          disabled
        />
      </div>
      <div className='absolute w-full' ref={calendarRef}>
        <div className={showCalendar ? 'block' : 'hidden'}>
          <Calendar
            aria-label="Date (Min Date Value)"
            weekdayStyle='short'
            calendarWidth='100%'
            minValue={today(getLocalTimeZone()).add({ days: 1 })}
            isDateUnavailable={unavailableDates}
            classNames={{
              base: 'shadow-xl rounded-2xl border border-slate-100 px-2 bg-white',
              title: 'font-bold text-sm',
              gridHeader: 'opacity-50 text-sm',
              gridHeaderCell: 'py-1 px-1',
              gridHeaderRow: 'p-0 justify-around',
              gridBodyRow: 'flex justify-around items-center first:mt-2',
              cell: 'py-1 px-1',
              errorMessage: 'text-small text-rose-700 break-words max-w-full'
            }}
            onChange={handleChange}
            errorMessage={errorMessage}
          />
        </div>
      </div>
    </div>
  );
};

export default InputCalendar;
