const { Schema, model } = require('mongoose');

const ContatosSchema = new Schema({
  nome: String,
  email: String,
  telefone: String,
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
});

module.exports = model('Contatos', ContatosSchema);
