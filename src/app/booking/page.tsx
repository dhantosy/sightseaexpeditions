'use client'

import { useEffect, useState, useRef } from 'react';
import Link from 'next/link';
import { useSearchParams, useRouter } from 'next/navigation'
import ReCAPTCHA from 'react-google-recaptcha';
import { useForm, SubmitHandler, Controller } from 'react-hook-form'
import PhoneInput from 'react-phone-number-input'
import { format } from 'date-fns'
import { Button } from '@/components/ui/Button';
import Title from '@/components/ui/Title';
import Loader from '@/components/ui/Loader';

const CAPTCHA_KEY = '6Lfc_xwqAAAAAAGkvSZBOI4TaYIz6JOkeXFvq6jJ';

const AppScriptUrl = 'https://script.google.com/macros/s/AKfycbwPSWMZ77k5MqntcOA0Aha7HaA6YlWz-x5bpvfJyyAjFFgxitFKXxn3qqpDlI0BepiwUg/exec';

type Inputs = {
  fullname: string
  email: string
  phone: string
}

export default function BookingPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [isSafeToReset, setIsSafeToReset] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [recaptchaError, setRecaptchaError] = useState('' as string);
  const reCaptchaRef = useRef<ReCAPTCHA>(null);
  const paramName = searchParams.get('name');
  const paramType = searchParams.get('type');
  const paramDate = searchParams.get('date');
  const paramCat = searchParams.get('cat');
  const paramCabinType = searchParams.get('cabin');
  const paramDestination = searchParams.get('destination');
  const paramPersonCount = searchParams.get('pax');
  const paramCurrency = searchParams.get('curr');
  const paramTotalPrice = searchParams.get('total');

  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { isDirty, isValid }
  } = useForm<Inputs>();

  useEffect(() => {
    if (!isSafeToReset) return;

    reset(); // asynchronously reset your form values
  }, [isSafeToReset, reset]);

  const getFormData = (object: any) => {
    const formData = new FormData();
    formData.append('time', format(new Date(), 'yyyy MMMM dd, HH:mm'));
    formData.append('event_name', paramName || '');
    formData.append('event_type', paramType || '');
    formData.append('event_date', paramDate || '');
    formData.append('event_category', paramCat || '');
    formData.append('event_cabin_type', paramCabinType || '');
    formData.append('event_person_count', paramPersonCount || '');
    formData.append('dive_center_destination_course', paramDestination || '');
    Object.keys(object).forEach(key => formData.append(key, object[key]));

    return formData;
  }

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    reCaptchaRef?.current?.reset();
    setRecaptchaError('');
    setIsLoading(true);

    const token = await reCaptchaRef?.current?.executeAsync();

    if (!token) {
      const message = 'Opps! Something is wrong.';
      setRecaptchaError(message);
      setIsLoading(false);
      return;
    }

    if (token) {
      try {
        await fetch(AppScriptUrl, {
          redirect: 'follow',
          method: 'POST',
          body: getFormData(data),
        });
        setIsSafeToReset(true);
        setIsLoading(false);
        router.push('/booking-success');
      } catch (e) {
        setIsLoading(false);
        console.log(e);
      }
    }
  };

  return (
    <main className='mt-20 lg:mt-32 relative'>
      <div className='absolute inset-x-0 top-80 min-h-0 pl-20 py-24 flex overflow-hidden z-0 justify-end'>
        <span className='block -ml-20 bg-orange-200 w-72 h-72 rounded-full mix-blend-multiply filter blur-3xl opacity-30 lg:w-96 lg:h-96' />
      </div>
      <div className='hidden md:flex absolute inset-x-0 top-0 min-h-0 pl-20 py-24 overflow-hidden z-0'>
        <span className='block ml-0 bg-sky-200 w-72 h-72 rounded-full mix-blend-multiply filter blur-3xl opacity-30 lg:w-96 lg:h-96' />
      </div>
      <section className='container my-4 lg:my-20 px-4 lg:px-8 relative z-10'>
        <div className='relative flex flex-wrap flex-col lg:flex-row -mx-4 items-center'>
          <div className='basis-full lg:basis-7/12 px-4 grow-0 mt-4 mb-2 lg:mt-0 mx-auto'>
            <div className='rounded-3xl bg-white border overflow-hidden px-4 py-6 lg:p-8 mt-4 lg:mt-6'>
              {paramName ? (
                <>
                  <div className='text-center'>
                    <Title titleMain='Your Booking Details.' tagMain />
                  </div>
                  <div>
                    <div className='my-5'>
                      <h3 className='text-lg lg:text-xl font-semibold text-center mb-6 border-b pb-6'>{paramName}</h3>
                      <div className='mb-6 border-b pb-6'>
                        <div className='max-w-96 mx-auto flex flex-col gap-2'>
                          <div className='flex justify-between items-baseline text-sm lg:text-base gap-4'>
                            <div>Date:</div>
                            <div className='text-right'>{paramDate || 'Date is not selected'}</div>
                          </div>
                          {paramCat && (
                            <div className='flex justify-between items-baseline text-sm lg:text-base gap-4'>
                              <div>Category:</div>
                              <div className='capitalize text-right'>{paramCat?.replace(/_/g, " ")}</div>
                            </div>
                          )}
                          {paramDestination && (
                            <div className='flex justify-between items-baseline text-sm lg:text-base gap-4'>
                              <div>Course/destination:</div>
                              <div className='text-right'>{paramDestination}</div>
                            </div>
                          )}
                          {paramCabinType && (
                            <div className='flex justify-between items-baseline text-sm lg:text-base gap-4'>
                              <div>Cabin Type:</div>
                              <div className='text-right'>{paramCabinType}</div>
                            </div>
                          )}
                          <div className='flex justify-between items-baseline text-sm lg:text-base gap-4'>
                            <div>No. of Guests:</div>
                            <div>{paramPersonCount}</div>
                          </div>
                        </div>
                      </div>
                      <div className='mb-6 border-b pb-6'>
                        <div className='max-w-96 mx-auto flex flex-col gap-2'>
                          <div className='text-sm lg:text-base flex justify-between items-baseline font-semibold'>
                            <div>Total Price:</div>
                            <div>{`${paramCurrency} ${paramTotalPrice}`}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <form className='max-w-xl mx-auto mt-6 lg:mt-10' id='form-booking' onSubmit={handleSubmit(onSubmit)}>
                    <h4 className='text-center font-semibold text-lg lg:text-xl mb-8'>Your Contact Detail.</h4>
                      <div>
                        <div className='flex flex-col max-w-96 mx-auto text-sm lg:text-base'>
                          <fieldset className='mb-5 basis-full'>
                            <label htmlFor='fullname' className='text-slate-600 font-medium'>Full name<span className='text-sm text-red-500'>*</span></label>
                            <input className='block mt-1 px-4 py-2 w-full border border-slate-200 rounded-xl focus:border-slate-200 focus:shadow-sm focus-visible:outline-0 focus-visible:border-slate-400' type='text' placeholder='Your full name' id='fullname' {...register('fullname', {
                              required: true
                            })} />
                          </fieldset>
                          <fieldset className='mb-5 basis-full'>
                            <label htmlFor='email' className='text-slate-600 font-medium'>Email address<span className='text-sm text-red-500'>*</span></label>
                            <input className='block mt-1 px-4 py-2 w-full border border-slate-200 rounded-xl focus:border-slate-200 focus:shadow-sm focus-visible:outline-0 focus-visible:border-slate-400' type='email' id='email' placeholder='Your email address' {...register('email', {
                              required: true
                            })} />
                          </fieldset>
                          <fieldset className='mb-5 basis-full phoneNo'>
                            <label htmlFor='phone' className='text-slate-600 font-medium'>WhatsApp / mobile no.<span className='text-sm text-red-500'>*</span></label>
                              <Controller
                                name='phone'
                                control={control}
                                rules={{
                                  required: true
                                }}
                                render={({ field: { onChange, value } }) => (
                                  <PhoneInput
                                    international
                                    defaultCountry='ID'
                                    countryCallingCodeEditable={false}
                                    placeholder='Your WhatsApp / mobile no.'
                                    value={value}
                                    onChange={onChange}
                                  />
                                )}
                              />
                          </fieldset>
                            <ReCAPTCHA ref={reCaptchaRef} size='invisible' sitekey={CAPTCHA_KEY} />
                            {recaptchaError && (
                              <div className='text-red-600'>{recaptchaError}</div>
                            )}
                          {
                            isLoading ? (
                              <Loader />
                            ) : (
                              <Button type = 'submit' size = 'md' disabled = {!isDirty || !isValid} className='min-w-40 w-full md:w-auto'>
                                Submit
                              </Button>
                            )
                          }
                        </div>
                      </div>
                  </form>
                </>
              ) : (
                <>
                  <div className='text-center'>
                    <Title titleMain='Explore our currated trips.' tagMain />
                    <Link href='/diving-trips'>
                      <Button type='submit' size='md' className='mt-5 min-w-40 w-full md:w-auto'>
                        See Diving Trips
                      </Button>
                    </Link>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  )
};
