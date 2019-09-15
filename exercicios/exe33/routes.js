const express = require('express')
const router = express.Router()
const fs = require('fs')



router.get('/:id', function (req, res, next) {
  const img = req.params.id
  res.download(`./img/${img}.jpg`);
});

module.exports = router
