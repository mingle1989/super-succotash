// React
import React from 'react';
// Components
import Components from './components/index';

function App() {
	return (
		<>
			<Components.SocialIcons />
			<Components.Navbar />
			<Components.MobileNavbar />
			<section id="hero">
				<Components.Hero />
			</section>
			<section id="about">
				<Components.About />
			</section>
			<section id="experience">
				<Components.Experience />
			</section>
			<section id="skills">
				<Components.Skills />
			</section>
			<section id="works">
				<Components.Works />
			</section>
			<section id="contact">
				<Components.Contact />
			</section>
		</>
	);
}

export default App;
