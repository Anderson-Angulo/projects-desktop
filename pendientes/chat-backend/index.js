// Server Model: Contiene todo el servidor de express + socket.io configurado
const ServerApp = require('./models/server');

// Paquete para leer y establecer las variables de entorno
require('dotenv').config();


// Inicializar la instancia del server
const server = new ServerApp();

// Ejecutar el server
server.execute();


