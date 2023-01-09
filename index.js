const Koa = require("koa");
const parser = require("koa-bodyparser");
const cors = require("@koa/cors");
const router = require("./src/router");
require("dotenv").config();

const App = new Koa();
const { PORT } = process.env;

App.use(parser())
	.use(cors())
	.use(router.routes())
	.listen(PORT, () => {
		console.log(`🚀 Server listening http://127.0.0.1:${PORT}/ 🚀`);
	});
