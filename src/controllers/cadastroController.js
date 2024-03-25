const Users = require('../models/Users');

exports.cadastroController = async (request, response) => {
    try {
        const users_cadastro = new Users({
            name: request.body.name,
            senha: request.body.senha,
            age: request.body.age,
            image_url: request.body.image_url
        })

        await users_cadastro.save();
        console.log("Usuário Cadastrado com Sucesso");
        return response.send(users_cadastro)
    } catch (error) {
        console.error("Erro ao Cadastrar Usuário", error);
        return response.status(500).send("Erro ao Cadastrar Usuário");
    }
};

