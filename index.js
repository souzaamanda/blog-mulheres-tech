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

// recuperando modulo de conexao com o PostGre
const db = require('./config/dbConnection')


// Rotas
// ---------------------------------------------
//rota home
app.get('/', (req, res)=>{
  db.query('SELECT * FROM articles ORDER BY id_article DESC LIMIT 3', function(error, result){
      res.render('home/index', {articles: result.rows})
  })
})


//rota articles
app.get('/articles', (req, res) =>{
  db.query('SELECT * FROM articles ORDER BY id_article DESC', function(error, result){
    // passamos atraves de um JSON todos os artigos
    res.render('articles/articles', {articles: result.rows})

  })
})

//rota article
app.get('/article', (req, res) =>{
  //recuperar atraves do metodo GET o ID
  const id = req.query.id
  db.query('SELECT * FROM articles WHERE id_article = $1', [id], function(error, result){
    res.render('articles/article', {article: result.rows[0]})
  })
})


//rota admin
app.get('/admin', (req, res) =>{
  res.render('admin/form_add_article')
})

//rota salvar artigos
app.post('/admin/save-article',function(req, res){
  // recuperando as informações da requisição usando o metodo de desestruturação para receber apenas as informações desejadas
  const {diva, photo, bio} = req.body
  db.query('INSERT INTO articles(diva, photo, bio) VALUES($1,$2)', [diva, photo, bio], function(error, result){
     //redireciona para outra rota e remove as informações do corpo da requisição
      res.redirect('/articles')
  } )
})

// Start Server
app.listen(process.env.PORT || 3000, () => {
  console.log('Servidor rodando com express')
});