<h1>Atividade Node Express</h1>

<h3>Comandos para iniciar o projeto:</h3>
npm init -y;
npm install express;

<h3>Projeto rodando na porta 3000:</h3>
http://localhost:3000/


<h2>Enunciado do Projeto:<br></h3>
`1.Crie um módulo alunos.js que exporta um array de alunos, uma função que filtra pelo nome e uma que filtra pela média (maior ou igual).`<br>  
`2.Crie uma rota GET para “/alunos” que lista todos os alunos. Deve conter query opcional para filtrar por nome e por média. Ou seja, a rota pode ter este formato: “/alunos?nome=pedro”, “/alunos?media=7.5” ou esse “/alunos”. Esta rota deve utilizar as funções exportadas pelo módulo alunos.js;`<br>
`3.Crie uma rota POST para “/alunos/novo” e o corpo da requisição deve conter (nome, matrícula e média). Valide os campos passados e caso contrário indique um erro (400);`<br>
`4.Crie uma rota POST para “/alunos/deletar/:index” que indica qual aluno remover do array de dados (index). Trate a chamada se o aluno não existir (404);`<br>
`5.Crie uma rota POST para /alunos/atualizar/:index, que no corpo da requisição recebe um objeto (nome, média) e atualiza os dados do aluno naquela posição. Trate a chamada se o aluno não existir (404);`.<br>

<h3>Consultas no Postman<br></h3>
[http://localhost:3000/alunos] rota => GET<br>
[http://localhost:3000/alunos?nome=luciana] rota => GET<br>
[http://localhost:3000/alunos?media=7.5] rota => GET<br>

[http://localhost:3000/alunos/novo] rota POST<br>
[http://localhost:3000/alunos/deletar/1] rota => POST<br>
[http://localhost:3000/alunos/atualizar/1] rota => POST<br>


