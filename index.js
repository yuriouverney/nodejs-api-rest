//para rodar o servidor executar no terminal -> node index.js -- index.js é o arquivo main neste caso!
//foi adicionado a biblioteca 'nodemon' para não precisar derrubar o servidor em cada atualização
//npm install -- save-dev nodemon
//em seguida foi adiciona no package.json o script  "start": "nodemon index.js" inicializando o nodemon com o comando "npm start"


//exportando módulo
const customExpress = require('./config/customExpress.js')
const conexao = require('./infraestrutura/conexao.js')
const Tabelas = require('./infraestrutura/tabelas.js')
conexao.connect(erro => {
    if (erro){
        console.log(erro)
    }else{
        //é importante conectar o banco de dados antes de subir a aplicaçã
        console.log('Conectado com sucesso!')
        Tabelas.init(conexao)
        
        const app = customExpress()
        //subindo servidor (Porta, função)
        app.listen(3000, () => console.log("servidor rodando na porta 3000"))
    }
})


