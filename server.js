//greeting
// Make a route '/greeting'that sends
// a generic greeting to the screen like "Hello, stranger".
const express = require("express")
const app = express()
const port = 3000

app.get("/greeting",(req, res)=>{

    res.send("Hello, stranger")
})

//Give the greetingroute a param /:name
app.get("/greeting/:ermi",(req, res)=>{

    res.send(' Hello there,' + " " + req.params.ermi + " " + 'on the page')
    
});

// Tip Calculator
// Your app should have a route of '/tip'
// and it should expect 2 params. One should be totaland one should be tipPercentage.

app.get("/tip/:total/:tiperc",(req, res)=>{
    
    let tip = parseInt(req.params.total) *  (parseInt(req.params.tiperc) / 100) ;

    res.send(`${tip}`)
})

//Magic 8 ball

const answer = ["It is certain", "It is decidedly so", 
    "Without a doubt", "Yes definitely",
    "You may rely on it", "As I see it yes", 
    "Most likely", "Outlook good","Yes", 
    "Signs point to yes", "Reply hazy try again", 
    "Ask again later", "Better not tell you now", 
    "Cannot predict now", "Concentrate and ask again",
     "Don't count on it", "My reply is no", 
    "My sources say no", "Outlook not so good", 
    "Very doubtful"];

// Magic 8 Ball
// Create a route of '/magic'that should 
// expect a phrase in the URL that ask the Magic 8 ball a question.

app.get("/magic",(req, res)=>{
    
    res.send("Enter a question in the URL space")
})
app.get("/magic/:whatever",(req, res)=>{
    let random = Math.floor( Math.random()*(answer.length))
    console.log(random)
    res.send(req.params.whatever.replaceAll('%20 ',' ') + " " + `${answer[random]}`)
})

app.listen(port,() => {
    console.log("Listening port 3000!")
})