// Framer motion
import { motion } from 'framer-motion';
// React
import React from 'react';
// Images
import images from '../../assets/images';

const ExperienceCard = () => {
	return (
		<article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#242424] hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-x-hidden pt-4 pb-4">
			<motion.img
				initial={{ y: -100, opacity: 0 }}
				whileInView={{ y: 0, opacity: 1 }}
				viewport={{ once: true }}
				className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
				src={images.DevThunder}
				alt="placeholder"
			/>

			<div className="px-0 md:px-10">
				<h4 className="text-xl font-light">CEO of DEVTHUNDER</h4>
				<p className="font-bold text-lg mt-1">Dev Thunder</p>
				<div className="flex space-x-2 my-2 justify-center">
					<img
						className="w-10 h-10 rounded-full"
						src={images.JavaScript}
						alt="javascript"
					/>
					<img
						className="w-10 h-10 rounded-full"
						src={images.JavaScript}
						alt="javascript"
					/>
					<img
						className="w-10 h-10 rounded-full"
						src={images.JavaScript}
						alt="javascript"
					/>
				</div>
				<p className="uppercase py-5 text-gray-300">
					Started work... - Ended...
				</p>

				<ul className="list-disc space-y-4 ml-5 text-base">
					<li>Summary points</li>
					<li>Summary points</li>
					<li>Summary points</li>
					<li>Summary points</li>
					<li>Summary points</li>
				</ul>
			</div>
		</article>
	);
};

export default ExperienceCard;
