const express = require('express')
const router = express.Router()
const Document = require('../schemas/document')

router.get('/', async (req, res) => {
    const document = await Document.findAll({
        include: ['user']
    })
    res.json(document)
})
router.post('/', async (req, res) => {
    const { number, age, userId } = req.body
    if (!number || !age || !userId ) {
        return res.status(400).send('Bad request')
    }

    try {
        const newDocument = await Document.create({
            number: number,
            age: age,
            userId: userId
        })
        res.json(newDocument)
    } catch(error) {
        return res.status(400).send(error)
    }

    
})
module.exports = router;