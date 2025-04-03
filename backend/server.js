const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
const port = 3001;

const knex = require("knex")(
  require("./knexfile.js")[process.env.NODE_ENV || "development"]
);

app.get('/items', async (req, res) => {
  const items = await knex("item").select('*');
  res.status(200).json(items);
})

app.get('/users', async (req, res) => {
  const users = await knex("users").select('*');
  res.status(200).json(users);
})

app.get('/', (req, res) => {
  res.send('Hello World!')
})



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});