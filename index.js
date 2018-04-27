const express = require('express')
const path = require('path')
const app = express()
const config = require('./config')
const bodyParser = require('body-parser')
const router = express.Router()
const request = require('request')

router.get('*', (req, res, next) => {
  const baseURL = ''
  const url = baseURL + req.url
  req.pipe(request(url)).pipe(res)
})

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json())

app.use(express.static(path.join(__dirname, 'src')))

app.use(router)

app.listen(config.port, () => {
  console.log(`Server is running at localhost: ${config.port}`)
})