const Users = require('../models/Users');

exports.updateController = async (request, response) => {
    try {
        const update_user = await Users.findByIdAndUpdate(request.params.id, {
            name: request.body.name,
            senha: request.body.senha,
            age: request.body.age,
            image_url: request.body.image_url
        }, {
            new: true,
        });
        console.log("Usuário Atualizado com Sucesso");
        return response.send(update_user);
    } catch (error) {
        console.error('Erro ao atualizar usuário:', error);
        return response.status(500).send('Erro ao atualizar usuário');
    }
};

