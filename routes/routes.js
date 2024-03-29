const router = require('express').Router()
const services = require('../data/services')
const works = require('../data/works')
const testimonials = require('../data/testimonials')

router.get('/', (req, res) => {
  res.render('home', { user: 'null', services: services, works: works, testimonials: testimonials })
  // if (req.isAuthenticated()) {
  //   res.render('home', { user: req.user, services: services, works: works, testimonials: testimonials })
  // } else {
  //   res.render('home', { user: 'null', services: services, works: works, testimonials: testimonials })
  // }
})


router.get('/profile', (req, res) => {
  // if (!req.isAuthenticated()) {
  //   res.redirect('/auth/login')
  // } else if (req.isAuthenticated()) {
  //   res.render('profile', { user: req.user })
  // }
  res.redirect('/auth/login')
})

module.exports = router