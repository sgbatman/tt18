const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  res.send('LOGIN PAGE')
})

module.exports = router