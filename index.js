import express from express
import http from "http";



//SERVER
const app = express()
const port = envUtil.PORT 

//CREATING HTTP SERVER
const server = http.createServer(app)

//START SERVER
server.lister(port, () => {
    console.log(`Server is running on port ${port}`)
})