import express, { Express } from 'express';
import bodyParser from 'body-parser';
import carRouter from './routes/carRoutes';

export default class App {
  private app: Express;
  private port: number;

  constructor(port: number) {
    this.app = express();
    this.port = port;
    this.config();
    this.routes();
  }

  private config() {
    this.app.use(bodyParser.json());
  }

  private routes() {
    this.app.use('/api/cars', carRouter);
    this.app.get('/', (_req, res) => res.send('Cars API is running'));
  }

  public listen() {
    this.app.listen(this.port, () => {
      console.log(`Server started at http://localhost:${this.port}`);
    });
  }
}
