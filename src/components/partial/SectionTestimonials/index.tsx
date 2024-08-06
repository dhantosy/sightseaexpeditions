'use client'

import Link from 'next/link';
import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import TestimonialItem from '@/components/ui/TestimonialItem';
import Title from '@/components/ui/Title';
import { Button } from '@/components/ui/Button';
import { SectionTestimonialProp } from './types';

export default function SectionTestimonials({
  testimonials,
}: SectionTestimonialProp) {

  return (
    <section className='relative overflow-hidden rounded-2xl border-x-[18px] border-white lg:border-x-[32px]'>
      <div className='px-0 py-7 sm:p-10 3lg:p-16 pb-8 bg-creamPrimary/20 rounded-3xl overflow-hidden'>
        <div className='container px-4 lg:px-12'>
          <div className='text-center'>
            <Title titleTop='Some of the kind words' titleMain='Review from Our Clients.' />
          </div>
          <div className='p-2 mt-4 md:mt-10'>
            <Swiper
              loop
              modules={[Autoplay, Pagination]}
              pagination={{ clickable: true }}
              spaceBetween={30}
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
          <div className='flex justify-center relative z-20'>
            <Button asChild size='md' className='uppercase flex-grow lg:flex-grow-0'>
              <Link href='https://www.google.com/maps/place/SIGHTSEA+EXPEDITIONS/@-8.6923586,115.1684778,17z/data=!4m8!3m7!1s0x2dd24784539cb89d:0x60da2258ff6548b1!8m2!3d-8.6923586!4d115.1710527!9m1!1b1!16s%2Fg%2F11vrkzrq3l?entry=ttu' target='_blank' rel='noopen noreferrer'>See All Google Reviews</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
};
