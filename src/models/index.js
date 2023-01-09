const { Sequelize } = require("sequelize");
require("dotenv").config();

const { DATABASE_HOST, DATABASE_NAME, DATABASE_USER, DATABASE_PASSWORD } =
	process.env;

const settings = {
	host: DATABASE_HOST,
	dialect: "postgres",
};

const sequelize = new Sequelize(
	DATABASE_NAME,
	DATABASE_USER,
	DATABASE_PASSWORD,
	settings
);

module.exports = sequelize;
