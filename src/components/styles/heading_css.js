import styled from 'styled-components';

export const Container = styled.div`
	color: white;
	font-family: 'Roboto', sans-serif;
	padding-top: 100px;
	margin: 0 auto;
	width: 90%;
	max-width: 600px;
	text-align: center;
	> h1 {
		font-size: 8rem;
		white-space: nowrap;
		@media (max-width: 670px){
			font-size: 4rem;
		}
	}
	> p {
		font-size: 4rem;
	}
`