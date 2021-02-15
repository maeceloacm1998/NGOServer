<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->

<!-- TÌTULO -->
![](frontand/imagens/logo.png)
<img scr="frontand/imagens/logo.png">  <!-- Imagem -->

<h1>NGO SOLUÇÕES - Banco de dados</h1> 

<!-- CABEÇALHO -->
<p> Nome: Marcelo Antônio Chaves Mendes &nbsp;&nbsp;&nbsp;&nbsp; Vaga: Estágio de Desenvolvedor &nbsp;&nbsp;&nbsp;&nbsp; Contato: (31) 99252-1566 </p> 

<!-- Experiência profissional -->
<h3>Experiência Profissonal</h3> 
<p>Me chamo Marcelo, tenho 22 anos, nasci na cidade de Belo Horizonte - MG. A minha carreira profissional 
foi composta por duas empresas:
</p>
<!-- ul - Experiência profissional -->

<ul>
  <li> <strong>Arte Brilho</strong> </li>
  <p>Fevereiro/2019 -- Atual</p>
  
  <p>Nessa empresa exerço a função de recepcionista geral no Hospital Metropolitano Dr. Célio De Castro,
  realizando a organização de documentos, planejamento de agendas, organização setorial e 
  atendimento ao público geral.</p>
  <br>
  <li> <strong>Popular Cred</strong> </li>
  <p>Fevereiro/2018 -- Junho/2018</p>
  
  <p>Exercia a função de atendente de CallCenter, realizando a venda de crédito consignado para aposentados
  que tivessem contatos viinculadas ao banco BMG.
  </p>
</ul>

<br>

<p>
Minhas experiências na área de tecnologia são pessoais, como a realização de cursos de desenvolvimento WEB,
abordando CSS e HTML e JavaScrip, construção de API com NODEJS usando banco de dados NOSQL e MySQL, dentre
outros, através da plataforma Udemy. Além disso, faço faculdade de Sistemas de Informação na PUC-MG, unidade
São Gabriel e na mesma tenho diversas experiências de como são os processos de produção de uma aplicação,
arquitetura de dados e desenvolvimento back-and voltando a linguagem JAVA.
Tenho trabalhos que foram desenvolvidos dentro do âmbito estudantil, como:
  
 <!-- ol - Projetos -->
 <ol>
  <li> <strong>Venda de mascaras:</strong> </li>
  
  <p>Esse programa foi feito com conhecimentos básicos de Java, aplicando estruturas de repetição e lógica. 
  O intuito desse programa é dar uma solução de venda e organização para um vendedor autônomo de máscaras na pandemia.</p>
  
  <h2>Para acessar o projeto:</h2>
  <a href="https://github.com/maeceloacm1998/VendasDeMascaras">Clique Aqui ! </a>
  
  <br>
  <br>
  
  <li> <strong>SearchMed - Procura médica:</strong> </li>
  
  <p>Realizado com a ajuda de um grupo da faculdade, feito como trabalho final da matéria de Desenvolvimento WEB 
  na faculdade, em que foi utilizado HTML, CSS e JavaScript, tendo como foco o armazenamento de dados no LocalStorage.</p>
  
  <h2>Para acessar o projeto:</h2>
  <a href="https://github.com/maeceloacm1998/BuscaMedica">Clique Aqui ! </a>
 
</ol>

<br>
  
Meu objetivo é seguir a carreira como programador Full-Stack, me especializando na linguagem de JavaScript 
e suas respectivas bibliotecas, como React, React Native, pois a programação hoje é um trabalho que me 
possibilita fazer a diferença tanto para o meio empresarial, quanto ao lado humano, pois o produto final 
sempre vai impactar algum usuário e com isso é possível faaazer a diferença.
</p>

<hr> <!-- Linha -->

<!-- Título -->
# REST API em Node.js, Express.js - Cadastro e manipulação de contatos
> Utilizando o MongoDB para o aramazenamento dos dados

<!-- Descrição -->
Nessa aplicação foram criadas as seguintes funções: Criar contatos com nome, email e telefone, dashboard com todos contatos 
criados, deletar contatos existentes, atualizar contato existente. Foi utilizado o Node.js com arquitetura REST, em conjunto 
com o express.js para criar uma aplicação simples que crie uma lista de contatos. 

<br>

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
4. Instalar todas as dependências utilizando `npm install dependencies`
5. Recomendo instalar o yarn, baixando no link. <a href="https://classic.yarnpkg.com/en/docs/install/#windows-stable"> Clique aqui! <a/>
5. Recomendo instalar o nodemon, utilizando `npm install nodemon`
6. Após isso rodar a aplicação utilizando `nodemon src/server.js`
7. Caso tenha instalado o Yarn, utilize `yarn dev` para rodar a aplicação.
  
## Arquitetura REST
A seguir está uma configuração generica do localhost na posta 3333.

- Lista de contatos - GET: http://localhost:3333/contact
  .Caso tenha algum contato já cadastrado no banco de dados, ele vai retornar o **NOME**, **EMAIL** e **TELEFONE** de cada um.
  
- Criação de contatos - POST: http://localhost:3333/createcontact
  .Usado para criar um contato novo contendo **NOME**, **EMAIL** e **TELEFONE** de cada contato.
  
- Lista de contatos - DELETE: http://localhost:3333/delete/:id_contato
  .Usado para deletar um contato da lista. Para isso você vai inserir o _id que cada contato tem e inserir na URL depois do `delete/`.
  
- Lista de contatos - DELETE: http://localhost:3333/update/:id_contatos'
  .Usado para atualizar o contato que você desejar. Para isso você vai inserir o _id que cada contato tem e inserir na URL depois do `update/`.  
  
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

### src/app.js

Aqui encontra-se toda a estrutura da minha aplicação como a chamada para as rotas, os middlewares, a inclusão das dependências,
os constructores e a conexão com o MongoDB.

### src/routes.js

Aqui encontra-se todas as rotas para cada tipo de requisição.

### src/server.js

Aqui encontra-se apenas a porta que meu servidor local vai utilizar.

#### src/controller/ControllContatos.js

Nessa sessão temos todas estruturas de requisição de contatos com os parametros GET, POST, PUT e DELETE.

#### src/model/Contact.js

Nessa sessão temos o Schema e o Model dos contatos que será passado para o meu banco de dados.

# Testes
Foram totalmente realizados no ambiente automatizado do Insominia, onde foi criado uma collection com 4 testes, comprovando o sucesso de cada funcionalidade. Os testes que foram feitos nesse caso podem ser vistos na figura abaixo, logo na aba a esquerda. O Insominia é uma ferramenta extremamente útil para se testar manualmente ou automatizar os testes de qualquer API REST.

# Créditos
Essa API foi desenvolvida e documentada por Marcelo Antônio Chaves Mendes, no dia 16/02/2021.

