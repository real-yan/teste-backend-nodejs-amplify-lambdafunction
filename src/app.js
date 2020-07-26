const express = require('express')
const bodyParser = require('body-parser')
const swaggerUi = require('swagger-ui-express')
const swaggerDocs = require('./config/swaggerDocs')
const awsServerlessExpressMiddleware = require('aws-serverless-express/middleware')
const settings = require('./config/settings')
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
 * Configuração do Swagger 
*/
app.use('/api-doc', swaggerUi.serve, swaggerUi.setup(swaggerDocs))

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
