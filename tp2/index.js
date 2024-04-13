import express from 'express'

const app = express()

app.get("/",(req,res) => {
    console.log("OwO")
    res.send("The server is working uwu !")
})

app.listen(3000,() => {
    console.log("listening on http://localhost:3000")
})