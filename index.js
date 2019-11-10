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

const admin = require('./routes/admin')
const login = require('./routes/login')
const users = require('./routes/users')
const features = require('./routes/features')

//Admin
app.get('/api/admin/insertDriver',authjwt,admin.insertDriver) //tested
app.get('/api/admin/updateStatusDriver',authjwt,admin.updateStatusDriver) // tested
app.get('/api/admin/getorder',authjwt,admin.getorder)
app.post('/api/admin/approveOrder',authjwt,admin.approveOrder)

app.get('/api/admin/cancelOrder', authjwt,admin.cancelOrder)


app.get('/api/admin/getwaitinglist_order/getlivetracking',authjwt,admin.getlivetracking)

//login signup
app.post('/api/signup',login.signup) // tested
app.post('/api/login',login.login) // tested
app.get('/api/user_approval',authjwt,login.user_approval) // tested


//features
app.get('/api/all/getdriverlist',authjwt, features.driverlist)


app.get('/api/all/getwaitinglist_order',authjwt,features.getwaitinglist_order)
app.get('/api/all/gethistoryorder',authjwt,features.gethistoryorder)

// //User
app.post('/api/user/neworder',users.insertneworder)



app.get('/get_foods_fact', features.getfoods_fact)

//"nodemon": "^1.19.3"







// const getBooks = (request, response) => {
//   pool.query('SELECT * FROM books', (error, results) => {
//     if (error) {
//       throw error
//     }
//     response.status(200).json(results.rows)
//   })
// }

// const addBook = (request, response) => {
//   const { author, title } = request.body

//   pool.query('INSERT INTO books (author, title) VALUES ($1, $2)', [author, title], error => {
//     if (error) {
//       throw error
//     }
//     response.status(201).json({ status: 'success', message: 'Book added.' })
//   })
// }

// app
//   .route('/books')
//   // GET endpoint
//   .get(getBooks)
//   // POST endpoint
//   .post(addBook)

// Start server
app.listen(process.env.PORT || 5002, () => {
  console.log(`Server listening`)
})