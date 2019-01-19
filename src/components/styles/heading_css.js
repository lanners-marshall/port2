import styled, { keyframes } from 'styled-components';

export const Glow = keyframes`
	to {
	    text-shadow: 0px 0px 50px blue;
	}
`

export const Container = styled.div`
	color: white;
	font-family: 'Roboto', sans-serif;
	padding-top: 100px;
	margin: 0 auto;
	width: 90%;
	max-width: 600px;
	padding-bottom: 40px;
	text-align: center;
	> h1 {
		font-size: 8rem;
		white-space: nowrap;
		animation: ${Glow} 2s infinite alternate;
		@media (max-width: 670px){
			font-size: 3rem;
		}
		font-family: 'Noto Sans', sans-serif;
		font-weight: bold;
	}
	> p {
		font-size: 5rem;
		animation: ${Glow} 2s infinite alternate;
		@media (max-width: 670px){
			font-size: 3rem;
		}
	}
`