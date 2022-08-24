const express = require('express');
const app = express();
const PORT = 5000;
const server = require('http').createServer(app);
const io = require('socket.io')(server);
const shell = require('shelljs');

io.on('connection', () => {
    const data = "git server connected successfully";
    io.emit('connection', data );
});

io.on('createUser', (key) => {
    const result = shell.exec(`bash ./user_management/create.sh ${key}`, {async: true});

    if(result.stderr === ''){
        io.emit('createUser', result);
    }else{
        io.emit('createUser', 'An internal error has occured');
    }
});

io.on('updateUser', (oldKey, newKey) => {
    const result = shell.exec(`bash ./user_management/update.sh ${oldKey} ${' '} ${newKey}`, {async: true});

    if(result.stderr === ''){
        io.emit('updateUser', result);
    }else{
        io.emit('updateUser', 'An internal error has occured');
    }
});

io.on('deleteUser', (key) => {
    const result = shell.exec(`bash ./user_management/delete.sh ${key}`, {async: true});

    if(result.stderr === ''){
        io.emit('deleteUser', result);
    }else{
        io.emit('deleteUser', 'An internal error has occured');
    }
});

io.on('activateUser', (key) => {
    const result = shell.exec(`bash ./user_management/activate.sh ${key}`, {async: true});

    if(result.stderr === ''){
        io.emit('activateUser', result);
    }else{
        io.emit('activateUser', 'An internal error has occured');
    }
});

io.on('deactivateUser', (key) => {
    const result = shell.exec(`bash ./user_management/deactivate.sh ${key}`, {async: true});

    if(result.stderr === ''){
        io.emit('deactivateUser', result);
    }else{
        io.emit('deactivateUser', 'An internal error has occured');
    }
});

//const result = shell.exec("bash ./user_management/delete.sh Faruk", {async: true});
//console.log(result);

app.get('/', (req, res) => {
    res.send("Vantage Git Server is Live");
});

server.listen(PORT, () => {
    console.log('server listening on port '+ PORT);
});