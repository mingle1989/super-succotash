// Background circles
import BackgroundCircles from '../BackgroundCircles/BackgroundCircles';
// import {motion} from 'framer-motion';
// React simple typewriter
import { Cursor, useTypewriter } from 'react-simple-typewriter';
// images
import images from '../../assets/images/index';

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
		<div className="text-center flex justify-center items-center flex-col h-screen">
			<BackgroundCircles />
			<img
				className="relative w-48 h-48 rounded-full mx-auto object-cover"
				src={images.MeImg}
				alt="self-image"
			/>
			<div>
				<h2>Full stack developer</h2>
				<h1>
					<span>{text}</span>
					<Cursor cursorColor="#08b57b" />
				</h1>
			</div>
		</div>
	);
};

export default Hero;
