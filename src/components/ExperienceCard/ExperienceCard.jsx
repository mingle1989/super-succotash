// React
import React from 'react';
// Images
import images from '../../assets/images';

const ExperienceCard = () => {
	return (
		<article>
			<img
				className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
				src={images.DevThunder}
				alt="placeholder"
			/>
		</article>
	);
};

export default ExperienceCard;
