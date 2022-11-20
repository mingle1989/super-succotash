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
		words: ['I am Jordan Mingle.', 'Coder. Designer.', 'And problem solver.'],
		loop: true,
		delaySpeed: 2000,
	});
	return (
		<motion.div className="text-center flex justify-center items-center flex-col h-screen space-y-8 desktop__margin">
			<div>
				<BackgroundCircles />
				<motion.h2
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 1.5 }}
					className="poppins text-sm lg:text-lg uppercase text-[#ffffff] pb-5 tracking-[15px] text-center"
				>
					Full stack developer
				</motion.h2>
				<motion.h1
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 1.75 }}
					className="text-3xl md:text-4xl lg:text-6xl font-bold px-10"
				>
					<span className="mr-3 text__gradient">{text}</span>
					<Cursor cursorColor="#08b57b" />
				</motion.h1>
				<motion.img
					initial={{ opacity: 0, scale: 0.8 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ duration: 2 }}
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
