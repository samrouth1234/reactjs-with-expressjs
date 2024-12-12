import { AppController } from "./src";

const port = 8080;

const server = new AppController();
server.start(port);