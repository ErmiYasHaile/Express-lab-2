const express = require("express")
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
})