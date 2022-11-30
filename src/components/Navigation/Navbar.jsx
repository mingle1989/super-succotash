// Framer motion
import { motion } from 'framer-motion';
// React
import React from 'react';
// React scroll
import { Link } from 'react-scroll';
// Images
import images from '../../assets/images/index';
// Navbar stylesheet
import '../../styles/Navbar.css';
// Nav icons
import Icons from './NavIcons/NavIcons';

const Navbar = () => {
	const navVariants = {
		hidden: {
			x: '-500',
			opacity: 0,
		},
		visible: {
			x: 0,
			opacity: 1,
			transition: {
				type: 'tween',
				duration: 1.25,
			},
		},
	};

	return (
		<motion.nav
			variants={navVariants}
			initial="hidden"
			animate="visible"
			className="navbar"
		>
			<ul className="navbar__nav">
				{/* Logo */}
				<li className="logo">
					<a href="/" className="nav__link">
						<span className="logo__text">
							Jordan
							<br />
							Mingle
						</span>
						<span className="logo__img">
							<img src={images.Logo} width={75} height={75} alt="logo" />
						</span>
					</a>
				</li>

				<li className="nav__item">
					<Link to="hero" spy={true} className="nav__link">
						<Icons.HiOutlineTerminal />
						<span className="link__text">Home</span>
					</Link>
				</li>

				<li className="nav__item">
					<Link to="about" spy={true} className="nav__link">
						<Icons.AiOutlineInfoCircle />
						<span className="link__text">About</span>
					</Link>
				</li>

				<li className="nav__item">
					<Link to="works" spy={true} className="nav__link">
						<Icons.FaCode />
						<span className="link__text">Works</span>
					</Link>
				</li>

				<li className="nav__item">
					<Link to="experience" spy={true} className="nav__link">
						<Icons.FaHistory />
						<span className="link__text">Experience</span>
					</Link>
				</li>

				<li className="nav__item">
					<Link to="skills" spy={true} className="nav__link">
						<Icons.AiOutlineCoffee />
						<span className="link__text">Skills</span>
					</Link>
				</li>

				<li className="nav__item">
					<Link to="contact" spy={true} className="nav__link">
						<Icons.IoIosContact />
						<span className="link__text">Contact</span>
					</Link>
				</li>
			</ul>
		</motion.nav>
	);
};

export default Navbar;
