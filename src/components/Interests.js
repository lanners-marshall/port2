import React from 'react';
import dance from './images/dancing.jpg'
import map from './images/map.jpeg'
import {DndDiv, DanceDiv, Footing, ColorBottom} from './styles/interests_css.js';

const Interests = () => {
	return (
		<div>
			<DanceDiv>
        <img src={dance} alt='Marshall Lanners dancing' className='dance' />
        <div>
          <p>In my free time I love to go out dancing. I have been doing partner dancing for over 14 years. 
          I enjoy all swing dances, salsa, tango, country, ballroom, you name it. I have done countless dance competitions and have a number of awards that I keep on top of my dresser. </p>
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
      <Footing/>
      <ColorBottom/>
		</div>
	)
}

export default Interests;
