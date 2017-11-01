const express = require('express')
const app = express()
require('dotenv').config()
const bodyParser = require('body-parser')
const logger = require('morgan')
const helmet = require('helmet')
const cors = require('cors')
const PORT = process.env.PORT || 3001
const webAuth = new auth0.WebAuth({
  domain: process.env.AUTH0_DOMAIN,
  clientID: process.env.AUTH0_CLIENT_ID
});

const rootRouter = require('./routers')

app.use(logger('dev'))
app.use(bodyParser.json())
app.use(helmet())
app.use(cors());

app.use('/api', rootRouter)

app.listen(PORT, () => console.log('Double tapping some zombs on port ', PORT))