// Background circles
import BackgroundCircles from '../BackgroundCircles/BackgroundCircles';
// import {motion} from 'framer-motion';
import { Link } from 'react-scroll';
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
		<div className="text-center flex justify-center items-center flex-col h-screen space-y-8 desktop__margin">
			<BackgroundCircles />
			<img
				className="relative w-48 h-48 rounded-full mx-auto object-cover"
				src={images.MeImg}
				alt="self-image"
			/>
			<div>
				<h2 className="poppins text-sm lg:text-lg uppercase text-gray-500 pb-2 tracking-[15px]">
					Full stack developer
				</h2>
				<h1 className="text-3xl md:text-4xl lg:text-6xl font-bold px-10">
					<span className="mr-3">{text}</span>
					<Cursor cursorColor="#08b57b" />
				</h1>

				<div className="pt-5">
					<Link to="works" spy={true} className="btn-1">
						<button className="hero__button">Works</button>
					</Link>
					<Link to="experience" spy={true} className="btn-2">
						<button className="hero__button">Experience</button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Hero;
