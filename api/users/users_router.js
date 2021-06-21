const express = require('express')
const helpers = require('./users_model')

const User = require('../users/users_model')

const router = express.Router()

router.get('/users', (req, res, next) => {
  helpers.find()
    .then(users => {
      res.status(200).json(users)
    })
    .catch(next); 
});

router.get('/user/:id', (req, res, next) => {
  helpers.findById(res.params.id)
    .then(users => {
      res.status(200).json(users)
    })
    .catch(next); 
});

router.get('/articles', (req, res, next) => {
  helpers.findArticle()
    .then(article => {
      res.status(200).json(article)
    })
    .catch(next); 
});

router.get('/article/:id', (req, res, next) => {
    helpers.findById(res.params.article_id)
      .then(article => {
        res.status(200).json(article)
      })
      .catch(next); 
  });

router.post('/article', (req, res, next) => {

  const { title, preview, story, category, url } = req.body
  User.addArticle({ title, preview, story, category, url })
    .then(newArticle => {
      res.status(201).json(newArticle);
    })
    .catch(next);
})

module.exports = router
