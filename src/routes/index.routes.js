import { Router } from "express";

import emocoesRoutes from "./emocoes.routes.js";

const routes = Router();

routes.get("/2tds2", (req, rest) => {
    return rest.status(200).send({message: "Olá Chefe, Bom dia!!"})
})

routes.use("/emocoes", emocoesRoutes)

export default routes;