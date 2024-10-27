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
router.post('/', (req, res) => {

})
router.delete('/:id', (req, res) => {

})
router.put('/:id', (req, res) => {

})

module.exports = router;