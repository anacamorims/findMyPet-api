import mongoose from "mongoose";

const schema = new mongoose.Schema({
  name: String,
});

const connectDB = async () => {
  console.log("Aguardando a conexão com o banco de dados");

  try {
    const conn = mongoose.createConnection(process.env.MONGODB_URI, {
      serverSelectionTimeoutMS: 70000,
      socketTimeoutMS: 60000,
      connectTimeoutMS: 60000,
    });

    const User = conn.model('User', schema);

    const user = await User.findOne();
    console.log(user); 

    console.log("Conexão com MongoDB Atlas estabelecida");
  } catch (error) {
    console.log("Erro ao conectar ao MongoDB:", error);
  }
};

export default connectDB;
