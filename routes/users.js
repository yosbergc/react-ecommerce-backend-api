const express = require('express');
const bcrypt = require('bcrypt');
const Connection = require('../libs/sequelize');
const User = require('../schemas/users')
const router = express.Router()

router.get('/', async (req, res) => {
    const [response] = await Connection.query('SELECT * FROM users')
    res.json(response) 
})
router.get('/:id', (req, res) => {

})
router.post('/', async (req, res) => {
    const { firstName, lastName, email, password } = req.body
    
    if (!firstName || !lastName || !email || !password) {
        return res.status(400).send('Bad Request')
    }
    try {
        const newPassword = await bcrypt.hash(password, 4);
        const newUser = await User.create({
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: newPassword
        })

        res.json({
            response: newUser
        })
    } catch(error) {
        res.status(400).send(error)
    }
})
router.delete('/:id', (req, res) => {

})
router.put('/:id', (req, res) => {

})

module.exports = router;