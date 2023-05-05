const express = require('express')
const app = express()
const cors = require('cors')
const port = process.env.port || 3000

const chef = require('./data/chef.json')
const chefRecipe = require('./data/recipe.json')

app.use(cors())
app.get('/chef-recipe', (req, res) => {
    res.send(chefRecipe)
});
app.get('/chef-recipe/:id', (req, res) => {
    const id = req.params.id;
    const selectedChefs = chefRecipe.find(chef => chef.id == id)
    res.send(selectedChefs)
});
app.get('/chef', (req, res) => {
    res.send(chef)
});
app.get('/', (req, res) => {
    res.send('Server side running...')
});
app.listen(port, () => {
    console.log(`Chef's delight listening on port ${port}`)
});