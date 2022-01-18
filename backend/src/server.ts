import express from "express";
import routes from "./routes";
import cors from "cors";

export class Server {
  private static readonly PORT: string | number = process.env.PORT || 4200;
  private app: express.Application;
  private port: number | string;

  constructor() {
    this.app = express();
    this.app.use(cors());
    this.port = Server.PORT;
    this.listen();
    this.routes();
  }

  private listen(): void {
    this.app.listen(this.port, () => {
      console.log(`server is running on port ${this.port}`);
    });
  }
  private routes(): void {
    this.app.use("/api", routes.companyRouter);
    this.app.get("/", (req, res) => res.json("server running...!!"));
  }

  public getApp(): express.Application {
    return this.app;
  }
}
