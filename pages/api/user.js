import db from '../../db/models/index';


export default async (req, res) => {
	try {

		// console.log(db)

		const { rc, email, mentor } = req.query

		await db.sync({ force: false })
		console.log("All models were synchronized successfully!")
		


		const mailgun = await require("mailgun-js");
		const DOMAIN = 'sandboxe11a6f67001b449f952d2fd83942a8cc.mailgun.org';
		const api_key = "c370be0328d373b278adf8748c4164a3-77751bfc-11ddc406";
		const mg = mailgun({apiKey: api_key, domain: DOMAIN});
		
		

		// res.status(200).send({name: "asdasd", email: "asdasdfsdsf"})

		if(!email || !mentor){
			return res.status(422).send({error: 'Missing one or more fields'})
		}

		if(email.match(/(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/)) {
			// check if email is in database
			const maybeuser = await db.User.findOne({
				where: {
					email: email
				}
			})

			// If a user was found...
			if (maybeuser) {
				// send back user so "front" shows id & points

				res.status(200).send(maybeuser) // senf obj or props? 
			} else {
				// Else, create user with that mail
				const user = await db.User.create({
					email: email,
					mentor : mentor,
				})
					.then(data => {
						console.log(data.dataValues)

						const mailData = {
							from: 'Hernan <hernanhernan559@gmail.com>',
							to: email,
							subject: 'Hello',
							html: '<form><input type="button" value="HOLA"></input></form>'
						};
						mg.messages().send(mailData, function (error, body) {
							console.log(body);
							console.log(error);
						});
						return data;
					})

				if (rc) {
					const user = await db.User.findOne({
						where: {
							id: rc
						}
					});

					user.points++; // calcs need to be done
					await user.save({ fields: ['points'] });
				}

				

				// Send email to validate account state

				// ....


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