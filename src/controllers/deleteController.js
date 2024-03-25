const Users = require('../models/Users');

exports.deleteController = async (request, response) => {
    try {
        const users_delete = await Users.findByIdAndDelete(request.params.id)
        console.log("Usuário Deletado com Sucesso");
        return response.send(users_delete)
    } catch (error) {
        console.error("Erro ao deletar usuário", error);
        return response.status(500).send("Erro ao deletar usuário");
    }
}; 
