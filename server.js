const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
let RoomData = require('./src/Data/Rooms');
let HallData = require('./src/Data/Halls');
const app = express();
const port = 3001;

app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res) => {
    res.send('Welcome to the backend server!');
});

app.get('/api/rooms', (req, res) => {
    res.json(RoomData);
});

app.put('/api/rooms',(req,res) =>{
    const updatedData = req.body;
    RoomData = updatedData;
    res.json({message: 'Data updated successfully!'});
});

app.get('/api/halls', (req, res) => {
    res.json(HallData);
});

app.put('/api/halls',(req,res) =>{
    const updatedData1 = req.body;
    HallData = updatedData1;
    res.json({message: 'Data updated successfully!'});
});

app.listen(port, () => {
    console.log(`Server listening on the port::${port}`);
});