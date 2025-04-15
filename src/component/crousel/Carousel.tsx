'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { Card } from '../card/card';

interface CarouselProps {
  reviews: Array<{
    rating: number;
    text: string;
    author: string;
    role: string;
  }>;
}

const Carousel = ({ reviews }: CarouselProps) => {
  return (
    <Swiper
      modules={[Navigation]}
      navigation={{
        nextEl: '.swiper-button-next'
      }}
      loop={true}
      slidesPerView={2.15}
      spaceBetween={10}
      slidesPerGroup={1}  
      watchSlidesProgress={true}
      style={{ 
        overflow: 'visible',
        marginLeft: 0,
        paddingLeft: 0
      }}
      centeredSlides={false}
      speed={500}
      initialSlide={0}
    >
      {reviews.map((review, index) => (
        <SwiperSlide key={index}>
          <Card
            rating={review.rating}
            text={review.text}
            author={review.author}
            role={review.role}
          />
        </SwiperSlide>
      ))}
      <div className="swiper-button-next"></div>
    </Swiper>
  );
};

export default Carousel;