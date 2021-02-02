import Sequelize, { DATE } from 'sequelize';
import sha256 from 'crypto-js/sha256';

const db = new Sequelize('moonlanding', 'postgres', '12345678', {
  host: 'localhost',
    dialect: 'postgres',
    operatorsAliases: false,
    define: {
      timestamps: false
    },    
    logging:false,
  
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
});



const User = db.define('User', {
	userId: {
		type: Sequelize.STRING, // Tipo de dato.
		primaryKey: true, // Primary Key set.
		allowNull: true, // No nulleable.
	},
	email: {
		type: Sequelize.STRING,
		allowNull: false,
		unique: true,
	},
	mentor: {
	  type: Sequelize.BOOLEAN,
	  defaultValue: false,
	  allowNull: false,
	},
	points: {
		type: Sequelize.INTEGER,
		defaultValue: 0,
		allowNull: false,
	  }
});

db.sync({ force: false });


export default async (req, res) => {
    try {
		const { rc, email, mentor } = req.query

		let aux = await sha256(DATE.NOW);
		console.log(aux);

		// res.status(200).send({name: "asdasd", email: "asdasdfsdsf"})

        if(!email || !mentor){
            return res.status(422).send({error: ['Missing one or more fields']})
        }

		const user = await User.create({
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