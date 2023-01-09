const { Sequelize } = require("sequelize");
require("dotenv").config();

const settings = {
	host: "localhost",
	dialect: "postgres",
};

const sequelize = new Sequelize(
	process.env.DATABASE_NAME,
	process.env.DATABASE_USER,
	process.env.DATABASE_PASSWORD,
	settings
);

module.exports = sequelize;
