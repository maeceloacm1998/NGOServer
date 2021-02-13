
var botao = document.querySelector('#botao');
var btn = document.querySelector('#btn');
var response = document.querySelector('#coluna-principal') // Botão que chama a lista de cont

//Código para criar Contatos
botao.addEventListener('click',(e)=>{
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

},false);


//Mostrando contatos
btn.addEventListener('click',(e) =>{
  e.preventDefault();

  fetch('http://localhost:3333/contact')
    .then(res => res.json())
    .then(data =>{
      contato(data),
      editar(data)
    })
})



function contato(data){
  response.innerHTML = `
  <!-- Titulo lista de contatos -->
  <div class="cabecalho">
      <h2><i class="fas fa-list-ul"></i> Lista de contatos</h2>
  </div>
  
  `
  for( let valor of data){
    response.innerHTML += `

        <!-- Container de contatos -->
        <div class="container-div">

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

          <div class="container-btn">
            <button data-toggle="tooltip" title="Editar" data-placement="top" onclick="editar()" ><i class="fas fa-pencil-alt"></i></button>
            <button data-toggle="tooltip" title="Excluir" data-placement="top"><i class="fas fa-trash"></i></button>
          </div>

    `
  }
}

//Editando itens de contato
function editar(data){
  //Criar caixa de registro
}




