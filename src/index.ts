import express, { Request, Response } from "express";
import routes from "./movies/routes";
import mongoose from "mongoose";
import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import 'dotenv/config';
import checkAccess from "./auth/checkAccess";

import options from "../swagger/config.json";
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send("Movie lobby api called!");
});
app.use("/api", checkAccess, routes);

const specs = swaggerJsdoc(options);
app.use(
  "/api-docs",
  swaggerUi.serve,
  swaggerUi.setup(specs, { explorer: true })
);

const CONNECTION_URL =
  process.env.MONGODB_URL || "mongodb://localhost:27017/movie-lobby-db";
mongoose
  .connect(CONNECTION_URL)
  .then(() => {
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch((err) => {
    console.log("Error connecting to mongodb");
    console.log(err);
  });
