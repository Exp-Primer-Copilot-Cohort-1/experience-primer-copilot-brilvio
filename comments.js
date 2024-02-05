// Create web server
// create api
// create a route
// create a controller
// create a model
// create a database

// 1. create a web server
const express = require('express');
const app = express();

// 2. create an api
const comments = require('./comments');

// 3. create a route
app.get('/comments', (req, res) => {
    comments.getComments((err, data) => {
        if (err) {
            res.status(500).send('Internal Server Error');
        } else {
            res.status(200).send(data);
        }
    });
});

app.get('/comments/:id', (req, res) => {
    comments.getComment(req.params.id, (err, data) => {
        if (err) {
            res.status(500).send('Internal Server Error');
        } else {
            res.status(200).send(data);
        }
    });
});

// 4. create a controller
// 5. create a model
// 6. create a database

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

