import React from 'react';
import resume from './images/resume.pdf';
import me from './images/me.jpg'
import ScrollAnimation from 'react-animate-on-scroll';
import react from './images/react.png';
import node from './images/node.png';
import html from './images/html.png';
import css from './images/css.png';
import python from './images/python.png';
import college from './images/calpoly.jpg'
import ReactContactForm from 'react-mail-form';
import github from './images/github.png';
import linkin from './images/link.png';
import { MeColor, StyledH2, StyledH2M, StoryDiv, ResumeDiv, Resume, Grey, FlexDiv, SkillsP, CodePic, StyleDiv, EducationDiv, ContactDiv, StyledC, LinksDiv } from './styles/home_css.js';

const Home = () => {
	return (
		<div>
			<MeColor>
        <StyledH2M>Introduction</StyledH2M>
        <StoryDiv>
          <div>
            <p>Hello I'm Marshall. I'm a full stack web developer. My strengths include
            JavaScript, React, Node, HTML, and CSS. I also really Love Python. I enjoy tickering
            around with new technologies and teaching myself new stacks.</p><br/>
            <ResumeDiv>
              <a href={resume} download><Resume>Download Resume</Resume></a>
            </ResumeDiv>
          </div>
          <img src={me} alt='Marshall Lanners Software Engineer' className='me' />
        </StoryDiv>
      </MeColor>
      <Grey>
        <StyledH2>Technical Training</StyledH2>
        <FlexDiv>
          <SkillsP>I joined Lambda School, a full time 8 month programming bootcamp, for their full stack web development program. A full syllabus can be viewed <a href="https://lambdaschool.com/courses/cs/web/">here</a>.</SkillsP>
            <CodePic>
              <ScrollAnimation animateIn='fadeInDown' animateOut="fadeOut" className="margin">
                <img src={react} alt="react" className='code-pic' />
              </ScrollAnimation>
              <ScrollAnimation animateIn='pulse' animateOut="fadeOut" className="margin">
                <img src={node} alt="node" className='code-pic' />
              </ScrollAnimation>
              <ScrollAnimation animateIn='pulse' animateOut="fadeOut" className="margin">
                <img src={html} alt="html" className='code-pic' />
              </ScrollAnimation>
              <ScrollAnimation animateIn='bounceIn' animateOut="fadeOut" className="margin">
                <img src={css} alt="css" className='code-pic' />
              </ScrollAnimation>
              <ScrollAnimation animateIn='fadeIn' animateOut="fadeOut" className="margin">
                <img src={python} alt="python" className='code-pic' />
              </ScrollAnimation>
            </CodePic>
        </FlexDiv>
      </Grey>
      <StyleDiv>
        <StyledH2M>Education</StyledH2M>
        <EducationDiv>
          <div>
            <p>I have a bachelors of Science in Business Administration from the Orfalea College of Business at California Polytechnic State University in San Luis Obispo California.<br /><br /></p>
            <p>I studied a broad range of topics from accounting and marketings to human resources. My concentration was in management with a emphasis on managing technology and people.</p>
          </div>
          <img src={college} alt="cal poly" className="college" /> 
        </EducationDiv>
      </StyleDiv>
      <ContactDiv>
        <StyledC>Contact Me</StyledC>
        <ReactContactForm to="lanners.marshall@gmail.com" className='form'/>
        <LinksDiv>
          <a href="https://github.com/lanners-marshall/"><img src={github} alt='github' className='github' /></a>
          <a href="https://www.linkedin.com/in/mlanners/"><img src={linkin} alt='linkin' className='linkin' /></a>
        </LinksDiv>
      </ContactDiv>
    </div>
	)
}

export default Home;