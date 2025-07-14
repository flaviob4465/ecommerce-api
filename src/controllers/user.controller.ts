import { Request, Response } from "express";

type User = {
  id: number;
  nome: string;
  email: string;
};

let id = 0;

let utilizadores: User[] = [];

export class UserController {
  static getAll(req: Request, res: Response) {
    res.send(utilizadores);
  }

  static getById(req: Request, res: Response) {
    let userId = Number(req.params.id);
    let user = utilizadores.find((user) => user.id == userId);
    res.send(user);
  }

  static save(req: Request, res: Response) {
    let user = req.body;
    user.id = ++id;
    utilizadores.push(user);
    res.send({
      message: "utilizador criado com sucesso",
    });
  }

  static update(req: Request, res: Response) {
    let userId = Number(req.params.id);
    let user = req.body;
    let indexOf = utilizadores.findIndex((_user: User) => _user.id === userId);
    utilizadores[indexOf].nome = user.nome;
    utilizadores[indexOf].email = user.email;
    res.send({
      message: "utilizador editado com sucesso",
    });
  }

  static delete(req: Request, res: Response) {
    let userId = Number(req.params.id);
    let indexOf = utilizadores.findIndex((user: User) => user.id === userId);
    utilizadores.splice(indexOf, 1);
    res.send({
      Message: "utilizador removido com sucesso",
    });
  }
}
