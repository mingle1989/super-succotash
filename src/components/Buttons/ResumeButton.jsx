// React
import React from 'react';
// About Icon
import { FaDownload } from 'react-icons/fa';
// Buttons Stylesheet
import '../../styles/Buttons.css';

const ResumeButton = () => {
	return (
		<button>
			<div className="button-3 resume__btn flex items-center justify-center">
				<FaDownload size={18} className="mr-2" />
				<span>Resume</span>
			</div>
		</button>
	);
};

export default ResumeButton;
