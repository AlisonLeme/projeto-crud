const mongoose = require('mongoose');

function connect() {
    // caso de alguma reclamação no console
    //mongoose.set('useNewUrlParser', true);
    //mongoose.set('useUnifiedTopology', true);
    
    // se conectando com o banco de dados   (antes do ? precisamos passar o nome do banco que queremos cenectar)
    mongoose.connect('mongodb://localhost:27017/projeto-crud?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false');
    
    const db = mongoose.connection;
    
    // quando conectar eu quero executar um callback
    db.once('open', () => {
        console.log('Connected to database!')
    })
    
    // se der algum erro
    db.on('error', console.error.bind(console, 'Connection error:'))
}

// exportando um objeto que contem o método connect
module.exports = {
    connect
}