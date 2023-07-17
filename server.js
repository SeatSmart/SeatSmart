const express = require('express');
const bodyParser = require('body-parser');
const RoomData = require('./src/Data/Rooms');
const app = express();
const port = 3001;

app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Welcome to the backend server!');
});
app.put('/api/rooms',(req,res) =>{
    const updatedData = req.body;
    RoomData = updatedData;
    res.json({message: 'Data updated successfully!'});
});

app.listen(port, () => {
    console.log(`Server listening on the port::${port}`);
});