const express = require('express');
const bcrypt = require('bcrypt');
const User = require('../schemas/users')
const router = express.Router()

router.get('/', async (req, res) => {
    const response = await User.findAll({
        include: ['document', 'posts']
    })
    res.json(response) 
})
router.get('/:id', async (req, res) => {
    const { id } = req.params;
    if (!id) {
        return res.status(400).send('Bad Request')
    }

    const user = await User.findByPk(id)
    res.json(user)
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
            password: newPassword,
        })
        res.json({
            response: newUser
        })
    } catch(error) {
        res.status(400).send(error)
    }
})
router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    if (!id) {
        return res.status(400).send('Incorrect request')
    }
    const user = await User.findByPk(id, {
        include: ['document']
    })
    await user.destroy()

    res.send(id)
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