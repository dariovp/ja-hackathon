import { StyledNavBar } from './NavBar.styles';


export default function NavBar ({ children }) {

	return (
		<StyledNavBar className="navbar navbar-expand-lg navbar-dark bg-dark">
			{ children }			
		</StyledNavBar>
	);
}