import express, { json } from 'express'
import helmet from 'helmet'
import cors from 'cors'
import swaggerJsdoc from 'swagger-jsdoc'
import swaggerUi from 'swagger-ui-express'
import { config } from 'dotenv'

import AuthRoutes from './routes/auth.route.js'
import AdminRoutes from './routes/admin.route.js'
import StudentRoutes from './routes/student.route.js'
import TeacherRoutes from './routes/teacher.route.js'
import HallRoutes from './routes/hall.route.js'
import LectureRoutes from './routes/lecture.route.js'
import SubjectRoutes from './routes/subject.route.js'
import AttendanceRoutes from './routes/attendance.route.js'
import Options from './common/swagger_options.js'

config()
const PORT = process.env.PORT || 8000
const app = express()

// Initialize swagger-jsdoc -> returns validated swagger spec in json format
const swaggerSpec = swaggerJsdoc(Options)

// Middleware
app.use(cors())
app.use(helmet())
app.use(json())
app.use(express.urlencoded({ extended: false }))

// Routes
app.use('/', AuthRoutes)
app.use('/admin', AdminRoutes)
app.use('/student', StudentRoutes)
app.use('/teacher', TeacherRoutes)
app.use('/hall', HallRoutes)
app.use('/lecture', LectureRoutes)
app.use('/subject', SubjectRoutes)
app.use('/attendance', AttendanceRoutes)
app.use(
    '/api-docs',
    swaggerUi.serve,
    swaggerUi.setup(swaggerSpec)
)

// Running server
app.listen(PORT, () => {
    console.info(`Server is running on http://localhost:${PORT}`)
    console.info(`for swagger documentation you can visit http://localhost:${PORT}/api-docs`)
})

// Global Error Handler. IMPORTANT function params MUST start with err
app.use((err, req, res, next) => {
    console.error(err.stack)
    console.error(err.name)
    console.error(err.code)

    res.status(500).json({
        message: err.message,
    })
})