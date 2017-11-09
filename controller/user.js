const JWT = require('jsonwebtoken')
const database = require('../db/dbconnection')

const signToken = (user)=>{
  return JWT.sign({
        iss: 'api_with_auth',
        sub: user,
        iat: new Date().getTime(),
        exp: new Date().setDate(new Date().getDate()+1)
        },process.env.SECRET)
}

module.exports = {
  signUp:  (req,res,next)=>{
    // console.log('req.value.body', req.value.body)
    // console.log('req.body', req.body)
    // console.log('sign up')
    // const user = database.one(`select * from users where email = $1;`,[req.value.body.email]);
    // console.log(user)
    // next()
//     .then((user)=>{
//       if(!user){
//         database.one(`insert into users(email,password) values ($1,$2) returning ID;`,[req.value.body.email, req.value.body.password])
//           .then((queryresult)=>{
//             res.id = queryresult;
//             next()
//       })
//       } else {
//          res.status(401).send('user already exist');
//         next()
//     }


//       })
// .catch(err=>next(err))
    // },

    database.one(`insert into users(email,password) values ($1,$2) returning ID;`,[req.value.body.email, req.value.body.password])
    .then((queryresult)=>{
      // const token = JWT.sign({
      //   iss: 'api_with_auth',
      //   sub: queryresult,
      //   iat: new Date().getTime(),
      //   exp: new Date().setDate(new Date().getDate()+1)
      //   },process.env.SECRET)
      const token = signToken(queryresult);
      res.id = queryresult
      res.token = token
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
