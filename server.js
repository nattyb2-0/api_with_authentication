

const express = require('express'),
      logger = require('morgan'),
      bodyParser = require('body-parser'),
      port= process.env.PORT || 3000,
      // userRoute = require('./routes/user'),
      app = express();


app.use(logger('dev'));
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: false
}))

//routes
app.use('/user', require('./routes/user'))

app.listen(port, ()=>{
  console.log('port is now running on port',port)
})


