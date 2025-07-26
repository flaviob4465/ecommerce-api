import { NextFunction, Request, Response } from "express";
import { ValdidationError } from "../errors/validation.error";
import { NotFoundError } from "../errors/not-found.error";
// const { initializeApp, applicationDefault, cert } = require('firebase-admin/app');
const { getFirestore } = require("firebase-admin/firestore");

type User = {
  id: number;
  nome: string;
  email: string;
};

export class userController {
  static async getAll(req: Request, res: Response, next: NextFunction) {
    const snapshot = await getFirestore().collection("users").get();
    const users = snapshot.docs.map((doc: any) => {
      return {
        id: doc.id,
        ...doc.data(),
      };
    });

    res.send(users);
  }

  static async getById(req: Request, res: Response, next: NextFunction) {
    let userId = req.params.id;
    const doc = await getFirestore().collection("users").doc(userId).get();

    if (doc.exists) {
      res.send({
        id: doc.id,
        ...doc.data(),
      });
    } else {
      throw new NotFoundError("utilizador não encontrado");
    }
  }

  static async save(req: Request, res: Response, next: NextFunction) {
    let user = req.body;
    if (!user.email || user.email?.length === 0) {
      throw new ValdidationError("E-mail obrigatório");
    }
    const userSalvo = await getFirestore().collection("users").add(user);
    res.status(201).send({
      message: `Usuário ${userSalvo.id} criado com sucesso!`,
    });
  }

  static async update(req: Request, res: Response, next: NextFunction) {
    let userId = req.params.id;
    let user = req.body as User;
    let docRef = getFirestore().collection("users").doc(userId);

    if ((await docRef.get()).exists) {
      await docRef.set({
        nome: user.nome,
        email: user.email,
      });
      res.send({
        message: "utilizador alterado com sucesso",
      });
    } else {
      throw new NotFoundError("Utilizador não existe");
    }
  }

  static async delete(req: Request, res: Response, next: NextFunction) {
    let userId = req.params.id;
    await getFirestore().collection("users").doc(userId).delete();

    res.status(204).send();
  }
}
