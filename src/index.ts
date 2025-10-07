import App from './app';

const PORT = process.env.PORT ? Number(process.env.PORT) : 3000;

const app = new App(PORT);
app.listen();
