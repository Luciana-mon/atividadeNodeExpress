const alunos = [
    {
        nome: "Luciana",
        matricula: 12547,
        media: 3.5
    },
    {
        nome: "Helena",
        matricula: 12588,
        media: 7.5
    },
    {
        nome: "Livia",
        matricula: 12577,
        media: 7.5
    }
]

function filtrarNome(nome) {
    return alunos.filter(aluno => aluno.nome.toLowerCase() === nome.toLowerCase());
}

function filtrarMedia(media){
    return alunos.filter(aluno => aluno.media >= media);
}

module.exports = { alunos, filtrarNome, filtrarMedia};