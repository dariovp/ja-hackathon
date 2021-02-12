import { useState } from "react";
import { useRouter } from "next/router"
import { Button, Collapse } from "react-bootstrap";
import axios from "axios";

export default function Register(props) {

	const [email, setEmail] = useState('');
	const [open, setOpen] = useState(false);
	const router = useRouter();
	const { rc } = router.query;
	
	function handleSubmit(e) {
		e.preventDefault();
		axios.post(`https://www.moonyapp.site/api/user`, {email: email})
	}

	return (
		<div className="vw-100 vh-100 d-flex justify-content-center align-items-center">
			<form className="border p-5 shadow rounded w-50" onSubmit={handleSubmit}>
				
				<div className="form-floating mb-3">
					<input type="email" className="form-control" placeholder="Email Address" aria-label="Email Address" value={email}
						onChange={e => { 
							setEmail(e.target.value)
						}} />
					<label>Email address</label>
				</div>
				<div className="mb-3">
					<label htmlFor="dropdown" className="form-label p-2">¿Deseas enseñar o aprender?</label>
					<Button
						onClick={() => setOpen(!open)}
						aria-controls="example-collapse-text"
						aria-expanded={open}
						variant="outline-dark"
					>?</Button>
					<Collapse in={open}>
						<div className="card card-body">
							Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
							terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
							labore wes anderson cred nesciunt sapiente ea proident
						</div>
					</Collapse>
					<div className="form-check">
						<input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" defaultChecked  />
						<label className="form-check-label" htmlFor="flexRadioDefault1">
							Aprender
						</label>
					</div>
					<div className="form-check">
						<input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
						<label className="form-check-label" htmlFor="flexRadioDefault2">
							Enseñar
						</label>
					</div>

				</div>

				<button type="submit" className="btn btn-primary w-100">Submit</button>
			</form>
		</div>
	);
}

export async function getStaticProps() {
	console.log("ENV: ", process.env)
	return {
		props: {a :"a"}
	};
}
