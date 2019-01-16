import React, { Component } from 'react';
import Heading from './components/Heading'
import me from './components/images/me.jpg'
import dance from './components/images/dancing.jpg'
import map from './components/images/map.jpeg'
import college from './components/images/calpoly.jpg'
import resume from './components/images/resume.pdf'
import react from './components/images/react.png';
import node from './components/images/node.png';
import html from './components/images/html.png';
import css from './components/images/css.png';
import python from './components/images/python.png';
import './images.css'
import './vidoes.css'
import ReactContactForm from 'react-mail-form';
import { Container, Background, Footing, CodeDiv, TextBanner, StyledH2, StoryDiv, SkillsP, ProjectHr, SeparateDiv, ProjectH2, ContentP, Separator, Contact, SeparateContact, LinksDiv, DanceDiv, DndDiv, EducationDiv, Resume, ResumeDiv, FlexDiv, CodePic, StyleDiv, MeColor, StyledH2M, ContactDiv, StyledC, Padding, ColorDiv } from './app_css.js';
import github from './components/images/github.png';
import linkin from './components/images/link.png';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import './components/styles/custom.css';
import ScrollAnimation from 'react-animate-on-scroll';

class App extends Component {

  constructor(){
    super();
    this.state = {
      active: [true, false, false]
    };
  }

  makeActive = (index) => {
    this.setState({
      active: [false, false, false]
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
                <Tab onClick={() => {this.makeActive(2)}} className={this.state.active[2] ? 'selected': "sub-tab"}>About</Tab>
              </TabList>
            <TabPanel>
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
              <StyleDiv>
                <StyledH2M>Education</StyledH2M>
                <EducationDiv>
                  <div>
                    <p>I have a bachelors of Science in Business Administration from the Orfalea College of Business at California Polytechnic State University in San Luis Obispo California.<br /><br /></p>
                    <p>I studied a broad range of topics from accounting and marketings to human resources. My concentration was in management with a emphasis on managing technology and people.</p>
                    <br /><p> </p><br />
                  </div>
                  <img src={college} alt="cal poly" className="college" /> 
                </EducationDiv>
                </StyleDiv>
              <ContactDiv>
                <StyledC>Contact Me</StyledC>
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
              </ContactDiv>
            </TabPanel>
            <TabPanel>
              <ProjectHr/>
              <ColorDiv>
                <h2>My Projects</h2>
              </ColorDiv>
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
                <Padding>
                  <ProjectH2>Notes</ProjectH2>
                  <iframe title="notes" className='video' src="https://www.youtube.com/embed/65LNd5rFCaA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                  <ContentP>I made a note taking application with full crud functionality in React and Node. I also added a few extra additional features.
                    <br />Github links: <a href="https://github.com/lanners-marshall/Back_End_Project_Week">full application</a>
                  </ContentP><br />
                </Padding>
              </SeparateDiv>
            </TabPanel>
            <TabPanel>
              <ProjectHr/>
                <ColorDiv>
                  <h2>My Interests</h2>
                </ColorDiv>
              <ProjectHr/>
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
            </TabPanel>
          </Tabs>
        </Container>
        <Footing>
        </Footing>
      </Background>
    );
  }
}

export default App;


