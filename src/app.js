import express from "express";
import dbConnect from "./config/dbConnect.js";
import livro from "./models/Livro.js";

const conexao = await dbConnect(); // conectando ao banco de dados

// tratando erros de conexão
conexao.on("error", (erro) => {
    console.error("erro de conexão com o banco de dados:", erro);
});

// mensagem de conexão bem sucedida
conexao.once("open", () => {
    console.log("conexão com o banco de dados realizada com sucesso!");
});


const app = express();

// middleware -> utilizados para ter acesso as requisições e respostas e fazer alguma ação nela
//express.json() -> transforma o corpo da requisição em json
app.use(express.json()); 


// criando rotas via express
app.get('/', (req, res) => {
    res.status(200).send('Curso de Node.js') // send -> envia uma resposta de dados mais simples
}); // rota raiz(base)

// rota livros -> listar todos os livros
app.get('/livros', async (req, res) => {
    const listaLivros = await livro.find(); // find() -> busca todos os documentos da coleção livros
    res.status(200).json((listaLivros)); //json -> envia uma resposta em formato json
});

// rota livros/id -> buscar um livro específico
app.get("/livros/:id", (req, res) => {
    const index = buscaLivro(req.params.id); //req.params -> acessa os parâmetros da rota
    res.status(200).json(livros[index]); 
});

//post -> criar um novo recurso
app.post('/livros', (req, res) => {
    livros.push(req.body);
    res.status(201).send("livro cadastrado com sucesso.");
});

//put -> atualizar um recurso
app.put("/livros/:id", (req, res) => {
    const index = buscaLivro(req.params.id);
    livros[index].titulo = req.body.titulo;
    res.status(200).json(livros);
});

//delete -> deletar um recurso
app.delete("/livros/:id", (req, res) => {
    const index = buscaLivro(req.params.id);
    livros.splice(index, 1);
    res.status(200).send("livro removido com sucesso")
})

export default app; // exportando o app para ser utilizado em outro arquivo
