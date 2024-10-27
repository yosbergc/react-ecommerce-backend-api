const express = require('express');
const bcrypt = require('bcrypt');
const Connection = require('../libs/sequelize');
const User = require('../schemas/users')
const router = express.Router()

router.get('/', async (req, res) => {
    const response = await User.findAll()
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
router.patch('/:id', async (req, res) => {
    const { id } = req.params;
    const data = req.body;
    if (!id || !data) {
        return res.status(400).send('Incorrect request')
    }
    const user = await User.findByPk(id)
    const response = await user.update(data)

    res.json(response)
})

module.exports = router;