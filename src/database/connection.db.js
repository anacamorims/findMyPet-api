import mongoose from "mongoose";

// Definindo o esquema para o Pet
const PetSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  specie: {
    type: String,
    required: true,
  },
  breed: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  lastSeenLocation: {
    type: String,
    required: true,
  },
  dateLost: {
    type: Date,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  ownerContact: {
    type: Number,
    required: true,
  },
  photoURL: {
    type: String,
    required: true,
  },
});

// Conectando ao banco de dados e registrando o modelo
const connectDB = async () => {
  console.log("Aguardando a conexão com o banco de dados");

  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      serverSelectionTimeoutMS: 70000,
      socketTimeoutMS: 60000,
      connectTimeoutMS: 60000,
    });
    console.log("MongoDB Atlas Conectado");

    // Registrando o modelo
    const Pet = mongoose.model("Pet", PetSchema);

    return Pet; // Retorna o modelo para uso posterior
  } catch (error) {
    console.error("Erro ao conectar ao MongoDB:", error);
  }
};

export { connectDB, Pet };
