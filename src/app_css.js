import styled, { keyframes } from 'styled-components';
import colorCode from './components/images/codebg.jpg';
import noColorCode from './components/images/codebg2.jpg';

export const scrollingText = keyframes`
	0% {
		transform: translateX(110%)
	}
	100% {
		transform: translateX(-200%)
	}
`

export const scrollingTextMobile = keyframes`
	0% {
		transform: translateX(110%)
	}
	100% {
		transform: translateX(-770%)
	}
`

export const Resume = styled.p`
	line-height: 1.5;
  color: white;
  background-color: #212931;
  display: inline-block;
  font-size: 1.6rem;
  padding: 1%;
  border-radius: 4px;
  width: 150px;
  text-align: center;
`

export const Background = styled.div`
	background-color: #212931;
`
export const Container = styled.div`
	margin: 0 auto;
	background-color: white;
	width: 92%;
	border-radius: 9px;
`

export const CodeDiv = styled.div`
	overflow: hidden;
	background-image: url(${colorCode});
	transition: all 1s;
	margin: 0 auto;
	&:hover {
		background-image: url(${noColorCode});
		color: black;
	}
`
export const TextBanner = styled.h2`
	font-size: 15rem;
	color: white;
	opacity: 0.5;
	white-space: nowrap;
	animation: ${scrollingText} 60s linear infinite;
	font-family: 'Roboto', sans-serif;
	@media (max-width: 500px){
		animation: ${scrollingTextMobile} 40s linear infinite;
	}
`

export const StyledH2 = styled.h2`
	font-family: 'Roboto', sans-serif;
	margin: 90px 0;
	text-align: center;
	font-size: 4rem;
	margin-top: 70px;
	@media (max-width: 600px){
	}
`

export const StyledSpace = styled(StyledH2)`
	@media (max-width: 600px){
		margin-top: 40px;
		margin-bottom: 40px;
	}
`

export const StyledH2T = styled(StyledH2)`
	maring-top: 90px;
`

export const ProjectH2 = styled.div`
	font-size: 3rem;
	font-family: 'Roboto', sans-serif;
	text-align: center;
	margin: 60px 0;
`

export const LinksDiv = styled.div`
	display: flex;
	justify-content: flex-end;
	width: 93%;
	padding-bottom: 30px;
	> a {
		margin-right: 2%;
	}
`

export const Intro = styled(StyledH2)`
	@media only screen and (max-width: 500px){
		margin-top: 60px;
		margin-bottom: 50px;
	}
`

export const ColorDiv = styled.div`
	padding: 60px 0;
	> h2 {
		font-family: 'Roboto', sans-serif;
		text-align: center;
		font-size: 4rem;
	}
`
