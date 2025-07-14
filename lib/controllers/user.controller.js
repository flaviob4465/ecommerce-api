"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
let id = 0;
let utilizadores = [];
class UserController {
    static getAll(req, res) {
        res.send(utilizadores);
    }
    static getById(req, res) {
        let userId = Number(req.params.id);
        let user = utilizadores.find(user => user.id == userId);
        res.send(user);
    }
    static save(req, res) {
        let user = req.body;
        user.id = ++id;
        utilizadores.push(user);
        res.send({
            message: "utilizador criado com sucesso"
        });
    }
    static update(req, res) {
        let userId = Number(req.params.id);
        let user = req.body;
        let indexOf = utilizadores.findIndex((_user) => _user.id === userId);
        utilizadores[indexOf].nome = user.nome;
        utilizadores[indexOf].email = user.email;
        res.send({
            message: "utilizador editado com sucesso"
        });
    }
    static delete(req, res) {
        let userId = Number(req.params.id);
        let indexOf = utilizadores.findIndex((user) => user.id === userId);
        utilizadores.splice(indexOf, 1);
        res.send({
            Message: "utilizador removido com sucesso"
        });
    }
}
exports.UserController = UserController;
//# sourceMappingURL=user.controller.js.map