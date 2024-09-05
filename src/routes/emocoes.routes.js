import { Router } from "express";

const emocoesRoutes = Router()

let emocoes = [
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
emocoesRoutes.get("/", (req, rest) => {
    return rest.status(200).send(emocoes)
});

emocoesRoutes.post("/", (req, res) => {
    const { nome, cor } = req.body
   

  const novaEmocao = {
    id: emocoes.length + 1,
     nome: nome,
     cor:cor,
  }

    emocoes.push(novaEmocao)

      return res.status(201).send(emocoes)
});

emocoesRoutes.get("/:id", (req, res) => {
  const {id} = req.params;

  //console.log(id);

  const emocao = emocoes.find((emotion) => emotion.id == id )

  if (!emocao) {
    return res.status(404).send({
      message: "Emoção não encontrada!"
    })
  }
return res.status(200).send({
      message: "Emoção encontrada!"
});


});



export default emocoesRoutes;