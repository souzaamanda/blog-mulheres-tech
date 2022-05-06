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

//recuperando o modulo de base de dados
const articles = require('./mockup')


// Rotas
// ---------------------------------------------
//rota home
app.get('/', (req, res) => {
  res.render('home/index', {articles: articles.slice(0,3)})
});
//rota articles
app.get('/articles', (req, res) =>{
  // passamos atraves de um JSON todos os artigos
  res.render('articles/articles', {articles: articles})
})
//rota article
app.get('/article', (req, res) =>{
  //recuperar atraves do metodo GET o ID
  const id = req.query.id
  res.render('articles/article', {article: articles[id]})
})
//rota admin
app.get('/admin', (req, res) =>{
  res.render('admin/form_add_article')
})

// Start Server
app.listen(process.env.PORT || 3000, () => {
  console.log('Servidor rodando com express')
});