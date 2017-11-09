const express = require('express');
const userRouter = require('express-promise-router')();


const userController = require('../controller/user');
const {validateBody, schemas} = require('../helpers/routehelpers')

userRouter.route('/signup')
  .post(validateBody(schemas.authSchema),userController.signUp, (req,res)=>{
    res.status(200).json({
      id: res.id,
      token: res.token})
  })

userRouter.route('/signin')
  .post(userController.signIn)

userRouter.route('/secret')
  .get(userController.secret)


module.exports = userRouter;
