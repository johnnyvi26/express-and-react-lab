// Import Dependencies
const express = require("express");
const cors = require("cors");

// Import JSON files
const projects = require("./projects.json");
const about = require("./about.json");

// Create our app object
const app = express();

// set up middleware
app.use(cors());



///////////////////////////////////////////////////////////////////////
////////////////////////// ROUTER/CONTROLLERS /////////////////////////
///////////////////////////////////////////////////////////////////////
// home route for testing our app
app.get('/', (req, res)=>{
    res.send("Hello World");
});

// route for retrieving projects
app.get('/projects' , (req, res)=>{
    //send projects via JSON
    res.json(projects);
});

app.get('/about', (req, res)=>{
    //send project via JSON
    res.json(about);
});



////////////////////////////////////////////////////////////////////////
//////////////////////// LISTENER //////////////////////////////////////
////////////////////////////////////////////////////////////////////////

//declare a variable for our port number
const PORT = process.env.PORT || 4000;

// turn on the server listener
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));