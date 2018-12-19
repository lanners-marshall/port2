import React, { Component } from 'react';
import Heading from './components/Heading'
import me from './components/images/me.jpeg'
import './images.css'
import './vidoes.css'
import ReactContactForm from 'react-mail-form';
import { Container, Background, Footing, CodeDiv, TextBanner, StyledH2, StoryDiv, Skills, SkillsP, ProjectHr, Green, SeparateDiv, ProjectH2, ContentP, Separator, Contact, ContactDiv, ContactSeparator, SeparateContact, LinksDiv } from './app_css.js';
import github from './components/images/github.png';
import linkin from './components/images/link.png';



class App extends Component {
  render() {
    return (
      <Background>

        <Heading>
        </Heading>

        <Container>

          <CodeDiv>
          <TextBanner>
            <p>Lambda School Full Stack Web</p>
          </TextBanner>
          </CodeDiv>

          <StyledH2>My Story</StyledH2>
          <StoryDiv>
            <div>
              <p>I hold a bachelors of Science in Business Administration and have over 
              7 years of customer service experience where I have won many customer service awards. 
              Before attending Lambda school I was Senior on Site Service Associate at Rico Amazon 
              in downtown Seattle.</p><br />

              <p>I have been playing around with writing code for roughly 5 years now.
              I have taken a few community college classes in JavaScript, C#, Java 
              and have put in some effort into learning Ruby and Ruby on Rails in 
              my spare time. The main reason I'm switching careers is because I think coding is fun.
              I really enjoy writing programs, trying to figure out problems, learning new facts, 
              and trying to challenge myself. I decided to take 
              my part time hobby and turn it into a career.</p>
            </div>
            <img src={me} alt='Marshall Lanners Software Engineer' className='me' />
          </StoryDiv>
          <StyledH2>Technical Training</StyledH2>
          <SkillsP>I joined<a href="https://lambdaschool.com/"> Lambda School</a>, a full time 6 month programming bootcamp, for their full stack web development program. While the main bulk of my studies involved around <Green>React</Green> and <Green>Node</Green> other technologies covered in the program include:</SkillsP>
          <Skills>
            <ol>
              <li>HTML</li>
              <li>CSS</li>
              <li>LESS</li>
              <li>SQL</li>
              <li>Javascript</li>
            </ol>
            <ol>
              <li>Git</li>
              <li>Responsive Design</li>
              <li>Python</li>
              <li>Django</li>
              <li>C</li>
            </ol>
          </Skills>
          <StyledH2>My Projects</StyledH2>
          <ProjectHr/>
          <SeparateDiv>
            <div>
              <ProjectH2>Multi User Dungeon</ProjectH2>
              <iframe className='video' title='Mud' src="https://www.youtube.com/embed/NbS8ljriXh4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              <ContentP>I made a text based adventure page in React and Django that allows you 
              to play and communicate with other people as you play.<br />
              Github Links: 
              <a href="https://github.com/lanners-marshall/LambdaMUD-Client"> front-end</a>,   
              <a href="https://github.com/lanners-marshall/LambdaMUD-Project"> back-end</a>
              </ContentP>
            </div>
            <Separator/>
            <div>
              <ProjectH2>Notes</ProjectH2>
              <iframe title="notes" className='video' src="https://www.youtube.com/embed/65LNd5rFCaA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              <ContentP>I made a note taking application with full crud functionality in React and Node. I also added a few extra additional features.
                <br />Github links: <a href="https://github.com/lanners-marshall/Back_End_Project_Week">full application</a>
              </ContentP><br />
            </div>
          </SeparateDiv>
          <ProjectHr/>
          <StyledH2>Contact Me</StyledH2>
          <SeparateContact>
              <ReactContactForm to="lanners.marshall@gmail.com" className='form'/>
            <Contact>
              <p>Contact</p>
              <p>Seattle, Wa</p>
              <p>lanners.marshall@gmail.com</p>
              <p>206-475-7021</p>
            </Contact>
          </SeparateContact>
          <LinksDiv>
            <a href="https://github.com/lanners-marshall/"><img src={github} alt='github' className='github' /></a>
            <a href="https://www.linkedin.com/in/mlanners/"><img src={linkin} alt='linkin' className='linkin' /></a>
          </LinksDiv>
        </Container>


        <Footing>
        </Footing>
      </Background>
    );
  }
}

export default App;