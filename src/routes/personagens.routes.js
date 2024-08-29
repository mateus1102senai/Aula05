import { Router } from "express";

const personagensRouter = Router()

const personagens = [
    {
      id: 100,
      nome: "totoro",
      vivo: true
    },
    {
      id: 101,
      nome:"coringa",
      vivo: true
  
    },
    {
      id: 102,
      nome: "vecna",
      studio: "Netflix",
      vivo: true
    },
    {
      id: 11,
      nome: "eleven",
      vivo: true
    }
  ]

  app.get("/personagens", (req, rest) => {
    return rest.status(200).send(personagens)
});