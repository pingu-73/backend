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
    fs.readdir('../files/', fileList(res));
}







function fileContent(res){
    return function(err, data){
        if (err){
           res.status(404).send("File not found");
        }
        else{
            res.status(200).send(data);
        }
    }
}

function contents(req, res){
    var file = path.join('../files/', req.params.filename);
    fs.readFile(file, 'utf-8', fileContent(res));
}






function invalidPath(req, res){
  res.status(404).send('Route not found');
}




app.get('/files', files);
app.get('/file/:filename', contents);
app.all('*', invalidPath);


    
// function started(){
//     console.log(`app listening on ${PORT}`)
// }
// app.listen(PORT, started)
module.exports = app;