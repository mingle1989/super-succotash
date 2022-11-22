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
		<div className="flex flex-col relative h-screen text-center md:flex-row max-w-5xl px-10 justify-evenly mx-auto items-center">
			<h3 className="absolute top-24 uppercase tracking-[10px] text-white text-2xl md:ml-20">
				About
			</h3>

			<motion.img
				initial={{
					x: -200,
					opacity: 0,
				}}
				transition={{ duration: 1.2 }}
				whileInView={{
					x: 0,
					opacity: 1,
				}}
				viewport={{ once: true }}
				src={images.AboutImg}
				width={376}
				height={319}
				className="-mb-20 md:mb-0 md:ml-20 flex-shrink-0 object-cover"
				alt="about"
			/>

			<div className="space-y-10 px-0 md:px-10 md:ml-20">
				<h4 className="text-4xl font-semibold">
					Here is a{' '}
					<span className="underline decoration-[#08b57b]">little</span>{' '}
					background
				</h4>
			</div>
		</div>
	);
};

export default About;
