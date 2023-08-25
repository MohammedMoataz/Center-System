import bcrypt from "bcrypt"
import Jwt from "jsonwebtoken"
import { config } from 'dotenv'

config()

const ACCESS_TOKEN_SECRET = process.env.ACCESS_TOKEN_SECRET
const SALT_ROUNDS = process.env.SALT_ROUNDS

/**
 * 
 * @param {Object} payload The payload to be encrypted.
 * @param {Number} SALT_ROUNDS The salt to be used in encryption. If specified as a number then a
 * salt will be generated with the specified number of rounds and used.
 *
 * @returns {String} The encrypted payload
 */
export const hash = async (payload) =>
    bcrypt.genSalt(SALT_ROUNDS, async (err, salt) =>
        bcrypt.hash(payload, salt, async (err, hash) => hash))

/**
 * 
 * @param {Object} data The data to be hashed.
 * @param {String} hash The data to be compared against.
 * 
 * @returns {Boolean} if that hash relevant to the data or not
 */
export const compareHashedData = async (data, hash) =>
    bcrypt.compare(data, hash, async (err, result) => result)

/**
 * Synchronously sign the given payload into a JSON Web Token string
 * 
 * @param {Object} payload Payload to sign, could be an literal, buffer or string
 * 
 * @returns {String} The JSON Web Token string
 */
export const generateAccessToken = async (payload) =>
    Jwt.sign(payload, ACCESS_TOKEN_SECRET, { expiresIn: "8h" })

/**
 * Synchronously verify given token using a secret or a public key to get a decoded token
 * 
 * @param {String} token JWT string to verify
 * 
 * @returns {Object} The decoded token.
 */
export const verifyToken = async (token) =>
    Jwt.verify(token, ACCESS_TOKEN_SECRET, { complete: true })
