//1-importando o express
const express = require("express");
//4-importar os roteadores/ criar uma constante para guardar o roteador na aplicação
const ContatosRouter = require("./routes/ContatosRouter");

//2-criando um servidor
const app = express();

//3-criar rota get no endereço '/' ou raiz para responder requisição com mensagem "olá"
//na função get colocar o endereço que vai receber a requisição e a função para ser executada quando endereço for acessado
app.get("/", (req, res) => {
  res.send("Olá");
});

//usando os roteadores - toda vez que o ednereço que é passado é acessado, será executada uma função que está sendo importada do router.
app.use("/", ContatosRouter);

//levantar/rodar/executar a aplicação
//essa função recebe a porta, e quando a função ficar de pé, executar console.log com função como segundo parametro para o app.listen.

app.listen(3000, () => console.log("app na escuta"));
