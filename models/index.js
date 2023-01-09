const { Sequelize } = require("sequelize");

const settings = {
	host: "localhost",
	dialect: "postgres",
};

const sequelize = new Sequelize(
	"koa_tutorial",
	"db_user",
	"db_password",
	settings
);

module.exports = sequelize;
