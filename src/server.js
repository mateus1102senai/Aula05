import express from 'express'
import { config } from 'dotenv'

config()

const serverPort = process.env.PORT || 5000

const app = express()
app.use(express.json())

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

app.get("/2tds2", (req, rest) => {
       return rest.status(200).send({message: "Olá Chefe, Bom dia!!"})
});

app.get("/emocoes", (req, rest) => {
       return rest.status(200).send(emocoes)
});

app.get("/personagens", (req, rest) => {
       return rest.status(200).send(personagens)
});

app.post("/emocoes", (req, rest) => {
     const { nome, cor } = req.body
     const novaEmocao = {
          id: emocoes.length + 1,
          nome: nome,
          cor: cor,
     }
     emocoes.push(novaEmocao)
       return rest.status(200)
       .send(emocoes)
});


app.listen(serverPort, () => {
    console.log(`🎰 Server started on http://localhost:${serverPort}`)
})