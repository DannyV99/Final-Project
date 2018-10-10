const router = require("express").Router();
const pageController = require("../../controllers/pageController");
// console.log(pageController.findById());
router.route("/:id")
  .get(pageController.findAll)

module.exports = router;
