import React, { useState, useRef } from "react";
import { Calendar } from '@nextui-org/react';
import { today, getLocalTimeZone } from "@internationalized/date";
import useClickOutside from '@/hooks/useClickOutside';

interface Prop {
  setDate: (val: any) => void;
  showCalendar: boolean;
  handleCloseCalendar: (val: boolean) => (void);
}

const InputCalendar = ({ setDate, showCalendar, handleCloseCalendar }: Prop) => {
  const [selectedDate, setSelectedDate] = useState({
    day: '',
    month: '',
    year: '',
  });
  const calendarRef = useRef<HTMLDivElement>(null);

  useClickOutside(calendarRef, () => handleCloseCalendar(false));
  
  const handleChange = (value: any) => {
    setSelectedDate(value);
    setDate(value);
    handleCloseCalendar(false);
  };

  return (
    <div className='calendar-widget relative'>
      <label htmlFor='datepicker' className='text-slate-600 font-medium'>Date<span className='text-sm text-red-500'>*</span></label>
      <input
        name='datepicker'
        className='block mt-1 px-4 py-2 w-full border border-slate-200 rounded-xl focus:border-slate-200 focus:shadow-sm focus-visible:outline-0 focus-visible:border-slate-400'
        value={selectedDate?.day ? `${selectedDate?.day} - ${selectedDate?.month} - ${selectedDate?.year}` : ''}
        onFocus={() => handleCloseCalendar(true)}
        onClick={() => handleCloseCalendar(true)}
        onChange={handleChange}
        placeholder='Select Date'
      />
      <div className='absolute z-20' ref={calendarRef}>
        {
          showCalendar ? (
            <Calendar
              aria-label="Date (Min Date Value)"
              weekdayStyle='short'
              minValue={today(getLocalTimeZone()).add({ days: 1 })}
              classNames={{
                base: 'shadow-xl rounded-2xl border border-slate-100 px-2 bg-white',
                title: 'font-bold text-sm',
                gridHeader: 'opacity-50 text-sm',
                gridHeaderCell: 'py-1 px-1',
                gridHeaderRow: 'p-0 justify-around',
                pickerHighlight: 'text-bluePrimary bg-creamPrimary',
                cell: 'py-1 px-1',
              }}
              onChange={handleChange}
            />
          ) : null
        }
      </div>
    </div>
  );
};

export default InputCalendar;
