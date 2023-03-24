import postMessage from "../models/postMessage.js";
import mongoose from "mongoose";

export const getPosts = async (req, res) => {
  const { page } = req.query;
  try {
    const LIMIT = 2;
    const startIndex = (Number(page) - 1) * LIMIT;
    const total = await postMessage.countDocuments({});
    const posts = await postMessage
      .find()
      .sort({ _id: -1 })
      .limit(LIMIT)
      .skip(startIndex);

    console.log(posts);
    res.status(200).json({
      data: posts,
      currentPage: Number(page),
      numberOfPages: Math.ceil(total / LIMIT),
    });
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};
export const getPostsBySearch = async (req, res) => {
  const { searchQuery, tags } = req.query;
  try {
    const title = new RegExp(searchQuery, "i"); //ignore case--> "i"
    const posts = await postMessage.find({
      $or: [{ title }, { tags: { $in: tags.split(",") } }],
    });
    return res.json({ data: posts });
  } catch (err) {
    console.log(err);
    res.status(404).json({ message: err.message });
  }
};

export const createPost = async (req, res) => {
  const post = req.body;
  const newPost = new postMessage({
    ...post,
    creator: req.userId,
    createdAt: new Date().toISOString(),
  });

  try {
    await newPost.save();
    res.status(201).json(newPost);
  } catch (err) {
    res.status(409).json({ message: err.message });
  }
};

export const updatePost = async (req, res) => {
  const { id: _id } = req.params;
  const post = req.body;
  if (!mongoose.Types.ObjectId.isValid(_id))
    return res.status(404).send("No Post with that id");

  const updatedPost = await postMessage.findByIdAndUpdate(
    _id,
    { ...post, _id },
    {
      new: true,
    }
  );
  res.json(updatedPost);
};

export const deletePost = async (req, res) => {
  const { id: _id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(_id))
    return res.status(404).send("No Post with that id");

  await postMessage.findByIdAndRemove(_id);
  res.json({ message: "Post Deleted Successfully..!!" });
};

export const likePost = async (req, res) => {
  const { id: _id } = req.params;

  if (!req.userId) return res.json({ message: "Unauthenticated" });

  if (!mongoose.Types.ObjectId.isValid(_id))
    return res.status(404).send("No Post with that id");

  const post = await postMessage.findById(_id);

  const index = post.likes.findIndex((id) => id === String(req.userId));
  console.log(index);
  if (index === -1) {
    post.likes.push(req.userId);
  } else {
    post.likes = post.likes.filter((like) => like !== String(req.userId));
  }
  const updatedPost = await postMessage.findByIdAndUpdate(_id, post, {
    new: true,
  });
  res.json(updatedPost);
};
