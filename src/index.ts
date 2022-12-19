import express, { Request, Response } from "express";
import path from "path";
import { connect, connection } from "mongoose";
const app = express();
const PORT = 5000;
import * as dotenv from "dotenv";
dotenv.config({
  path: path.join(__dirname, "config.env"),
});
import { router } from "./routes/userRoute";

app.use(express.json());
app.use("/api/v1/user", router);

app.get("/", (req: Request, res: Response): void => {
  res.send("Hi TS running");
});

connection.once("open", () => console.log(`Database connected..!`));
connection.on("error", () => console.log(`Database connection Error ....!`));

const startserver = async () => {
  await connect(process.env.MONGO_URL as string);
  app.listen(PORT, (): void => {
    console.log(`server is running on port ${PORT}`);
  });
};

startserver();
