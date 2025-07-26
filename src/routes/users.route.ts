import express from "express";
import { userController } from "../controllers/users.controllers";
import AsyncHandler from "express-async-handler";

export const userRoutes = express.Router();
// Endpoint para retornar uma lista de produtos
userRoutes.get("/users", AsyncHandler(userController.getAll));

// Endpoint para retornar o utilizador pelo ID
userRoutes.get("/users/:id", AsyncHandler(userController.getById));

// Endpoint para adicionar um novo utilizador
userRoutes.post("/users", AsyncHandler(userController.save));

// Endpoint para atualizar um utilizador existente
userRoutes.put("/users/:id", AsyncHandler(userController.update));

// Endpoint para apagar um utilizador
userRoutes.delete("/users/:id", AsyncHandler(userController.delete));
