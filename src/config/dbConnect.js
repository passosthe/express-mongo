import e from "express";
import mongoose from "mongoose";

// função de conexão com o banco de dados MongoDB Atlas
async function dbConnect() {
    // conectando ao banco de dados
    mongoose.connect("mongodb+srv://sthefanepassos1_db_user:4sso67isNozb2kS7@cluster0.6yfaltx.mongodb.net/Project0?appName=Cluster0");

    // retornando a conexão
    return mongoose.connection;
}


export default dbConnect;


