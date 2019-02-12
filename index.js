const express = require('express')
const companies = require('./companies.json')
const app = express()
const port = 3000

app.get('/', (req, res) => res.json({ companies }))

function findById(data, id) {
    for (let i = 0; i < data.length; i++){
        if (data[i].id == id){
            return data[i];
        }
    }
}

app.get('/:id', function(req, res){
    const record = findById(req.params.id);
    if(!record){
        res.status = 404;
        res.json({
            error: {
                message: "No record found!"
            }
        });
        }
    res.json({data: record})
});



app.listen(port, () => console.log(`Example app listening on port ${port}!`))
