import express from 'express'
import { config } from 'dotenv'

config()

const serverPort = process.env.PORT || 5000

const app = express()
app.use(express.json())

app.get("/2tds2", (req, rest) => {
       return rest.status(200).send({  message: "Hello, World!" })
})
app.get("/2tds2", (req, rest) => {
       return rest.status(200).send({  message: "Hello, World!" })
})


app.listen(serverPort, () => {
    console.log(`🎰 Server started on http://localhost:${serverPort}`)
})