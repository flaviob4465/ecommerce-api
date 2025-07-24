import express, { Request, Response } from "express";

const app = express();

app.use(express.json());

// endpoint para retornar uma mensagem de boas-vindas
// O método get recebe dois parâmetros, o primeiro é a rota e o segundo é uma função
app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

type User = { 
  id: number; 
  nome: string; 
  email: string;
}
let id = 0;
// Middleware para permitir o envio de dados no corpo da requisição
let usuarios: User[] = [];


// Endpoint para retornar uma lista de produtos
app.get("/users", (req: Request, res: Response) => {
  res.send(usuarios);
});


app.get("/users/:id", (req: Request, res: Response) =>{
    let userId = Number (req.params.id);
    let user = usuarios.find (user => user.id == userId) ;
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

app.put("/users/:id", (req: Request , res: Response) => {
let userId = Number(req.params.id);
let user = req.body
let indexOf = usuarios.findIndex((_user: User) => _user.id === userId)

usuarios [indexOf].nome = user.nome;
usuarios [indexOf].email = user.email;

res.send ({
  message: "utilizador alterado com sucesso"
})


})

app.delete("/users/:id", (req: Request, res: Response) =>{
  let userApagado = Number( req.params.id )
  usuarios = usuarios.filter(user => user.id !== userApagado )

  res.send({message: "utilizador apagado com sucesso"})
});



   

app.listen(3000, () => {
  console.log("Servidor ativo na porta 3000");
});
