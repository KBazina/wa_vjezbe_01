const e = require("express")
const express = require("express")

let app = express()
const PORT = 3000
app.get("/",(req,res)=>{
    res.send("hello svijete")
})

app.listen(PORT,(error)=>{
    if(error){
        console.error(error)
    } else {
        console.log("slusam na ovom portu:", PORT)
    }
})