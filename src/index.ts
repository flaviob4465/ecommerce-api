import express, { Request, Response } from "express";

const app = express();

app.use(express.json());

// endpoint para retornar uma mensagem de boas-vindas
// O método get recebe dois parâmetros, o primeiro é a rota e o segundo é uma função
app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

let id = 0;
// Middleware para permitir o envio de dados no corpo da requisição
let usuarios: { id: number; nome: string; email: string }[] = [];


// Endpoint para retornar uma lista de produtos
app.get("/users", (req: Request, res: Response) => {
  res.send(usuarios);
});


app.get("/users/:id", (req: Request, res: Response) =>{
    let userId = Number (req.params.id);
    let user = usuarios.find (user => user.id = userId) ;
    res.send(user);
});
// Endpoint para adicionar um novo usuário
app.post("/users", (req: Request, res: Response) => {
let user = req.body;
user.id = ++id;
usuarios.push(user);
    res.send({ 
        message: "Usuário criado com sucesso!"
    });
});

   

app.listen(3000, () => {
  console.log("Servidor ativo na porta 3000");
});
