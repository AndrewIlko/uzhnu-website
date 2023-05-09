import express, { Express, Request, Response } from "express";
import cors from "cors";
import * as mongoDB from "mongodb";
import postRouter from "./routes/post";

const port: number = 8000;
const MONGODB_URL =
  "mongodb+srv://andriy:andriy@db.jwwluob.mongodb.net/?retryWrites=true&w=majority";
const mongoClient = new mongoDB.MongoClient(MONGODB_URL);

export const DB = () => {
  const db = mongoClient.db("uzhnu");
  return db;
};

const app: Express = express();
app.use(cors());
app.use(express.json({ limit: "10mb" }));

app.use("/post", postRouter);

app.get("/news-categories", async (req, res) => {
  const categories = await DB()
    .collection("news-categories")
    .find({})
    .toArray();
  res.json(categories);
});

app.listen(port, (): void => {
  mongoClient.connect().then(() => {
    console.log("DB connected.");
    console.log(`Server is running on port ${port}.`);
  });
});
