const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const { pool } = require('./config')
const authjwt = require('./middleware')
var jwt = require('jsonwebtoken');  
var bcrypt = require('bcryptjs');

//token auth
global.jwt = jwt
global.bcrypt = bcrypt
global.authjwt = authjwt

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())

global.pool = pool

const features = require('./routes/features')


app.get('/get_foods_fact', features.getfoods_fact)
app.get('/searchfood',features.searchfood)
app.get('/detailfood',features.detailfood)


app.get('/getfoods_fact_dev',features.getfoods_fact_dev)

// Start server
app.listen(process.env.PORT || 5002, () => {
  console.log(`Server listening`)
})

