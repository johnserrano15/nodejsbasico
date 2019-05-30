const express = require("express");
const app = express();
const { PORT } = require("./config");
const mongo = require("./db/connect");

require("./routes/api")(app);
require("./routes/views")(app);

async function initDB(){
    const db = await mongo.connect();
    if (db) { initExpress(); }
}

function initExpress(){
    console.log("Iniciando instancia de Express...");
    app.listen(PORT, ()=>{
        console.log("El servidor Express esta activo.");
    });
    // Dos eventos que esperan dos señales por si pasa algo con node para cerrar la conexion con mongodb
    process.on("SIGINT", closeApp);
    process.on("SIGTERM", closeApp);
}

function closeApp(){
    mongo.disconnect()
        .then(()=>process.exit(0));
}

initDB();