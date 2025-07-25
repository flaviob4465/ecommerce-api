"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRoutes = void 0;
const express_1 = __importDefault(require("express"));
const users_controllers_1 = require("../controllers/users.controllers");
exports.userRoutes = express_1.default.Router();
// Endpoint para retornar uma lista de produtos
exports.userRoutes.get("/users", users_controllers_1.userController.getAll);
// Endpoint para retornar o utilizador pelo ID
exports.userRoutes.get("/users/:id", users_controllers_1.userController.getById);
// Endpoint para adicionar um novo utilizador
exports.userRoutes.post("/users", users_controllers_1.userController.save);
// Endpoint para atualizar um utilizador existente
exports.userRoutes.put("/users/:id", users_controllers_1.userController.update);
// Endpoint para apagar um utilizador
exports.userRoutes.delete("/users/:id", users_controllers_1.userController.delete);
//# sourceMappingURL=users.route.js.map