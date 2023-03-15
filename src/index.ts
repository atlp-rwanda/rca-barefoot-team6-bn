import express, { type Request, type Response } from "express";
import bodyParser from "body-parser";
import {config} from 'dotenv';
import { connectDB, sequelizedb } from "./database/config";
import * as models from './database/models'

config();

const app: express.Application = express();
const PORT: number | undefined = Number(process.env.PORT) || 3000;


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


connectDB();


try {
  app.get('/', (req: Request, res: Response) => {
    res.status(200).send('Hello World!');
  })
  app.listen(PORT as number, () => {
    console.log(`Example app listening on port ${PORT}`)
  })
} catch (err: any) {
  console.log(`Error occurred: ${err.message}`)
}