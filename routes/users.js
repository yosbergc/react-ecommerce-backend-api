const express = require('express')
const Connection = require('../libs/postgres')
const router = express.Router()

router.get('/', async (req, res) => {
    const client = await Connection()
    const response = await client.query('SELECT * FROM users')
    res.json(response.rows) 
})

router.get('/:id', (req, res) => {

})
router.post('/', async (req, res) => {
    const { id, firstName, lastName, email, password } = req.body

    if (!id || !firstName || !lastName || !email || !password) {
        return res.status(400).send('Bad Request')
    }

    const client = await Connection();
    const response = await client.query(`INSERT INTO users (id, firstName, lastName, email, password) VALUES ($1,$2, $3, $4, $5)`, [id, firstName, lastName, email, password])
    res.json({
        response: response.rows
    })
})
router.delete('/:id', (req, res) => {

})
router.put('/:id', (req, res) => {

})

module.exports = router;