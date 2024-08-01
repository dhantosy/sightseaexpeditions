'use client'

import { useEffect, useRef, useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form'
import ReCAPTCHA from 'react-google-recaptcha';
import { format } from 'date-fns'
import { FaMapLocationDot, FaEnvelope, FaPhone, FaClock, FaCircleCheck } from 'react-icons/fa6';
import SectionInstagram from '@/components/partial/SectionInstagram';
import { Button } from '@/components/ui/Button';
import Title from '@/components/ui/Title';
import Loader from '@/components/ui/Loader';
import { instagramImages } from '@/data/gallery';

const CAPTCHA_KEY = '6Lfc_xwqAAAAAAGkvSZBOI4TaYIz6JOkeXFvq6jJ';

const AppScriptUrl = 'https://script.google.com/macros/s/AKfycbzE0Zneu-2xxDQcx1Q1xStI77IR4YpTl35dusYhH8DD2Zxq5sct3KQiEsUz5PiXv0b1/exec';

type Inputs = {
  fullname: string
  email: string
  message: string
}

export default function ContactPage() {
  const [isSafeToReset, setIsSafeToReset] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [recaptchaError, setRecaptchaError] = useState('' as string);
  const reCaptchaRef = useRef<ReCAPTCHA>(null);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { isDirty, isValid }
  } = useForm<Inputs>();

  useEffect(() => {
    if (!isSafeToReset) return;

    reset(); // asynchronously reset your form values
  }, [isSafeToReset, reset]);

  const getFormData = (object: any) => {
    const formData = new FormData();
    formData.append('time', format(new Date(), 'yyyy MMMM dd, HH:mm'));
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
        setIsFormSubmitted(true);
      } catch (e) {
        setIsLoading(false);
        console.log(e);
      }
    }
  };

  return (
    <main className='mt-28 lg:mt-40 relative'>
      <div className='absolute inset-x-0 top-0 min-h-0 pl-20 py-24 flex overflow-hidden z-0 justify-end'>
        <span className='block -ml-20 bg-orange-200 w-72 h-72 rounded-full mix-blend-multiply filter blur-3xl opacity-30 lg:w-96 lg:h-96' />
      </div>
      <div className='hidden md:flex absolute inset-x-0 top-[500px] min-h-0 pl-20 py-24 overflow-hidden z-0'>
        <span className='block ml-0 bg-sky-200 w-72 h-72 rounded-full mix-blend-multiply filter blur-3xl opacity-30 lg:w-96 lg:h-96' />
      </div>
      <section className='container my-10 lg:my-12 px-4 lg:px-8'>
        <div className='relative flex flex-wrap flex-col-reverse lg:flex-row -mx-4 items-center'>
          <div className='basis-full lg:basis-1/2 px-4 grow-0  w-full h-full'>
            <div className='border rounded-3xl overflow-hidden p-4'>
              <div className='relative rounded-3xl overflow-hidden pb-[70%] shadow-lg'>
                <iframe
                  src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3943.9914719181374!2d115.1684777750149!3d-8.69235859135617!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd24784539cb89d%3A0x60da2258ff6548b1!2sSIGHTSEA%20EXPEDITIONS!5e0!3m2!1sen!2sid!4v1720056419445!5m2!1sen!2sid'
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading='lazy'
                  referrerPolicy='no-referrer-when-downgrade'
                  className='w-full h-full absolute'
                />
              </div>
            </div>
          </div>
          <div className='basis-full lg:basis-1/2 px-4 grow-0 mt-6 mb-10 lg:mt-0 w-full'>
            <Title titleMain='Our Contact.' />
            <div className='flex flex-col 2sm:flex-row -mx-4 mt-8 sm:mt-12 mb-5'>
              <div className='basis-full lg:basis-1/2 px-4 grow-0 mb-3 lg:mb-0'>
                <div className='flex gap-4 iitems-center'>
                  <FaMapLocationDot size={20} />
                  <h4 className='uppercase font-medium font-montserrat mb-3 leading-tight'>Address</h4>
                </div>
                <div>
                  <address className='opacity-70 not-italic mb-6 whitespace-pre-line'>
                    {`Jl. Plawa, Gg. Melati No.18, Seminyak,
                      Kec. Kuta, Kabupaten Badung, Bali 80361
                    `}
                  </address>
                </div>
              </div>
              <div className='basis-full lg:basis-1/2 px-4 grow-0 mb-3 lg:mb-0'>
                <div className='flex gap-4 iitems-center'>
                  <FaClock size={18} />
                  <h4 className='uppercase font-medium font-montserrat mb-3 leading-tight'>Opening Hours</h4>
                </div>
                <div>
                  <div className='opacity-70'>
                    <div><span className='font-semibold'>Office</span>, Mon - Fri : 09.00 - 17.00</div>
                    <div><span className='font-semibold'>Online</span>, Mon - Sun : 09.00 - 21.00</div>
                  </div>
                </div>
              </div>
            </div>
            <div className='flex flex-col 2sm:flex-row -mx-4'>
              <div className='basis-full lg:basis-1/2 px-4 grow-0 mb-8 lg:mb-0'>
                <div className='flex gap-4 iitems-center'>
                  <FaEnvelope size={18} />
                  <h4 className='uppercase font-medium font-montserrat mb-3 leading-tight'>Email Address</h4>
                </div>
                <div>
                  <a href='mailto:admin@sightseaexpeditions.com' className='opacity-70 flex items-center gap-2'>
                    <span>admin@sightseaexpeditions.com</span>
                  </a>
                </div>
              </div>
              <div className='basis-full lg:basis-1/2 px-4 grow-0'>
                <div className='flex gap-4 iitems-center'>
                  <FaPhone size={18} />
                  <h4 className='uppercase font-medium font-montserrat mb-3 leading-tight'>Phone</h4>
                </div>
                <div>
                  <a href='tel:+62811301031' className='opacity-70 flex items-center gap-2'>
                    <span>+62 811 301 031</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='container my-10 lg:my-20 px-4 lg:px-8 relative z-10'>
        <div className='relative flex flex-wrap flex-col lg:flex-row -mx-4 items-center'>
          <div className='basis-full lg:basis-1/2 px-4 grow-0 mt-4 mb-2 lg:mt-0 w-full'>
            <div className='text-left md:text-center'>
              <Title titleMain='Get in Touch.' tagMain />
            </div>
          </div>
          <div className='basis-full lg:basis-1/2 px-4 grow-0  w-full h-full'>
            <div className='rounded-3xl bg-creamPrimary/10 overflow-hidden p-6 lg:p-10 mt-4 lg:mt-0'>
              <form id='form-contact' onSubmit={handleSubmit(onSubmit)}>
                {isFormSubmitted ? (
                  <div className='text-center'>
                    <FaCircleCheck size={40} className='m-auto' />
                    <h1 className='text-lg lg:text-xl mb-4 mt-6 font-semibold'>Your Enquiry was Submitted Successfully!</h1>
                    <div className='flex'>
                      <div className='flex flex-col gap-2 basis-full lg:basis-10/12 m-auto'>
                        <p>Our team will get back to you as soon as possible.</p>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div>
                    <div className='flex flex-col md:flex-row gap-0 md:gap-6'>
                        <fieldset className='mb-5 basis-1 md:basis-1/2'>
                          <label htmlFor='fullname' className='text-slate-600 font-medium'>Full name<span className='text-sm text-red-500'>*</span></label>
                          <input className='block mt-1 px-4 py-2 w-full border border-slate-200 rounded-xl focus:border-slate-200 focus:shadow-sm focus-visible:outline-0 focus-visible:border-slate-400' type='text' placeholder='Your full name' id='fullname' {...register('fullname', {
                            required: true
                          })} />
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
                      <ReCAPTCHA ref={reCaptchaRef} size='invisible' sitekey={CAPTCHA_KEY} />
                      {recaptchaError && (
                        <div className='text-red-600'>{recaptchaError}</div>
                      )}
                      {
                        isLoading ? (
                          <Loader />
                        ) : (
                          <Button type='submit' size='md' disabled={!isDirty || !isValid} className='min-w-40 w-full md:w-auto'>
                            Submit
                          </Button>
                        )
                      }
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>
      <SectionInstagram titleMain='@sightsea' titleTop='Follow Us on Instagram' gallery={instagramImages} />
    </main>
  )
};
