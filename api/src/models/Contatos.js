const { Schema, model } = require('mongoose');

const ContatosSchema = new Schema({
  nome: String,
  email: String,
  telefone: String,
  status: Boolean,
});

module.exports = model('Contatos', ContatosSchema);
