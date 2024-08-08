'use client';

import { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { format } from 'date-fns';
import { isWeekday, getDayOfWeek } from "@internationalized/date";
import { useLocale } from "@react-aria/i18n";
import { FaCircleCheck, FaCirclePlus } from 'react-icons/fa6';
import AccordionContent from '@/components/ui/AccordionContent';
import Counter from '@/components/ui/Counter';
import HeroDetailPage from '@/components/partial/HeroDetailPage';
import InputCalendar from '@/components/ui/InputCalendar';
import SectionUpcomingEvents from '@/components/partial/SectionUpcomingEvents';
import StickyPriceInfo from '@/components/partial/StickyPriceInfo';
import StickyBookingBtnSubmit from '@/components/partial/StickyBookingBtnSubmit';
import { useRandomEvents } from '@/hooks/useRandomEvents';
import StickyBookingSection from '@/components/partial/StickyBookingSection';
import { PRICE_PER_PERSON, EVENT_TITLE, EVENT_TITLE_FULL, EVENT_OVERVIEW, EVENT_DATE, PAGE_TYPE, EVENT_AVAILABILITY, images, schedule, notes, include } from './data';
import { upcomingTours } from '@/data/upcomingEvents';
import { formatCurrency } from '@/lib/number';

type Inputs = {
  name: string
  email: string
};

export default function ToursLabuanBajoOpenTripPage() {
  const [bookFormShow, setBookFormShow] = useState(false);
  const [selectedDate, setSelectedDate] = useState('');
  const [count, setCount] = useState(1);
  const [showCalendar, setShowCalendar] = useState(false);
  const [totalPrice, setTotalPrice] = useState(formatCurrency(PRICE_PER_PERSON));
  const events = useRandomEvents(upcomingTours, EVENT_TITLE, 4);
  const { locale } = useLocale();

  const isDateUnavailable = (date: any) => {
    return isWeekday(date, locale) && getDayOfWeek(date, locale) !== 5
  }

  const {
    handleSubmit,
    reset,
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async () => {
    const params = new URLSearchParams([
      ['name', EVENT_TITLE_FULL],
      ['type', PAGE_TYPE],
      ['date', selectedDate],
      ['pax', count.toString()],
      ['curr', 'IDR'],
      ['total', totalPrice],
    ]);

    window.open(`/booking/?${params.toString()}`, '_blank', 'noopener,noreferrer');
  };

  const handleCounterChange = (val: number) => {
    setCount(val);
    setTotalPrice(formatCurrency(Number(PRICE_PER_PERSON) * val));
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

  const handleStickyFormClose = () => {
    reset();
    setBookFormShow(false);
    setCount(1);
    setTotalPrice(formatCurrency(PRICE_PER_PERSON));
  };

  return (
    <main>
      <div className='pt-16 lg:pt-0'>
        <HeroDetailPage
          title={EVENT_TITLE}
          pageType={PAGE_TYPE}
          schedule={EVENT_DATE}
          images={images}
        />
      </div>
      <div className={bookFormShow ? 'fixed h-full w-full bg-black/60 z-50 top-0 left-0 visible lg:hidden transition-all' : 'fixed h-full w-full bg-black/0 z-50 top-0 left-0 invisible transition-all lg:hidden'} />
      <section className='container px-4 lg:px-8'>
        <div className='flex flex-col lg:flex-row'>
          <div className='basis-full lg:basis-2/3 flex-shrink-0 flex flex-col gap-5'>
            <AccordionContent title='Overview' isExpand>
              <p className='opacity-70'>{EVENT_OVERVIEW}</p>
            </AccordionContent>
            <AccordionContent title='Itinerary' isExpand>
              <div className='relative pt-2 pb-1 pl-8 after:content[""] after:absolute after:h-full after:left-2 after:top-0 after:border-l after:border-dashed after:border-bluePrimary'>
                {schedule.map(({ time, desc }) => {
                  return (
                    <div key={time} className='relative after:content[""] after:absolute after:z-10 after:-left-[29px] after:top-[6px] after:w-3 after:h-3 after:bg-sky-600 after:rounded-full mb-4'>
                      <div className='opacity-70 flex flex-col lg:flex-row gap-1 lg:gap-4'>
                        <div className='font-bold'>{time}</div>
                        <div className='hidden lg:block'>-</div>
                        <div>{desc}</div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </AccordionContent>
            <AccordionContent title='What`s Included' isExpand>
              <div className='flex flex-wrap opacity-70'>
                {include.map((item) => {
                  return (
                    <div key={item} className='flex items-baseline basis-full lg:basis-1/2 flex-shrink-0 flex-grow-0 gap-2 mb-3'>
                      <FaCircleCheck size={12} className='text-emerald-600 flex-shrink-0 flex-grow-0' />
                      <div className='flex-wrap flex-grow-0'>{item}</div>
                    </div>
                  )
                })}
              </div>
            </AccordionContent>
            <AccordionContent title='Notes' isExpand>
              <div className='flex flex-wrap opacity-70'>
                {notes.map((item) => {
                  return (
                    <div key={item} className='flex items-baseline basis-full gap-2 mb-3'>
                      <FaCirclePlus size={12} className='text-amber-500 flex-shrink-0 flex-grow-0' />
                      <div className='flex-wrap flex-grow-0'>{item}</div>
                    </div>
                  )
                })}
              </div>
            </AccordionContent>
          </div>
          <StickyBookingSection
            title={EVENT_TITLE_FULL}
            isBookFormShow={bookFormShow}
            onCloseClick={handleStickyFormClose}
          >
            <form id='form-contact' onSubmit={handleSubmit(onSubmit)}>
              <div>
                <fieldset className='mb-4'>
                  <InputCalendar
                    setDate={handleDateChange}
                    showCalendar={showCalendar}
                    handleCloseCalendar={closeCalendar}
                    unavailableDates={isDateUnavailable}
                    errorMessage='Available on Fri, Sat & Sun'
                  />
                </fieldset>
                <fieldset className='my-5'>
                  <Counter
                    onChange={handleCounterChange}
                    count={count}
                    maxCount={9}
                  />
                </fieldset>
                <div className='py-5 border-t mb-3 flex justify-between items-center font-semibold'>
                  <div>Total Price:</div>
                  <div>{`IDR ${totalPrice}`}</div>
                </div>
                <StickyBookingBtnSubmit
                  whatsappLink={`https://wa.me/62811301031?text=Hi%20Sightsea%20Expeditions%21%20I%20would%20like%20to%20make%20a%20booking%20with%20the%20following%20detail%3A%0A${EVENT_TITLE_FULL}%20${selectedDate ? 'on ' + selectedDate : ''}%20for%20${count}%20person`}
                  available={EVENT_AVAILABILITY}
                />
              </div>
            </form>
          </StickyBookingSection>
        </div>
      </section>
      <StickyPriceInfo
        totalPrice={formatCurrency(PRICE_PER_PERSON)}
        priceUnit=' / person'
        title={EVENT_TITLE_FULL}
        btnText='Book Now'
        onButtonclick={() => setBookFormShow(true)}
        available={EVENT_AVAILABILITY}
      />
      <div className='mt-10 lg:mt-24'>
        <SectionUpcomingEvents
          titleTop=''
          titleMain='Explore Other Experiences.'
          events={events}
          cardClass='flex shrink-0 grow-0 basis-[220px] 2xs:basis-[240px] lg:basis-1/4 w-full px-3'
          cardType='vertical'
          cardSlide
        />
      </div>
    </main>
  )
};
