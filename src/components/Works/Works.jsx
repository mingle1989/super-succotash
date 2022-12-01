// React
import React from 'react';
import MySwiper from '../MySwiper/MySwiper';

const Works = () => {
	return (
		<div className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-center mx-auto items-center">
			<h3 className="absolute top-24 uppercase tracking-[10px] text-white text-base lg:text-xl text__gradient__2 md:ml-24">
				Works
			</h3>
			<MySwiper />
		</div>
	);
};

export default Works;
