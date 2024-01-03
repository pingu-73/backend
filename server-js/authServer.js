const express = require("express")
const PORT = 3000;
const app = express();
const bodyParser = require('body-parser')

var arr = [];



app.use(bodyParser.json()) 



function signup(req, res){
    // console.log(req.body);
    
    // var arr = []
    
    var email = req.body.email;
    var password = req.body.password;
    var firstName = req.body.firstName;
    var lastName = req.body.lastName;
    
    for(var i = 0; i < arr.length; i++){
        if (arr[i].email === email){
            res.status(400).send("Email already exists");
            return;
        }
    }
    
    
    var obj = {
      email: email,
      password: password,
      firstName: firstName,
      lastName: lastName,
    };
    arr.push(obj);
    // console.log(arr);
    res.status(201).send("Signup successful");
}


function login(req, res){
    var enteredEmail = req.body.email;
    var enteredPass = req.body.password;
    var userFound = false;
    let loginDetails = null;
    
    for(var i = 0; i < arr.length; i++){
        if (arr[i].email === enteredEmail && arr[i].password === enteredPass){
            loginDetails = {
                firstName: arr[i].firstName,
                lastName: arr[i].lastName,
                email: arr[i].email
            }
            loginDetails = arr[i]

            userFound = true;
            break;
        }
    }
    if (userFound){
        res.status(200).send(loginDetails);
    }
    else{
        res.sendStatus(401);
    }
}


function data(req, res) {
    // console.log(req.headers);
    var enteredEmail = req.headers.email;
    var enteredPass = req.headers.password;
    let userFound = false;

    for (var i = 0; i < arr.length; i++) {
        if (arr[i].email === enteredEmail && arr[i].password === enteredPass) {
            userFound = true;
            break;
        }
    }

    if (userFound) {
        res.status(200).json({users: arr});
    } else {
        res.sendStatus(401);
    }
}

app.post('/signup', signup);
app.post('/login', login);
app.get('/data', data);
    

// function started(){
//     console.log(`app listening on ${PORT}`)
// }
// app.listen(PORT, started)
module.exports = app;