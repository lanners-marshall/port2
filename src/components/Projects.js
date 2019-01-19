import React from 'react';
import {Section, Separator, Footing, Heading, ColorBottom} from './styles/projects_css.js';
import './styles/vidoes.css';

const Projects = () => {
	return (
		<div>
			<Heading/>
			<Section>
				<div>
					<iframe className='video' title='dungeon-helper' src="https://www.youtube.com/embed/9FWDO0611Zg" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
					<p>Encounter Generator. <br/><a href="https://dungeon-helper.com/" className="hvr-grow">Website</a>  <a href="https://github.com/lanners-marshall/dnd-encounter-generator" className="hvr-grow">Github</a></p>
				</div>
				<Separator/>
				<div>
					<iframe className="video" title="spotify app" src="https://www.youtube.com/embed/lkMOtWU6ptI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
					<p>Spotify App. <br/><a href="https://react-spotty.herokuapp.com/" className="hvr-grow">Website</a>  <a href="https://github.com/lanners-marshall/dnd-encounter-generator" className="hvr-grow">Github</a></p>
				</div>
			</Section>
			<Section>
				<div>
					<iframe className='video' title='Mud' src="https://www.youtube.com/embed/NbS8ljriXh4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
					<p>Multi User Dungeon <br/><a href="https://react-dungeon-89b7a.firebaseapp.com/" className="hvr-grow">Website</a>  <a href="https://github.com/lanners-marshall/LambdaMUD-Project" className="hvr-grow">Github</a></p>
				</div>
				<Separator/>
				<div>
					<iframe title="notes" className='video' src="https://www.youtube.com/embed/65LNd5rFCaA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
					<p>Note Taking App <br/><a href="https://github.com/lanners-marshall/Back_End_Project_Week" className="hvr-grow">Github</a></p>
				</div>
			</Section>
			<Footing/>
			<ColorBottom/>
		</div>
	)
}

export default Projects;