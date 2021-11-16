// importando o método router para exportar todas as rotas da aplicação
const router = require('express').Router()

const CustomersController = require('../controllers/customers');
const IndexController = require('../controllers/index');

// rotas
router.get('/', IndexController.index);

// registro
router.get('/register', CustomersController.index);


// quando essa rota for chamada, vai executar essa função passando o req e o res
// como essa rota é do tipo post, eu preciso que alguma coisa mande pra ca
router.post('/register', CustomersController.add)


// Listar
router.get('/listUsers', CustomersController.listUsers);


// editar
router.get('/editUsers', CustomersController.indexEdit); // renderizar a página de edir
// mandando para uma rota com o id
router.post('/editUsers:id', CustomersController.edit); // editar o usuario no BD


// remover
router.get('/removeUsers:id', CustomersController.remove)

module.exports = router;