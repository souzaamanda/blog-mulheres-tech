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



module.exports = app