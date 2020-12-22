const express = require('express');
const app = express();
const mongoose = require('mongoose');
const http = require('http');
const socketio = require('socket.io');

//For Socket.io
const server = http.createServer(app);
io = socketio(server);

//MongoDB
// mongoose.connect('mongodb+srv://mernauth:<password>@cluster0.mbgdf.mongodb.net/<dbname>?retryWrites=true&w=majority',
//     { useNewUrlParser: true, useUnifiedTopology: true }, () => {
//         console.log('Successfully connected to database');
//     }
// );
//Main
app.get('/', function (req, res) {
    res.send('Server Started!');
});

//PORT, backend running on 5000
const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`Listning on Port:${port}!`);
})
