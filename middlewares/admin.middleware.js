import { verifyToken } from "../common/auth.js"

export default (req, res, next) => {
    const authHeader = req.header('Authorization')
    const token = authHeader && authHeader.split(' ')[1]

    if (token == null) return res.status(401)

    verifyToken(token, (err, admin) => {
        if (err) return res.status(403)

        req.admin = admin
        console.log({ admin })
        next()
    })
}