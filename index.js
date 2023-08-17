import express, { json } from "express"
import cors from 'cors'
import { config } from 'dotenv'

import AdminRoutes from "./routes/admin.route.js"
import StudentRoutes from "./routes/student.route.js"

config()
const PORT = process.env.PORT || 8000

const app = express()

// Middleware
app.use(cors())
app.use(json())
app.use(express.urlencoded({ extended: false }))

app.use('/admin', AdminRoutes)
app.use('/student', StudentRoutes)

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