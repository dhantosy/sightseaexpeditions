'use client';

import { useEffect, useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { format } from 'date-fns';
import { Button } from '@/components/ui/Button';
import AccordionTable from '@/components/ui/AccordionTable';
import HeroDetailPage from '@/components/partial/HeroDetailPage';
import ImageOne from '@public/assets/images/gallery/about-coral.jpg';
import ImageTwo from '@public/assets/images/gallery/about-dive.jpg';
import ImageThree from '@public/assets/images/gallery/about-mission.jpg';
import ImageFour from '@public/assets/images/gallery/about-vision.jpg';
import {
  certifiedDiver,
  certifiedDiverInclude,
  nonCertifiedDiver,
  nonCertifiedDiverInclude,
  snorkeling,
  snorkelingInclude,
  divingCourse
} from '@/data/diveCenterBaliPricing';
import InputCalendar from '@/components/ui/InputCalendar';
import { today, getLocalTimeZone } from "@internationalized/date";


const images = [
  {
    img: ImageOne.src,
    imgAlt: '',
    blurDataUrl: ImageOne.blurDataURL, 
  },
  {
    img: ImageTwo.src,
    imgAlt: '',
    blurDataUrl: ImageTwo.blurDataURL,
  },
  {
    img: ImageThree.src,
    imgAlt: '',
    blurDataUrl: ImageThree.blurDataURL,
  },
  {
    img: ImageFour.src,
    imgAlt: '',
    blurDataUrl: ImageFour.blurDataURL,
  },
];

type Inputs = {
  name: string
  email: string
  message: string
};

export default function DiveCenterBaliPage() {
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [showCalendar, setShowCalendar] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
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
  }

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    console.log(data)
  };

  const handleDateChange = (val: any) => {
    console.log(val);
  }

  const closeCalendar = (val: any) => {
    setShowCalendar(val);
  }

  return (
    <main>
      <HeroDetailPage
        title='Dive Bali: Explore the Enchanting Coral Reefs'
        subtopic='Available Daily'
        pageType='Dive Center'
        images={images}
      />
      <section className='container px-4 lg:px-8'>
        <div className='flex flex-col lg:flex-row'>
          <div className='basis-full lg:basis-2/3 flex-shrink-0 flex flex-col gap-10'>
            <AccordionTable
              isExpand
              title='Certified Diver'
              tableTitle={['Dive Destination', 'Total Dive', 'Price per Person']}
              tableItems={certifiedDiver}
              includedList={certifiedDiverInclude}
              tableItemsClassTitle='font-semibold basis-full lg:basis-2/4 flex-shrink-0 px-3'
              tableItemsClass='basis-full lg:basis-1/4 flex-shrink-0 px-3'
            />
            <AccordionTable
              isExpand={false}
              title='Beginner / Non-Certified Diver'
              tableTitle={['Discover Scuba Dive', 'Total Dive', 'Price per Person']}
              tableItems={nonCertifiedDiver}
              includedList={nonCertifiedDiverInclude}
              tableItemsClassTitle='font-semibold basis-full lg:basis-2/4 flex-shrink-0 px-3'
              tableItemsClass='basis-full lg:basis-1/4 flex-shrink-0 px-3'
            />
            <AccordionTable
              isExpand={false}
              title='Snorkeling'
              tableTitle={['Snorkeling Area', 'No. of Guests', 'Price per Person']}
              tableItems={snorkeling}
              includedList={snorkelingInclude}
              tableItemsClassTitle='font-semibold basis-full lg:basis-1/3 flex-shrink-0 px-3'
              tableItemsClass='basis-full lg:basis-1/3 flex-shrink-0 px-3'
            />
            <AccordionTable
              isExpand={false}
              title='PADI Dive Course'
              tableTitle={['Course', 'Program', 'Duration', 'Price per Person']}
              tableItems={divingCourse}
              tableItemsClassTitle='font-semibold basis-full lg:basis-1/4 flex-shrink-0 px-3'
              tableItemsClass='basis-full lg:basis-1/4 flex-shrink-0 px-3'
            />
          </div>
          <div className='basis-full lg:basis-1/3 flex-shrink-0'>
            <div className='sticky top-28 px-5'>
              <div className='rounded-3xl border border-slate-100 shadow-lg p-5'>
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
                      <div className='flex flex-col md:flex-row gap-0 md:gap-6'>
                        <fieldset className='mb-5 basis-1 md:basis-1/2 relative'>
                            <InputCalendar
                              setDate={handleDateChange}
                              showCalendar={showCalendar}
                              handleCloseCalendar={closeCalendar}
                            />
                          
                        </fieldset>
                        <fieldset className='mb-5 basis-1 md:basis-1/2'>
                          <label htmlFor='email' className='text-slate-600 font-medium'>Email address<span className='text-sm text-red-500'>*</span></label>
                          <input className='block mt-1 px-4 py-2 w-full border border-slate-200 rounded-xl focus:border-slate-200 focus:shadow-sm focus-visible:outline-0 focus-visible:border-slate-400' type='email' id='email' placeholder='Your email address' {...register('email', {
                            required: true
                          })} />
                        </fieldset>
                      </div>
                      <fieldset className='mb-5'>
                        <label htmlFor='message' className='text-slate-600 font-medium'>Message<span className='text-sm text-red-500'>*</span></label>
                        <textarea className='block min-h-40 mt-1 px-4 py-2 w-full border border-slate-200 rounded-xl focus:border-slate-200 focus:shadow-sm focus-visible:outline-0 focus-visible:border-slate-400' id='message' placeholder='Your messages' {...register('message', {
                          required: true
                        })} />
                      </fieldset>
                      {/* <ReCAPTCHA ref={reCaptchaRef} size='invisible' sitekey='6LfoGjIpAAAAAEoGhNvN1iuM6EiezWFPVH3TqKcN' />
                    {recaptchaError && (
                      <ErrorMessage>{recaptchaError}</ErrorMessage>
                    )}
                    <div style={{ textAlign: 'center' }}>
                      {isLoading ? <Loader /> : <button type='submit' className='submit' disabled={!isDirty || !isValid}>Submit</button>}
                    </div> */}
                      <Button type='submit' size='md' className='min-w-40 w-full md:w-auto'>
                        Book Now
                      </Button>
                    </div>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
};
