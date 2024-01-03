const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const PORT = 3000;

function fileList(res){
    return function(err, data){
       if(err){
        res.status(500).json({ error: 'Failed to retrieve files' });
       } 
       else{
        res.status(200).json(data);
       }
    }
}

function files(req, res){
    fs.readdir('./files/', fileList(res));
}

app.get('/files', files);



    
function started(){
    console.log(`app listening on ${PORT}`)
}
app.listen(PORT, started)