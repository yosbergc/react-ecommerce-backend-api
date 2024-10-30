const express = require('express')
const cors = require('cors')
const port = process.env.port || 5000
const productsRouter = require('./routes/products')
const usersRouter = require('./routes/users')
const documentRouter = require('./routes/documents')
const postsRouter = require('./routes/posts')
const app = express()

app.use(cors())
app.use(express.json())
app.get('/', (req, res) => {
    res.send('Welcome to the API V1')
})
app.use('/products', productsRouter)
app.use('/users', usersRouter)
app.use('/documents', documentRouter)
app.use('/posts', postsRouter)

app.listen(port)