const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const router = require('express').Router()

const User = require('../users/users_model')
const { JWT_SECRET } = require("../secrets/index")
const { checkPayload,
  checkUsernameFree,
  checkUsernameExists,
}= require('../middlewares/auth-middleware')


router.post('/register', checkUsernameFree, (req, res, next) => {

  const { username, password } = req.body
  const hash = bcrypt.hashSync(password, 8)
  User.addUser({ username, password: hash })
    .then(newUser => {
      res.status(201).json(newUser);
    })
    .catch(next);
})

router.post('/login', checkPayload, checkUsernameExists, (req, res, next) => {

  if (bcrypt.compareSync(req.body.password, req.user.password)) {
    const token = tokenBuilder(req.user);
    console.log(token)
    res.status(200).json({
      message: `Welcome ${req.user.username}`,
      token
    });
  } else {
    next({ status: 401, message: "Invalid username or password" })
  }
})

function tokenBuilder(user) {
  const payload = {
    subject: user.id,
    username: user.username,
  }
  const options = {
    expiresIn: '1d',
  }
  return jwt.sign(
    payload,
    JWT_SECRET,
    options
  )
}

module.exports = router
