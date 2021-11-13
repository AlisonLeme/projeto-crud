const mongoose = require('mongoose');

// definindo um schema (estrutura da tabela que queremos)
const schema = new mongoose.Schema({
    // nome do campo e o tipo
    name: String,
    age: Number,
    email: String,
    password: String
})

// MVC - MODEL VIEW CONTROLLER

// mandar o mongoose criar essa tabela para nós
// nome da tabela e o schema
const Model = mongoose.model('customers', schema); // isso retorna um conjuntos de propriedades que eu preciso atribuir a uma variavel

// para o banco criar a tabela ele precisa de uma primeira instancia.
/*
const register = new Model({
    name: 'Alison',
    age: 24,
    email: 'alisonletos@hotmail.com',
    password: '12345678'
})

// salvando a instancia no BD.
register.save();
*/

module.exports = Model;