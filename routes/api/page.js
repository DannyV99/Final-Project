const router = require("express").Router();
const pageController = require("../../controllers/pageController");

router.route("/")
  .get(pageController.findById)

module.exports = router;
