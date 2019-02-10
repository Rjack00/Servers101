const express = require('express')
const companies = require('./companies.json')
const app = express()
const port = 3000

// app.get('/', (req, res) => res.json({"message": "Hello World!"}))

//The below line replaces the above commented out line to send a file.
app.get('/', (req, res) => res.json({companies}))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
