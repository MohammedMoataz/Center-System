export const login = (req, res) => {
    const { username, pass } = req.body

    username && pass
        ?
        res.send("Successfully logged in")

        :
        res.send("Failed to login")
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

    f_name & l_name & email & pass & phone_number & address & level
        ?
        res.send("Successfully registered")

        :
        res.send("Failed to register")
}

export const refreshAccessToken = () => {

}