// importando o método router para exportar todas as rotas da aplicação
const router = require('express').Router()

const CustomersController= require('../controllers/customers')

// rotas
router.get('/', (req, res) => {
    res.render('index', {
        title: 'Home'
    })
})

router.get('/register', (req, res) => {
    res.render('register', {
        title: 'Register'
    })
})

// quando essa rota for chamada, vai executar essa função passando o req e o res
// como essa rota é do tipo post, eu preciso que alguma coisa mande pra ca
router.post('/register/add', CustomersController.add)

module.exports = router;