import express from "express";
import cors from "cors";
import proxyRouter from "./routers/proxyRouter.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use(proxyRouter);

app.listen(5000, () => {
  console.log("Server running on")
});