import mongoose from "mongoose";

//Modelo Livro = objeto que representa a coleção de livros no banco de dados

// definindo o schema (estrutura) da coleção Livro
const livroSchema = new mongoose.Schema({ 
    id: {type: mongoose.Schema.Types.ObjectId},
    titulo: {type: String, required: true}, // required -> campo obrigatório
    editora: {type: String},
    preco: {type: Number},
    paginas: {type: Number} 

}, {versionKey: false}); // desabilita o campo __v que indica a versão do documento;

const livro = mongoose.model('livros', livroSchema); // criando o modelo Livro com o schema livroSchema

export default livro; 