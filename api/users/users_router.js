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

router.get('/user/:id', (req, res) => {
    const id = req.params.id 
    User.findById(id)
    .then(user => {
        res.json(user);
    })
    .catch(err => res.status(500).json({ 
        message: err.message, 
        stack: err.stack 
    }))
  });
  

router.get('/articles', (req, res, next) => {
  helpers.findArticle()
    .then(article => {
      res.status(200).json(article)
    })
    .catch(next); 
});

router.get('/article/:id', (req, res) => {
    const article_id = req.params.id 
    User.findArticleById(article_id)
    .then(article => {
        res.json(article);
    })
    .catch(err => res.status(500).json({ 
        message: err.message, 
        stack: err.stack 
    }))
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
