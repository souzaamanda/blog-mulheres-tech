//modulo de configuração do server

const express = require('express')

const session = require('express-session')

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

// configuração Session
app.use(session({
    secret:'2^hgok6*RtMLDWeU',
    resave: false,
    saveUninitialized: false
}))

module.exports = app