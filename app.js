const express = require('express')
const app = express()
const port = 5000

app.get('/allusers', function(req, res, next) {
  res.json([{
  	id: 1,
  	username: "samsepi0l"
  }, {
  	id: 2,
  	username: "D0loresH4ze"
  }]);
});

app.get('/', function (req, res) {
  res.send('Got a GET request')
})

app.post('/', function (req, res) {
  res.send('Got a POST request')
})

app.put('/user', function (req, res) {
  res.send('Got a PUT request at /user')
})

app.delete('/user', function (req, res) {
  res.send('Got a DELETE request at /user')
})

app.listen(process.env.PORT || port, () => console.log(`Example app listening on port ${port}!`))
