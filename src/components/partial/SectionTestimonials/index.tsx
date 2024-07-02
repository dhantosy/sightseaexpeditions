'use client'

import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import TestimonialItem from '@/components/ui/TestimonialItem';
import Title from '@/components/ui/Title';
import { SectionTestimonialProp } from './types';

export default function SectionTestimonials({
  testimonials,
}: SectionTestimonialProp) {

  return (
    <section className='relative overflow-hidden rounded-2xl border-x-[18px] border-white lg:border-x-[32px]'>
      <div className='px-0 py-7 sm:p-10 3lg:p-16 pb-12 bg-creamPrimary/20 rounded-3xl overflow-hidden'>
        <div className='container px-4 lg:px-8'>
          <div className='text-center'>
            <Title titleTop='Some of the kind words' titleMain='Review from Our Clients.' />
          </div>
          <div className='p-2 mt-4 md:mt-10'>
            <Swiper
              loop
              modules={[Autoplay, Pagination]}
              pagination={{ clickable: true }}
              spaceBetween={50}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              breakpoints={{
                1: {
                  slidesPerView: 1,
                },
                1024: {
                  slidesPerView: 2,
                },
              }}
              slidesPerView={2}
            >
              {testimonials.map(({ review, name, source, date }) => {
                return (
                  <SwiperSlide key={name}>
                    <TestimonialItem
                      review={review}
                      name={name}
                      source={source}
                      date={date}
                    />
                  </SwiperSlide>
                )
              })}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  )
};
