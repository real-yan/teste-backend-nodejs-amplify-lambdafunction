const express = require('express')
const bodyParser = require('body-parser')
const awsServerlessExpressMiddleware = require('aws-serverless-express/middleware')
const settings = require('./settings')
const main = require('./routes/main')

/**
 * Configuração do Express
 */
const app = express()
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(awsServerlessExpressMiddleware.eventContext())

/**
 * Configuração do CORS
 */
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
    next()
})

/** 
 * Configuração das Rotas
*/
app.use(main)

/** 
 * Inicialização do servidor
*/
app.listen(settings.ENV.PORT, () => {
    console.log("Servidor executando na porta " + settings.ENV.PORT +".")
})

module.exports = app
