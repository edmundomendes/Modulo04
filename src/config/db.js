const { Pool } = require('pg')

module.exports = new Pool({
    user: "postgres",
    password: "100214",
    host: "localhost",
    port: 5432,
    database: "my_teacher"
})