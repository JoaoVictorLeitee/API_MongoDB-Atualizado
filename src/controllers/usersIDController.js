const Users = require('../models/Users');

exports.usersIDController = async (request, response) => {
    try {
        const users_list_id = await Users.findById(request.params.id);
        if (!users_list_id) {
            return response.status(404).send('Usuário não encontrado');
        }
        console.log("Usuário Encontrado com Sucesso");
        return response.send(users_list_id);
    } catch (error) {
        console.error('Erro ao encontrar usuário:', error);
        return response.status(500).send('Erro ao encontrar usuário');
    }
};