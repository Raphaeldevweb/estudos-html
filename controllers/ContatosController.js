// CONTROLLER É UMA FUNÇÃO QUE VAI RECEBER A REQ VINDO DO ROUTER E VAI responder
//AQUI É ONDE FICA AS FUNÇÕES, CRIAR CONTATO, ALTERAR CONTATO, DELETAR CONTATO, ETC.. OS CONTROLLERS ESTARÃO AGRUPADO DENTRO DE UM OBJETO LITERAL

// Para testes, assumindo que o usuario logado é o usuário de id =1;
const uid = 1;

module.exports = {
  listarContatos: (req, res) => {
    // Importado os contatos do usuário
    let contatos = require(`../database/contatos_${uid}.json`);
    res.send(contatos);
  },
};
