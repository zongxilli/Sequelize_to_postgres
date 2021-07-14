const Sequelize = require('sequelize');


module.exports = new Sequelize(
	'sequelize_to_postgreSQL_Database',
	'postgres',
	'li1104859021xi',
	{
		host: 'localhost',
		dialect: 'postgres',

		pool: {
			max: 5,
			min: 0,
			acquire: 30000,
			idle: 10000,
		},
	}
);
