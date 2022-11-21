// Framer motion
import { motion } from 'framer-motion';
// React
import React from 'react';

function BackgroundCircles() {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{
				scale: [1, 2, 2, 3, 1],
				opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1.0],
				borderRadius: ['20%', '20%', '50%', '80%', '20%'],
			}}
			transition={{ duration: 2.5 }}
			className="relative flex justify-center items-center mt-24"
		>
			<div className="mt-80 lg:mt-96 absolute border border-[#7c7d7e] rounded-full h-[200px] w-[200px] animate-ping" />
			<div className="mt-80 lg:mt-96 absolute border border-[#7c7d7e]/20 rounded-full h-[300px] w-[300px]" />
			<div className="mt-80 lg:mt-96 absolute border border-[#7c7d7e]/10 rounded-full h-[500px] w-[500px]" />
			<div className="mt-80 lg:mt-96 absolute border border-[#08b57b] rounded-full opacity-20 w-[650px] h-[650px] animate-pulse" />
			<div className="mt-80 lg:mt-96 absolute border border-[#7c7d7e]/10 rounded-full w-[800px] h-[800px]" />
		</motion.div>
	);
}

export default BackgroundCircles;
