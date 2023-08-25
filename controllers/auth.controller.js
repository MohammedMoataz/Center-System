import { config } from 'dotenv'

config()
const PORT = process.env.PORT || 8000

export const redirect = (req, res) => res.redirect(`http://localhost:${PORT}/api-docs`)

export const adminLogin = (req, res) => {
    res.send("Success")
}

export const login = (req, res) => {
    const { username, pass } = req.body

    res.send("Successfully logged in")
}

export const register = (req, res) => {
    const {
        f_name,
        l_name,
        email,
        pass,
        phone_number,
        address,
        level,
    } = req.body

    res.send("Successfully registered")
}

export const refreshAccessToken = (req, res) => {
    res.send("Success")
}