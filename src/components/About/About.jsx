// Framer motion
import { motion } from 'framer-motion';
// React
import React from 'react';
// Images
import images from '../../assets/images/index';
// Button
// import Button3 from '../Buttons/Button3';

const About = () => {
	return (
		<div className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
			<h3 className="absolute top-24 uppercase tracking-[10px] text-white text-2xl">
				About
			</h3>

			<motion.img
				initial={{
					x: -200,
				}}
				whileInView={{
					x: 0,
				}}
				src={images.AboutImg}
				width={376}
				height={319}
				alt="about"
			/>
		</div>
	);
};

export default About;
