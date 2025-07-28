"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRoutes = void 0;
const express_1 = __importDefault(require("express"));
const users_controllers_1 = require("../controllers/users.controllers");
const express_async_handler_1 = __importDefault(require("express-async-handler"));
const celebrate_1 = require("celebrate");
const user_models_1 = require("../models/user.models");
exports.userRoutes = express_1.default.Router();
// Endpoint para retornar uma lista de produtos
exports.userRoutes.get("/users", (0, express_async_handler_1.default)(users_controllers_1.userController.getAll));
// Endpoint para retornar o utilizador pelo ID
exports.userRoutes.get("/users/:id", (0, express_async_handler_1.default)(users_controllers_1.userController.getById));
// Endpoint para adicionar um novo utilizador
exports.userRoutes.post("/users", (0, celebrate_1.celebrate)({ [celebrate_1.Segments.BODY]: user_models_1.userSchema }), (0, express_async_handler_1.default)(users_controllers_1.userController.save));
// Endpoint para atualizar um utilizador existente
exports.userRoutes.put("/users/:id", (0, celebrate_1.celebrate)({ [celebrate_1.Segments.BODY]: user_models_1.userSchema }), (0, express_async_handler_1.default)(users_controllers_1.userController.update));
// Endpoint para apagar um utilizador
exports.userRoutes.delete("/users/:id", (0, express_async_handler_1.default)(users_controllers_1.userController.delete));
//# sourceMappingURL=users.route.js.map