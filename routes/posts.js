const express = require('express')
const router = express.Router()
const Post = require('../schemas/posts')

router.get('/', async (req, res) => {
    const Posts = await Post.findAll()
    res.json(Posts)
})
router.post('/', async (req, res) => {
    const { title, body, userId } = req.body

    if (!title || !body || !userId ) {
        return res.status(400).send('Bad request')
    }

   try {
    const newPost = await Post.create({
        title: title,
        body: body,
        userId: userId
    })
    res.json(newPost)
   } catch (error) {
    res.status(400).send('We got one error')
   }
})

module.exports = router;