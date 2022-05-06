//modulo de configuração do server

const express = require('express')

const app = express()

// Configurações do Express
// ---------------------------------------------
app.set('view engine', 'ejs')
app.set('views','./app/views')

// Configurações arquivos estaticos
// ---------------------------------------------
app.use(express.static('./app/public'))

// configuraçãp do metodos post
app.use(express.urlencoded({extended: true}))

module.exports = app