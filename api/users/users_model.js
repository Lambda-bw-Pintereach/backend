const db = require('../data/db-config')

function find() {
  return db("users as u")
  .select("id", "username", "password")
  .orderBy("id");
}

function findArticle() {
  return db("articles as a")
  .select("article_id", "title", "preview",
   "story", "category", "url")
  .orderBy("article_id");
}

function findBy(filter) {
  return db("users").where(filter)
  .orderBy("id")
}

function findArticleBy(filter) {
    return db("articles").where(filter)
    .orderBy("article_id")
  }

const addUser = (user) =>{
  return db("users").insert(user,["id", "username", "password"]);
}

const addArticle = (article) =>{
  return db("articles").insert(article,["article_id", "title", "preview",
  "story", "category", "url"]);
}

function findById(id) {
  return db("users as u")
    .select("id", "username", "password")
    .where("id", id)
    .first()
}

function findArticleById(id) {
    return db("articles as a")
      .select("article_id", "title", "preview", "story", "category", "url")
      .where("article_id", id)
      .first()
  }

module.exports = {
  find,
  findArticle,
  addUser,
  addArticle,
  findBy,
  findArticleBy,
  findById,
  findArticleById
}