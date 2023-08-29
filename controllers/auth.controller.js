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
                .then(() => res.send({ data: { access_token, refresh_token }, message: "Successfully logged in" }))
                .catch(console.error)
        })
        .catch(res.status(404))
}

export const login = async (req, res) => {
    const { username, password } = req.body

    AuthService.loginStudent(username, password)
        .then((student) => {
            const access_token = generateAccessToken({ username: student.username, password: student.password })
            const refresh_token = generateRefreshToken({ username: student.username, password: student.password })

            AuthService.updateStudentToken(student.id, refresh_token)
                .then(() => res.send({ data: { access_token, refresh_token }, message: "Successfully logged in" }))
                .catch(console.error)
        })
        .catch(res.status(404))
}

export const register = async (req, res) => {
    const new_student = req.body
    StudentService.create(new_student)
        .then(data => res.send({ data, message: "Success!" }))
        .catch(err => res.send({ message: err.message }))
}

export const refreshAdminToken = async (req, res) => {
    const refresh_token = req.body.token

    // If the refresh token is invalid
    if (!refresh_token) return res.status(401)

    // If the refresh token not in the database
    AuthService.getAdminToken(refresh_token)
        .then(() => {
            verifyRefreshToken(refresh_token, (err, admin) => {
                if (err) return res.status(403)

                console.log({ admin })
                const access_token = generateAccessToken({ email: admin.email })

                res.send({ access_token })
            })
        })
        .catch(res.status(403))
}

export const refreshStudentToken = async (req, res) => {
    const refresh_token = req.body.token

    // If the refresh token is invalid
    if (!refresh_token) return res.status(401)

    // If the refresh token not in the database
    AuthService.getStudentToken(refresh_token)
        .then(() => {
            verifyRefreshToken(refresh_token, (err, student) => {
                if (err) return res.status(403)

                console.log({ student })
                const access_token = generateAccessToken({ email: student.email, password: student.password })

                res.send({ access_token })
            })
        })
        .catch(res.status(403))
}

export const adminLogout = async (req, res) => {
    const refresh_token = req.body.token

    // If the refresh token is invalid
    if (!refresh_token) return res.status(401)

    AuthService.deleteAdminToken(refresh_token)
        .then(() => {
            verifyRefreshToken(refresh_token, (err, admin) => {
                if (err) return res.status(403)

                res.status(204)
            })
        })
        .catch(res.status(403))
}

export const studentLogout = async (req, res) => {
    const refresh_token = req.body.token

    // If the refresh token is invalid
    if (!refresh_token) return res.status(401)

    AuthService.deleteStudentToken(refresh_token)
        .then(() => {
            verifyRefreshToken(refresh_token, (err, student) => {
                if (err) return res.status(403)

                res.status(204)
            })
        })
        .catch(res.status(403))
}
