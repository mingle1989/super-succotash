// React
import React from 'react';
// Skill component
import Skill from '../Skill/Skill';

const Skills = () => {
	return (
		<div className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
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
