import React, { Component } from 'react';
import Heading from './components/Heading'
import './images.css'
import { Container, Background, Footing, CodeDiv, TextBanner } from './app_css.js';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import './components/styles/custom.css';
import Home from './components/Home';
import Projects from './components/Projects';
import Interests from './components/Interests';

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
                <Tab onClick={() => {this.makeActive(0)}} className={this.state.active[0] ? 'selected hvr-grow': "sub-tab hvr-grow"}>Home</Tab>
                <Tab onClick={() => {this.makeActive(1)}} className={this.state.active[1] ? 'selected hvr-grow': "sub-tab hvr-grow"}>Projects</Tab>
                <Tab onClick={() => {this.makeActive(2)}} className={this.state.active[2] ? 'selected hvr-grow': "sub-tab hvr-grow"}>About</Tab>
              </TabList>
            <TabPanel>
              <Home/>
            </TabPanel>
            <TabPanel>
              <Projects/>
            </TabPanel>
            <TabPanel>
              <Interests/>
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