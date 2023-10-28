// const passport = require('passport')
// const LocalStrategy = require('passport-local').Strategy
// const GoogleStrategy = require('passport-google-oauth20').Strategy
// const FacebookStrategy = require('passport-facebook').Strategy
// const bcrypt = require('bcrypt')
// const User = require('./models/User')

// // Local Strategy Start
// // loca register start 
// passport.use('local-register', new LocalStrategy(
//   {
//     usernameField: 'email',
//     passwordField: 'pass',
//     passReqToCallback: true
//   },
//   (req, email, pass, done) => {
//     User.findOne({ email: email }, (err, user) => {
//       if (err) return done(err)

//       if (user) return done(null, false, { message: 'User already exists with this email. Try logging in.' })

//       if (!user) {
//         console.log('creating user')
//         bcrypt.hash(pass, 10, (error, hashPass) => {
//           if (error) return done(error)
//           if (hashPass) {
//             User.create({
//               name: req.body.name,
//               email: email,
//               pass: hashPass,
//               profileImg: 'https://drive.google.com/thumbnail?id=1uaoCzXz3avyyBB2klbl1oSAKbZwmaHvh'
//             })
//               .then(newuser => {
//                 console.log('created user')
//                 return done(null, newuser)
//               })
//               .catch(error => {
//                 return done(error)
//               })
//           }
//         })
//       }
//     })
//   }
// ))
// // local register end
// // local login start
// passport.use('local-login', new LocalStrategy(
//   {
//     usernameField: 'email',
//     passwordField: 'pass'
//   },
//   (email, pass, done) => {
//     User.findOne({ email: email }, (err, user) => {
//       if (err) {
//         console.log(err.message)
//         return done(null, false, { message: 'Error!! Try again.' })
//       }
//       if (!user) { return done(null, false, { message: 'No user with that email.' }) }

//       if (user) {
//         bcrypt.compare(pass, user.pass, (error, result) => {
//           if (error) console.log(error.message)

//           if (!result) return done(null, false, { message: 'Incorrect password' })
//           if (result) return done(null, user)
//         })
//       }
//     })
//   }
// ))// local-login ended here
// // Local Strategy End

// // Google Strategy Start
// passport.use(new GoogleStrategy(
//   {
//     clientID: process.env.GOOGLE_CLIENT_ID,
//     clientSecret: process.env.GOOGLE_CLIENT_SECRET,
//     callbackURL: '/auth/google/redirect'
//   },
//   (accesToken, refreshToken, profile, done) => {
//     User.findOne({ googleId: profile.id }, function (err, user) {
//       if (err) {
//         console.log(err.message)
//         return done(err)
//       }
//       if (user) {
//         return done(null, user)
//       }
//       if (!user) {
//         User.findOne({ email: profile._json.email }, (error, userWithSameEmail) => {
//           if (error) {
//             return done(error)
//           }
//           if (userWithSameEmail) {
//             userWithSameEmail.googleId = profile.id
//             userWithSameEmail.profileImg = profile._json.picture

//             userWithSameEmail.save((err, updatedUser) => {
//               if (err) return done(err)
//               if (updatedUser) return done(null, updatedUser)
//             })
//           }
//           if (!userWithSameEmail) {
//             User.create({
//               googleId: profile.id,
//               name: profile.displayName,
//               email: profile._json.email,
//               profileImg: profile._json.picture
//             })
//               .then(newUser => {
//                 return done(null, newUser)
//               }).catch(err => {
//                 done(err)
//               })
//           }
//         })
//       }
//     })
//   }
// ))
// // Google Strategy End

// // Serialize and deserialize
// passport.serializeUser((user, done) => {
//   console.log('serializing')
//   done(null, user)
// })

// passport.deserializeUser((id, done) => {
//   User.findOne({ _id: id }, (err, user) => {
//     if (err) { return done(err) }
//     return done(null, user)
//   })
// })