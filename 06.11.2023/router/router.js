const express = require('express');
const router = express.Router();
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

router.get('/students', async (req, res) => {
    try {
        const students = await prisma.students.findMany();
        res.json(students);
    } catch (error) {
        console.error(error);
        res.status(500).send("Server Error");
    }
});

router.get('/subjects', async (req, res) => {
    try {
        const subjects = await prisma.subjects.findMany();
        res.json(subjects);
    } catch (error) {
        console.error(error);
        res.status(500).send("Server Error");
    }
});

router.get('/students/:id', async (req, res) => {
    try {
        const id = Number(req.params.id);
        const uniqueStudent = await prisma.students.findUnique({
            where: {
                id: id
            }
        });
        if (uniqueStudent) {
            res.json(uniqueStudent);
        } else {
            res.sendStatus(404);
        }
    } catch (error) {
        console.error(error);
        res.status(500).send("Server Error");
    }
});

router.get('/subjects/:id', async (req, res) => {
    try {
        const id = Number(req.params.id);
        const uniqueSubject = await prisma.subjects.findUnique({
            where: {
                id: id
            }
        });
        if (uniqueSubject) {
            res.json(uniqueSubject);
        } else {
            res.sendStatus(404);
        }
    } catch (error) {
        console.error(error);
        res.status(500).send("Server Error");
    }
});

module.exports = router;
