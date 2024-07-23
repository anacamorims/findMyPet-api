import { Router } from "express";
import { getAllAnimals, getAllPetLost, getAllPetFound, getAllCat, getAllDog, getPetById, createPet, updatePet, deletePet } from "../controllers/findmypet.controller.js";

const petRouter = Router();

petRouter.get("/animais", (req, res) => {
    const listPet = getAllAnimals();
    res.status(200).json({listPet})
})

petRouter.get("/animais/perdidos", (req, res) => {
    const listPet = getAllPetLost();
    res.status(200).json({listPet})
})

petRouter.get("/animais/encontrados", (req, res) => {
    const listPet = getAllPetFound();
    res.status(200).json({listPet})
})

petRouter.get("/animais/gato", (req, res) => {
    const listPet = getAllCat();
    res.status(200).json({listPet})
})

petRouter.get("/animais/cachorro", (req, res) => {
    const listPet = getAllDog();
    res.status(200).json({listPet})
})

petRouter.get("/animais/:id", (req, res) => {
    const { id } = req.params;
    const pet = getPetById(id);
    if(pet){
        res.status(200).json(pet)
    }else{
        res.status(404).json({ message : "Animal não encontrado" })
    }
})

petRouter.post("/animais", (req, res) => {
    const { name, type, breed, color, age, lastSeenLocation, dateLost, status, description, ownerContact, photoURL } = req.body;
    const newPet = createPet(name, type, breed, color, age, lastSeenLocation, dateLost, status, description, ownerContact, photoURL);
    res.status(201).json({ message: newPet.message });
})

petRouter.put("/animais/:id", (req, res) => {
    const { name, type, breed, color, age, lastSeenLocation, status, description, ownerContact, photoURL } = req.body;
    const { id } = req.params;
    const petUpdate = updatePet(id, name, type, breed, color, age, lastSeenLocation, status, description, ownerContact, photoURL);
    if(typeof petUpdate === "string"){
        res.status(404).json({ message: petUpdate.message })
    }else {
        res.status(200).json({ message: petUpdate.message })
    }
})

petRouter.delete("/animais/:id", (req, res) => {
    const { id } = req.params;
    const pet = deletePet(id);
    if(pet.pet){
        res.status(200).json({ message: pet.message})
    }else {
        res.status(404).json({ message: pet.message })
    }
})


export { petRouter }
