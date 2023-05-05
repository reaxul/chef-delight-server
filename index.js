const express = require('express')
const app = express()
const cors = require('cors')
const port = process.env.port || 3000
const chef = require('./data/chef.json')
app.use(cors())
app.get('/chef', (req, res) => {
    res.send(chef)
})
app.get('/', (req, res) => {
    res.send('Server side running...')
})
app.listen(port, () => {
    console.log(`Chef's delight listening on port ${port}`)
})