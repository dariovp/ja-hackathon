import styled from 'styled-components';
import { colors } from '../styles/theme';

export const StyledNavBar = styled.nav`
	width: 100%;
	height: 10vh;
	padding: 2rem;
	background-color: ${colors.primary};
	display: flex;
	justify-content: flex-start;
	align-items: center;
`;