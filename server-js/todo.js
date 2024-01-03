const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());
const PORT = 3000;

let todo = [];

function retrieveAll(req, res){
    res.status(200).json(todo);
}

// ---------------------------------

function retrieve(req, res){
    let found = false;
    let pos = -1;
    for(var i = 0; i < todo.length; i++){
        if(req.params.id == todo[i].id){
            pos = i;
            found = true;
            break;
        }
    }
    if(found){
        res.status(200).json(todo[i]);
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

app.get('/todos', retrieveAll);
app.get('/todos/:id', retrieve);
app.post('/todos', create);
    
function started(){
    console.log(`app listening on ${PORT}`)
}
app.listen(PORT, started)