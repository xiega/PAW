const express = require('express')
const router = express.Router()
const { MongoClient, MongoKerberosError } = require("mongodb")
const urlm = "mongodb+srv://xiega:xiega@cluster0.16kmlch.mongodb.net/?retryWrites=true&w=majority"

router.get('/messages', async (req, res) => {
    try {
        const db = await MongoClient.connect(urlm)
        const dbo = db.db("node")
        const result = await dbo.collection("contact").find().toArray()
        res.send(result)
    }
    catch (er) {
        console.log(er)
    }
})
module.exports = router