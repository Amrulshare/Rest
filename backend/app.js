import express from "express";
import bodyParser from "body-parser";
import cors from 'cors';
import router from "./routes/index.router.js";



const app = express();
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors())
app.use(bodyParser.json())
app.use(router)
export default app;