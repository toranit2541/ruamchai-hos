import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

const slides = [
  {
    image: 'https://via.placeholder.com/1200x400/ff0000/ffffff',
    title: 'Welcome to Ruamchai Hospital',
    subtitle: 'Your health is our priority.',
    link: '/about',
    linkText: 'Learn More',
  },
  {
    image: 'https://via.placeholder.com/1200x400/00ff00/ffffff',
    title: 'Expert Care',
    subtitle: 'Our doctors are here for you.',
    link: '/services',
    linkText: 'Our Services',
  },
  {
    image: 'https://via.placeholder.com/1200x400/0000ff/ffffff',
    title: 'State-of-the-art Facilities',
    subtitle: 'We use the latest technology.',
    link: '/rooms',
    linkText: 'See Our Rooms',
  },
];

const HeroSlider: React.FC = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={0}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 5000 }}
      loop
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>
          <div
            className="relative bg-cover bg-center text-white py-20 px-4"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="relative container mx-auto text-center">
              <h1 className="text-4xl font-bold mb-4">{slide.title}</h1>
              <p className="text-xl mb-8">{slide.subtitle}</p>
              <a
                href={slide.link}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                {slide.linkText}
              </a>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default HeroSlider;
