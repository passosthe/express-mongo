import http from "http";

const PORT = 3000; // porta de comunicação utilizada nessa api

const rotas = {
    "/" : "Curso de Node.js",
    "/livros" : "Entrei na rota livros",
    "/autores" : "Entrei na rota autores"
}

//criando servidor local
const server = http.createServer( ( req, res ) => {
    res.writeHead(
        200, //resposta
        { "content-type": "text/plain" } //tipo de conteúdo
    );
    res.end(rotas[req.url]) //conteúdo
})

server.listen(PORT, () => {
    console.log("servidor escutando!")
});