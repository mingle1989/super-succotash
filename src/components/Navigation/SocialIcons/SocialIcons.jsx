// Framer Motion
import { motion } from 'framer-motion';
// React scroll
import { Link } from 'react-scroll';
// Images
import images from '../../../assets/images/index';
// Icons
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
// Social icons stylesheet
import '../../../styles/SocialIcons.css';

const SocialIcons = () => {
	const logoVariants = {
		hidden: {
			x: '-500',
			opacity: 0,
		},
		visible: {
			x: 0,
			opacity: 1,
			transition: { type: 'tween', duration: '0.8' },
		},
	};

	const socialVariants = {
		hidden: {
			x: '500',
			opacity: 0,
		},
		visible: {
			x: 0,
			opacity: 1,
			transition: { type: 'tween', duration: '0.8' },
		},
	};

	return (
		<>
			<motion.div
				variants={logoVariants}
				initial="hidden"
				animate="visible"
				className="mobile__logo"
			>
				<Link to="/">
					<img src={images.Logo} width={75} height={75} alt="logo" />
				</Link>
			</motion.div>
			<motion.div
				variants={socialVariants}
				initial="hidden"
				animate="visible"
				className="social__icons"
			>
				<a
					className="social__link"
					href="https://github.com/mingle1989"
					target="_blank"
					title="Github"
					rel="noopener noreferrer"
				>
					<FaGithub className="social__icon" />
				</a>
				<a
					className="social__link"
					href="https://www.linkedin.com/in/jordanmingle/"
					target="_blank"
					title="Linkedin"
					rel="noopener noreferrer"
				>
					<FaLinkedin className="social__icon" />
				</a>
				<a
					className="social__link"
					href="https://twitter.com/minglexM"
					target="_blank"
					title="Twitter"
					rel="noopener noreferrer"
				>
					<FaTwitter className="social__icon" />
				</a>
			</motion.div>
		</>
	);
};

export default SocialIcons;
