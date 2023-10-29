import express from 'express';
import { promises as fs } from 'fs';

const students = [
    { "id": 1, "name": "Karim", "surname": "Benzema", "email": "karim.benzema@realmadrid.com" },
    { "id": 2, "name": "Sergio", "surname": "Ramos", "email": "sergio.ramos@realmadrid.com" },
    { "id": 3, "name": "Luka", "surname": "Modrić", "email": "luka.modric@realmadrid.com" },
    { "id": 4, "name": "Eden", "surname": "Hazard", "email": "eden.hazard@realmadrid.com" },
    { "id": 5, "name": "Casemiro", "surname": "Casemiro", "email": "casemiro@realmadrid.com" },
    { "id": 6, "name": "Toni", "surname": "Kroos", "email": "toni.kroos@realmadrid.com" },
    { "id": 7, "name": "Vinicius", "surname": "Junior", "email": "vinicius.junior@realmadrid.com" },
    { "id": 8, "name": "Federico", "surname": "Valverde", "email": "federico.valverde@realmadrid.com" },
    { "id": 9, "name": "Dani", "surname": "Carvajal", "email": "dani.carvajal@realmadrid.com" },
    { "id": 10, "name": "Marcelo", "surname": "Vieira", "email": "marcelo.vieira@realmadrid.com" },
    { "id": 11, "name": "Thibaut", "surname": "Courtois", "email": "thibaut.courtois@realmadrid.com" }

];

const subjects = [
    { "id": 1, "name": "Mathematics", "hoursAWeek": 4 },
    { "id": 2, "name": "Physics", "hoursAWeek": 3 },
    { "id": 3, "name": "Geography", "hoursAWeek": 1 },
    { "id": 4, "name": "Physical Education", "hoursAWeek": 3 },
    { "id": 5, "name": "PAW", "hoursAWeek": 2 },
    { "id": 6, "name": "Chemistry", "hoursAWeek": 3 },
    { "id": 7, "name": "Computer Science", "hoursAWeek": 2 },
    { "id": 8, "name": "History", "hoursAWeek": 2 },
    { "id": 9, "name": "English Language", "hoursAWeek": 3 },
    { "id": 10, "name": "Biology", "hoursAWeek": 3 },
];

const router = express.Router();

router.get('/students/:id', (req, res) => {
    const id = req.params.id;
    const student = students.find(student => student.id.toString() === id);

    if (student) {
        res.status(200).json(student);
    } else {
        res.status(404).json({ error: 404, message: "Nie ma takiego ucznia" });
    }
});

router.get('/subjects/:id', (req, res) => {
    const id = req.params.id;
    const subject = subjects.find(subject => subject.id.toString() === id);

    if (subject) {
        res.status(200).json(subject);
    } else {
        res.status(404).json({ error: 404, message: "Nie ma takiego przedmiotu" });
    }
});

router.get('/students', (req, res) => {
    res.status(200).json(students);
});

router.get('/subjects', (req, res) => {
    res.status(200).json(subjects);
});

router.get('/', async (req, res) => {
    res.statusCode = 200
    res.setHeader("Content-Type", 'text')
    const json = await fs.readFile('api.json');
    res.end(json)
})


export { router as apiRouter };
