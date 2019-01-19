import styled from 'styled-components';

export const Heading = styled.div`
	margin-top: 50px;
	@media (max-width: 500px){
		margin-top: 10px;
	}
`

export const Section = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	> div > p > a {
		color: black;
		@media (max-width: 1130px){
			margin-right: 1%;
		}
	}
	> div {
		@media (max-width: 1130px){
			width: 97%;
			max-width: 800px;
		}
	}
	> div > p {
		font-size: 2rem;
		margin-top: 15px;
		@media (max-width: 1130px){
			display: flex;
			justify-content: center;
		}
		@media (max-width: 500px){
			font-size: 1.6rem;
			margin-bottom: 0;	
		}
	}
	@media (max-width: 1130px){
		flex-direction: column;
	}
	@media only screen and (max-width: 800px){
		width: 95%;
		margin: 0 auto;
	}
`
export const Separator = styled.div`
	width: 4%;
	@media (max-width: 1130px){
		display: none;
	}
`

export const Footing = styled.div`
	padding-bottom: 70px;
	@media (max-width: 500px){
		padding-bottom: 20px;
	}
`