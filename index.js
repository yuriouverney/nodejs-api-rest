//para rodar o servidor executar no terminal -> node index.js -- index.js é o arquivo main neste caso!
//foi adicionado a biblioteca 'nodemon' para não precisar derrubar o servidor em cada atualização
//npm install -- save-dev nodemon
//em seguida foi adiciona no package.json o script  "start": "nodemon index.js" inicializando o nodemon com o comando "npm start"


//exportando módulo
const customExpress = require('./config/customExpress.js')
const app = customExpress()


//subindo servidor (Porta, função)
app.listen(3000, () => console.log("servidor rodando na porta 3000"))
