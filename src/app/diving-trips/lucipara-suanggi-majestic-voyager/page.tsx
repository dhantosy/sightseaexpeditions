'use client';

import { ChangeEvent, useState } from 'react';
import Image from 'next/image';
import { useForm, SubmitHandler } from 'react-hook-form';
import { FaCircleCheck, FaCirclePlus } from 'react-icons/fa6';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import AccordionContent from '@/components/ui/AccordionContent';
import Counter from '@/components/ui/Counter';
import HeroDetailPage from '@/components/partial/HeroDetailPage';
import SectionUpcomingEvents from '@/components/partial/SectionUpcomingEvents';
import StickyPriceInfo from '@/components/partial/StickyPriceInfo';
import StickyBookingBtnSubmit from '@/components/partial/StickyBookingBtnSubmit';
import { useRandomEvents } from '@/hooks/useRandomEvents';
import StickyBookingSection from '@/components/partial/StickyBookingSection';
import { PRICE_PER_PERSON, EVENT_TITLE, EVENT_OVERVIEW, EVENT_TITLE_FULL, EVENT_DATE, EVENT_TYPE, PAGE_TYPE, EVENT_AVAILABILITY, categoryListOption, roomTypeListOption, roomGallery, dataMain, images, schedule, notes, include } from './data';
import { upcomingDivingTrips } from '@/data/upcomingEvents';
import { formatCurrency } from '@/lib/number';
import { Button } from '@/components/ui/Button';

type Inputs = {
  category: string
  roomType: string
};

export default function BimaDivingTripMajescticVoyagerPage() {
  const [bookFormShow, setBookFormShow] = useState(false);
  const [selectedCurrency, setSelectedCurrency] = useState('IDR');
  const [count, setCount] = useState(1);
  const [totalPrice, setTotalPrice] = useState(formatCurrency(0));
  const events = useRandomEvents(upcomingDivingTrips, EVENT_TITLE, 4);

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    watch,
    
  } = useForm<Inputs>();
  const watchCategory = watch('category', '');
  const watchRoomType = watch('roomType', '');
  const getSelectedPrice = dataMain.filter((item) => {
    return item.category === watchCategory && item.roomType === watchRoomType
  });
  const convertPrice = Number(getSelectedPrice[0]?.price.replace(/\,/g, ''));

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const params = new URLSearchParams([
      ['name', EVENT_TITLE_FULL],
      ['type', PAGE_TYPE],
      ['date', EVENT_DATE || ''],
      ['cat', data.category],
      ['cabin', data.roomType],
      ['pax', count.toString()],
      ['curr', selectedCurrency],
      ['total', totalPrice],
    ]);

    window.open(`/booking/?${params.toString()}`, '_blank', 'noopener,noreferrer');
  };

  const handleCategoryChange = (e: ChangeEvent<HTMLSelectElement>) => {
    if (e.target.value === 'Domestic / KITAS') setSelectedCurrency('IDR');
    if (e.target.value === 'foreigner') setSelectedCurrency('USD');
    setTotalPrice('0');
    setCount(1);
    setValue('roomType', '', {
      shouldValidate: true
    });
  };

  const handleRoomTypeChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const price = dataMain.filter((item) => {
      return item.category === watchCategory && e.target.value === item.roomType
    });

    setTotalPrice(formatCurrency(Number(price[0]?.price.replace(/\,/g, '')) * count));
  };

  const handleCounterChange = (val: number) => {
    setCount(val);
    setTotalPrice(formatCurrency((convertPrice * val)));
  };

  const handleStickyFormClose = () => {
    reset();
    setBookFormShow(false);
    setCount(1);
    setTotalPrice('0');
  };

  return (
    <main>
      <div className='pt-16 lg:pt-0'>
        <HeroDetailPage
          title={EVENT_TITLE_FULL}
          pageType={PAGE_TYPE}
          schedule={EVENT_DATE}
          tripType={EVENT_TYPE}
          images={images}
        />
      </div>
      <div className={bookFormShow ? 'fixed h-full w-full bg-black/60 z-50 top-0 left-0 visible lg:hidden transition-all' : 'fixed h-full w-full bg-black/0 z-50 top-0 left-0 invisible transition-all lg:hidden'} />
      <section className='container px-4 lg:px-8'>
        <div className='flex flex-col lg:flex-row'>
          <div className='basis-full lg:basis-2/3 shrink-0 grow-0 flex flex-col gap-5 relative'>
            <AccordionContent title='Overview' isExpand>
              <p className='opacity-70'>{EVENT_OVERVIEW}</p>
            </AccordionContent>
            <AccordionContent title='Cabin Type' isExpand>
              <div className='container'>
                {roomGallery.map(({ roomType, gallery, include }) => {
                  return (
                    <div key={roomType} className='mb-10 p-4 rounded-3xl bg-white overflow-hidden'>
                      <Swiper
                        loop
                        navigation={true}
                        modules={[Navigation]}
                        pagination={{ clickable: true }}
                        slidesPerView={1}
                        spaceBetween={20}
                      >
                        {gallery.map((image, index) => {
                          return (
                            <SwiperSlide key={index}>
                              <div className='relative pb-[60%] lg:pb-[50%]'>
                                <Image
                                  src={image.img}
                                  alt={image.imgAlt}
                                  sizes='100vw, 33vw'
                                  style={{ objectFit: 'cover' }}
                                  fill
                                  priority
                                  placeholder='blur'
                                  blurDataURL={image.blurDataUrl}
                                  className='rounded-3xl overflow-hidden'
                                />
                              </div>
                            </SwiperSlide>
                          )
                        })}
                      </Swiper>
                      <div className='text-lg lg:text-xl font-semibold mt-5 uppercase'>{roomType}</div>
                      <div className='mt-5 mb-3'>Cabin Highlights:</div>
                      <div className='flex flex-col lg:flex-row w-full flex-wrap'>
                        {include.map((item) => {
                          return (
                            <div key={item} className='flex items-baseline shrink-0 grow-0 basis-full lg:basis-1/3 gap-2 mb-3 opacity-70'>
                              <FaCirclePlus size={12} className='text-sky-500 flex-shrink-0 flex-grow-0' />
                              <div className='flex-wrap flex-grow-0'>{item}</div>
                            </div>
                          )
                        })}
                      </div>
                      {EVENT_AVAILABILITY && (
                        <div className='mt-2 block lg:hidden'>
                          <Button type='button' variant='secondary' size='sm' className='w-full' onClick={() => setBookFormShow(true)}>
                            Book Now
                          </Button>
                        </div>
                      )}
                    </div>
                  )
                })}
              </div>
            </AccordionContent>
            <AccordionContent title='Itinerary' isExpand>
              <div className='relative pt-2 pb-1 pl-8 after:content[""] after:absolute after:h-full after:left-2 after:top-0 after:border-l after:border-dashed after:border-bluePrimary'>
                {schedule.map(({ time, descList }) => {
                  return (
                    <div key={time} className='relative after:content[""] after:absolute after:z-10 after:-left-[29px] after:top-[6px] after:w-3 after:h-3 after:bg-sky-600 after:rounded-full mb-4'>
                      <div className='opacity-70 flex flex-col lg:flex-row gap-1 lg:gap-4'>
                        <div className='font-bold basis-0 lg:basis-[180px]'>{time}</div>
                        <div className='hidden lg:block'>-</div>
                        <div className='flex flex-col gap-1'>
                          {descList.map((item) => {
                            return (
                              <div key={item}>{item}</div>
                            ) 
                          })}
                        </div>
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
            title={EVENT_TITLE}
            isBookFormShow={bookFormShow}
            onCloseClick={handleStickyFormClose}
          >
            <form id='form-contact' onSubmit={handleSubmit(onSubmit)}>
              <div>
                <fieldset className='mb-4'>
                  <label htmlFor='category' className='text-slate-600 font-medium opacity-70 text-sm'>Category</label>
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
                  <label htmlFor='roomType' className='text-slate-600 font-medium opacity-70 text-sm'>Cabin Type</label>
                  <select
                    disabled={!watchCategory}
                    defaultValue={roomTypeListOption[0].value}
                    className='block appearance-none cursor-pointer mt-1 px-4 py-2 w-full border border-slate-200 rounded-xl focus:border-slate-200 focus:shadow-sm focus-visible:outline-0 focus-visible:border-slate-400'
                    id='roomType'
                    {...register('roomType', {
                      required: true,
                      onChange: (e) => { handleRoomTypeChange(e) },
                    })}>
                    {roomTypeListOption.map(({ value, label }, index) => {
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
                <fieldset className='my-5'>
                  <Counter
                    onChange={handleCounterChange}
                    count={count}
                    maxCount={9}
                  />
                </fieldset>
                <div className='py-5 border-t mb-3 flex justify-between items-center font-semibold'>
                  <div>Total Price:</div>
                  <div>{`${selectedCurrency} ${totalPrice}`}</div>
                </div>
                <StickyBookingBtnSubmit
                  whatsappLink={`https://wa.me/62811301031?text=Hi%20Sightsea%20Expeditions%21%20I%20would%20like%20to%20make%20a%20booking%20with%20the%20following%20detail%3A%0A${EVENT_TITLE_FULL}%20${watchCategory ? 'for%20' + watchCategory.replace(/_/g, " ") : '%20'}${watchRoomType ? '%20' + watchRoomType : '%20'}%20for%20${count}%20person`}
                  available={EVENT_AVAILABILITY}
                />
              </div>
            </form>
          </StickyBookingSection>
        </div>
      </section>
      <StickyPriceInfo
        priceStartFrom
        totalPrice={formatCurrency(PRICE_PER_PERSON || 0)}
        priceUnit=' / person'
        title={EVENT_TITLE}
        btnText='Book Now'
        onButtonclick={() => setBookFormShow(true)}
        available={EVENT_AVAILABILITY}
      />
      <div className='mt-10 lg:mt-24'>
        <SectionUpcomingEvents
          titleTop=''
          titleMain='Explore Other Diving Trips.'
          events={events}
          cardClass='basis-full 2lg:basis-1/2 p-3 grow-0'
          cardType='horizontal'
        />
      </div>
    </main>
  )
};
