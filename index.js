const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const { pool } = require('./config')
const authjwt = require('./middleware')
// var jwt = require('jsonwebtoken');  
var bcrypt = require('bcryptjs');

//token auth
// global.jwt = jwt
global.bcrypt = bcrypt
// global.authjwt = authjwt

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())

global.pool = pool

const admin = require('./routes/admin')
const login = require('./routes/login')

// app.get('/api/admin/getdriverlist',authjwt, admin.driverlist)
// app.get('/api/admin/getwaitinglist_order',authjwt,admin.getwaitinglist_order)
// app.get('/api/admin/getwaitinglist_order/gethistoryorder',authjwt,admin.gethistoryorder)
// app.get('/api/admin/getwaitinglist_order/getlivetracking',authjwt,admin.getlivetracking)


app.post('/api/signup',login.signup)
app.post('/api/login',login.login)










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
app.listen(process.env.PORT || 3002, () => {
  console.log(`Server listening`)
})