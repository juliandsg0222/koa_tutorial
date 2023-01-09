const { Sequelize } = require("sequelize");
require("dotenv").config();

const settings = {
	host: "localhost",
	dialect: "postgres",
};

const { DATABASE_NAME, DATABASE_USER, DATABASE_PASSWORD } = process.env;

const sequelize = new Sequelize(
	DATABASE_NAME,
	DATABASE_USER,
	DATABASE_PASSWORD,
	settings
);

module.exports = sequelize;
