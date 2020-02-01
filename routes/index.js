const express = require("express");
const router = express.Router();

/* GET home page. */
router.get("/", (req, res, next) => {
  res.render("index", { title: "Surf Shop - Home" });
});

/* GET /register */
router.get("/register", (req, res, next) => {
  res.send("home");
});

/* POST /register */
router.post("/register", (req, res, next) => {
  res.send("Post /register");
});

/* GET /login */
router.get("/login", (req, res, next) => {
  res.send("Get /login");
});

/* POST /login */
router.post("/login", (req, res, next) => {
  res.send("Post /login");
});

/* GET /profile */
router.get("/profile", (req, res, next) => {
  res.send("GET /profile");
});

/* PUT /profile/:user_id */
router.put("/profile/:user_id", (req, res, next) => {
  res.send("Put /profile/:user_id");
});

/* GET /forgot */
router.get("/forgot", (req, res, next) => {
  res.send("GET /forgot");
});

/* PUT /forgot */
router.put("/forgot", (req, res, next) => {
  res.send("PUT /forgot");
});

/* GET /reset */
router.get("/reset/:token", (req, res, next) => {
  res.send("GET /reset/:token");
});

/* PUT /reset */
router.put("/reset/:token", (req, res, next) => {
  res.send("PUT /reset/:token");
});

module.exports = router;
