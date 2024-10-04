'use strict'

const http = require('http');
const debug = require('debug')('nodestr:server');
const express = require('express');

// ex arquivo local const xpto = require(' ./xpto/testel' ) ;

//cria o express
const app = express(); //nova constante 
//const port = 3000; //constante par fixar a porta ñ recomendado para se usar em caso de criar um servidor pois nunca sei qual porta esta disponivel e não em uso
const port = normalizeport(process. env.PORT || '3000' ) ; //passa a normalize ou a porta 3000
app.set('port',port) ;//seta a porta

//criar um servidor
const server = http.createServer(app);
const router = express.Router(); // arquivo de rotas url

//configuração da primeira rota
const route = router.get('/', (req, res, next) => {// cria uma variavel chamada de rota var, const ou let cria variavel 
res.status(200).send({ //status 200 tudo certo
    title:"Node Store API", //titulo
    version: "0.0.1" //versão da api
});
});
app.use('/', route);// pode se adicionar um prefixo /xp/

//fala pro servidor ficar ouvindo na porta
server.listen(port);
console.log('Api rodando na porta' + port) //só para ver se deu certo

function normalizePort(val){ //recebe um valor
    const port = parseInt(val, 10);// tenta converter para um inteiro

    if (isNaN(port)) { //se não for um numero retora 10
        return val;
    }
    if (port >= 0) { // se for maior ou = a 0 retorna a porta
        return port;
    }
    return false;
}
  