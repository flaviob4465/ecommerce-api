import express from "express";
import { UserController } from "../controllers/user.controller";


export const userRoutes = express.Router();

userRoutes.get("/users", UserController.getAll);

userRoutes.get("/users/:id", UserController.getById)

userRoutes.post("/users", UserController.save)

userRoutes.put("/users/:id", UserController.update);

userRoutes.delete("/users/:id", UserController.delete);







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
