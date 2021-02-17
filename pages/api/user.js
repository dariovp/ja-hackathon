import db from '../../db/models/index';

export default async (req, res) => {
	try {

		// console.log(db)

		const { rc, mentor, all } = req.query

		let user;

		//console.log(req.body)

		await db.sync({ force: true })
		console.log("All models were synchronized successfully!")

		//console.log("asdasd", req.body)


		if (all) {

			let test = await db.User.findAll();
			return res.send(test)

		}

		if (req.body.rc) {
			user = await db.User.findOne({
				where: {
					id: req.body.rc
				}
			});

			user.points+=5; // calcs need to be done
			user.ref+=1;
			await user.save({ fields: ['points','ref']});
		}


		// res.status(200).send({name: "asdasd", email: "asdasdfsdsf"})

		/*if(!req.body.email ){
			return res.status(422).send({error: 'Missing one or more fields'})
		}*/
		let email = req.body.email;
		let name = req.body.firstName;

		if (email != undefined && email.match(/(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/)) {

			// check if email is in database
			let maybeuser = await db.User.findOne({
				where: {
					email: req.body.email,
				}
			})

			// If a user was found...
			if (maybeuser) {
				// send back user so "front" shows id & points

				res.status(200).send(maybeuser) // senf obj or props? 
			} else {
				// Else, create user with that mail
				await db.User.create({
					email: req.body.email,
					firstName: req.body.firstName,
				})
				.then(data => {
					// Then, send mail to user in order to verify 
					user = data.dataValues;
					console.log(data.dataValues)
				});

				// Send email to validate account state

				// ....

				res.status(200).json(user)
			}




		} else {
			if (req.body.all) {

				let test = await db.User.findAll()
				.then(data => {
					console.log(data.dataValues)
				});

				res.status(200).send(test)

			}


			res.status(500).send({ message: "Invalid email format" });
		}


	} catch (error) {
		console.error(error);
		res.status(500).send({ message: "Error creating on the server", error: error })
	}
}