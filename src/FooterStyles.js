import styled from 'styled-components';

export const Box = styled.div`
padding: 60px 60px;
background: white;
position: bottom;
bottom: 0;
width: %;


@media (max-width: 1000px) {
	padding: 0px 0px;
}
`;

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: bottom;
	max-width: 1000px;
	margin: 0 auto;
	/* background: red; */
`

export const Column = styled.div`
display: flex;
flex-direction: column;
text-align: left;
`;

export const Row = styled.div`
display: grid;
grid-template-columns: repeat(auto-fill,
						minmax(200px, 1fr));
grid-gap: 10px;

@media (max-width: 1000px) {
	grid-template-columns: repeat(auto-fill,
						minmax(200px, 1fr));
}
`;

export const FooterLink = styled.a`
color: #5790d4;
margin-bottom: 20px;
font-size: 13px;
text-decoration: none;
font-weight: bold;
white-space: nowrap;
margin-left: 10px;
&:hover {
	color: 5790d4;
	transition: 200ms ease-in;
}
`;

export const Heading = styled.p`
font-size: 14px;
color: #535861;
margin-bottom: 20px;
margin-left: 10px;
font-weight: bold;
`;
