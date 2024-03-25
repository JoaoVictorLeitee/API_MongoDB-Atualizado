const mongoose = require('mongoose');

const Users = mongoose.model('Users', {
    name: String,
    senha: String,
    age: Number,
    image_url: String
});

module.exports = Users;