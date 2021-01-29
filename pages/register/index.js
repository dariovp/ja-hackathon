import { Dropdown } from "react-bootstrap";

export default function Register () {

	return (
		<div className="vw-100 vh-100 d-flex justify-content-center align-items-center">
			<form className="border p-2">
				<div className="mb-3">
					<label for="exampleInputEmail1" className="form-label">Email address</label>
					<input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
				</div>
				<Dropdown>
					<Dropdown.Toggle variant="success" id="dropdown-basic">
						Dropdown Button
					</Dropdown.Toggle>

					<Dropdown.Menu>
						<Dropdown.Item href="#/action-1">Action</Dropdown.Item>
						<Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
						<Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
					</Dropdown.Menu>
				</Dropdown>
				<button type="submit" className="btn btn-primary">Submit</button>
			</form>
		</div>
	);
}