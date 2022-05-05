//const expressSession = require('express-session')
//const db = require('./config/dbConnection')

/* app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(expressSession({
  secret: 'key-session',
  resave: false,
  saveUninitialized: false
})) */



//recuperando modulo configuração do server
const app = require('./config/server')


// Rotas
// ---------------------------------------------
//rota home
app.get('/', (req, res) => {
  res.render('home/index')
});
//rota articles
app.get('/articles', (req, res) =>{
  res.render('articles/articles')
})
//rota admin
app.get('/admin', (req, res) =>{
  res.render('admin/form_add_article')
})

// Start Server
app.listen(process.env.PORT || 3000, () => {
  console.log('Servidor rodando com express')
});