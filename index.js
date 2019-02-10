const express = require('express')
const app = express()
const port = 3000

// app.get('/', (req, res) => res.json({"message": "Hello World!"}))

//The below line replaces the above commented out line to send a file.
app.get('/', (req, res) => res.sendFile(companies.json))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
