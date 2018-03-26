
module.exports = {
    port: process.env.PORT || 8081,
    db: {
        database: process.env.DB_NAME || 'call1800',
        user: process.env.DB_USER || 'postgres',
        password: process.env.DB_PASS || 'admin',
        options: {
            dialect: process.env.DIALECT || 'postgres',
            host: process.env.host || 'localhost'
        }
    }
}