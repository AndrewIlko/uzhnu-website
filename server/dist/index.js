"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const mongoDB = __importStar(require("mongodb"));
const port = 8000;
const MONGODB_URL = "mongodb+srv://andriy:andriy@db.jwwluob.mongodb.net/?retryWrites=true&w=majority";
const mongoClient = new mongoDB.MongoClient(MONGODB_URL);
const DB = () => __awaiter(void 0, void 0, void 0, function* () {
    const db = yield mongoClient.db("uzhnu");
    return db;
});
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.get("/posts", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const params = req.query;
    const limit = +params.limit || 0;
    const page = +params.page - 1 || 0;
    const filter = {};
    if (params.category) {
        filter["categoryID"] = {
            $in: Array.isArray(params.category) ? params.category : [params.category],
        };
    }
    if (params.title) {
        const title = params.title;
        const regex = new RegExp(title, "i");
        filter.title = regex;
    }
    const total = yield (yield DB())
        .collection("news-posts")
        .countDocuments(filter);
    const posts = yield (yield DB())
        .collection("news-posts")
        .find(filter)
        .sort({ date: -1 })
        .limit(limit)
        .skip(page * limit)
        .toArray();
    res.json({ posts, total, page: page + 1 });
}));
app.post("/post/:id/add-view", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    yield (yield DB())
        .collection("news-posts")
        .updateOne({ _id: new mongoDB.ObjectId(`${id}`) }, { $inc: { countOfViews: 1 } });
}));
app.get("/news-categories", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const categories = yield (yield DB())
        .collection("news-categories")
        .find({})
        .toArray();
    res.json(categories);
}));
app.post("/create-post", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const body = req.body;
    body.date = new Date(body.date);
    const createdPost = yield (yield DB())
        .collection("news-posts")
        .insertOne(Object.assign({}, body));
    yield (yield DB())
        .collection("news-categories")
        .updateOne({ _id: new mongoDB.ObjectId(`${body.categoryID}`) }, { $push: { posts: createdPost.insertedId } });
    res.json(createdPost);
}));
app.listen(port, () => {
    mongoClient.connect().then(() => {
        console.log("DB connected.");
        console.log(`Server is running on port ${port}.`);
    });
});
