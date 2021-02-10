const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const routes = require('./routes');

class App {
  constructor() {
    this.server = express();

    // Chamando o Mongoose
    mongoose.connect('mongodb+srv://ngo:ngo@cluster0.czsfp.mongodb.net/<dbname>?retryWrites=true&w=majority', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    // Chamando os métodos
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.use(cors());

    this.server.use(bodyParser.urlencoded({ extended: false }));
    this.server.use(express.json());
  }

  routes() {
    this.server.use(routes);
  }
}

module.exports = new App().server;
