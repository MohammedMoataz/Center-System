import bcrypt from "bcrypt"
import Jwt from "jsonwebtoken"
import { config } from 'dotenv'

config()

export const hash = (data) => {
    const SALT_ROUNDS = process.env.SALT_ROUNDS
    bcrypt.genSalt(SALT_ROUNDS, (err, salt) => {
        bcrypt.hash(data, salt, (err, hash) => {
            console.log(hash)
            return hash
        })
    })
}

export const compareHashedData = (data, hash) =>
    bcrypt.compare(data, hash, (err, result) => {
        console.log(result)
        return result
    })

export const generateAccessToken = (obj) => {
    const ACCESS_TOKEN_SECRET = process.env.ACCESS_TOKEN_SECRET
    const accessToken = Jwt.sign(obj, ACCESS_TOKEN_SECRET, { expiresIn: "8h" })
    return accessToken
}

export const verifyToken = (token, callback) => {
    const ACCESS_TOKEN_SECRET = process.env.ACCESS_TOKEN_SECRET
    Jwt.verify(token, ACCESS_TOKEN_SECRET, callback)
}

export const generateUniqueData = (data) => {
    return `${data}+${Date.now()}`
}