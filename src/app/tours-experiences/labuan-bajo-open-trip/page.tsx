'use client';

import { useEffect, useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { format } from 'date-fns';
import { isWeekday, getDayOfWeek } from "@internationalized/date";
import { useLocale } from "@react-aria/i18n";
import { FaXmark, FaCircleCheck, FaCirclePlus } from 'react-icons/fa6';
import { Button } from '@/components/ui/Button';
import AccordionContent from '@/components/ui/AccordionContent';
import Counter from '@/components/ui/Counter';
import HeroDetailPage from '@/components/partial/HeroDetailPage';
import { formatCurrency } from '@/lib/number';
import InputCalendar from '@/components/ui/InputCalendar';
import { PRICE_PER_PERSON, images, schedule, notes, include } from './data';

type Inputs = {
  name: string
  email: string
  category: string
  destination: string
};

export default function ToursLabuanBajoOpenTripPage() {
  const [bookFormShow, setBookFormShow] = useState(false);
  const [selectedDate, setSelectedDate] = useState('');
  const [count, setCount] = useState(1);
  const [showCalendar, setShowCalendar] = useState(false);
  const [totalPrice, setTotalPrice] = useState(formatCurrency(PRICE_PER_PERSON));
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const { locale } = useLocale();

  const isDateUnavailable = (date: any) => {
    return isWeekday(date, locale) && getDayOfWeek(date, locale) !== 5
  }

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    watch,
    formState: { isDirty, isValid },
  } = useForm<Inputs>();

  // useEffect(() => {
  //   if (!isSafeToReset) return;

  //   reset(); // asynchronously reset your form values
  // }, [isSafeToReset, reset]);

  const getFormData = (object: any) => {
    const formData = new FormData();
    formData.append('time', format(new Date(), 'yyyy MMMM dd, HH:mm'));
    Object.keys(object).forEach(key => formData.append(key, object[key]));

    return formData;
  };

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    console.log(data)
  };

  const handleCounterChange = (val: number) => {
    setCount(val);
    setTotalPrice(formatCurrency(Number(PRICE_PER_PERSON) * val));
  };

  const handleDateChange = (val: Date) => {
    const parseDate = Date.parse(val.toString());
    const formatDate = format(parseDate, 'dd MMMM yyyy');
    setSelectedDate(formatDate);
  }

  const closeCalendar = (val: any) => {
    setShowCalendar(val);
  }

  return (
    <main>
      <div className='pt-16 lg:pt-0'>
        <HeroDetailPage
          title='Labuan Bajo Open Trip: Trekking, Snorkeling & Island Hopping'
          pageType='Tours & Experiences'
          subtopic='Available Friday, Saturday & Sunday'
          images={images}
        />
      </div>
      <div className={bookFormShow ? 'fixed h-full w-full bg-black/60 z-50 top-0 left-0 visible lg:hidden transition-all' : 'fixed h-full w-full bg-black/0 z-50 top-0 left-0 invisible transition-all lg:hidden'} />
      <section className='container px-4 lg:px-8'>
        <div className='flex flex-col lg:flex-row'>
          <div className='basis-full lg:basis-2/3 flex-shrink-0 flex flex-col gap-5 lg:gap-10'>
            <AccordionContent title='Overview' isExpand>
              <p className='opacity-70'>Labuan Bajo, a stunning gateway to the Komodo National Park, beckons travelers with its rich biodiversity, dramatic landscapes, and vibrant culture. An open trip to Labuan Bajo offers an affordable and social way to experience this Indonesian paradise. Travel with like-minded adventurers: Open trips bring together a group of travelers seeking an unforgettable adventure in Labuan Bajo. You`ll share the experience with fellow explorers, creating new friendships and memories along the way.</p>
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
                      <FaCircleCheck size={12} className='text-emerald-600' />
                      <div>{item}</div>
                    </div>
                  )
                })}
              </div>
            </AccordionContent>
            <AccordionContent title='Notes' isExpand>
              <div className='flex flex-wrap opacity-70'>
                {notes.map((item) => {
                  return (
                    <div key={item} className='flex items-baseline basis-full flex-shrink-0 flex-grow-0 gap-2 mb-3'>
                      <FaCirclePlus size={12} className='text-amber-500' />
                      <div>{item}</div>
                    </div>
                  )
                })}
              </div>
            </AccordionContent>
          </div>
          <div className='basis-full lg:basis-1/3 flex-shrink-0'>
            <div className={bookFormShow ? 'w-full lg:w-auto left-0 bottom-0 lg:bottom-auto fixed lg:sticky lg:top-28 px-0 lg:pl-5 lg:pr-3 z-50 lg:z-20 mt-12 lg:mt-0 transition-all' : 'w-full lg:w-auto left-0 -bottom-full lg:bottom-auto fixed lg:sticky lg:top-28 px-0 lg:pl-5 lg:pr-3 z-50 lg:z-20 mt-12 lg:mt-0 transition-all'}>
              <div className='relative bg-white rounded-t-3xl lg:rounded-3xl border border-slate-100 shadow-lg px-5 lg:px-10 py-8'>
                <div className='opacity-70 absolute right-3 top-3 cursor-pointer block lg:hidden' onClick={() => setBookFormShow(false)}>
                  <FaXmark size={24} />
                </div>
                <div className='mb-4 text-xl font-semibold'>
                  Labuan Bajo - One Day Open Trip
                </div>
                <form id='form-contact' onSubmit={handleSubmit(onSubmit)}>
                  {isFormSubmitted ? (
                    <div>
                      <div className='icon'>

                      </div>
                      <div>
                        <div className='title'>Thank you for submitting your message!</div>
                        <div>Our team will get back to you as soon as possible.</div>
                      </div>
                    </div>
                  ) : (
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
                        <Counter onChange={handleCounterChange} count={count} />
                      </fieldset>
                      <div className='py-5 border-t mb-6 flex justify-between items-center font-semibold'>
                        <div>Total Price:</div>
                        <div>{`IDR ${totalPrice}`}</div>
                      </div>
                      {/* <ReCAPTCHA ref={reCaptchaRef} size='invisible' sitekey='6LfoGjIpAAAAAEoGhNvN1iuM6EiezWFPVH3TqKcN' />
                    {recaptchaError && (
                      <ErrorMessage>{recaptchaError}</ErrorMessage>
                    )}
                    <div style={{ textAlign: 'center' }}>
                      {isLoading ? <Loader /> : <button type='submit' className='submit' disabled={!isDirty || !isValid}>Submit</button>}
                    </div> */}
                      <Button type='submit' size='md' className='min-w-40 w-full mb-4'>
                        Book Now
                      </Button>
                      <a
                        href={`https://wa.me/62811301031?text=Hi%20Sightsea%20Expeditions%21%20I%20would%20like%20to%20make%20a%20booking%20with%20the%20following%20detail%3A%0ALabuan%20Bajo%20Open%20Trip%20${selectedDate ? 'on ' + selectedDate : ''}%20for%20${count}%20person`}
                        target='_blank'
                      >
                        <Button type='button' variant='outline' size='md' className='min-w-40 w-full'>
                          Book via WhatsApp
                        </Button>
                      </a>
                    </div>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className='fixed w-full px-4 py-3 top-20 bg-white z-20 rounded-b-3xl shadow-lg block lg:hidden'>
        <div className='flex justify-between items-center'>
          <div className='text-sm'>
            <div className='opacity-70 mb-1'>Labuan Bajo Open Trip</div>
            <div className='flex gap-2'>
              <div className='font-semibold'>{`IDR ${totalPrice}`}</div>
              <div className='opacity-70'> / person</div>
            </div>
          </div>
          <Button
            type='button'
            size='sm'
            className='min-w-32'
            onClick={() => setBookFormShow(true)}
          >
            Book Now
          </Button>
        </div>
      </div>
    </main>
  )
};