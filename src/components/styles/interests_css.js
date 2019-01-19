import styled from 'styled-components';

export const DanceDiv = styled.div`
	display:flex;
	width: 93%;
	margin: 0 auto;
	font-family: 'Lato', sans-serif;
	font-size: 2.5rem;
	line-height: 1.5;
	margin-top: 30px;
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

export const DndDiv = styled.div`
	display:flex;
	width: 93%;
	margin: 0 auto;
	font-family: 'Lato', sans-serif;
	font-size: 2.5rem;
	line-height: 1.5;
	padding-bottom: 30px;
	@media only screen and (max-width: 1180px){
		padding-bottom: 15px;
	}
	@media (max-width: 500px){
		padding-bottom: 30px;
		flex-direction: column-reverse;
	}
`

export const Footing = styled.div`
	padding-bottom: 30px;
	@media (max-width: 500px){
		padding-bottom: 20px;
	}
`

export const ColorBottom = styled.div`
	padding-top: 50px;
	background-color: #212931;
	border-raidus: 7px;
`