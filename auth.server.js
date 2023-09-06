import express, { json } from 'express'
import helmet from 'helmet'
import cors from 'cors'
import { config } from 'dotenv'

import AuthRoutes from './routes/auth.route.js'

config()
const AUTH_PORT = process.env.AUTH_PORT || 8080
const app = express()

// Middleware
app.use(cors())
app.use(helmet())
app.use(json())
app.use(express.urlencoded({ extended: false }))

// Routes
app.use('/', AuthRoutes)

// Running server
app.listen(AUTH_PORT, () => { console.info(`Authorization Server is running on http://localhost:${AUTH_PORT}`) })

// Global Error Handler. IMPORTANT function params MUST start with err
app.use((err, req, res, next) => {
    console.error(err.stack)
    console.error(err.name)
    console.error(err.code)

    res.status(500).json({
        message: err.message,
    })
})