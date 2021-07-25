const express = require('express')
const nunjucks = require('nunjucks')
const routes = require('./routes')
const methodOverride = require('method-override')

const server = express()

server.use(express.urlencoded({extended:true}))
server.use(express.static('public')) //Para o express aceitar arquivo estático como arquivos .CSS
server.use(methodOverride('_method')) //Para sobreescrever os métodos POST/GET por PUT/DELET
server.use(routes) //Para realizar a comunicação/chamada das rotas

server.set('view engine','njk')

nunjucks.configure('views',{
    express:server,
    autoescape:false,
    noCache:true
})

server.use(function(req, res) {
    res.status(404).render("not-found");
})

server.listen(5000,function(){
    console.log('Console funcionando')
})