import { Router } from "express";

const emocoesRoutes = Router()

const emocoes = [
    {
      id: 1,
      nome: "Raiva",
      cor: "Vermelho"
    },
    {
      id: 2,
      nome: "Alegria",
      cor: "Amarela"
    },
    {
      id: 3,
      nome: "Tristeza",
      cor: "Azul"
    },
]

app.get("/emocoes", (req, rest) => {
    return rest.status(200).send(emocoes)
});

app.post("/emocoes", (req, res) => {
    const { nome, cor } = req.body
    const novaEmocao = {
         id: emocoes.length + 1,
         nome: nome,
         cor: cor,
    }
    emocoes.push(nova)
      return rest.status(200).send(emocoes)
});
