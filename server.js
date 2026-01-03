// use express package, it's easier

// Adapted from the nodejs lecture notes
const express = require("express")
const app = express
const port = 3000

app.get("/", function(req,resp){
    resp.send("Hello world")
})

app.listen(port)