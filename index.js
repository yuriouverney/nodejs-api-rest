//para rodar o servidor executar no terminal -> node index.js -- index.js é o arquivo main neste caso!
//foi adicionado a biblioteca 'nodemon' para não precisar derrubar o servidor em cada atualização
//npm install -- save-dev nodemon
//em seguida foi adiciona no package.json o script  "start": "nodemon index.js" inicializando o nodemon com o comando "npm start"

//chamando módulo no express!
const express = require('express')
const app = express()

//subindo servidor (Porta, função)
app.listen(3000, () => console.log("servidor rodando na porta 3000"))

//fazendo requisição (GET) -- (rota, função)
//req -> requisição (o que as pessoas enviaram)
//res -> o que o servidor está devolvendo 
app.get('/atendimentos', (req, res) => res.send('Você está na rota de atendimentos!'))