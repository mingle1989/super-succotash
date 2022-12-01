// Framer motion
import { motion } from 'framer-motion';
// React
import React from 'react';
// Images
import images from '../../assets/images/index';
// Button
import ResumeButton from '../Buttons/ResumeButton';

const About = () => {
	return (
		<motion.div
			initial={{ y: 10, opacity: 0 }}
			whileInView={{ y: 0, opacity: 1 }}
			transition={{ duration: 1.5 }}
			className="flex flex-col relative h-screen text-center max-w-5xl px-10 justify-evenly mx-auto items-center"
		>
			<h3 className="absolute top-24 uppercase tracking-[10px] text-white text-base lg:text-xl text__gradient__2 md:ml-20">
				About
			</h3>

			<div className="flex flex-col justify-center items-center lg:flex-row pt-8 md:pt-0">
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
					className="pt-8 md:mb-0 md:ml-20 flex-shrink-0 object-cover about__img about__img__order"
					alt="about"
				/>
				<div className="space-y-4 px-0 md:px-10 md:ml-20 lg:text-left">
					<h4 className="text-2xl lg:text-4xl font-semibold underline decoration-[#08b57b]">
						My Passion
					</h4>
					<p className="text-lg lg:text-2xl poppins font-bold pb-4 lg:pb-8">
						I create scalable, performant, responsive websites and mobile apps.
					</p>
					<a href="/assets/resume/sample.txt" download>
						<ResumeButton />
					</a>
				</div>
			</div>
		</motion.div>
	);
};

export default About;
