# Teste de Backend utilizando Nodejs com Lambda Functions e API Gateways configurados via Amplify
O intuito deste projeto é o teste das habilidades do profissional em desenvolver o backend de uma aplicação utilizando Node.js em integração com o AWS Lambda Functions, AWS API Gateway e Amazon RDS.

O projeto em si é constituido por uma API Restful Serverless para o cadastro, alteração e remoção de lojas e produtos de uma determinada empresa.

## Instalação
A instalação do projeto no Lambda Functions e a configuração do API Gateway é realizada através do Amplify CLI.
Finalizada a configuração, substituir o conteúdo da pasta ```src/``` gerada pelo conteúdo deste repositório.
Para mais detalhes, seguir a documentação:
Amplify CLI[https://docs.amplify.aws/cli]

Para fins de testes locais poderão ser instaladas as depêndencias dos módulos da aplicação referenciadas no ```package.json``` via ```npm```.

```bash
npm install
```

## Execução
Para executar a aplicação localmente, basta acionar a aplicação encontrada na pasta ```src/```.

```bash
node app.js
```

Por padrão, a execução é realizada na porta ```3000```, mas essa informação pode ser configurada no arquivo ```settings.js```.

## Detalhes
A API é disponibilizada atrvés dos seguintes endpoints:

Endpoint para cadastrar uma nova loja.
```POST /lojas/adicionar```
```Body: {
  "nome": String (Obrigatório),
  "matriz": Boolean,
  "cnpj": String (Obrigatório),
  "inscrestadual": String,
  "inscrmunicipal": String,
  "rua": String (Obrigatório),
  "numero": Integer (Obrigatório),
  "bairro": String (Obrigatório),
  "complemento": String,
  "cidade": String (Obrigatório),
  "uf": String (Obrigatório),
  "telefone": String,
  "email": String,
  "responsavel": String,
  "obs": String
}```

Endpoint para retorno de todas as lojas cadastradas.
```GET /lojas```

Endpoint para o retorno de uma loja em específico.
```GET /loja/{id}```

Endpoint para alteração de uma loja cadastrada.
```POST /lojas/alterar/{id}```
```Body: {
  "nome": String (Obrigatório),
  "matriz": Boolean,
  "cnpj": String (Obrigatório),
  "inscrestadual": String,
  "inscrmunicipal": String,
  "rua": String (Obrigatório),
  "numero": Integer (Obrigatório),
  "bairro": String (Obrigatório),
  "complemento": String,
  "cidade": String (Obrigatório),
  "uf": String (Obrigatório),
  "telefone": String,
  "email": String,
  "responsavel": String,
  "obs": String
}```

Endpoint para remoção de uma loja.
```POST /lojas/remover```
```Body: {
  "id": Integer (Obrigatório)
}```
