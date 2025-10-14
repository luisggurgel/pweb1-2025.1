const express = require('express')
const router = express.Router()


router.get('/', (req, res) => {
  res.render('about')
  console.log('About page accessed')
})

module.exports = router
