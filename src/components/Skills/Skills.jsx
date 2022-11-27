// React
import React from 'react';
// Skill component
import Skill from '../Skill/Skill';

const Skills = () => {
	return (
		<div className="flex flex-col relative h-screen text-center md:flex-row max-w-full px-10 justify-center mx-auto items-center overflow-hidden">
			<h3 className="absolute top-24 uppercase tracking-[10px] text-white text-base lg:text-xl md:ml-20">
				Skills
			</h3>

			<div className="grid grid-cols-4 gap-5">
				<Skill />
				<Skill />
				<Skill />
				<Skill />
				<Skill />
				<Skill />
				<Skill />
				<Skill />
				<Skill />
				<Skill />
				<Skill />
				<Skill />
			</div>
		</div>
	);
};

export default Skills;
