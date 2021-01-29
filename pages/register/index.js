import { useState } from "react";
import { Dropdown } from "react-bootstrap";
// import {Collapse} from 'bootstrap/dist/js/bootstrap.esm'

export default function Register () {

	const [email, setEmail] = useState('');

	return (
		<div className="vw-100 vh-100 d-flex justify-content-center align-items-center">
			<form className="border p-5 shadow rounded" onSubmit={() => {
				//redirect y demas
			}}>
				<div className="form-floating mb-3">
					<input type="email" className="form-control" placeholder="Email Address" aria-label="Email Address" value={email}
					onChange={e => { 
						setEmail(e.target.value)
					}} />
					<label>Email address</label>
				</div>

				<div className="mb-3">
					<label htmlFor="dropdown" className="form-label p-2">¿Deseas enseñar o aprender?</label>
					<button type="button" class="btn btn-outline-dark" 
						data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample"
					>?</button>
					<div class="collapse" id="collapseExample">
						<p class="">
							Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
						</p>
					</div>

					<div class="form-check">
						<input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" defaultChecked />
						<label class="form-check-label" htmlFor="flexRadioDefault1">
							Aprender
						</label>
						</div>
					<div class="form-check">
						<input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
						<label class="form-check-label" htmlFor="flexRadioDefault2">
							Enseñar
						</label>
					</div>

				</div>
				
				<button type="submit" className="btn btn-primary w-100">Submit</button>
			</form>
		</div>
	);
}