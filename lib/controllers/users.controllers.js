"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userController = void 0;
// const { initializeApp, applicationDefault, cert } = require('firebase-admin/app');
const { getFirestore } = require("firebase-admin/firestore");
class userController {
    static getAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const snapshot = yield getFirestore().collection("users").get();
            const users = snapshot.docs.map((doc) => {
                return Object.assign({ id: doc.id }, doc.data());
            });
            res.send(users);
        });
    }
    static getById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let userId = req.params.id;
            const doc = yield getFirestore().collection("users").doc(userId).get();
            res.send(Object.assign({ id: doc.id }, doc.data()));
        });
    }
    static save(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let user = req.body;
            const userSalvo = yield getFirestore().collection("users").add(user);
            res.send({
                message: `Usuário ${userSalvo.id} criado com sucesso!`,
            });
        });
    }
    static update(req, res) {
        let userId = req.params.id;
        let user = req.body;
        getFirestore().collection("users").doc(userId).set({
            nome: user.nome,
            email: user.email
        });
        res.send({
            message: "utilizador alterado com sucesso",
        });
    }
    static delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let userId = req.params.id;
            yield getFirestore().collection("users").doc(userId).delete();
            res.send({ message: "utilizador apagado com sucesso" });
        });
    }
}
exports.userController = userController;
//# sourceMappingURL=users.controllers.js.map