const Router = require("koa-router");
const {
	getEvents,
	addEvent,
	findEvent,
	deleteEvent,
} = require("./controllers/events.controllers");
const router = new Router();

router.get("/events_list", getEvents);
router.post("/add_event", addEvent);
router.get("/find_event/:id", findEvent);
router.delete("/delete_event/:id", deleteEvent);

module.exports = router;
