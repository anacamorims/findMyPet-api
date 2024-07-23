import { Pet } from "../models/Findmypet.model.js";
import { listPet } from "../../data/petsData.js";


export const getAllAnimals = () => {
  return listPet
}

export const getAllPetLost = (status) => {
  return listPet.filter(({ status }) => status == "Perdido")
}

export const getAllPetFound = (status) => {
  return listPet.filter(({ status }) => status == "Encontrado")
}

export const getAllCat = (type) => {
  return listPet.filter(({ type }) => type == "Gato")
}

export const getAllDog = (type) => {
  return listPet.filter(({ type }) => type == "Cachorro")
}

export const getPetById = (id) => {
  return listPet.find(({ id: petId }) => petId == id )
}

export const createPet = (name, type, breed, color, age, lastSeenLocation, dateLost, status, description, ownerContact,     photoURL) => {
  const newPet = new Pet (name, type, breed, color, age, lastSeenLocation, dateLost, status, description, ownerContact, photoURL);

  listPet.push(newPet);
  return { message: "Animal adicionado com sucesso" };
}

export const updatePet = (id, name, type, breed, color, age, lastSeenLocation, status, description, ownerContact, photoURL)  => {

  const petAlreadyExist = listPet.find(pet => pet.id == id)

  if(petAlreadyExist){
    let i = listPet.findIndex(pet => pet.id == id)
    listPet[i] = {
      ...listPet[i], name, type, breed, color, age, lastSeenLocation, status, description, ownerContact, photoURL
    }
    return { message:"Dados do animal atualizados com sucesso" }
  }else{
    return { message:"Esse animal não existe" }
  }
}

export const deletePet = (id) => {
  const petAlreadyExist = listPet.find(pet => pet.id == id)
  if(petAlreadyExist){
    let i = listPet.findIndex(pet => pet.id == id)
    listPet.splice(i, 1)
    return { message:"Animal deletado com sucesso.", pet: petAlreadyExist }
  }else{
    return { message: "Esse animal não existe" }
  }
}
