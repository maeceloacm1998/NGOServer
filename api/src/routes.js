const { Router } = require('express');

// importando controller
const ControleSessao = require('./controller/ControllSessao');
const ControllContact = require('./controller/ControllContatos');

const routes = new Router();

// Parametros POST
routes.post('/createduser', ControleSessao.store);
routes.post('/createcontact', ControllContact.store);

// Parametros GET
routes.get('/login', ControleSessao.index);
routes.get('/contact/:status', ControllContact.index);

// Parametros PUT
routes.put('/update/:id_contatos', ControllContact.update);

// Parametros Deletes
routes.delete('/delete/:id_contatos', ControllContact.destroy);

module.exports = routes;
