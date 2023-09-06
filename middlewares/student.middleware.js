import { verifyToken } from "../common/auth.js"

export default (req, res, next) => {
    const authHeader = req.header('Authorization')
    const token = authHeader && authHeader.split(' ')[1]

    if (token == null) return res.status(401).send("Unauthorized")

    verifyToken(token, (err, payload) => {
        if (err) return res.status(403).send("Forbidden")

        req.payload = payload
        next()
    })
}