// Framer motion
import { motion } from 'framer-motion';
// Background circles
import BackgroundCircles from '../BackgroundCircles/BackgroundCircles';
// React scroll
import { Link } from 'react-scroll';
// React simple typewriter
import { Cursor, useTypewriter } from 'react-simple-typewriter';
// Images
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
		<motion.div className="text-center flex justify-center items-center flex-col h-screen space-y-8 desktop__margin">
			<div>
				<BackgroundCircles />
				<h2 className="poppins text-sm lg:text-lg uppercase text-[#99ffd8] pb-5 tracking-[15px]">
					Full stack developer
				</h2>
				<h1 className="text-3xl md:text-4xl lg:text-6xl font-bold px-10">
					<span className="mr-3">{text}</span>
					<Cursor cursorColor="#08b57b" />
				</h1>
				<img
					className="relative mt-5 w-[376px] h-[319px] mx-auto object-fill"
					src={images.Server}
					alt="servers"
				/>

				<div className="pt-5">
					<Link to="works" spy={true} className="btn-1">
						<button className="hero__button">Works</button>
					</Link>
					<Link to="experience" spy={true} className="btn-2">
						<button className="hero__button">Experience</button>
					</Link>
				</div>
			</div>
		</motion.div>
	);
};

export default Hero;
