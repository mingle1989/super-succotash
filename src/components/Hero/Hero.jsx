// Framer motion
import { motion } from 'framer-motion';
// Background circles
import BackgroundCircles from '../BackgroundCircles/BackgroundCircles';
// React scroll
import { Link } from 'react-scroll';
// Buttons
import Buttons from '../Buttons/Buttons';
// React simple typewriter
import { Cursor, useTypewriter } from 'react-simple-typewriter';
// Images
import images from '../../assets/images/index';

const Hero = () => {
	const [text, count] = useTypewriter({
		words: ['I am Jordan Mingle.', 'Coder. Designer.', 'Problem solver.'],
		loop: true,
		delaySpeed: 2000,
	});
	return (
		<motion.div className="text-center flex justify-center items-center flex-col h-screen space-y-8 content__margin w-full overflow-hidden">
			<div>
				<BackgroundCircles />
				<div>
					<motion.h2
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 1.5 }}
						className="text-base lg:text-lg uppercase text-[#ffffff] pb-5 tracking-[10px] text-center font-bold"
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

					<div className="pt-8 mr-5">
						<Link to="works" spy={true}>
							<Buttons.Button1 />
						</Link>
						<Link to="experience" spy={true}>
							<Buttons.Button2 />
						</Link>
					</div>

					<motion.img
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 1.5 }}
						className="relative mt-5 w-[376px] h-[319px] mx-auto object-fill responsive-image"
						src={images.Server}
						alt="servers"
					/>
				</div>
			</div>
		</motion.div>
	);
};

export default Hero;
