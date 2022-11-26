// Framer motion
import { motion } from 'framer-motion';
// React
import React from 'react';
// Experience Card
import ExperienceCard from '../ExperienceCard/ExperienceCard';

const Experience = () => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			transition={{ duration: 1.5 }}
			className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center"
		>
			<h3 className="absolute top-24 uppercase tracking-[10px] text-white text-base lg:text-xl md:ml-20">
				Experience
			</h3>

			<div className="w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory">
				<ExperienceCard />
				<ExperienceCard />
				<ExperienceCard />
				<ExperienceCard />
			</div>
		</motion.div>
	);
};

export default Experience;
