const router = require('express').Router()
const services = require('../data/services')
const works = require('../data/works')
const testimonials = require('../data/testimonials')

router.get('/', (req, res) => {
  res.render('home', { services: services, works: works, testimonials: testimonials })
})

module.exports = router