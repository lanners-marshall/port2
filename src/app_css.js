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
	@media (max-width: 1180px){
		justify-content: center;
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
	margin: 15px auto;
	background-color: white;
	width: 95%;
	border-radius: 9px;
`

export const CodeDiv = styled.div`
	overflow: hidden;
	border-top-left-radius: 9px;
	border-top-right-radius: 9px;
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
export const Footing = styled.div`
	height: 50px;
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

export const StyledC = styled(StyledH2)`
	margin-top: 0;
	padding-top: 40px;
	margin-bottom:20px;
`
export const StyledH2M = styled(StyledH2)`
	margin: 0;
	padding: 50px 0;
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

export const StoryDiv = styled.div`
	display:flex;
	width: 93%;
	margin: 0 auto;
	font-family: 'Lato', sans-serif;
	font-size: 2.5rem;
	line-height: 1.5;
	@media (max-width: 500px){
		flex-direction: column-reverse;
	}
`

export const DanceDiv = styled(StoryDiv)`
	> div > p {
		padding-top: 40px;
		@media (max-width: 500px){
			padding: 0;
		}
	}
	@media (max-width: 500px){
		flex-direction: column;
		padding: 0;
	}
`

export const EducationDiv = styled(StoryDiv)`

`

export const DndDiv = styled(StoryDiv)`
	padding-bottom: 30px;
	@media only screen and (max-width: 1180px){
		padding-bottom: 15px;
	}
	@media (max-width: 500px){
		padding-bottom: 30px;
	}
`

export const SkillsP = styled.p`
	font-size: 2.5rem;
	line-height: 1.5;
	width: 93%;
	margin: 0 auto;
	font-family: 'Lato', sans-serif;
	margin-bottom: 70px;
	padding-right: 5%;
	@media only screen and (max-width: 500px){
		margin-left: 4%;
	}
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

export const LinksDiv = styled.div`
	display: flex;
	justify-content: flex-end;
	width: 93%;
	padding-bottom: 30px;
	> a {
		margin-right: 2%;
	}
`
export const FlexDiv = styled.div`
	margin: 0 auto;
	max-width: 900px;
	padding-bottom: 50px;
	display:flex;
	justify-content: space-around;
	@media only screen and (max-width: 1180px){
		flex-direction: column;
	}
`

export const Intro = styled(StyledH2)`
	@media only screen and (max-width: 500px){
		margin-top: 60px;
		margin-bottom: 50px;
	}
`

export const CodePic = styled.div`
	display: flex;
	justify-content: center;

`

export const StyleDiv = styled.div`
	background-image: linear-gradient(45deg,#ffffff,#e4e2e2);
	padding-bottom: 70px;
	@media only screen and (max-width: 500px){
		padding-bottom: 30px;
	}
`

export const MeColor = styled.div`
	background-image: linear-gradient(45deg,#c1daff,#f4fafb);
	padding-bottom: 70px;
`

export const ContactDiv = styled.div`
	border-bottom-left-radius: 9px;
	border-bottom-right-radius: 9px;
`
export const Padding = styled.div`
	padding-bottom: 40px;
`

export const ColorDiv = styled.div`
	background-image: linear-gradient(45deg,#c1daff,#f4fafb);
	padding: 60px 0;
	> h2 {
		font-family: 'Roboto', sans-serif;
		text-align: center;
		font-size: 4rem;
	}
`