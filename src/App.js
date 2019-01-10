import React, { Component } from 'react';
import Heading from './components/Heading'
import me from './components/images/me.jpg'
import dance from './components/images/dancing.jpg'
import map from './components/images/map.jpeg'
import college from './components/images/calpoly.jpg'
import resume from './components/images/resume.pdf'
import './images.css'
import './vidoes.css'
import ReactContactForm from 'react-mail-form';
import { Container, Background, Footing, CodeDiv, TextBanner, StyledH2, StoryDiv, Skills, SkillsP, ProjectHr, Green, SeparateDiv, ProjectH2, ContentP, Separator, Contact, SeparateContact, LinksDiv, DanceDiv, DndDiv, EducationDiv, Resume, ResumeDiv, StyledH2Ed } from './app_css.js';
import github from './components/images/github.png';
import linkin from './components/images/link.png';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import './components/styles/custom.css';


class App extends Component {

  constructor(){
    super();
    this.state = {
      active: [true, false, false, false]
    };
  }

  makeActive = (index) => {
    this.setState({
      active: [false, false, false, false]
    }, () => {
      let active = this.state.active
      for (let i in active){
        if (parseInt(i) === index){
          active[i] = !active[i]
        }
      }
      this.setState({
        active: active
      })
    })
  }


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
           <Tabs>
            <TabList className="tab-list">
              <Tab onClick={() => {this.makeActive(0)}} className={this.state.active[0] ? 'selected': "sub-tab"}>Home</Tab>
              <Tab onClick={() => {this.makeActive(1)}} className={this.state.active[1] ? 'selected': "sub-tab"}>Projects</Tab>
              <Tab onClick={() => {this.makeActive(2)}} className={this.state.active[2] ? 'selected': "sub-tab"}>Contact</Tab>
              <Tab onClick={() => {this.makeActive(3)}} className={this.state.active[3] ? 'selected': "sub-tab"}>About</Tab>
            </TabList>
            <TabPanel>
              <StyledH2>My Story</StyledH2>
              <StoryDiv>
                <div>
                  <p> I have been playing around with writing code for roughly 5 years now.
                  I have taken a few community college classes in JavaScript, C#, Java 
                  and have put in some effort into learning Ruby and Ruby on Rails in 
                  my spare time. The main reason I'm switching careers is because I think coding is fun.
                  I really enjoy writing programs, trying to figure out problems, learning new facts, 
                  and trying to challenge myself. I decided to take 
                  my part time hobby and turn it into a career.</p><br/>
                  <ResumeDiv>
                    <a href={resume} download><Resume>Download Resume</Resume></a>
                  </ResumeDiv>
                </div>
                <img src={me} alt='Marshall Lanners Software Engineer' className='me' />
              </StoryDiv>
              <StyledH2>Technical Training</StyledH2>
              <SkillsP>I joined<a href="https://lambdaschool.com/"> Lambda School</a>, a full time 8 month programming bootcamp, for their full stack web development program. While the main bulk of my studies involved around <Green>React</Green> and <Green>Node</Green> other technologies covered in the program include:</SkillsP>
              <Skills>
                <ul>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>LESS</li>
                  <li>SQL</li>
                  <li>Javascript</li>
                </ul>
                <ul>
                  <li>Git</li>
                  <li>Responsive Design</li>
                  <li>Python</li>
                  <li>Django</li>
                  <li>C</li>
                </ul>
              </Skills>
              <StyledH2Ed>Education</StyledH2Ed>
              <EducationDiv>
                <div>
                  <p>I have a bachelors of Science in Business Administration and with a concentration in managing technology and people. 
                  I graduated from the Orfalea College of business at California Polytechnic State University in San Luis Obispo California.</p> 
                  <br /><p>I studied business because I found it really interesting to have a better understanding of how the world works. 
                  The schools Moto was “learning by doing” and would put a huge emphasis on team projects. </p><br />
                </div>
                <img src={college} alt="cal poly" className="college" /> 
              </EducationDiv>
            </TabPanel>
            <TabPanel>
              <StyledH2>My Projects</StyledH2>
              <ProjectHr/>
              <SeparateDiv>
                <div>
                  <ProjectH2>Encounter Generator</ProjectH2>
                  <iframe  className='video' title='dungeon-helper' src="https://www.youtube.com/embed/9FWDO0611Zg" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                  <ContentP>
                    I lead a team in making this React project during the Winter 2019 Lambda School Hackathon. This is an encounter generator for dungeons and dragons 5th edition, so that dungeon masters can quickly set up encounters for their players.<br />
                    Github Link:
                    <a href="https://github.com/lanners-marshall/dnd-encounter-generator"> full application </a><br />
                    Website Link:
                    <a href="https://dungeon-helper.com/"> Here</a>
                  </ContentP>
                </div>
                <Separator/>
                <div>
                  <ProjectH2>Spotify Application</ProjectH2>
                  <iframe className="video" title="spotify app" src="https://www.youtube.com/embed/lkMOtWU6ptI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                  <ContentP>
                    I made a React app that interacts with the Spotify api. This app streamlines the process for building playlists with your Spotify account while also allowing you to look up music and play different songs. You are allowed to look up music by artist, album, or song.<br />
                    Github link:
                    <a href="https://github.com/lanners-marshall/spotty">full application</a>
                  </ContentP>
                </div>
              </SeparateDiv>
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
            </TabPanel>
            <TabPanel>
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
            </TabPanel>
            <TabPanel>
            <StyledH2>My Interests</StyledH2>
              <DanceDiv>
                <img src={dance} alt='Marshall Lanners dancing' className='dance' />
                <div>
                  <p>In my free time I love to go out dancing. I have been doing partner dancing for over 14 years. 
                  I enjoy all swing dances, salsa, tango, country, ballroom, you name it. I have done countless dance competitions and have a number of awards that I keep on top of my dresser. </p><br/>
                  <p>I really enjoy going out, interacting with others socialy, and being physicaly active. There is nothing like a good night on the town.</p> 
                </div>
              </DanceDiv>
              <DndDiv>
                <div>
                  <p>When I'm not out dancing, I love playing Dungeons and Dragons. I have been playing for years and enjoy hosting games for friends.
                  Though when I do run games I normaly go all out and make all kinds of props, custom sound tracks on Syrinscape, maps, and I provide candles for lighting. When given the oportunity, I always make sure to go full nerd. </p>
                  <br />
                  <p>
                    Whenever I'm coding a pet project for fun, It's almost always a tool for DnD such as helping generate characters, to building encounters.
                  </p>
                </div>
                <img src={map} alt='Marshall Lanners dancing' className='map' />
              </DndDiv>
            </TabPanel>>
          </Tabs>
        </Container>
        <Footing>
        </Footing>
      </Background>
    );
  }
}

export default App;