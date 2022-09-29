//loading Express module
const express = require("express")

//initializing express app
const app = express()

//assigning varialbe to port#
const PORT = 3000

//Routes
app.get("/greeting", (req, res)=>{
    res.send("Hello Stranger")
})

app.get("/greeting/:name", (req, res)=>{
    const {name} = req.params
    console.log(req.params)
    res.send(`What's up ${name}!  It's so great to see you!`)
})


//assigning the port# we are listening to
app.listen(PORT, ()=>{
    console.log("Server is running on port 3000")
})