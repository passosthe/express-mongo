// import http from "http";
import app from "./src/app.js";

const PORT = 3000; // porta de comunicação utilizada nessa api

// const rotas = {
//     "/" : "Curso de Node.js",
//     "/livros" : "Entrei na rota livros",
//     "/autores" : "Entrei na rota autores"
// }

// criando servidor local via biblioteca nativa do node (http)
// const server = http.createServer( ( req, res ) => {
//     res.writeHead(
//         200, //resposta
//         { "content-type": "text/plain" } //tipo de conteúdo -> texto simples
//     );
//     res.end(rotas[req.url]) //conteúdo
// })

app.listen(PORT, () => {
    console.log("servidor escutando!")
});