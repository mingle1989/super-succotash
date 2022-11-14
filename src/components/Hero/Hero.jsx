import BackgroundCircles from '../BackgroundCircles/BackgroundCircles';
// import {motion} from 'framer-motion';
import { Cursor, useTypewriter } from 'react-simple-typewriter';

const Hero = () => {
	const [text, count] = useTypewriter({
		words: [
			"Hi, The Name's Jordan Mingle",
			'placeholder text',
			'and some more text',
		],
		loop: true,
		delaySpeed: 2000,
	});
	return (
		<div>
			<BackgroundCircles />
			<h1>
				<span>{text}</span>
				<Cursor cursorColor="#08b57b" />
			</h1>
		</div>
	);
};

export default Hero;
