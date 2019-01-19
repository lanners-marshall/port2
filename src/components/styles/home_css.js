import styled from 'styled-components';

export const MeColor = styled.div`
	padding-bottom: 70px;
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

export const StyledH2M = styled(StyledH2)`
	margin: 0;
	padding: 50px 0;
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

export const Grey = styled.div`
	background-image: linear-gradient(45deg,#ffffff,#e4e2e2);
	padding-top: 30px;
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

export const CodePic = styled.div`
	display: flex;
	justify-content: center;
`

export const StyleDiv = styled.div`
	padding-bottom: 70px;
	border-bottom-left: solid black 1px;
	@media only screen and (max-width: 500px){
		padding-bottom: 30px;
	}
`
export const EducationDiv = styled(StoryDiv)`
`

export const ContactDiv = styled.div`
	background-color:rgb(33, 41, 49);
`

export const StyledC = styled(StyledH2)`
	margin-top: 0;
	padding-top: 80px;
	font-size: 5rem;
	color: #b8b5b5;
	margin-bottom: 0;
	font-family: 'Roboto',sans-serif;
	font-weight: bold;
`

export const LinksDiv = styled.div`
	display: flex;
	justify-content: center;
	padding-bottom: 50px;
	width: 93%;
	margin-left: 4.5%;
	> a {
		margin-right: 2%;
	}
`
