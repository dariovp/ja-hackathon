import { NavBarItem, NavBarList, StyledNavBar } from './NavBar.styles';


export default function NavBar () {

	return (
		<StyledNavBar className="navbar navbar-expand-lg navbar-dark bg-dark">
			<NavBarList>
				<NavBarItem>
					<button className="btn btn-light shadow-none">
						asdasd
					</button>
				</NavBarItem>
				<NavBarItem>
					<button className="btn btn-light">
						asdasd
					</button>
				</NavBarItem>
			</NavBarList>			
		</StyledNavBar>
	);
}