const express = require("express");
const dadosAlunos = require("./alunos");

const app = express();

app.get('/alunos', (req, res) => {
    const { nome, media } = req.query;

    if(nome === dadosAlunos.nome ){
        const nome = dadosAlunos.filtrarNome
        res.send(nome)
    } else {
        res.status(404).send("Aluno não encontrado!")
    }
    
})



app.listen(3000, () =>{
    console.log("Servidor rodando em http://localhost:3000/")
});