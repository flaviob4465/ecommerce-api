import express from "express";
import { userController } from "../controllers/users.controllers";

export const userRoutes = express.Router();
// Endpoint para retornar uma lista de produtos
userRoutes.get("/users", userController.getAll);

// Endpoint para retornar o utilizador pelo ID
userRoutes.get("/users/:id", userController.getById);

// Endpoint para adicionar um novo utilizador
userRoutes.post("/users", userController.save);

// Endpoint para atualizar um utilizador existente
userRoutes.put("/users/:id", userController.update);

// Endpoint para apagar um utilizador
userRoutes.delete("/users/:id", userController.delete);
