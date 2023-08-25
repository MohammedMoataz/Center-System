import mysql2 from 'mysql2'
import { config } from 'dotenv'

config()

const connection = mysql2.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
})
    .promise()

export const executeQuery = async query =>
    connection.connect()
        .then(async () => {
            let result = await connection.execute(query)
            // await connection.end()

            return result
        })
        .catch(console.error)
