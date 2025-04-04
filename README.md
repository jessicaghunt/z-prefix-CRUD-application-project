# z-prefix-CRUD-application-project
Z-Prefix CRUD Project <br />

# Trail Ride Treasures
An app to view all the items a person may need before a trail ride.

# Lets get started
Lets start with forking [this repo](https://github.com/jessicaghunt/z-prefix-CRUD-application-project.git) and cloning it to your machine. <br />

Once cloned, cd into the directory for the repo. Then run the command <br />
``` npm install ``` <br />
Be sure to cd into the frontend folder and run the same code. <br/>

# Front End
Let's start with the front end. cd into frontend. <br />
- Run the following code <br />
``` npm start ``` this will allow you to run the frontend on localhost:5173

# Back End
- Make sure you cd into the backend folder <br />
- Make sure you have a container already spun up in docker to host the database connection. <br />
- Log in to the psql (Postgres) <br />
``` psql -U postgress ``` <br />
- Now run <br />
``` CREATE DATABASE trailride_treasures; ``` <br />
- Open a new terminal for the backend <br />
    - Run the following codes <br />
    ``` npm install ``` <br />
    ``` npx knex migrate:latest ``` <br />
    ``` npx knex seed:run ``` <br />
    ``` npm start ``` This will allow you to run the API server on port 3001.

# Navigating the App
Welcome to the Trail Ride Treasures. This app allows visitors to see all the items in the inventory that they may need for a day on the trail. <br />
- Visitor will be able to: <br />
    - View entire item list. <br />
    - See the detailed information for the item. <br />
- Inventory Manager will be able to: <br />
    - Click the <strong>Create Account</strong> button. There will be a pop up to allow user to create an account. Once account is created, Inventory Manager will be redirected to their specific page listing only the items they have created. The initial table will show that they do not have any items created yet. <br />
    - Click the <strong>Login</strong> button.There will be a pop up to requesting username and password. If the account is in the database, the inventory manager will be redirected to their specific page listing only the items they have created. <br />
    - Click the <strong>Add item</strong> button. A pop up will appear directing the Inventory Manager to input item information. Once done, click <strong>Add Item</strong>. The item will appear in the current inventory table. A page refresh will bring the new item added to the the top of the table.<br />
    - Click the <strong>Delete</strong> button. This will allow the Inventory Manager to delete the item from their inventory.<br />
    - Click the <strong>View Entire Item List</strong> button. This will redirect the Inventory Manager to the main page where all items are listed. Their newly added items will appear on the table as well. <br />

# Trust The Process
[Kanban Board](https://kanbanflow.com/board/feKzjV6) <br />
ERD image here

# Author
[Jessica Hunt](https://github.com/jessicaghunt)
