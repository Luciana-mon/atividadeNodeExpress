const express = require("express");
const dadosAlunos = require("./alunos");

const app = express();
app.use(express.json());

app.get('/alunos', (req, res) => {
    const { nome, media } = req.query;

    if(nome){
        res.json(dadosAlunos.filtrarNome(nome));
    } else if (media){
        res.json(dadosAlunos.filtrarMedia(media));
    } else {
        res.json(dadosAlunos.alunos);
    }
});

app.post('/alunos/novo', (req, res) => {
    const { nome, matricula, media } = req.body;

    if(nome !== undefined && matricula !== undefined && media !== undefined){
        res.json({ message: "Aluno Adicionado!"});
    } else {
        res.status(400).json({message: "Erro: aluno não cadastrado, informe todos os dados!"});
    }
});

app.post('/alunos/deletar/:index', (req, res) => {
    const index = Number(req.params.index);

    if(index < 0 || index >= dadosAlunos.alunos.length){
        res.status(404).json({message: "Aluno não existe!"});
    } else {
        dadosAlunos.alunos.splice(index,1);
        res.json({message: "Aluno deletado!"});
    }
});

app.post('/alunos/atualizar/:index', (req, res) => {
    const index = Number(req.params.index);
    const { nome, media } = req.body;

    if(index < 0 || index >= dadosAlunos.alunos.length){
        res.status(404).json({message: "Aluno não existe!"});
    } else if( nome === undefined && media === undefined){
        res.status(400).json({message:"Dados invalidos, insira todos os dados!"});
    } else {
        res.status(200).json({message: "Aluno atualizado!"});
    }
});



app.listen(3000, () =>{
    console.log("Servidor rodando em http://localhost:3000/")
});