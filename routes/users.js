var express = require("express");
var router = express.Router();

/* GET users profile. */
router.get("/", (req, res, next) => {
  res.send("respond with a resource");
});

/* GET users registration page. */
router.get("/register", (req, res, next) => {
  res.send("respond with a resource");
});

/* GET users listing. */
router.get("/", (req, res, next) => {
  res.send("respond with a resource");
});

module.exports = router;
