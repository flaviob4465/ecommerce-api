"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRoutes = void 0;
const express_1 = __importDefault(require("express"));
const user_controller_1 = require("../controllers/user.controller");
exports.userRoutes = express_1.default.Router();
exports.userRoutes.get("/users", user_controller_1.UserController.getAll);
exports.userRoutes.get("/users/:id", user_controller_1.UserController.getById);
exports.userRoutes.post("/users", user_controller_1.UserController.save);
exports.userRoutes.put("/users/:id", user_controller_1.UserController.update);
exports.userRoutes.delete("/users/:id", user_controller_1.UserController.delete);
// app.put("/users/:id", (req: Request, res: Response) =>{
//     let user = req.body;
//     let userId = Number(req.params.id);
//     let founduser = utilizadores.find( user => user.id == userId )
//     if (!founduser){
//         res.status(404).send({
//             message:"utilizador não encontrado"
//         });     
//     }else{
//         founduser.nome = user.nome
//         founduser.email = user.email
//         res.send({
//             message:"informação alterada com sucesso"
//         });
//     }})
//     app.delete("/users/:id", (req: Request, res: Response) =>{
//         let userId = Number(req.params.id)
//         let user = utilizadores.find( user => user.id == userId )
//         if(!user){
//             res.status(404).send({
//                 message:"utilizador não encontrado"
//             })
//         }else{
//             utilizadores = utilizadores.filter(user => user.id !== userId)
//             res.send({
//                 message:"utilizador eliminado"
//             })
//         }
//     })
//# sourceMappingURL=users.route.js.map