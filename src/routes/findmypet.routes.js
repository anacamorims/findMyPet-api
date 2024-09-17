import { Router } from "express";
import {
  getAnimals,
  getAllPetLost,
  getAllPetFound,
  createPet,
  updatePet,
  deletePet,
} from "../controllers/findmypet.controller.js";

const petRouter = Router();

petRouter.get("/animais?", getAnimals);
petRouter.get("/animais/perdidos", getAllPetLost);
petRouter.get("/animais/encontrados", getAllPetFound);
petRouter.post("/animais", createPet);
petRouter.put("/animais/:id", updatePet);
petRouter.delete("/animais/:id", deletePet);

export { petRouter };
