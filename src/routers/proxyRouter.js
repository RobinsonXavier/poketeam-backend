import express from "express";
import { getDataInPokeApi } from "../proxy/proxy.js";

const proxyRouter = express.Router();

proxyRouter.post("/pokemonData", getDataInPokeApi);

export default proxyRouter;