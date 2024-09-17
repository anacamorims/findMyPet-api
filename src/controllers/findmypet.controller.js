import Pet from "../models/Pet.model.js";

export const createPet = async (req, res) => {
  try {
    const {
      name,
      specie,
      breed,
      color,
      age,
      lastSeenLocation,
      dateLost,
      status,
      description,
      ownerContact,
      photoURL,
    } = req.body;
    const newPet = await Pet.create({
      name,
      specie,
      breed,
      color,
      age,
      lastSeenLocation,
      dateLost,
      status,
      description,
      ownerContact,
      photoURL,
    });
    return res.status(201).json({ newPet });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

export const updatePet = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      name,
      specie,
      breed,
      color,
      age,
      lastSeenLocation,
      dateLost,
      status,
      description,
      ownerContact,
      photoURL,
    } = req.body;
    const pet = await Pet.findById(id);

    if (!pet) {
      return res.status(404).json({ message: "Animal não encontrado" });
    }

    const updated = await Pet.findByIdAndUpdate(
      { _id: id },
      {
        name,
        specie,
        breed,
        color,
        age,
        lastSeenLocation,
        dateLost,
        status,
        description,
        ownerContact,
        photoURL,
      },
      { new: true }
    );

    if (updated) {
      return res
        .status(200)
        .json({ message: "Animal atualizado com sucesso " });
    } else {
      return res
        .status(400)
        .json({ message: "Não foi possível atualizar o animal" });
    }
  } catch (error) {
    console.error(error);

    return res.status(500).json({ error: error.message });
  }
};

export const deletePet = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await Pet.findByIdAndDelete({ _id: id });

    if (result) {
      return res.status(200).json({ message: "Animal deletado com sucesso" });
    } else {
      return res.status(404).json({ message: "Animal não encontrado" });
    }
  } catch (error) {
    return res
      .status(500)
      .json({ messageError: "Erro ao deletar o animal: " + error.message });
  }
};

export const getAnimals = async (req, res) => {
  const validFields = [
    "name",
    "specie",
    "breed",
    "color",
    "age",
    "lastSeenLocation",
    "dateLost",
    "status",
    "description",
    "ownerContact",
    "photoURL",
  ];

  const query = Object.keys(req.query)
    .filter((key) => validFields.includes(key))
    .reduce((obj, key) => {
      if (typeof req.query[key] === "string") {
        obj[key] = new RegExp(req.query[key], "i");
      } else {
        obj[key] = req.query[key];
      }
      return obj;
    }, {});

  try {
    const pet = await Pet.find(query);

    if (pet.length > 0) {
      return res.status(200).json(pet);
    } else {
      return res.status(404).json({ message: "Nenhum animal encontrado" });
    }
  } catch (error) {
    return res
      .status(500)
      .json({ messageError: "Erro ao buscar os animais: " + error.message });
  }
};

export const getAllPetLost = async (req, res) => {
  try {
    const pet = await Pet.find({ status: "Perdido" });

    if (pet.length > 0) {
      return res.status(200).json({ pet });
    } else {
      return res.status(404).json({ message: "Nenhum animal encontrado" });
    }
  } catch (error) {
    return res
      .status(500)
      .json({ messageError: "Erro ao buscar os animais: " + error.message });
  }
};

export const getAllPetFound = async (req, res) => {
  try {
    const pet = await Pet.find({ status: "Encontrado" });

    if (pet.length > 0) {
      return res.status(200).json({ pet });
    } else {
      return res.status(404).json({ message: "Nenhum animal encontrado" });
    }
  } catch (error) {
    return res
      .status(500)
      .json({ messageError: "Erro ao buscar os animais: " + error.message });
  }
};
