// Framer motion
import { motion } from 'framer-motion';
// React
import React from 'react';
// Images
import images from '../../assets/images/index';

const Skill = () => {
	return (
		<div className="group relative flex items-center justify-center cursor-pointer">
			<motion.img
				initial={{ opacity: 0, y: 10 }}
				transition={{ duration: 1 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				src={images.JavaScript}
				alt="js"
				className="rounded-full border object-cover w-20 h-20 md:w-24 md:h-24 xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out"
			/>
			<div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white w-20 h-20 md:w-24 md:h-24 xl:w-32 xl:h-32 rounded-full z-0">
				<div className="flex items-center justify-center h-full">
					<p className="text-3xl font-bold text-black opacity-100">Name</p>
				</div>
			</div>
		</div>
	);
};

export default Skill;
