// React
import React from 'react';
// About Icon
import { AiOutlineInfoCircle } from 'react-icons/ai';
// Buttons Stylesheet
import '../../styles/Buttons.css';

const Button3 = () => {
	return (
		<button>
			<div className="button button-2 flex items-center justify-center">
				<AiOutlineInfoCircle size={18} className="mr-2" />
				<span>More Info</span>
			</div>
		</button>
	);
};

export default Button3;
