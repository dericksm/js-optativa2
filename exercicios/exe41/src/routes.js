const express = require('express')
const router = express.Router()



router.get('/', (req, res) => {
  getList(req, res)
})

const data = require('./db.json')
console.log(data)
router.get('/render', function (req, res) {
  res.render('404.ejs', {data} )
});

module.exports = router
