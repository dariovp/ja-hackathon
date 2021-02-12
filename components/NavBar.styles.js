import styled from 'styled-components';
import { colors } from '../styles/theme';
import { Navbar } from 'react-bootstrap';

export const StyledNavBar = styled(Navbar)`
	width: 100%;
	height: 10vh;
	padding: 0rem 1rem;
	background-color: ${colors.primary};
`;

export const NavBarList = styled.ul`
	list-style-type: none;
	margin: 0;
	padding: 0;
`;

export const NavBarItem = styled.li`
	margin: 0rem 0.3rem;
	display: inline;
`;

export const Button = styled.li`
	color: ${colors.primary};
`;

export const Text = styled.div`
	color: white;
`;