// CRIANDO ROTEADOR

//1- criar o arquivo router na pasta routes.

//2-importar o express
const express = require("express");

//IMPORTAR CONTROLLERS
const ContatosController = require("../controllers/ContatosController");

//3-criar o roteador!! / essa função vai retornar um objeto que é um roteador usando a função Router do express
const router = express.Router();

//4-pede para o roteador definir uma rota( quando acessada a rota dada no primeiro parametros, executar a função em segundo parametro que vem de controllers)
router.get("/contatos", ContatosController.listarContatos);
router.get("/contatos/:id", ContatosController.listarContatos);

//5-exportar o roteador
module.exports = router;
