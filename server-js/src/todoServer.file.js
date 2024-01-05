const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const app = express();
app.use(bodyParser.json());
const PORT = 3000;



function findID(arr, id){
    for(var i = 0; i < arr.length; i++){
        if(id == arr[i].id){
            return i;
        }
    }
    return -1;
}


// ----------------------------------

function retrieveAll(req, res){
    fs.readFile('todo.json', 'utf-8', function(err, data){
        if (err) throw err;
        
        res.status(200).json(JSON.parse(data));
    });
}

// -----------------------------------

function retrieve(req, res){
    fs.readFile('todo.json', 'utf-8', function(err, data){
        if (err) throw err;
        const arr = JSON.parse(data);
        const pos = findID(arr, req.params.id);
        if(pos !== -1){
            res.status(200).json(arr[pos]);
        }
        else{
            res.sendStatus(404);
        } 
    });
}

// -------------------------------------

function create(req, res){
    const newTodo = {
        id: Math.floor(Math.random() * 10),
        title: req.body.title,
        description: req.body.description
    } 
    
    fs.readFile('todo.json', 'utf-8', function(err, data){
        if (err) throw err;
        
        var arr = JSON.parse(data);
        arr.push(newTodo);
        
        fs.writeFile('todo.json', JSON.stringify(arr), function (err){
            if (err) throw err;
            res.status(201).json(arr);
        });
    });
}

// -------------------------------------

function update(req, res){
    fs.readFile('todo.json', 'utf-8', function(err, data){
        if (err) throw err;
        
        var arr = JSON.parse(data);
        const pos = findID(arr, req.params.id);
        
        if(pos !== -1){
            arr[pos].description = req.body.description;
            fs.writeFile('todo.json', JSON.stringify(arr), function(err){
                if (err) throw err;
                res.status(200).json(arr);
            });
        }
        else{
            res.sendStatus(404);
        }
    });
}

// --------------------------------------

function removeTodo(req, res){
    
    fs.readFile('todo.json', 'utf-8', function(err, data){
        if(err) throw err;
        
        var arr = JSON.parse(data);
        const pos = findID(arr, req.params.id);
        
        let temp = [];
        if(pos !== -1){
            for(var i = 0; i < arr.length; i++){
                if(i !== pos){
                    temp.push(arr[i]);
                }
            }
            arr = temp;
        }else{
            res.sendStatus(404);
        }
        
        fs.writeFile('todo.json', JSON.stringify(arr), function(err){
            if (err) throw err;
            res.status(200).json(arr);
        });
    });
}

app.get('/todos', retrieveAll);
app.get('/todos/:id', retrieve);
app.post('/todos', create);
app.put('/todos/:id', update);
app.delete('/todos/:id', removeTodo);
    
function started(){
    console.log(`app listening on ${PORT}`)
}
app.listen(PORT, started)