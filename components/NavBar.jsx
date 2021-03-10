import { useRouter } from 'next/router'
import { Button, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { NavBarItem, Text, StyledNavBar } from './NavBar.styles';


export default function NavBar() {

	const router = useRouter();

	return (
		<StyledNavBar>
			<Navbar.Brand className="text-light" href="#home">Moony</Navbar.Brand>
			<Navbar.Toggle aria-controls="basic-navbar-nav" />
			<Navbar.Collapse id="basic-navbar-nav" />
			<Navbar.Brand className="text-light" href="https://www.notion.so/Moony-tu-red-social-de-inversiones-f9b50aaee40b48f9834fe13fccb63a22">¿Quiénes somos?</Navbar.Brand>
		</StyledNavBar>
	);
}