const {Client} = require('pg')

const client = new Client({
    connectionString: process.env.DATABASE_URL || 'postgres://rhsjrivjuwxnya:f7735bccdfb235b737cf68fa98beb4d88317446ee938f720f81b12f364f3a3cf@ec2-54-158-247-210.compute-1.amazonaws.com:5432/d1tnuicb8gu2ml',
    ssl:{rejectUnauthorized: false}
})

client.connect()

module.exports = client