// React
import React from 'react';
// Experience Icon
import { FaHistory } from 'react-icons/fa';
// Buttons Stylesheet
import '../../styles/Buttons.css';

const ExperienceButton = () => {
	return (
		<button>
			<div className="button button-2 flex items-center justify-center">
				<FaHistory size={18} className="mr-2" />
				<span>Experience</span>
			</div>
		</button>
	);
};

export default ExperienceButton;
