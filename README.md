
## Descrição
Este projeto é uma aplicação web construída usando o framework Nest.js para o lado do servidor e o postgreSQL como banco de dados, e Prisma como ORM para gerenciamento do banco. Ele também utiliza o .env para gerenciar configurações sensíveis, e o Swagger para documentação e teste das rotas da API.

## Instalação
Clone este repositório.
Instale as dependências usando o comando npm install.
Configure o arquivo .env com as suas configurações de banco de dados.
Inicie o servidor de desenvolvimento usando o comando npm run start:dev.

Este comando iniciará o servidor de desenvolvimento e abrirá o projeto em http://localhost:3000 no navegador.


## Utilizando o Prisma
Para gerar os arquivos de migração do banco de dados, execute o comando npx prisma migrate dev init

## Variáveis de ambiente
As seguintes variáveis de ambiente são utilizadas no projeto:
DATABASE_URL: URL de conexão com o banco de dados


## Link para o Swagger
http://localhost:3000/api



