const Events = require("../models/events.models");

const addEvent = async (ctx) => {
	try {
		await Events.create({ ...ctx.request.body });
		ctx.body = "Event Created!";
		ctx.status = 201;
	} catch (err) {
		ctx.status = 500;
		throw err;
	}
};

const findEvent = async (ctx) => {
	try {
		const event = await Events.findByPk(ctx.params.id);
		ctx.body = event;
		ctx.status = 200;
	} catch (err) {
		ctx.body = err;
		ctx.status = 500;
	}
};

const deleteEvent = async (ctx) => {
	try {
		await Events.destroy({
			where: {
				id: ctx.params.id,
			},
		});
		ctx.body = "Event Deleted";
		ctx.status = 202;
	} catch (err) {
		ctx.body = err;
		ctx.status = 500;
	}
};

const getEvents = async (ctx) => {
	try {
		const foundEvents = await Events.findAll();
		ctx.body = foundEvents;
		ctx.status = 200;
	} catch (err) {
		ctx.body = err;
		ctx.status = 500;
	}
};

module.exports = {
	getEvents,
	addEvent,
	findEvent,
	deleteEvent,
};
