const router = require('express').Router()
const passport = require('passport')

// middleware 
const notAuthenticated = (req, res, next) => {
  if (!req.isAuthenticated()) {
    return next()
  }
  res.redirect('/');
}

//   Local Authentication Starts here
// Register screen
router.get('/register', notAuthenticated, (req, res) => {
  res.render('register', { user: 'null' })
})
// Login screen
router.get('/login', notAuthenticated, (req, res) => {
  res.render('login', { user: 'null' })
})

// Register new User
router.post('/register', notAuthenticated, passport.authenticate('local-register', {
  successRedirect: '/',
  failureRedirect: '/auth/register',
  failureFlash: true
}))
// Login existing user
router.post('/login', notAuthenticated, passport.authenticate('local-login', {
  successRedirect: '/',
  failureRedirect: '/auth/login',
  failureFlash: true
}))
//   Local Authentication Ends here
//  Google auth starts here
router.get('/google', notAuthenticated, passport.authenticate('google', {
  scope: ['profile', 'email']
}))
router.get('/google/redirect', passport.authenticate('google', {
  successRedirect: '/',
  failureRedirect: '/login'
}))
//  Google auth ends here
//  Facebook auth Starts here
// router.get('/facebook', notAuthenticated, passport.authenticate('facebook', {
//   scope: ['email', 'public_profile']
// }))

// router.get('/facebook/redirect', passport.authenticate('facebook', {
//   failureRedirect: '/login',
//   successRedirect: '/'
// }))
// //  Facebook auth ends here

// Logout 
router.get('/logout', (req, res) => {
  req.logout()
  res.redirect('/')
})

module.exports = router