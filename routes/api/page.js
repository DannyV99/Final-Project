const router = require("express").Router();
const booksController = require("../../controllers/pageController");

router.route("/")
  .get(pageController.findAll)

router
  .route("/:id")
  .get(pageController.findById)

module.exports = router;
