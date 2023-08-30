import { config } from 'dotenv'

import {
    generateAccessToken,
    generateRefreshToken,
    verifyRefreshToken,
} from '../common/auth.js'
import AuthService from '../services/auth.service.js'
import StudentService from '../services/student.service.js'

config()
const PORT = process.env.PORT || 4000

export const redirect = (req, res) => res.redirect(`http://localhost:${PORT}/api-docs`)

export const adminLogin = async (req, res) => {
    const { email, password } = req.body

    AuthService.loginAdmin(email, password)
        .then((admin) => {
            const access_token = generateAccessToken({ email: admin.email, password: admin.password })
            const refresh_token = generateRefreshToken({ email: admin.email, password: admin.password })

            AuthService.updateAdminToken(admin.id, refresh_token)
                .then(() => res.status(200).send({ data: { access_token, refresh_token }, message: "Successfully logged in" }))
                .catch(err => res.send({ message: err.message }))
        })
        .catch(res.status(404).send("Not Found"))
}

export const login = async (req, res) => {
    const { username, password } = req.body

    AuthService.loginStudent(username, password)
        .then((student) => {
            const access_token = generateAccessToken({ username: student.username, password: student.password })
            const refresh_token = generateRefreshToken({ username: student.username, password: student.password })

            AuthService.updateStudentToken(student.id, refresh_token)
                .then(() => res.status(200).send({ data: { access_token, refresh_token }, message: "Successfully logged in" }))
                .catch(err => res.send({ message: err.message }))
        })
        .catch(res.status(404).send("Not Found"))
}

export const register = async (req, res) => {
    const new_student = req.body
    StudentService.create(new_student)
        .then(data => res.status(201).send({ data, message: "Created Successfully" }))
        .catch(err => res.send({ message: err.message }))
}

export const refreshAdminToken = async (req, res) => {
    const refresh_token = req.body.token

    // If the refresh token is invalid
    if (!refresh_token) return res.status(401).send({ message: 'Invalid refresh token' })

    // If the refresh token not in the database
    AuthService.getAdminToken(refresh_token)
        .then(() => {
            verifyRefreshToken(refresh_token, (err, admin) => {
                if (err) return res.status(403).send(`${err.message}`)

                console.log({ admin })
                const access_token = generateAccessToken({ email: admin.email })

                res.status(200).send({ access_token })
            })
        })
        .catch(res.status(403).send("Forbidden"))
}

export const refreshStudentToken = async (req, res) => {
    const refresh_token = req.body.token

    // If the refresh token is invalid
    if (!refresh_token) return res.status(401).send({ message: 'Invalid refresh token' })

    // If the refresh token not in the database
    AuthService.getStudentToken(refresh_token)
        .then(() => {
            verifyRefreshToken(refresh_token, (err, student) => {
                if (err) return res.status(403).send(`${err.message}`)

                console.log({ student })
                const access_token = generateAccessToken({ email: student.email, password: student.password })

                res.status(200).send({ access_token })
            })
        })
        .catch(res.status(403).send("Forbidden"))
}

export const adminLogout = async (req, res) => {
    const refresh_token = req.body.token

    // If the refresh token is invalid
    if (!refresh_token) return res.status(401).send({ message: 'Invalid refresh token' })

    AuthService.deleteAdminToken(refresh_token)
        .then(() => {
            verifyRefreshToken(refresh_token, (err, admin) => {
                if (err) return res.status(403).send(`${err.message}`)

                res.status(204).send("Logged out successfully")
            })
        })
        .catch(res.status(403).send('Forbidden'))
}

export const studentLogout = async (req, res) => {
    const refresh_token = req.body.token

    // If the refresh token is invalid
    if (!refresh_token) return res.status(401).send({ message: 'Invalid refresh token' })

    AuthService.deleteStudentToken(refresh_token)
        .then(() => {
            verifyRefreshToken(refresh_token, (err, student) => {
                if (err) return res.status(403).send(`${err.message}`)

                res.status(204).send("Logged out successfully")
            })
        })
        .catch(res.status(403).send('Forbidden'))
}
