import express, { json } from 'express'
import helmet from 'helmet'
import cors from 'cors'
import swaggerJsdoc from 'swagger-jsdoc'
import swaggerUi from 'swagger-ui-express'
import { config } from 'dotenv'

import { options } from './utils/constants.js'
import AdminRoutes from './routes/admin.route.js'
import StudentRoutes from './routes/student.route.js'

config()
const PORT = process.env.PORT || 8000
const app = express()

// Initialize swagger-jsdoc -> returns validated swagger spec in json format
const swaggerSpec = swaggerJsdoc(options)

// Middleware
app.use(cors())
app.use(helmet())
app.use(json())
app.use(express.urlencoded({ extended: false }))

// Routes
app.use('/admin', AdminRoutes)
app.use('/student', StudentRoutes)
app.use(
    '/api-docs',
    swaggerUi.serve,
    swaggerUi.setup(swaggerSpec)
)

// Running server
app.listen(PORT, () => console.log(`Server is Listening on http://localhost:${PORT}`))

// Global Error Handler. IMPORTANT function params MUST start with err
app.use((err, req, res, next) => {
    console.log(err.stack)
    console.log(err.name)
    console.log(err.code)

    res.status(500).json({
        message: err.message,
    })
})