const express = require('express');
const userRouter = require('express-promise-router')


const userController = require('../controller/user');

userRouter.route('/signup')
  .post(userController.signUp)

userRouter.route('/signin')
  .post(userController.signIn)

userRouter.route('/secret')
  .get(userController.secret)


module.exports = userRouter;
