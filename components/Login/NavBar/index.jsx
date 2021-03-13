import styled from 'styled-components';
import { colors } from 'styles/theme';

const Nav = styled.div`
	display: flex;
	justify-content: center;
	width: 100%;
	height: 8vh;
	padding: 0rem 1rem;
	align-items: center;
	background-color: ${colors.primary};
	font-family: 'Times New Roman', Times, serif
`;

export default function LoginNav () {	
	return (
		<Nav>
			Junior Achievement
		</Nav>
	);
}