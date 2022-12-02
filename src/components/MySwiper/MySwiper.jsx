// React
import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// import required modules
import { EffectCoverflow, Pagination } from 'swiper';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
// Images
import images from '../../assets/images/index';

const MySwiper = () => {
	return (
		<Swiper
			effect={'coverflow'}
			grabCursor={true}
			centeredSlides={true}
			loop={true}
			slidesPerView={'auto'}
			coverflowEffect={{
				rotate: 50,
				stretch: 0,
				depth: 100,
				modifier: 1,
				slideShadows: true,
			}}
			pagination={true}
			modules={[EffectCoverflow, Pagination]}
			className="mySwiper"
		>
			<SwiperSlide className="work__slide">
				<h1 className="pb-4">Slide 1</h1>
				<img src={images.KryptoForest} alt="krypto forest" />
			</SwiperSlide>
			<SwiperSlide className="work__slide">
				<h1 className="pb-4">Slide 2</h1>
				<img src={images.KryptoForest} alt="krypto forest" />
			</SwiperSlide>
			<SwiperSlide className="work__slide">
				<h1 className="pb-4">Slide 3</h1>
				<img src={images.KryptoForest} alt="krypto forest" />
			</SwiperSlide>
		</Swiper>
	);
};

export default MySwiper;
