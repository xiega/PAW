const express = require('express');
const router = express.Router();
const connection = require("../connect.js");

router.get('/students', (req, res) => {
    const sql = "SELECT * FROM students";
    connection.query(sql, (err, result) => {
        if (err) {
            console.error(err);
            res.status(500).send("Błąd serwera");
            return;
        }
        console.log(result);
        res.json(result);
    });
});

router.get('/subjects', (req, res) => {
    const sql = "SELECT * FROM subjects";
    connection.query(sql, (err, result) => {
        if (err) {
            console.error(err);
            res.status(500).send("Błąd serwera");
            return;
        }
        console.log(result);
        res.json(result);
    });
});

router.get('/students/:id', (req, res) => {
    const id = req.params.id;
    const sql = "SELECT * FROM students WHERE id = ?";
    connection.query(sql, [id], (err, result) => {
        if (err) {
            console.error(err);
            res.status(500).send("Błąd serwera");
            return;
        }
        console.log(result);
        if (result.length === 0) {
            res.status(404).send("Nie znaleziono studenta o podanym ID");
            return;
        }
        res.json(result);
    });
});

router.get('/subjects/:id', (req, res) => {
    const id = req.params.id;
    const sql = "SELECT * FROM subjects WHERE id = ?";
    connection.query(sql, [id], (err, result) => {
        if (err) {
            console.error(err);
            res.status(500).send("Błąd serwera");
            return;
        }
        console.log(result);
        if (result.length === 0) {
            res.status(404).send("Nie znaleziono przedmiotu o podanym ID");
            return;
        }
        res.json(result);
    });
});

module.exports = router;
