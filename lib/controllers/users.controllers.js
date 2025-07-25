"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userController = void 0;
let id = 0;
// Middleware para permitir o envio de dados no corpo da requisição
let usuarios = [];
class userController {
    static getAll(req, res) {
        res.send(usuarios);
    }
    static getById(req, res) {
        let userId = Number(req.params.id);
        let user = usuarios.find((user) => user.id == userId);
        res.send(user);
    }
    static save(req, res) {
        let user = req.body;
        user.id = ++id;
        usuarios.push(user);
        res.send({
            message: "Usuário criado com sucesso!",
        });
    }
    static update(req, res) {
        let userId = Number(req.params.id);
        let user = req.body;
        let indexOf = usuarios.findIndex((_user) => _user.id === userId);
        usuarios[indexOf].nome = user.nome;
        usuarios[indexOf].email = user.email;
        res.send({
            message: "utilizador alterado com sucesso",
        });
    }
    static delete(req, res) {
        let userApagado = Number(req.params.id);
        usuarios = usuarios.filter((user) => user.id !== userApagado);
        res.send({ message: "utilizador apagado com sucesso" });
    }
}
exports.userController = userController;
//# sourceMappingURL=users.controllers.js.map