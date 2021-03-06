const express = require('express');
const app = express();
const mongoose = require('mongoose');
const http = require('http');
const socketio = require('socket.io');
require('dotenv').config();

const route = require('./routes/route')
const morgan = require('morgan')

//For Socket.io
const server = http.createServer(app);
io = socketio(server);

// MiddleWares
app.use(morgan('tiny'))
app.use('/someroute', route)

//MongoDB, store the string in .env file
mongoose.connect(`mongodb+srv://${process.env.DB_NAME}:${process.env.DB_PASS}@cluster0.mbgdf.mongodb.net/<dbname>?retryWrites=true&w=majority`,
    { useNewUrlParser: true, useUnifiedTopology: true }, () => {
        console.log('Successfully connected to database');
    }
);
//Main
app.get('/', function (req, res) {
    res.send('Server Started!');
});

//PORT, backend running on 5000
const port = process.env.PORT || 5000;

// For socket server.listen
server.listen(port, () => {
    console.log(`Listning on Port:${port}!`);
})
