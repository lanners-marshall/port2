import styled from 'styled-components';

export const Heading = styled.div`
	margin-top: 50px;
`

export const Section = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	> div > p > a {
		color: black;
		border-radius: 3px;
		@media (max-width: 1130px){
			margin-right: 1%;
		}
	}
	> div > p > a:hover {
		color: #212931;
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
			margin-bottom: 40px;	
		}
	}
	@media (max-width: 1130px){
		flex-direction: column;
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
		padding: 0;
	}
`