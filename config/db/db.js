import mysql2 from 'mysql2'
import { config } from 'dotenv'

config()

const connection = mysql2.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
})

const executeQuery = async (query, callback) => {
    const [result, _] = connection.execute(query, callback)
    connection.end(callback)

    return result
}

export default executeQuery