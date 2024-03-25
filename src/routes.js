const express = require('express');
const route = express.Router();
const { homeController } = require('./controllers/homeController');
const { deleteController } = require('./controllers/deleteController');
const { userController } = require('./controllers/usersController');
const { updateController } = require('./controllers/updateController');
const { usersIDController } = require('./controllers/usersIDController');
const { cadastroController } = require('./controllers/cadastroController');



route.get('/inicio', homeController);

route.delete('/delete/:id', deleteController);

route.get('/users', userController);

route.put("/update/:id", updateController);

route.get('/users/:id', usersIDController);

route.post('/cadastro', cadastroController);


module.exports = route;