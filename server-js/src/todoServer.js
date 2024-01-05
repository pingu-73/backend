const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());
const PORT = 3000;

let todo = [];

function findID(arr, id){
    for(var i = 0; i < todo.length; i++){
        if(id == todo[i].id){
            return i;
        }
    }
    return -1;
}


// ------------------------------

function retrieveAll(req, res){
    res.status(200).json(todo);
}

// ---------------------------------

function retrieve(req, res){
    const pos = findID(todo, req.params.id);
    if(pos !== -1){
        res.status(200).json(todo[pos]);
    }
    else{
        res.sendStatus(404);
    }
}

// -------------------------------------

function create(req, res){
    const newTodo = {
        id: Math.floor(Math.random() * 10),
        title: req.body.title,
        description: req.body.description
    } 
    todo.push(newTodo);
    res.status(201).json(newTodo);
}

// -------------------------------------

function update(req, res){
    const pos = findID(todo, req.params.id);
    if(pos !== -1){
        todo[pos].description = req.body.description;
        res.status(200).json(todo[pos]);
    }else{
        res.sendStatus(404);
    }
}

// --------------------------------------

function removeTodo(req, res){
    let tempTodo = [];
    const pos = findID(todo, req.params.id);
    if(pos !== -1){
        for(var i = 0; i < todo.length; i++){
            if (i !== pos){
                tempTodo.push(arr[i]);
            }
        }
        todo = tempTodo;
        res.status(200).send(todo);
    }
    else{
        res.sendStatus(404);
    }
}

app.get('/todos', retrieveAll);
app.get('/todos/:id', retrieve);
app.post('/todos', create);
app.put('/todos/:id', update);
app.delete('/todos/:id', removeTodo);
    
// function started(){
//     console.log(`app listening on ${PORT}`)
// }
// app.listen(PORT, started)
module.exports = app;