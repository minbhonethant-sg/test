import express, { Request, Response, Application } from "express";
import cors from "cors";
import router from "./routers";

require("dotenv").config();
console.log(process.env.CLIENT_PORT);
const app: Application = express();

app.use(express.json());
app.use(
  cors({
    origin: process.env.CLIENT_PORT,
    credentials: true,
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  })
);

app.use("/api/v1/", router);

export default app;
