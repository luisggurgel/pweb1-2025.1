const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  // provide some sample data to the template
  res.render('magic');
});

module.exports = router;
