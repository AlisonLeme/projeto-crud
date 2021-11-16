const CustomersModel = require('../models/customers');
const { crypto } = require('../utils/password');

const defaltTitle = 'Cadasto de cliente';

function index (req, res) {
    res.render('register', {
        title: defaltTitle
    })
}

async function add(req, res) {
    const {
        name,
        age,
        email,
        password
    } = req.body

    // criptografando a senha antes de manda-la pro banco
    const passwordCrypto = await crypto(password);

    const register = new CustomersModel({
        name,
        age,
        email,
        password: passwordCrypto
    })

    register.save();
    res.render('register', {
        title: defaltTitle,
        message: 'Cadastro realizado com sucesso!'
    })
}

async function listUsers(req, res) {
    //indo no banco e buscando todos os clientes
    const users = await CustomersModel.find(); // deixando vazio ele trás todos
    

    res.render('listUsers', {
        title: 'Listagem de usuarios',
        users: users
    })
}

async function indexEdit(req, res) {
    //console.log(req.query); // pegando os dados da url

    const { id } = req.query;

    // procurar esse usuario no banco usando um método do mongoose
    // com esse método ele retorna o usuario, se não encontrar retorna null
    const user = await CustomersModel.findById(id)

    res.render('editUsers', {
        title: 'Editar Usuário',
        user: user,
    })
}

async function edit(req, res) {
    const {
        name,
        age,
        email,
    } = req.body

    // pegando o formulário
    //console.log(req.body);
    // pegando o parametro passado na url
    //console.log(req.params);

    const { id } = req.params;

    // procurar o usuario pelo ID e alterar os dados
    const user = await CustomersModel.findById(id);

    user.name = name;
    user.age = age;
    user.email = email;

    user.save();

    res.render('editUsers', {
        title: 'Editar usuario',
        user: 'user',
        message: 'Usuario alterado com sucesso!'
    })
}

async function remove(req, res) {
    const { id } = req.params;

    // método do mongoose para remover no BD
    const remove = await CustomersModel.deleteOne({ _id: id });

    // o método a cima retorna um objeto: deletedCount: 1 = ok  deletedCount: 0 = erro
    if(remove.deletedCount == 1)
    {
        // apenas redirecionando para a rota listUsers
        res.redirect('/listUsers')
    }
}

module.exports = {
    index,
    add,
    listUsers,
    indexEdit,
    edit,
    remove,
}