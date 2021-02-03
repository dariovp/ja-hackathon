import Sequelize from 'sequelize';

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
		type: Sequelize.INTEGER, // Tipo de dato.
		autoIncrement: true,     // ID autoincremental.
		primaryKey: true,        // Primary Key set.
		allowNull: false         // No nulleable.
	},
	name: {
		type: Sequelize.STRING,
		defaultValue: '',
		allowNull: false 
	},
	email: {
		type: Sequelize.STRING,
		defaultValue: '',
		allowNull: false 
	},
});

db.sync();


export default async (req, res) => {
    try {
		const { name, email } = req.query
		console.log(req.query);

		// res.status(200).send({name: "asdasd", email: "asdasdfsdsf"})

        if(!name || !email){
            return res.status(422).send({error: ['Missing one or more fields']})
        }

		const user = await User.create(req.query)
		.then(data => {
			console.log(data)
			return data;
		})

        res.status(200).json(user)

    } catch (error) {
        // console.error(error);
        res.status(500).send({message: ["Error creating on the server"], error: error})
    }
}