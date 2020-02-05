const Post = require("../models/post");

module.exports = {
  // POST Index
  async postIndex(req, res, nex) {
    let posts = await Post.find({});
    res.render("posts/index", { posts });
  },

  // POST new
  postNew(req, res, nex) {
    res.render("posts/new");
  },

  // POST Create
  async postCreate(req, res, nex) {
    let post = await Post.create(req.body.post);
    res.redirect(`/posts/${post.id}`);
  },

  // POST Show
  async postShow(req, res, next) {
    let post = await Post.findById(req.params.id);
    res.render("posts/show", { post });
  },

  //POST edit
  async postEdit(req, res, next) {
    let post = await Post.findById(req.params.id);
    res.render("posts/edit", { post });
  },

  //POST update
  async postUpdate(req, res, next) {
    let post = await Post.findByIdAndUpdate(req.params.id, req.body.post);
    res.redirect(`/posts/${post.id}`);
  },

  //POST destroy
  async postDestroy(req, res, next) {
    await Post.findByIdAndDelete(req.params.id);
    res.redirect("/posts");
  }
};
