const express =  require('express');

const HerosController =  require('./HeroController');

const routes = express.Router();

routes.get('/herobyid/:id_hero', HerosController.heroById);

routes.get('/herobyname/:name_hero', HerosController.heroByName);

module.exports = routes;