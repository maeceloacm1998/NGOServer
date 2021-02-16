let btnViwnContact = document.querySelector('#btn-contact'); // Botão que faz ir para a visualização de contatos
let btnViwnCreateContact = document.querySelector('#btn-viwnCreateContact'); // Botão que faz ir para a criação de contatos
let mainColumn = document.querySelector('#coluna-principal'); // Div em que vai aparecer o HTML dos contatos

/* Esse evento vai mostrar todos os contatos que estão salvos no banco de dados.
Eles já vem atualizados pois o HTML foi salvo na função contato e a mesma recebe
como parametro o data, que tem as respostas do meu banco de dados.*/
btnViwnContact.addEventListener('click',(e) =>{
  e.preventDefault();

  // Variaveis para atribuir a URL no fetch
  let status = 'true'
  let url = 'http://localhost:3333/contact';

  // GET - Mostrar contatos
  // Method : GET
  fetch(`${url}/${status}`)
    .then(res => res.json())
    .then(data =>{
      contato(data)
    })
})

// HTML para mostrar contatos
function contato(data){
  // Cabeçalho
  mainColumn.innerHTML = `
  <div class="cabecalho">
    <h2><i class="fas fa-list-ul"></i> Lista de contatos</h2>
  </div>
  `;

  for( let valor of data){
    mainColumn.innerHTML += `
      <div class="grid grid-template-areas-1" >
        <div class="container-contatos">

          <div>
            <span><i class="fas fa-ellipsis-v"></i></span>
          </div>

          <div>
            <p><i class="fas fa-user"></i> Nome: ${valor.nome}</p>
            <p><i class="fas fa-envelope"></i> Email: ${valor.email}</p>
            <p><i class="fas fa-phone-square"></i> Telefone: ${valor.telefone}</p>
            </div>
          </div>

          <div class="container-btn" data-id = ${valor._id}>
          <button data-toggle="tooltip" title="Editar"  id="edit-contact"><i class="fas fa-pencil-alt"></i></button>
          <button data-toggle="tooltip" title="Excluir"  id="delete-contact"><i class="fas fa-trash"></i></button>
          </div>

        <div>
      </div>
    `
  }
}


/* Esse evento tem a responsabilidade de dar a funcionalidade para os
botões de editar e excluir de cada contato. O mesmo está sendo redirecionado
para a coluna principal para estar conseguindo pegar o id de cada contato com
o "e.target.parentElement.dataset.id" */
mainColumn.addEventListener('click',(e)=>{
  e.preventDefault();

  // Seleciona os botões de deletar e editar
  let pressedDelete = e.target.id == 'delete-contact';
  let pressedEdit = e.target.id == 'edit-contact';

  let url = 'http://localhost:3333/delete'
  let id = e.target.parentElement.dataset.id;

  // Delete - Remover contato 
  // Method : DELETE
  if(pressedDelete){
    fetch(`${url}/${id}`,{
      method: 'DELETE'
    })
      .then(res => res.json())
      .then(() => location.reload());
  }

  // Edit - Editar contato
  // Method : PUT
  if(pressedEdit){

    // Chamada da função de criação da box de atualização de contato
    divEdit();

    let update = document.querySelector('#btn-update') ;
    let exit = document.querySelector('#exit') ;
    let message = document.querySelector('.message');

    // Evento incluido para o botão de sair "x".
    exit.addEventListener('click',(e) =>{
      e.preventDefault();
      mainColumn.innerHTML = '';
    })

    // Evento de atualização do contato selecionado.
    update.addEventListener('click',(e) =>{
      e.preventDefault();

      let nome = document.getElementById('nome').value;
      let email = document.getElementById('email').value;
      let telefone = document.getElementById('telefone').value;

      let dados = JSON.stringify({  
        "nome": nome ,
        "email": email ,
        "telefone": telefone
      });


      fetch(`http://localhost:3333/update/${id}`,{
        method: 'PUT',
        headers:{
          "Content-type": "application/json"
        },
        body: dados
      })
        .then(res => res.json())
        .then((data)=>{
          if(data){
            message.innerHTML = `
            <div class="error-box-success-dois">
              <p>${data}</p>
            </div>
            `
          }
        })
    },false);
    
    
  }
})

/* Função relacionada a criação da box de atualização de contato */
function divEdit(){
  mainColumn.innerHTML = `

  <div class="edit-contact">
    <div class="header-edit">

      <div class="titulo">
        <p><i class="fas fa-user-edit"></i> Editar contatos</p>
      </div>

      <div class="exit none" >
        <button id="exit"><i class="fas fa-times"></i></button>
      </div>
    </div>

    <div class="form-edit">
      <div class="nome">
        <p>Nome:</p>
        <input type="text" id="nome" required>
      </div>
    
      <div class="email">
        <p>Email:</p>
        <input type="text" id="email" required placeholder=" marcelo@bol.com ">
      </div>

      <div class="telefone" >
        <p>Telefone:</p>
        <input type="text" id="telefone" required placeholder=" (31) 99999-9999">
      </div>
    
      <div class="btn-enviar">
        <button type="submit" id="btn-update"> <i class="fas fa-arrow-right"></i> Enviar</button>
      </div>

      <div class="message">
        
      </div>


    </div>
  </div>
  `
}


/* Esse evento é responsável por mostrar a div de criação de contatos.
O mesmo contem a chamada da função "ColumnCreateContatos" que é uma função
que está logo abaixo e a criação do evendo "buttonCreate", responsavel por
dar a função de enviar os dados para o meu servidor.
*/
btnViwnCreateContact .addEventListener('click',(e)=>{
  e.preventDefault();

  // Chamada da função
  ColumnCreateContatos();

  let buttonCreate = document.querySelector('#btn-created');
  let message = document.querySelector('.message');

  // Evento do botão de enviar os dados
  buttonCreate.addEventListener('click',(e)=>{
    e.preventDefault();

    let nome = document.getElementById('nome').value;
    let email = document.getElementById('email').value;
    let telefone = document.getElementById('telefone').value;

    let dados = JSON.stringify({
      "nome": nome,
      "email": email ,
      "telefone": telefone ,
      "status": true
    });

      fetch('http://localhost:3333/createcontact',{
        method:'POST',
        headers:{
          "Content-type": "application/json"
        },
        body: dados
      })
      .then(res =>  res.json())
      .then(async data =>{
        if(data == 'Esse contato ja foi criado.'){
          message.innerHTML = `
          <div class="error-box-erro">
            <p>${data}</p>
          </div>
          `
        }
        else{
          message.innerHTML = `
          <div class="error-box-success">
            <p>${data}</p>
          </div>
          `
        }
      })
  
    }); 

});

// Função de criação da box "Criar contatos"
function ColumnCreateContatos(){
  // Cabeçalho
  mainColumn.innerHTML = `
          <div class="cabecalho">
            <h2><i class="fas fa-user-plus"></i> Criar Contatos</h2>
          </div>
  
          <form id="formulario" >  
            <div class="grid-template-areas-2">

              <div class="nome">
                <p>Nome:</p>
                <input type="text" id="nome" required >
              </div>
              
              <div class="email">
                <p>Email:</p>
                <input type="text" id="email" required placeholder=" marcelo@bol.com ">
              </div>

              <div class="telefone" >
                <p>Telefone:</p>
                <input type="text" id="telefone" required placeholder=" (31) 99999-9999">
              </div>
              
              <div class="btn-enviar">
                <button type="submit" id="btn-created"> <i class="fas fa-arrow-right"></i> Enviar</button>
              </div>

              <div class="conteudo-extra none">
            
                <img src="../frontand/imagens/logo.png" width="100%">
                <p>
                  O Grupo NGO é composto por sócios com graduação 
                  preponderantemente em Engenharia Civil com a 
                  vantagem de também possuirmos em nossa equipe 
                  diplomas de universidade com excelência nos 
                  conhecimentos em Engenharia da Computação. Devido à
                  diversas experiências com os produtos de informática 
                  ofertados no mercado e conhecendo as fragilidades destas 
                  ferramentas disponíveis e até mesmo a inexistência das 
                  mesmas em diversos setores da economia, decidimos nos 
                  unir para criar e desenvolver soluções informatizadas, 
                  que otimizem os processos que compõem o mercado de 
                  prestação de serviço no Brasil, com foco principal na 
                  Redução de Desperdício de Recursos.
                </p>
    
              </div>

              <div class="message">
                  
              </div>

            </div>
          </form> 
  `;
  
}






