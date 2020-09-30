// puerto

process.env.PORT = process.env.PORT || 3000;

// Entorno
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

process.env.CADUCIDAD_TOKEN = 60 * 60 * 24 * 30;

process.env.SEED = process.env.SEED || 'este-es-el-seed-desarrollo'


// Base de datos

let urlDB;

if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/cafe';
} else {
    urlDB = process.env.MONGO_URI;

};

process.env.URLDB = urlDB;

// Google Client Id

process.env.CLIENT_ID = process.env.CLIENT_ID || '219761381255-t64seueaiuct2jc7o3abnalbc5tlsmh6.apps.googleusercontent.com'