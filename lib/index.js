"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
// endpoint para retornar uma mensagem de boas-vindas
// O método get recebe dois parâmetros, o primeiro é a rota e o segundo é uma função
app.get("/", (req, res) => {
    res.send("Hello World!");
});
let id = 0;
// Middleware para permitir o envio de dados no corpo da requisição
let usuarios = [];
// Endpoint para retornar uma lista de produtos
app.get("/users", (req, res) => {
    res.send(usuarios);
});
app.get("/users/:id", (req, res) => {
    let userId = Number(req.params.id);
    let user = usuarios.find(user => user.id == userId);
    res.send(user);
});
// Endpoint para adicionar um novo usuário
app.post("/users", (req, res) => {
    let user = req.body;
    user.id = ++id;
    usuarios.push(user);
    res.send({
        message: "Usuário criado com sucesso!"
    });
});
app.put("/users/:id", (req, res) => {
    let userId = Number(req.params.id);
    let user = req.body;
    let indexOf = usuarios.findIndex((_user) => _user.id === userId);
    usuarios[indexOf].nome = user.nome;
    usuarios[indexOf].email = user.email;
    res.send({
        message: "utilizador alterado com sucesso"
    });
});
app.delete("/users/:id", (req, res) => {
    let userApagado = Number(req.params.id);
    usuarios = usuarios.filter(user => user.id !== userApagado);
    res.send({ message: "utilizador apagado com sucesso" });
});
app.listen(3000, () => {
    console.log("Servidor ativo na porta 3000");
});
//# sourceMappingURL=index.js.map