const express = require("express");
const router = require("./router/router.js")
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const app = express();
const PORT = 3000;

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/kontakt', async (req, res) => {
    try {
        const body = req.body;
        console.log(body.name);
        const user = {
            name: body.name,
            email: body.email,
            topic: body.subject,
            content: body.message
        };

        await prisma.messages.create({ data: user });
        res.redirect('/');
    } catch (error) {
        console.error(error);
        res.status(500).send("Server Error");
    }
});

app.get('/', (req, res) => {
    try {
        res.sendFile(`${__dirname}/html/index.html`);
    } catch (error) {
        console.error(error);
        res.status(500).send("Server Error");
    }
});

app.get('/kontakt', (req, res) => {
    try {
        res.sendFile(`${__dirname}/html/contact.html`);
    } catch (error) {
        console.error(error);
        res.status(500).send("Server Error");
    }
});

app.use('/api', router);

app.listen(PORT, () => {
    console.log(`[server]: Server is running`);
});
