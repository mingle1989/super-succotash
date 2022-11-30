// React
import React from 'react';
// Icons
import { FaCode } from 'react-icons/fa';
// Stylesheet
import '../../styles/Buttons.css';

const RecentWork = () => {
	return (
		<button>
			<div className="button button-1 flex items-center justify-center">
				<FaCode size={18} className="mr-2" />
				<span>Recent Work</span>
			</div>
		</button>
	);
};

export default RecentWork;
