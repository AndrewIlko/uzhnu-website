import express, { Request, Response } from "express";
import * as mongoDB from "mongodb";
import { DB } from "..";

const router = express.Router();

interface PostQuery {
  title?: string;
  category?: string | string[];
  limit?: string | number;
  page?: string | number;
  sortDate?: string;
  sortViews?: string;
}

router.get("/", async (req: Request, res: Response) => {
  let { title, category, limit, page, sortDate, sortViews }: PostQuery =
    req.query;

  const filter: { [key: string]: any } = {};
  const sort: { [key: string]: any } = {};

  if (title) {
    const regex = new RegExp(title, "i");
    filter.title = regex;
  }
  if (category) {
    filter.categoryID = {
      $in: Array.isArray(category) ? category : [category],
    };
  }

  if (sortDate) {
    sort.date = sortDate == "asc" ? 1 : -1;
  }
  if (sortViews) {
    sort.countOfViews = sortViews == "asc" ? 1 : -1;
  }

  limit = Number(limit) || 1;
  page = Number(page);

  const totalPosts = await DB().collection("news-posts").countDocuments(filter);
  const totalPages = Math.ceil(totalPosts / limit);

  page = !page ? 1 : page <= 0 ? 1 : page > totalPages ? totalPages : page;

  const posts = await DB()
    .collection("news-posts")
    .find(filter)
    .sort(sort)
    .limit(limit)
    .skip((page - 1) * limit)
    .toArray();

  res.status(200).json({ posts, totalPages, currentPage: page });
});

router.get("/:id", async (req: Request, res: Response) => {
  const { id } = req.params;
  const post = await DB()
    .collection("news-posts")
    .findOne({ _id: new mongoDB.ObjectId(`${id}`) });
  res.status(200).json(post);
});

router.post("/:id/add-view", async (req: Request, res: Response) => {
  const { id } = req.params;
  await DB()
    .collection("news-posts")
    .updateOne(
      { _id: new mongoDB.ObjectId(`${id}`) },
      { $inc: { countOfViews: 1 } }
    );
});

router.post("/create", async (req: Request, res: Response) => {
  const body = req.body;
  body.date = new Date(body.date);

  const createdPost = await DB()
    .collection("news-posts")
    .insertOne({ ...body });

  await DB()
    .collection("news-categories")
    .updateOne(
      { _id: new mongoDB.ObjectId(`${body.categoryID}`) },
      { $push: { posts: createdPost.insertedId } }
    );

  res.status(200).json(createdPost);
});

router.patch("/:id/update", async (req: Request, res: Response) => {
  const body = req.body;
  const id = body._id;
  delete body.countOfViews;
  delete body._id;
  body.date = new Date(body.date);

  const updatedPost = await DB()
    .collection("news-posts")
    .updateOne({ _id: new mongoDB.ObjectId(`${id}`) }, { $set: body });

  res.status(200).json(updatedPost);
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const postToDelete = await DB()
    .collection("news-posts")
    .findOne({ _id: new mongoDB.ObjectId(`${id}`) });

  await DB()
    .collection("news-posts")
    .findOneAndDelete({ _id: new mongoDB.ObjectId(`${id}`) });
  await DB()
    .collection("news-categories")
    .updateOne(
      { _id: new mongoDB.ObjectId(`${postToDelete!.categoryID}`) },
      { $pull: { posts: new mongoDB.ObjectId(`${id}`) } }
    );

  res.status(200).json({ message: "Post has been deleted" });
});

export default router;

