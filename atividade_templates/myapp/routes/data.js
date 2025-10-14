const express = require('express');
const router = express.Router();


const baseMessage = 'Hello, this is some data!';

router.post('/', (req, res) => {
  const data = {
    time: new Date(),
    message: baseMessage
  };

  res.json(data);
});

module.exports = router;
