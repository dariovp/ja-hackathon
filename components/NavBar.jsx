import { useRouter } from 'next/router'
import { NavBarItem, Text, StyledNavBar } from './NavBar.styles';


export default function NavBar () {

	const router = useRouter();

	return (
		<StyledNavBar className="navbar navbar-expand-lg navbar-dark" >
			<div className="container-fluid">
    <a className="navbar-brand" href="#">Moony</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">About</a>
        </li>

      </ul>
		{/* <Text className="me-4">
			Launch Date: {
				duration &&
				`${duration['_data']['months']} m ${duration['_data']['days']} d ${duration['_data']['hours']} hrs ${duration['_data']['minutes']} min ${duration['_data']['seconds']} sec`
			}
		</Text> */}
        <button className="btn btn-light me-2" onClick={() => { router.push("/register") }}>Launch</button>
    </div>
  </div>	
		</StyledNavBar>
	);
}