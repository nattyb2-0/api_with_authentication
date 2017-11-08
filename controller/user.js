const database = require('../db/dbconnection')

module.exports = {
  signUp: (req,res,next)=>{
    // console.log('req.value.body', req.value.body)
    // console.log('req.body', req.body)
    // console.log('sign up')
    database.one(`insert into users(email,password) values ($1,$2) returning ID;`,[req.value.body.email, req.value.body.password])
    .then((queryresult)=>{
      res.id = queryresult
      next()
    })
    .catch(err=>next(err))
  },
  signIn: (req,res,next)=>{
    console.log('sign in')
  },
  secret: (req,res,next)=>{
    console.log('secret')
  }
}
