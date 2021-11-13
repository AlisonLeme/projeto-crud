const CustomersModel = require('../models/customers');
const { crypto } = require('../utils/password');

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
    res.send('cadastro realizado!');
}

module.exports = {
    add
}