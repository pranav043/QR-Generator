const express = require('express')
const path = require('path')

const app = express()
const port = process.env.PORT || 3000

app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'))

app.get('/', (req, res) => {
  res.sendFile('index.html', { root: path.join(__dirname, 'public') })
})

app.listen(port, function () {
  console.log(`Example app listening on port ${port}`)
})

module.exports = app
