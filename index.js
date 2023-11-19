const express = require('express');
const mysql = require('mysql');
const test = require("./router/router.js");
const connection = require("./connect.js");

const app = express();
const PORT = 3000;

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

connection.connect();

app.post('/kontakt', (req, res) => {
    console.log(req.body);
    let msg = JSON.stringify(req.body);

    const sql = "insert into messages value ('" + msg + "')";
    connection.query(sql, (err) => {
        if (err) {
            console.log("Error: Something went wrong.");
        }
        else {
            console.log("Success: It's working.");
        }
    });
    res.redirect('/');
});

app.get('/', (req, res) => {
    res.sendFile(`${__dirname}/html/index.html`);
});

app.get('/kontakt', (req, res) => {
    res.sendFile(`${__dirname}/html/contact.html`);
});

app.use('/api', test);

app.listen(PORT, () => {
    console.log("Server is running.");
});
