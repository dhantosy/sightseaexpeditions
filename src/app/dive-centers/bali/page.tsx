'use client';

import { useState, ChangeEvent } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { format } from 'date-fns';
import AccordionTable from '@/components/ui/AccordionTable';
import Counter from '@/components/ui/Counter';
import InputCalendar from '@/components/ui/InputCalendar';
import HeroDetailPage from '@/components/partial/HeroDetailPage';
import StickyBookingSection from '@/components/partial/StickyBookingSection';
import StickyBookingBtnSubmit from '@/components/partial/StickyBookingBtnSubmit';
import { formatCurrency } from '@/lib/number';
import { EVENT_TITLE, EVENT_DATE, PAGE_TYPE, EVENT_AVAILABILITY, images, EVENT_TITLE_FULL, certifiedDiverInclude, nonCertifiedDiverInclude, snorkelingInclude, diveCenterBaliData, categoryListOption } from './data';

type Inputs = {
  category: string
  destination: string
};

export default function DiveCenterBaliPage() {
  const [bookFormShow, setBookFormShow] = useState(false);
  const [selectedDate, setSelectedDate] = useState('');
  const [showCalendar, setShowCalendar] = useState(false);
  const [count, setCount] = useState(1);
  const [totalPrice, setTotalPrice] = useState('0');
  const filterCertifiedDiver = diveCenterBaliData.filter((data) => data.type === 'certified_diver');
  const filterNonCertifiedDiver = diveCenterBaliData.filter((data) => data.type === 'non_certified_diver');
  const filterSnorkeling = diveCenterBaliData.filter((data) => data.type === 'snorkeling');
  const filterPadiDiveCourse = diveCenterBaliData.filter((data) => data.type === 'padi_dive_course');

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    watch,
  } = useForm<Inputs>();
  const watchCategory = watch('category', '');
  const watchDestination = watch('destination', '');
  const getSelectedPrice = diveCenterBaliData.filter((item) => {
    return item.type === watchCategory && item.diveDestination === watchDestination 
  });
  const convertPrice = Number(getSelectedPrice[0]?.price.replace(/\,/g, ''));

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const params = new URLSearchParams([
      ['name', EVENT_TITLE_FULL],
      ['type', PAGE_TYPE],
      ['date', selectedDate],
      ['cat', data.category],
      ['destination', data.destination],
      ['pax', count.toString()],
      ['curr', 'IDR'],
      ['total', totalPrice],
    ]);

    window.open(`/booking/?${params.toString()}`, '_blank', 'noopener,noreferrer');
  };

  const handleCounterChange = (val: number) => {
    setCount(val);
    setTotalPrice(formatCurrency((convertPrice * val)));
  };

  const handleCategoryChange = (_: ChangeEvent<HTMLSelectElement>) => {
    setTotalPrice('0');
    setCount(1);
  };

  const handleTypeChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const price = diveCenterBaliData.filter((item) => {
      return item.type === watchCategory && e.target.value === item.diveDestination
    });

    setTotalPrice(formatCurrency(Number(price[0]?.price.replace(/\,/g, '')) * count));
  };

  const handleDateChange = (val: Date) => {
    const parseDate = Date.parse(val.toString());
    const formatDate = format(parseDate, 'dd MMMM yyyy');
    setSelectedDate(formatDate);
  };

  const closeCalendar = (val: any) => {
    setTimeout(() => {
      setShowCalendar(val);
    }, 100);
  };

  const handleItemClick = (diveDestination: string, type: string) => {
    const getItem = diveCenterBaliData.filter((item) => {
      return item.type === type && item.diveDestination === diveDestination
    });

    setValue('category', type, {
      shouldValidate: true
    });

    setTimeout(() => {
      setValue('destination', diveDestination, {
        shouldValidate: true
      });
    }, 10);

    setTotalPrice(formatCurrency(Number(getItem[0]?.price.replace(/\,/g, '')) * count));
    setBookFormShow(true);
  };

  const handleStickyFormClose = () => {
    reset();
    setBookFormShow(false);
    setCount(1);
  };

  return (
    <main>
      <HeroDetailPage
        title={EVENT_TITLE_FULL}
        schedule={EVENT_DATE}
        pageType={PAGE_TYPE}
        images={images}
      />
      <div className={bookFormShow ? 'fixed h-full w-full bg-black/60 z-50 top-0 left-0 visible lg:hidden transition-all' : 'fixed h-full w-full bg-black/0 z-50 top-0 left-0 invisible transition-all lg:hidden'} />
      <section className='container px-4 lg:px-8'>
        <div className='flex flex-col lg:flex-row'>
          <div className='basis-full lg:basis-2/3 flex-shrink-0 flex flex-col gap-5'>
            <AccordionTable
              isExpand
              title='Certified Diver'
              tableTitle={['Dive Destination', 'Total Dive', 'Price per Person']}
              tableItems={filterCertifiedDiver}
              includedList={certifiedDiverInclude}
              tableItemsClassTitle='font-semibold basis-full lg:basis-2/4 flex-shrink-0 px-3'
              tableItemsClass='basis-full lg:basis-1/4 flex-shrink-0 px-3'
              handleTableItemClick={handleItemClick}
            />
            <AccordionTable
              isExpand={false}
              title='Beginner / Non-Certified Diver'
              tableTitle={['Discover Scuba Dive', 'Total Dive', 'Price per Person']}
              tableItems={filterNonCertifiedDiver}
              includedList={nonCertifiedDiverInclude}
              tableItemsClassTitle='font-semibold basis-full lg:basis-2/4 flex-shrink-0 px-3'
              tableItemsClass='basis-full lg:basis-1/4 flex-shrink-0 px-3'
              handleTableItemClick={handleItemClick}
            />
            <AccordionTable
              isExpand={false}
              title='Snorkeling'
              tableTitle={['Snorkeling Area', 'No. of Guests', 'Price per Person']}
              tableItems={filterSnorkeling}
              includedList={snorkelingInclude}
              tableItemsClassTitle='font-semibold basis-full lg:basis-1/3 flex-shrink-0 px-3'
              tableItemsClass='basis-full lg:basis-1/3 flex-shrink-0 px-3'
              handleTableItemClick={handleItemClick}
            />
            <AccordionTable
              isExpand={false}
              title='PADI Dive Course'
              tableTitle={['Course', 'Program', 'Duration', 'Price per Person']}
              tableItems={filterPadiDiveCourse}
              tableItemsClassTitle='font-semibold basis-full lg:basis-1/4 flex-shrink-0 px-3'
              tableItemsClass='basis-full lg:basis-1/4 flex-shrink-0 px-3'
              handleTableItemClick={handleItemClick}
            />
          </div>
          <StickyBookingSection
            title={EVENT_TITLE}
            isBookFormShow={bookFormShow}
            onCloseClick={handleStickyFormClose}
          >
            <form id='form-contact' onSubmit={handleSubmit(onSubmit)}>
              <div>
                <fieldset className='mb-4'>
                  <label htmlFor='email' className='text-slate-600 font-medium opacity-70 text-sm'>Category</label>
                  <select
                    defaultValue={categoryListOption[0].value}
                    className='block appearance-none cursor-pointer mt-1 px-4 py-2 w-full border border-slate-200 rounded-xl focus:border-slate-200 focus:shadow-sm focus-visible:outline-0 focus-visible:border-slate-400'
                    id='category'
                    {...register('category', {
                      required: true,
                      onChange: (e) => { handleCategoryChange(e) },
                    })}>
                    {categoryListOption.map(({ value, label }, index) => {
                      return (
                        <option
                          key={value}
                          value={value}
                          disabled={index === 0 && true}
                        >
                          {label}
                        </option>
                      )
                    })}
                  </select>
                </fieldset>
                <fieldset className='mb-4'>
                  <label htmlFor='email' className='text-slate-600 font-medium opacity-70 text-sm'>Destination / Course</label>
                  <select disabled={!watchCategory} defaultValue='' className='block appearance-none cursor-pointer mt-1 px-4 py-2 w-full border border-slate-200 rounded-xl focus:border-slate-200 focus:shadow-sm focus-visible:outline-0 focus-visible:border-slate-400' id='destination' {...register('destination', {
                    required: true,
                    onChange: (e) => { handleTypeChange(e) },
                  })}>
                    <option value=''>
                      Select Destination / Course
                    </option>
                    {watchCategory === 'certified_diver' && (
                      filterCertifiedDiver.map(({ diveDestination }, index) => {
                        return (
                          <option
                            key={index}
                            value={diveDestination}
                          >
                            {diveDestination}
                          </option>
                        )
                      })
                    )}
                    {watchCategory === 'non_certified_diver' && (
                      filterNonCertifiedDiver.map(({ diveDestination }, index) => {
                        return (
                          <option
                            key={index}
                            value={diveDestination}
                          >
                            {diveDestination}
                          </option>
                        )
                      })
                    )}
                    {watchCategory === 'snorkeling' && (
                      filterSnorkeling.map(({ diveDestination }, index) => {
                        return (
                          <option
                            key={index}
                            value={diveDestination}
                          >
                            {diveDestination}
                          </option>
                        )
                      })
                    )}
                    {watchCategory === 'padi_dive_course' && (
                      filterPadiDiveCourse.map(({ diveDestination }, index) => {
                        return (
                          <option
                            key={index}
                            value={diveDestination}
                          >
                            {diveDestination}
                          </option>
                        )
                      })
                    )}
                  </select>
                </fieldset>
                <fieldset className='mb-4'>
                  <InputCalendar
                    setDate={handleDateChange}
                    showCalendar={showCalendar}
                    handleCloseCalendar={closeCalendar}
                    errorMessage=''
                  />
                </fieldset>
                <fieldset className='my-5'>
                  <Counter onChange={handleCounterChange} count={count} maxCount={9} />
                </fieldset>
                <div className='py-5 border-t mb-6 flex justify-between items-center font-semibold'>
                  <div>Total Price:</div>
                  <div>{`IDR ${totalPrice}`}</div>
                </div>
                <StickyBookingBtnSubmit
                  whatsappLink={`https://wa.me/62811301031?text=Hi%20Sightsea%20Expeditions%21%20I%20would%20like%20to%20make%20a%20booking%20with%20the%20following%20detail%3A%0A${EVENT_TITLE + '%2C'}%20${watchCategory ? watchCategory.replace(/_/g, " ") + '%2C' : ''}%20${watchDestination ? 'at%20' + watchDestination + '%2C' : ''}%20for%20${count}%20person`}
                  available={EVENT_AVAILABILITY}
                />
              </div>
            </form>
          </StickyBookingSection>
        </div>
      </section>
    </main>
  )
};
