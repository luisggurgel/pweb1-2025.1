const express = require('express');
const router = express.Router(); 


router.get('/', (req, res) => {
  console.log('Users base route accessed — no userid provided, redirecting to signup')
  return res.redirect('/users/signup')
})


router.get('/signin', (req, res) => {
  let response = `<h1>Sign In</h1>`
  response += `<h2>Please enter your credentials</h2>`
  res.send(response)
  console.log(`Sign In page accessed`)

})

router.get('/signup', (req, res) => {
  let response = `<h1>Sign Up</h1>`
  response += `<h2>Please enter your details to create an account</h2>`
  res.send(response)
  console.log(`Sign Up page accessed`)
})

router.get('/:userid', (req, res) => {
  const userid = req.params.userid
  let response = `<h1>Welcome, ${userid}!</h1>`
  response += `<h2>It's great to see you here, ${userid}.</h2>`
  res.send(response)
  console.log(`User route /users/${userid} accessed`)
})

module.exports = router