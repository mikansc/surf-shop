const User = require("../models/user");
const Post = require("../models/post");
const passport = require("passport");
const mapBoxToken = process.env.MAPBOX_TOKEN;

module.exports = {
  // GET /
  async landingPage(req, res, next) {
    const posts = await Post.find({});
    res.render("index", {
      posts,
      mapBoxToken,
      title: "Surf Shop - Home"
    });
  },

  // GET /register ROUTE
  async getRegister(req, res, next) {
    res.render("register", { title: "Surfshop - Register" });
  },

  // POST /register ROUTE
  async postRegister(req, res, next) {
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      image: req.body.image
    });

    let user = await User.register(newUser, req.body.password);
    req.login(user, function(err) {
      if (err) {
        return next(err);
      }
      req.session.success = `Welcome to Surf Shop, ${newUser.username}!`;
      res.redirect("/");
    });
  },

  // GET /login ROUTE
  async getLogin(req, res, next) {
    res.render("login", { title: "Surfshop - Login" });
  },

  // POST /login ROUTE
  postLogin(req, res, next) {
    passport.authenticate("local", {
      successRedirect: "/",
      failureRedirect: "/login"
    })(req, res, next);
  },

  // POST /logout ROUTE
  getLogout(req, res, next) {
    req.logout();
    res.redirect("/");
  }
};
