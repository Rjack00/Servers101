const express = require('express')
const companies = require('./companies.json')
const app = express()
const port = 3000

app.get('/', (req, res) => res.json({ companies }))

function findById(companies, id) {
    for (let i = 0; i < companies.length; i++){
        if (companies[i].id == id){
            return companies[i];
        }
    }
}

app.get('/:id', function(req, res){
    const record = findById(companies, req.params.id);
    if(!record){
        res.status = 404;
        res.json({
            error: {
                message: "No record found!"
            }
        });
        }
    res.json({companies: record})
});



app.listen(port, () => console.log(`Example app listening on port ${port}!`))
