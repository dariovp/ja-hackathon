import { useState } from "react"; 
import { Button, Collapse } from "react-bootstrap";

export default function Register () {

	const [email, setEmail] = useState('');
	const [open, setOpen] = useState(false);

	return (
		<div className="vw-100 vh-100 d-flex justify-content-center align-items-center">
			<form className="border p-5 shadow rounded w-50" onSubmit={() => {
				//redirect y demas
			}}>
				<div className="form-floating mb-3">
					<input type="email" className="form-control" placeholder="Email Address" aria-label="Email Address" value={email}
					onChange={e => { 
						setEmail(e.target.value)
					}} />
					<label>Email address</label>
				</div>
				
				<button type="submit" className="btn btn-primary w-100">Submit</button>
			</form>
		</div>
	);
}