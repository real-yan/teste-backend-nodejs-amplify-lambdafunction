# Teste de Backend utilizando Nodejs com Lambda Functions e API Gateways configurados via Amplify
O intuito deste projeto é o teste das habilidades do profissional em desenvolver o backend de uma aplicação utilizando Node.js em integração com o AWS Lambda Functions, AWS API Gateway e Amazon RDS.

O projeto em si é constituido por uma API Restful Serverless3 para o cadastro, alteração e remoção de lojas e produtos de uma determinada empresa.

## Instalação
A instalação do projeto no Lambda Functions e a configuração do API Gateway é realizada através do Amplify.
Finalizada a configuração, substituir o conteúdo da pasta ```src/``` gerada pelo conteúdo deste repositório.
Para mais detalhes, seguir a documentação:
Amplify CLI[https://docs.amplify.aws/cli]

Para fins de testesUtilizar o npm para realizar a instalação dos módulos da aplicação referenciadas no ```package.json``` dentro da pasta ```src/```.

```bash
npm install
```

## Execução
Executar a aplicação encontrada na pasta ```src/```.

```bash
node app.js
```

Por padrão, a execução é realizada na porta ```3000```, mas essa informação pode ser configurada no arquivo ```settings.js```.
Ao acessar a url do projeto, a aplicação redirecionará diretamente para a documentação da API do Swagger.

