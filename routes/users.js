const express = require('express');
const bcrypt = require('bcrypt');
const Connection = require('../libs/postgres');
const router = express.Router()

router.get('/', async (req, res) => {
    const response = await Connection.query('SELECT * FROM users')
    res.json(response.rows) 
})
router.get('/:id', (req, res) => {

})
router.post('/', async (req, res) => {
    const { id, firstName, lastName, email, password } = req.body
    
    if (!id || !firstName || !lastName || !email || !password) {
        return res.status(400).send('Bad Request')
    }
    try {
        const newPassword = await bcrypt.hash(password, 4);
        const client = await Connection();
        const response = await client.query(`INSERT INTO users (id, firstName, lastName, email, password) VALUES ($1,$2, $3, $4, $5)`, [id, firstName, lastName, email, newPassword])
        res.json({
            response: response.rows
    })
    } catch(error) {
        res.status(400).send('We got one error')
    }
})
router.delete('/:id', (req, res) => {

})
router.put('/:id', (req, res) => {

})

module.exports = router;