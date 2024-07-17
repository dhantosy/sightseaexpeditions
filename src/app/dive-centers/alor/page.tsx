'use client';

import { useEffect, useState, ChangeEvent } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { format } from 'date-fns';
import AccordionTable from '@/components/ui/AccordionTable';
import Counter from '@/components/ui/Counter';
import HeroDetailPage from '@/components/partial/HeroDetailPage';
import StickyBookingSection from '@/components/partial/StickyBookingSection';
import StickyBookingBtnSubmit from '@/components/partial/StickyBookingBtnSubmit';
import {
  diveCenterAlorData,
  packagesInclude,
  categoryListOption
} from '@/data/diveCenterAlorPricing';
import { formatCurrency } from '@/lib/number';
import { EVENT_TITLE, images } from './data';

type Inputs = {
  name: string
  email: string
  category: string
  destination: string
};

export default function DiveCenterAlorPage() {
  const [bookFormShow, setBookFormShow] = useState(false);
  const [count, setCount] = useState(1);
  const [totalPrice, setTotalPrice] = useState('0');
  const filterDivePackages = diveCenterAlorData.filter((data) => data.type === 'dive_packages');
  const filterFreediveSnorkeling = diveCenterAlorData.filter((data) => data.type === 'freedive_and_snorkeling_packages');
  const filterIslandHopping = diveCenterAlorData.filter((data) => data.type === 'island_hopping');
  const filterPadiDiveCourse = diveCenterAlorData.filter((data) => data.type === 'padi_dive_course');

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    watch,
    formState: { isDirty, isValid },
  } = useForm<Inputs>();
  const watchCategory = watch('category', '');
  const watchDestination = watch('destination', '');
  const getSelectedPrice = diveCenterAlorData.filter((item) => {
    return item.type === watchCategory && item.diveDestination === watchDestination
  });
  const convertPrice = Number(getSelectedPrice[0]?.price.replace(/\,/g, ''));


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
    setTotalPrice(formatCurrency((convertPrice * val)));
  };

  const handleCategoryChange = (_: ChangeEvent<HTMLSelectElement>) => {
    setTotalPrice('0');
    setCount(1);
  };

  const handleTypeChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const price = diveCenterAlorData.filter((item) => {
      return item.type === watchCategory && e.target.value === item.diveDestination
    });

    setTotalPrice(formatCurrency(Number(price[0]?.price.replace(/\,/g, '')) * count));
  };

  const handleItemClick = (diveDestination: string, type: string) => {
    const getItem = diveCenterAlorData.filter((item) => {
      return item.type === type && item.diveDestination === diveDestination
    });

    setValue('category', type, {
      shouldValidate: true
    });

    setTimeout(() => {
      setValue('destination', diveDestination, {
        shouldValidate: true
      });
    }, 50);

    setTotalPrice(formatCurrency(Number(getItem[0]?.price.replace(/\,/g, '')) * count));
    setBookFormShow(true);
  };

  return (
    <main>
      <HeroDetailPage
        title='Dive Alor: Unforgettable Experiences with Top-Rated Dive Center'
        pageType='Dive Center'
        images={images}
      />
      <div className={bookFormShow ? 'fixed h-full w-full bg-black/60 z-50 top-0 left-0 visible lg:hidden transition-all' : 'fixed h-full w-full bg-black/0 z-50 top-0 left-0 invisible transition-all lg:hidden'} />
      <section className='container px-4 lg:px-8'>
        <div className='flex flex-col lg:flex-row'>
          <div className='basis-full lg:basis-2/3 flex-shrink-0 flex flex-col gap-5'>
            <AccordionTable
              isExpand
              title='Dive Packages'
              tableTitle={['Duration', 'Total Dive', 'Price per Person']}
              tableItems={filterDivePackages}
              includedList={packagesInclude}
              tableItemsClassTitle='font-semibold basis-full lg:basis-2/4 flex-shrink-0 px-3'
              tableItemsClass='basis-full lg:basis-1/4 flex-shrink-0 px-3'
              handleTableItemClick={handleItemClick}
            />
            <AccordionTable
              isExpand={false}
              title='Freedive & Snorkeling'
              tableTitle={['Duration', 'Total Dive', 'Price per Person']}
              tableItems={filterFreediveSnorkeling}
              includedList={packagesInclude}
              tableItemsClassTitle='font-semibold basis-full lg:basis-2/4 flex-shrink-0 px-3'
              tableItemsClass='basis-full lg:basis-1/4 flex-shrink-0 px-3'
              handleTableItemClick={handleItemClick}
            />
            <AccordionTable
              isExpand={false}
              title='Island Hopping'
              tableTitle={['Destination', 'No. of Guests', 'Price per Person']}
              tableItems={filterIslandHopping}
              includedList={packagesInclude}
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
            onCloseClick={() => setBookFormShow(false)}
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
                    {watchCategory === 'dive_packages' && (
                      filterDivePackages.map(({ diveDestination }, index) => {
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
                    {watchCategory === 'freedive_and_snorkeling_packages' && (
                      filterFreediveSnorkeling.map(({ diveDestination }, index) => {
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
                    {watchCategory === 'island_hopping' && (
                      filterIslandHopping.map(({ diveDestination }, index) => {
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
                <fieldset className='my-5'>
                  <Counter onChange={handleCounterChange} count={count} maxCount={9} />
                </fieldset>
                <div className='py-5 border-t mb-6 flex justify-between items-center font-semibold'>
                  <div>Total Price:</div>
                  <div>{`IDR ${totalPrice}`}</div>
                </div>
                <StickyBookingBtnSubmit
                  whatsappLink={`https://wa.me/62811301031?text=Hi%20Sightsea%20Expeditions%21%20I%20would%20like%20to%20make%20a%20booking%20with%20the%20following%20detail%3A%0AAlor%20${watchCategory ? watchCategory.replace(/_/g, " ") + '%2C' : ''}%20${watchDestination ? watchDestination + '%2C' : ''}%20for%20${count}%20person`}
                />
              </div>
            </form>
          </StickyBookingSection>
        </div>
      </section>
    </main>
  )
};
