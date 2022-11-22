import React from 'react';
import { FaCode } from 'react-icons/fa';
import '../../styles/Buttons.css';

const Button1 = () => {
	return (
		<button>
			<div className="button button-1 flex items-center justify-center">
				<FaCode size={18} className="mr-2" />
				<span>Recent Work</span>
			</div>
		</button>
	);
};

export default Button1;
