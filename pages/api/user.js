import Sequelize, { DATE } from 'sequelize';
import sha256 from 'crypto-js/sha256';
import db from '../../db/models/index';


export default async (req, res) => {
    try {

		// console.log(db)

		const { rc, email, mentor } = req.query

		await db.sync({ force: false })
		console.log("All models were synchronized successfully!")
		

		

		// res.status(200).send({name: "asdasd", email: "asdasdfsdsf"})

        if(!email || !mentor){
            return res.status(422).send({error: 'Missing one or more fields'})
        }

		if(email.match(/(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/)) {
			// check if email is in database
			const maybeuser = await db.User.findOne({
				where: {
					email: email
				}
			})

			// If a user was found...
			if (maybeuser) {
				// Tell the user that that mail was already registered
				res.status(200).send({ message: 'Mail already registered'})
			} else {
				// Else, create user with that mail
				const user = await db.User.create({
					email: email,
					mentor : mentor,
				})
				.then(data => {
					// console.log(data)
					return data;
				})

				// Send email to validate account state

				// ....


				// Another Endpoint?

				res.status(200).json(user)
			}

			
	
			
	
		} else {
			res.status(500).send({message: "Invalid email format"});
		}

		
    } catch (error) {
		console.error(error);
        res.status(500).send({message: "Error creating on the server", error: error})
    }
}