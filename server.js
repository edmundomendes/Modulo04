const express = require('express')
const nunjucks = require('nunjucks')
const routes = require('./routes')

const server = express()

server.use(express.static('public'))
server.use(routes)
server.set('view engine','njk')

nunjucks.configure('views',{
    express:server,
    autoescape:false
})



server.use(function(req, res) {
    res.status(404).render("not-found");
})

server.listen(5000,function(){
    console.log('Console funcionando')
})