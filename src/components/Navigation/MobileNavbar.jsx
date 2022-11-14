// React
import React from 'react';
// Framer motion
import { motion } from 'framer-motion';
// Mobile navbar stylesheet
import '../../styles/MobileNavbar.css';
// React scroll
import { Link } from 'react-scroll';
// Nav icons
import Icons from './NavIcons/NavIcons';

const MobileNavbar = () => {
	const mobileVariants = {
		hidden: {
			y: '500',
			opacity: 0,
		},
		visible: {
			y: 0,
			opacity: 1,
			transition: { type: 'tween', duration: '0.8' },
		},
	};
	return (
		<>
			<motion.nav
				variants={mobileVariants}
				initial="hidden"
				animate="visible"
				className="navbar__mobile"
			>
				<ul className="navbar__nav__mobile">
					<li className="nav__item__mobile">
						<Link to="hero" className="nav__link__mobile" spy={true}>
							<Icons.HiOutlineTerminal />
						</Link>
					</li>

					<li className="nav__item__mobile">
						<Link to="about" className="nav__link__mobile" spy={true}>
							<Icons.AiOutlineInfoCircle />
						</Link>
					</li>

					<li className="nav__item__mobile">
						<Link to="experience" className="nav__link__mobile" spy={true}>
							<Icons.FaHistory />
						</Link>
					</li>

					<li className="nav__item__mobile">
						<Link to="skills" className="nav__link__mobile" spy={true}>
							<Icons.AiOutlineCoffee />
						</Link>
					</li>

					<li className="nav__item__mobile">
						<Link to="works" className="nav__link__mobile" spy={true}>
							<Icons.FaCode />
						</Link>
					</li>

					<li className="nav__item__mobile">
						<Link to="contact" className="nav__link__mobile" spy={true}>
							<Icons.IoIosContact />
						</Link>
					</li>
				</ul>
			</motion.nav>
		</>
	);
};

export default MobileNavbar;
