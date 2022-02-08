// This imports express into your project
const express = require('express');
const app = express();
//server must run in a different port from front end
const PORT =  4000;
const postRoute = require('./routes/task');


// So that we can parse the incoming body request.
app.use(express.json());

// We will handle routes here
app.get('/', (req, res) => {
    res.send('<h1>Hello! Welcome to the To-Do backend</h1>');
})

app.use('/task', postRoute);

app.listen(PORT, () => {
    console.log('Server is running');
})