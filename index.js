const express = require('express')
const dotenv = require('dotenv').config()
const port = process.env.PORT || 2337
const path = require('path')

const app = express()

// Enable body parser
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// Set static folder
app.use(express.static(path.join(__dirname, 'public')))

app.use('/openai', require('./routes/openaiRoutes'))

app.listen(port, () => console.log(`Server is running on port ${port}`))
