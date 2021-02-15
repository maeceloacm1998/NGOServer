
let btnViwnContact = document.querySelector('#btn-contact'); // Botão que faz ir para a visualização de contatos
let btnViwnCreateContact = document.querySelector('#btn-viwnCreateContact'); // Botão que faz ir para a criação de contatos
let btnCreateContact = document.querySelector('#btn-created'); // Botão que faz criar os contatos
let mainColumn = document.querySelector('#coluna-principal'); // Div em que vai aparecer o HTML dos contatos
let secondColumn = document.querySelector('#coluna-criarContatos');
//Criar contatos
btnViwnCreateContact.addEventListener('click',(e) =>{
  
})



/* btnCreateContact.addEventListener('click',(e)=>{
  e.preventDefault();
  let dados = JSON.stringify({
    "nome": document.getElementById('nome').value,
    "email":document.getElementById('email').value ,
    "telefone": document.getElementById('telefone').value,
    "status": true,
  })

  fetch('http://localhost:3333/createcontact',{
    method:'POST',
    headers:{
      "Content-type": "application/json"
    },
    body: dados
  })

  .then(res =>  res.json())
  .then(async data =>{
    console.log(data)
  })

  

},false); */

//Mostrando contatos
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
      console.log(data)
      contato(data)
    })
})

// Função que cria o HTML dos contatos
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
          <button data-toggle="tooltip" title="Editar" data-placement="top" id="edit-contact"><i class="fas fa-pencil-alt"></i></button>
          <button data-toggle="tooltip" title="Excluir" data-placement="top" id="delete-contact"><i class="fas fa-trash"></i></button>
          </div>

        <div>
      </div>
    `
  }
}



/* Esse evento tem propriedades que mostram o _ID de cada
contato e com isso é possivel DELETAR e ATUALIZAR cada contato */
mainColumn.addEventListener('click',(e)=>{
  e.preventDefault();

  // Aciona os botões de deletar e editar
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
      .then(() => location.reload())
  }

  // Edit - editar contato
  // Method : PUT
  if(pressedEdit){
    
      

  }

  

})






