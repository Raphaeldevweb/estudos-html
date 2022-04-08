// CONTROLLER É UMA FUNÇÃO QUE VAI RECEBER A REQ VINDO DO ROUTER E VAI responder
//AQUI É ONDE FICA AS FUNÇÕES, CRIAR CONTATO, ALTERAR CONTATO, DELETAR CONTATO, ETC.. OS CONTROLLERS ESTARÃO AGRUPADO DENTRO DE UM OBJETO LITERAL

// Para testes, assumindo que o usuario logado é o usuário de id =1;
const uid = 1;

module.exports = {
  listarContatos: (req, res) => {
    // Importado os contatos do usuário
    let contatos = require(`../database/contatos_${uid}.json`);

    // enviando a view para o cliente
    res.render("home.ejs", { contatos });
  },
  capturarContato: (req, res) => {
    // Importado os contatos do usuário
    let contatos = require(`../database/contatos_${uid}.json`);

    //descobrir o id do contato
    let idDoContato = req.params.id;

    // Encontrar no array de contatos o contato que tem o id desejado
    let contato = contatos.find((c) => c.id == idDoContato);

    // retornar o contato para o cliente ou uma mensagem de erro se o contato n existir
    if (contato === undefined) {
      res.send("O contato buscado não existe");
    } else {
      res.send(contato);
    }
  },
};
