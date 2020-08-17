const router = require("express").Router();
const handlers = require("./dashboards.handlers");

router.get("/", handlers.getDashboards);

router.get("/add", handlers.addDashboard)



module.exports = router;