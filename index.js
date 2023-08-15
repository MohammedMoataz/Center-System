import express, { json } from "express"
import cors from 'cors'
import { config } from 'dotenv'


config() // ALLOWS ENVIRONMENT VARIABLES TO BE SET ON PROCESS.ENV
const PORT = process.env.PORT || 4001

const app = express()

app.use(cors())
app.use(json()) // parse json bodies in the request object
app.use(express.urlencoded({ extended: false }))

app.get("/", (req, res) => {
    res.send('Hello from server!')
})

app.listen(PORT, () => {
    console.log(`Server is Listening on http://localhost:${PORT}`)
})

// Global Error Handler. IMPORTANT function params MUST start with err
app.use((err, req, res, next) => {
    console.log(err.stack)
    console.log(err.name)
    console.log(err.code)

    res.status(500).json({
        message: err,
    })
})