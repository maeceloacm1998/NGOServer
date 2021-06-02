<!-- TÌTULO -->
![](frontand/imagens/logo.png)
<img scr="frontand/imagens/logo.png">  <!-- Imagem -->

[![LinkedIn][linkedin-shield]][linkedin-url]

<hr> <!-- Linha -->

<!-- Título -->
# REST API em Node.js, Express.js - Cadastro e manipulação de contatos
> Utilizando o MongoDB para o aramazenamento dos dados

<!-- Descrição -->
Nessa aplicação foram criadas as seguintes funções: Criar contatos com nome, email e telefone, dashboard com todos contatos 
criados, deletar contatos existentes, atualizar contato existente. Foi utilizado o Node.js com arquitetura REST, em conjunto 
com o express.js para criar uma aplicação simples que crie uma lista de contatos. 

<!-- Tecnologias utilizadas -->
## Tecnologias utilizadas

- Node.js 14.15.5
- Insomnia
- MongoDB 4.4


<!-- Dependências -->
## Dependencias

- Express.js
- Cors
- Body-Parser
- Mongoose
- Nodemon (não é pré-requisito, mas facilita o uso) 

## Guia

1. Faça FORK desse projeto para o seu repositório 
2. Clone o repositório com o comando `git clone https://github.com/maeceloacm1998/NGOServerteste.git`
3. Siga o diretório cd "nome da pasta /api" no terminal usando o "cd"
4. Instalar todas as dependências utilizando `npm install`
5. Recomendo instalar o yarn, baixando no link. <a href="https://classic.yarnpkg.com/en/docs/install/#windows-stable"> Clique aqui! <a/>
5. Recomendo instalar o nodemon, utilizando `npm install nodemon`
6. Após isso rodar a aplicação utilizando `nodemon src/server.js`
  
## Arquitetura REST
A seguir está uma configuração generica do localhost na porta local 3333.

- Lista de contatos - GET: http://localhost:3333/contact
  .Caso tenha algum contato já cadastrado no banco de dados, ele vai retornar o **NOME**, **EMAIL** e **TELEFONE** de cada um.
  
- Criação de contatos - POST: http://localhost:3333/createcontact
  .Usado para criar um contato novo contendo **NOME**, **EMAIL** e **TELEFONE** de cada contato.
  
- Lista de contatos - PUT: http://localhost:3333/update/:id_contatos'
  .Usado para atualizar o contato que você desejar. Para isso você vai inserir o _id que cada contato tem e inserir na URL depois do `update/`.  
  
- Lista de contatos - DELETE: http://localhost:3333/delete/:id_contato
  .Usado para deletar um contato da lista. Para isso você vai inserir o _id que cada contato tem e inserir na URL depois do `delete/`.
  
## Estrutura da Api REST
A estrutura da api consiste:

```
src/
│
└─ controller
   │      └─ ControllContatos.js    
   ├─ model
   │      └─ Contact.js   
   └─ app.js
   └─ routes.js
   └─ server.js
```

**####src/app.js**

Aqui encontra-se toda a estrutura da minha aplicação como a chamada para as rotas, os middlewares, a inclusão das dependências,
os constructores e a conexão com o MongoDB.

**####src/routes.js**

Aqui encontra-se todas as rotas para cada tipo de requisição.

**####src/server.js**

Aqui encontra-se apenas a porta que meu servidor local vai utilizar.

**####src/controller/ControllContatos.js**

Nessa sessão temos todas estruturas de requisição de contatos com os parametros GET, POST, PUT e DELETE.

**####src/model/Contact.js**

Nessa sessão temos o Schema e o Model dos contatos que será passado para o meu banco de dados.

# Testes
Foram totalmente realizados no ambiente automatizado do Insominia, onde foi criado uma collection com 4 testes, comprovando o sucesso de cada funcionalidade. Os testes que foram feitos nesse caso podem ser vistos na figura abaixo, logo na aba a esquerda. O Insominia é uma ferramenta extremamente útil para se testar manualmente ou automatizar os testes de qualquer API REST.

![](frontand/imagens/insominia.png)
<img scr="frontand/imagens/insominia.png">  <!-- Imagem -->

# Créditos
Essa API foi desenvolvida e documentada por Marcelo Antônio Chaves Mendes, no dia 16/02/2021.


<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/marcelochmendes/
[product-screenshot]: images/screenshot.png
