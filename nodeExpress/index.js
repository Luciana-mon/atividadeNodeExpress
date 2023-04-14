const express = require("express");
const dadosAlunos = require("./alunos");

const app = express();
app.use(express.json());

app.get('/alunos', (req, res) => {
    const { nome, media } = req.query;

    if(nome){
        res.send(dadosAlunos.filtrarNome());
    } else if (media){
        res.send(dadosAlunos.filtrarMedia());
    } else {
        res.json(dadosAlunos.alunos);
    }
});

app.post('/alunos/novo', (req, res) => {
    const { nome, matricula, media } = req.body;

    if(nome !== undefined && matricula !== undefined && media !== undefined){
        res.json( "Aluno Adicionado!");
    } else {
        res.status(404).send("Aluno não adicionado!");
    }
});



app.listen(3000, () =>{
    console.log("Servidor rodando em http://localhost:3000/")
});