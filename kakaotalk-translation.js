require ('newrelic')
const express           = require('express')
const bodyParser        = require('body-parser')
const [ kakaoRouter ]   = require('./routes')

const app = express()
app.use(bodyParser.json())
app.use('/', kakaoRouter)

app.listen(process.env.PORT || 3000, () => {
    console.log('Server on http://127.0.0.1:3000/keyboard')
})