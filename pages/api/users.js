const pgp = require('pg-promise')();

// Get the values for these variables from configuration
const user = "postgres"
const password = 12345678
const host = "localhost"
const port = 5432
const database = "moonlanding"

const db = pgp(`postgres://${user}:${password}@${host}:${port}/${database}`)

module.exports = async (req, res) => {
    try {
		const { name, email } = req.query
		console.log(req.query);

		// res.status(200).send({name: "asdasd", email: "asdasdfsdsf"})

        if(!name || !email){
            return res.status(422).send({error: ['Missing one or more fields']})
        }

        const user = await db.one('INSERT INTO User(name, email) VALUES($1, $2) RETURNING *', [name, email])

        res.status(200).json(user)

    } catch (error) {
        // console.error(error);
        res.status(500).send({message: ["Error creating on the server"], error: error})
    }
}