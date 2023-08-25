import { verifyToken } from "../utils/auth.js"

export default (req, res, next) => {
    const token = req.header('Authorization').split(' ')[1]
    verifyToken(token)
        .then(decoded => {
            console.log({ decoded })
        })
    next()
}