const Users = require('../models/Users');


exports.userController = async (request, response) => {
    try {
        const users_list = await Users.find();
        console.log("Usuários Encontrado com Sucesso");
        return response.send(users_list);
    } catch (error) {
        console.error('Erro ao buscar usuários:', error);
        return response.status(500).send('Erro ao buscar usuários');
    }
};