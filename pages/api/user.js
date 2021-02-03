import Sequelize, { DATE } from 'sequelize';
import sha256 from 'crypto-js/sha256';
import db from '../../db/models/index';


export default async (req, res) => {
    try {

		// console.log(db)

		const { rc, email, mentor } = req.query

		await db.sync({ force: true })
		console.log("All models were synchronized successfully!")
		

		console.log(sha256(Date.now()).toString())
		let aux = await sha256(Date.now()).toString();
		console.log("Aux ", aux);

		// res.status(200).send({name: "asdasd", email: "asdasdfsdsf"})

        if(!email || !mentor){
            return res.status(422).send({error: ['Missing one or more fields']})
        }

		const user = await db.User.create({
			email: email,
			id : aux,
			mentor : mentor,
		})
		.then(data => {
			console.log(data)
			return data;
		})

        res.status(200).json(user)

    } catch (error) {
         console.error(error);
        res.status(500).send({message: ["Error creating on the server"], error: error})
    }
}