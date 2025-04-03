const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());
const port = 3001;

const knex = require("knex")(
  require("./knexfile.js")[process.env.NODE_ENV || "development"]
);

//CONNECTED
app.get('/', (req, res) => {
  res.send('I finally did it!')
})

//ITEMS INFORMATION
app.get('/items', async (req, res) => {
  const items = await knex("item").select('*').orderBy("created_at", "desc");
  res.status(200).json(items);
})

app.post('/items', async (req, res) => {
  //Try-catch added to ensure item was created.
  try {
    const {
      userid,
      itemname,
      description,
      quantity
    } = req.body;
  
    if(!userid || !itemname || !description || quantity === undefined || quantity === null) {
      return res.status(400).json({ error: "All information needed"});
    }
  
    const createdItem = await knex("item").insert({
      userid,
      itemname,
      description,
      quantity
    }).returning("id");

    const id = createdItem[0]?.id || createdItem[0];
  
    res.status(201).json({ message: "New Item successfully created", id});
  } catch (error) {
    res.status(500).json({ error: "Item addition failed"});
  }
})

app.delete('/items/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const item = await knex("item").where({ id }).first();
    await knex("item").where({ id }).del();
    res.status(200).json({ message: "Item deleted"});
  } catch (error) {
    res.status(500).json({ error: "Item failed to delete"});
  }
  }
)

app.patch('/items/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const {      
        itemname,
        description,
        quantity
      } = req.body;
    
    const item = await knex("item").where({ id }).first();

    const updatedItem = await knex("item").where({ id })
    .update({
      itemname: itemname || item.itemname,
      description: description || item.description,
      quantity: quantity !== undefined ? quantity : item.quantity,
    })

    res.status(200).json({message: "Item updated" });
  } catch (error) {
    res.status(500).json({error: "Item failed to update"});  
  
  }
})


//USER INFORMATION
app.get('/users', async (req, res) => {
  const users = await knex("users").select('*');
  res.status(200).json(users);
})

app.post('/users', async (req, res) => {
  //Try-catch added to ensure user was created.
  try {
  const {
    firstname,
    lastname,
    username,
    password
  } = req.body;

  if(!firstname || !lastname || !username || !password) {
    return res.status(400).json({ error: "All information needed"});
  }

  const createdUser = await knex("users").insert({
    firstname,
    lastname,
    username,
    password
  }).returning("id");
  const id = createdUser[0].id || createdUser[0];

  res.status(201).json({ message: "New User successfully created", id});
} catch (error) {
  res.status(500).json({ error: "User creation failed"});
}
})



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});