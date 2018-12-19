import React from 'react';
import { Container } from './styles/heading_css.js'
import lambda from './images/lambda.png'
import './styles/image_styles.css'
import ScrollAnimation from 'react-animate-on-scroll';

const Heading = () => {
	return (
		<Container>
			<h1>Marshall Lanners<br/></h1>
			<p>Software Engineer</p>
			<hr />
		<ScrollAnimation animateIn='fadeIn' animateOut="fadeOut">
			<img src={lambda} alt='lambda school' className="lambda" />
		</ScrollAnimation>
		</Container>
	)
}

export default Heading;
