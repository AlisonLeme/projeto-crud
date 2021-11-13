const bcrypt = require('bcrypt');
const { model, modelNames } = require('mongoose');

//função para criptografar uma senha, ela recebe a senha como parametro
async function crypto(pwd) {
    // genSalt é um promisse. para não precisarmos usar o then e o cath forçamos essa função ser assincrona e retornar o resultado com o async await.
    // o salt é um conjunto de caracteres que criptografa uma string, lembrando que a senha deve ser um string para que ele possa criptografar.
    const salt = await bcrypt.genSalt();

    const password = await bcrypt.hash(pwd, salt);

    return password;
}

module.exports = {
    crypto
}