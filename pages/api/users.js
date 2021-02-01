const pgp = require('pg-promise')({
    noWarnings: true
})

const db = pgp(`postgres://postgres:12345678@localhost:5432/moonlanding`);


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