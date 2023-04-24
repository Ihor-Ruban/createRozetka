const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  res.render('page', { button: 'Button 1' })
})

router.get('/characteristics', (req, res) => {
  res.render('page', { button: 'Button 2' })
})

router.get('/comments', (req, res) => {
  res.render('page', { button: 'Button 3' })
})

router.get('/questions', (req, res) => {
  res.render('page', { button: 'Button 4' })
})

router.get('/photo', (req, res) => {
  res.render('page', { button: 'Button 5' })
})

router.get('/accessories', (req, res) => {
  res.render('page', { button: 'Button 6' })
})

module.exports = router
