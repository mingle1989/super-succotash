import React from 'react';
import { FaHistory } from 'react-icons/fa';
import '../../styles/Buttons.css';

const Button2 = () => {
	return (
		<button>
			<div className="button button-2 flex items-center justify-center">
				<FaHistory className="mr-2" />
				<span>Experience</span>
			</div>
		</button>
	);
};

export default Button2;
