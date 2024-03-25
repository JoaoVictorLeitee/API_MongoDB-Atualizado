const express = require("express");
const mongoose = require('mongoose');
const routes = require('./routes');
require('dotenv').config();
const connectionString = (process.env.HOST);

const app = express();
app.use(express.json())
app.use(routes);


mongoose.connect(connectionString)
    .then(() => {
        console.log("Conectado ao banco de dados.");
        app.emit("Pronto");
    }).catch(e => console.log(e));

app.on("Pronto", () => {
    app.listen(process.env.PORT, () => {
        console.log("Api funcionando.");
        console.log("http://localhost:3000/inicio");

    });

});




