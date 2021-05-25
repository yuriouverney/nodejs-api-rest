module.exports = app => {
    //fazendo requisição (GET) -- (rota, função)
    //req -> requisição (o que as pessoas enviaram)
    //res -> o que o servidor está devolvendo 
    app.get('/atendimentos', (req, res) => res.send('Você está na rota de atendimentos e está realizando um GET'))

    app.post('/atendimentos', (req, res) => {
        console.log('Atendimento enviado')
        console.log(req.body)
        res.send('Post atendimento')
    })
     
     
}