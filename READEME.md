# GREETING


// Make a route '/greeting'that sends
// a generic greeting to the screen like "Hello, stranger".
app.get("/greeting",(req, res)=>{

    res.send("Hello, stranger")
})

//Give the greetingroute a param /:name
app.get("/greeting/:ermi",(req, res)=>{

    res.send(' Hello there,' + " " + req.params.ermi + " " + 'on the page')
    
});



## Tip Calculator
// Tip Calculator
// Your app should have a route of '/tip'
// and it should expect 2 params. One should be totaland one should be tipPercentage.

app.get("/tip/:total/:tiperc",(req, res)=>{
    
    let tip = parseInt(req.params.total) *  (parseInt(req.params.tiperc) / 100) ;

    res.send(`${tip}`)
})


## Mgic 8 ball

// const answer = ["It is certain", "It is decidedly so", 
//     "Without a doubt", "Yes definitely",
//     "You may rely on it", "As I see it yes", 
//     "Most likely", "Outlook good","Yes", 
//     "Signs point to yes", "Reply hazy try again", 
//     "Ask again later", "Better not tell you now", 
//     "Cannot predict now", "Concentrate and ask again",
//      "Don't count on it", "My reply is no", 
//     "My sources say no", "Outlook not so good", 
//     "Very doubtful"];

// Magic 8 Ball
// Create a route of '/magic'that should 
// expect a phrase in the URL that ask the Magic 8 ball a question.

// app.get("/magic",(req, res)=>{
//     // req.send("Will I be a Millionaire")
//     // res.send(answer[req.params.magic)
//     // console.log(req.params)
//     res.send()
// })

// app.get("/magic/:whatever",(req, res)=>{
//     let random = Math.floor( Math.random()*(answer.length))
//     console.log(random)
//     res.send(req.params.whatever + " " + `${answer[random]}`)
// })





<!-- const express = require("express")
const app = express()
const port = 3000

app.get("/",(req, res)=>{

    res.send(`
   99 Bottles of beer on the wall
    <html>
        <body>
            <a href="/98">take one down, pass it around</a>
        </body>
    </html>
`)
    
})

app.get( "/:number_of_bottles", (req,res)=>{
    parseInt(req.params.number_of_bottles) -1;
    let minus =  parseInt(req.params.number_of_bottles) -1;

    if ( parseInt(req.params.number_of_bottles) === 0) {
    res.send(`
   99 Bottles of beer on the wall
    <html>
        <body>
            <a href="/">take one down, pass it around</a>
        </body>
    </html>
`)
    
}

    res.send(`
    ${req.params.number_of_bottles} Bottles of beer on the wall
 <html>
     <body>
         <a href="/${minus}">take one down, pass it around</a>
     </body>
 </html>
`)


})




app.listen(port,() => {
    console.log("Listening port 3000!")
}) -->