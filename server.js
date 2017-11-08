

const express = require('express'),
      logger = require('loggeer'),
      bodyParser = require('body-parser'),
      port= process.env.PORT || 3000,
      app = express();


app.use(morgan('dev'));
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: false
}))

//routes

app.listen(port, ()=>{
  console.log('port is now running on port',port)
})

