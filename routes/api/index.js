const router = require("express").Router();
const pageRoutes = require("./page");

router.use("/page", pageRoutes);

module.exports = router;
