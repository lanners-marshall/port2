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

export const ResumeDiv = styled.div`
	display:flex;
	justify-content: center;
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

export const Swing = keyframes`
	50% { transform: rotate(2deg);}
	80% { transform: rotate(-2deg);}
	100% { transform: rotate(0deg)}
`

export const Background = styled.div`
	background-color: #212931;
`
export const Container = styled.div`
	margin: 15px auto;
	width: 90%;
	max-width: 1280px;
	background-color: white;
	padding-bottom:60px;
`

export const CodeDiv = styled.div`
	overflow: hidden;
	background-image: url(${colorCode});
	transition: all 1s;
	max-width: 93%;
	margin: 0 auto;
	border-top: 25px solid white;
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
export const Footing = styled.div`
	height: 100px;
`

export const StyledH2 = styled.h2`
	font-family: 'Roboto', sans-serif;
	margin: 60px 0;
	margin-top: 90px;
	text-align: center;
	font-size: 4rem;
	@media (max-width: 600px){
		margin: 60px;
	}
`

export const StyledH2Ed = styled(StyledH2)`
	margin-top: 50px;
`

export const StoryDiv = styled.div`
	display:flex;
	width: 93%;
	margin: 0 auto;
	font-family: 'Lato', sans-serif;
	font-size: 2rem;
	line-height: 1.5;
	@media (max-width: 500px){
		flex-direction: column-reverse;
	}
`

export const DanceDiv = styled(StoryDiv)`
	@media (max-width: 500px){
		flex-direction: column;
	}
`

export const EducationDiv = styled(StoryDiv)`
`

export const DndDiv = styled(StoryDiv)`
	margin-bottom: 15px;
	@media only screen and (max-width: 1180px){
		padding-bottom: 15px;
	}
	@media (max-width: 500px){
		padding-bottom: 30px;
	}
`

export const Skills = styled.div`
  display: flex;
  font-size: 2rem;
  font-family: 'Lato', sans-serif;
  justify-content: space-around;
  line-height: 1.5;
  > p {
  	display: none;
  	@media (max-width: 700px){
  		display: block;
  		text-align: center;
  	}
  }
   > ul {
		@media (max-width: 700px){
				display: none;
		}
  }
`
export const SkillsP = styled.p`
	font-size: 2rem;
	line-height: 1.5;
	width: 93%;
	margin: 0 auto;
	font-family: 'Lato', sans-serif;
	margin-bottom: 70px;
`


export const ProjectHr = styled.hr`
	margin: 0;
`

export const SeparateDiv = styled.div`
	display: flex;
	width: 93%;
	margin: 0 auto;
	@media (max-width: 700px){
		flex-direction: column;
	}
	> div {
		width: 100%;
	}
`
export const ProjectH2 = styled.div`
	font-size: 3rem;
	font-family: 'Roboto', sans-serif;
	text-align: center;
	margin: 40px 0;
`

export const ContentP = styled.p`
	font-size: 2rem;
	font-family: 'Lato', sans-serif;
	width: 100%;
	margin: 0 auto;
`

export const Green = styled.span`
	color: green;
	font-weight: bold;
`

export const Separator = styled(ProjectHr)`
	display: block;
  border: 0;
  border-top: 1px solid white;
	height: 530px;
	margin: 0 2%;
	border-color: white;
	@media (max-width: 700px){
		display: none;
	}
`

export const Contact = styled.div`
	border: solid #212931 8px;
	border-radius: 10px;
	font-size: 2rem;
	background-color: #b7bcc1;
  font-weight: bold;
  line-height: 1.5;
  transform-origin: top center;
  font-family: 'Lato', sans-serif;
  animation: ${Swing} 5s infinite;
  width: 50%;
  margin-right: 3%;
  > p {
  	padding-left: 2%;
  	line-height: 1.5;
  }
	@media (max-width: 700px){
			width: 90%;
			margin: 30px auto;
			font-size: 1.6rem;
		}
	}
`

export const SeparateContact = styled.div`
	display: flex;
	padding-bottom: 30px;
	justify-content: space-around;
	@media (max-width: 700px){
		flex-direction: column;
	}
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
