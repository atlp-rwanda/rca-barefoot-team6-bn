import express, { type Request, type Response } from "express";
import bodyParser from "body-parser";

const app: express.Application = express();
const port: number = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', (req: Request, res: Response) => {
  res.status(200).send('Hello World!');
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
