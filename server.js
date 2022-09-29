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

//Note: Greeting express application created.
app.get("/greeting/:name", (req, res)=>{
    const {name} = req.params
    console.log(req.params)
    res.send(`What's up ${name}!  It's so great to see you!`)
})

//NOTE: Tip Calculator express application created.
app.get("/tip/:total/:tipPercentage", (req, res)=>{
    const {total, tipPercentage} = req.params
    const tip = (tipPercentage / 100) * total
    res.send(`Your tip is $${tip}.`)
})

//NOTE: Magic 8 Ball express application created.
const responses = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely","You may rely on it", "As I see it yes", "Most likely", "Outlook good","Yes", "Signs point to yes", "Reply hazy try again", "Ask again later","Better not tell you now", "Cannot predict now", "Concentrate and ask again","Don't count on it", "My reply is no", "My sources say no","Outlook not so good", "Very doubtful"]

app.get("/magic/:question", (req, res)=>{
    const {question} = req.params
    const randomRes = responses[Math.floor(Math.random()*responses.length)]
    res.send(`Question: ${question} <br> <br> Magic 8 Ball Response: <h1>${randomRes}</h1>`)
})




//assigning the port# we are listening to (variable 3000 established above)
app.listen(PORT, ()=>{
    console.log("Server is running on port 3000")
})

