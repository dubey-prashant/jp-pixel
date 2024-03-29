if (process.env.NODE_ENV !== 'production') require('dotenv').config()
const express = require('express')
// const mongoose = require('mongoose')
// const session = require('express-session')
// const MongoStore = require('connect-mongo')
// const flash = require('express-flash')
// const passport = require('passport')
const routes = require('./routes/routes')
// const authRoutes = require('./routes/authRoutes')
// require('./passportConfig')

const app = express()
app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({ extended: false }))// allow headers from url
app.use(express.json())// allow json headers

//mongoose connection start
// mongoose.connect(process.env.MONGO_DB_URL, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })
//   .then(() => {
//     app.listen(process.env.PORT, () => console.log(`running`))
//   }).catch(err => console.log(err))
//mongoose connection end

// if (process.env.NODE_ENV == 'production') {
//   // MongoSessionStore 

//   app.use(session({
//     secret: process.env.SESSION_SECRET,
//     resave: false,
//     saveUninitialized: true,
//     store: new MongoStore({
//       mongoUrl: process.env.MONGO_DB_URL,
//       dbName: 'userSessions',
//       mongoOptions: {
//         useNewUrlParser: true,
//         useUnifiedTopology: true,
//       },
//       ttl: 14 * 24 * 60 * 60,
//       autoRemove: 'native'
//     })
//   }))
// } else {
//   app.use(session({
//     secret: process.env.SESSION_SECRET,
//     resave: true,
//     saveUninitialized: true,
//     cookie: {
//       maxAge: 5 * 60 * 60 * 1000,    //  5 hours in milliseconds
//     }
//   }))
// }

app.listen(3200, () => console.log(`running`))


// app.use(passport.initialize())
// app.use(passport.session())
// app.use(flash())
// app.use("/auth", authRoutes)
app.use(routes)
