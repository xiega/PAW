const express = require("express");
const { MongoClient } = require("mongodb");
const router = require("./router/router.js");
const app = express();
const PORT = 3000;
const urlm = "mongodb+srv://xiega:xiega@cluster0.16kmlch.mongodb.net/?retryWrites=true&w=majority";

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/kontakt', async (req, res) => {
    const body = req.body;
    console.log(body);
    try {
        const client = new MongoClient(urlm, { useNewUrlParser: true, useUnifiedTopology: true });
        await client.connect();
        const db = client.db("node");
        if (body.name === "") {
            delete body.name;
            console.log(body);
        }
        try {
            await db.collection("contact").insertOne(body);
        } catch (err) {
            console.error(err);
        } finally {
            await client.close();
        }
    } catch (err) {
        console.error(err);
    }
    res.redirect(302, '/');
});

app.get('/', (req, res) => {
    res.sendFile(`${__dirname}/html/index.html`);
});

app.get('/kontakt', (req, res) => {
    res.sendFile(`${__dirname}/html/contact.html`);
});

app.use('/api', test);

app.listen(PORT, () => {
    console.log(`[server]: Server is running`);
});
