import express, { Express, Request, Response } from "express";
import cors from "cors";
import * as mongoDB from "mongodb";

const port: number = 8000;
const MONGODB_URL =
  "mongodb+srv://andriy:andriy@db.jwwluob.mongodb.net/?retryWrites=true&w=majority";
const mongoClient = new mongoDB.MongoClient(MONGODB_URL);

const DB = async () => {
  const db = await mongoClient.db("uzhnu");
  return db;
};

const app: Express = express();
app.use(cors());
app.use(express.json());

app.get("/posts", async (req, res) => {
  const params: any = req.query;
  const limit = +params.limit || 0;
  const page = +params.page - 1 || 0;
  const filter: { [key: string]: any } = {};

  if (params.category) {
    filter["categoryID"] = {
      $in: Array.isArray(params.category) ? params.category : [params.category],
    };
  }

  if (params.title) {
    const title: string = params.title;
    const regex = new RegExp(title, "i");
    filter.title = regex;
  }

  const total = await (await DB())
    .collection("news-posts")
    .countDocuments(filter);

  const posts = await (
    await DB()
  )
    .collection("news-posts")
    .find(filter)
    .sort({ date: -1 })
    .limit(limit)
    .skip(page * limit)
    .toArray();

  res.json({ posts, total, page: page + 1 });
});

app.post("/post/:id/add-view", async (req, res) => {
  const { id } = req.params;
  await (await DB())
    .collection("news-posts")
    .updateOne(
      { _id: new mongoDB.ObjectId(`${id}`) },
      { $inc: { countOfViews: 1 } }
    );
});

app.get("/news-categories", async (req, res) => {
  const categories = await (await DB())
    .collection("news-categories")
    .find({})
    .toArray();
  res.json(categories);
});

app.post("/create-post", async (req, res) => {
  const body = req.body;
  body.date = new Date(body.date);

  const createdPost = await (await DB())
    .collection("news-posts")
    .insertOne({ ...body });

  await (await DB())
    .collection("news-categories")
    .updateOne(
      { _id: new mongoDB.ObjectId(`${body.categoryID}`) },
      { $push: { posts: createdPost.insertedId } }
    );

  res.json(createdPost);
});

app.listen(port, (): void => {
  mongoClient.connect().then(() => {
    console.log("DB connected.");
    console.log(`Server is running on port ${port}.`);
  });
});
