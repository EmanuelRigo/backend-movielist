import express from "express";
import http from "http";
import envUtil from "./utils/env.utils.js";



//SERVER
const app = express()
const port = envUtil.PORT 

//CREATING HTTP SERVER
const server = http.createServer(app)

//START SERVER
server.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})


app.get("/", (req, res) => {
    console.log(req.headers)
    console.log(req.url)
    res.send("Hello World")} )