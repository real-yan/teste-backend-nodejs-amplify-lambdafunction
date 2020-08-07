# Teste de Backend utilizando Nodejs com Lambda Functions e API Gateways configurados via Amplify
O intuito desta aplicação é desenvolver uma API REST Serverless via Node.js para integrá-la com o AWS Lambda Functions, AWS API Gateway e Amazon RDS* utilizando o serviço Amplify CLI. Para desenvolver a aplicação foi utilizado o framework Express.

O projeto em si constitui-se por uma aplicação web para o cadastro, alteração e remoção de lojas e produtos de uma determinada empresa.

*Devido às cobranças do AWS por dias de uso da instância do RDS, o banco de dados MySQL foi removido de lá, sendo necessário a utilização local de uma base de dados. Para vinculá-la à aplicação, basta atribuir as informações necessárias no arquivo ```settings.js```.

## Instalação
As configurações dos serviços AWS Lambda Functions e API Gateway são realizadas através do serviço Amplify CLI. Para mais detalhes, seguir a documentação: [Amplify CLI](https://docs.amplify.aws/cli).
Finalizada a configuração, substituir o conteúdo da pasta ```src/``` gerada pelo conteúdo deste repositório e subir aplicação através do Amplify e a API estará pronta para ser usada.

```bash
amplify push
```

Para fins de testes locais, poderão ser instaladas as depêndencias dos módulos da aplicação referenciadas no ```package.json``` via ```npm```.

```bash
npm install
```

## Execução
Para executar a aplicação localmente, basta utilizar o Node para rodar o arquivo ```app.js``` encontrado na pasta ```src/```.

```bash
node app.js
```

Por padrão, a execução é realizada na porta ```3000```, mas essa informação pode ser configurada no arquivo ```settings.js```.

## Detalhes da API
A API é disponibilizada atrvés dos seguintes endpoints:

URL principal: ```https://xzf0kxerf9.execute-api.us-east-1.amazonaws.com/dev```

Endpoint para cadastrar uma nova loja.
```
POST /lojas/adicionar 
Body: {
    "nome": String (Obrigatório),
    "cnpj": String (Obrigatório),
    "rua": String (Obrigatório),
    "numero": Integer (Obrigatório),
    "bairro": String (Obrigatório),
    "complemento": String,
    "cidade": String (Obrigatório),
    "uf": String (Obrigatório),
    "telefone": String,
    "email": String,
    "responsavel": String
}
```

Endpoint para retorno de todas as lojas cadastradas.
```
GET /lojas
```

Endpoint para o retorno de uma loja em específico.
```
GET /loja/{id}
```

Endpoint para alteração de uma loja cadastrada.
```
POST /lojas/alterar/{id}
Body: {
  "nome": String (Obrigatório),
  "cnpj": String (Obrigatório),
  "rua": String (Obrigatório),
  "numero": Integer (Obrigatório),
  "bairro": String (Obrigatório),
  "complemento": String,
  "cidade": String (Obrigatório),
  "uf": String (Obrigatório),
  "telefone": String,
  "email": String,
  "responsavel": String
}
```

Endpoint para remoção de uma loja.
```
POST /lojas/remover
Body: {
  "id": Integer (Obrigatório)
}
```

Endpoint para cadastrar um novo produto.
```
POST /produtos/adicionar 
Body: {
  "lojaId": Integer (Obrigatótio),
  "codigo": Integer (Obrigatótio),
  "nome": String (Obrigatório),
  "classificacao": String (Obrigatório),
  "quantidade": Integer (Obrigatótio),
  "valor": Number (Obrigatório)
}
```

Endpoint para retorno de todos os produto cadastradas de uma loja.
```
GET /produtos/{lojaid}
```

Endpoint para o retorno de um produto em específico.
```
GET /produtos/{id}
```

Endpoint para alteração de um produto cadastrado.
```
POST /produtos/alterar/{id}
Body: {
  "lojaId": Integer (Obrigatótio),
  "codigo": Integer (Obrigatótio),
  "nome": String (Obrigatório),
  "classificacao": String (Obrigatório),
  "quantidade": Integer (Obrigatótio),
  "valor": Number (Obrigatório)
}
```

Endpoint para remoção de um produto.
```
POST /produtos/remover
Body: {
  "id": Integer (Obrigatório)
}
```
