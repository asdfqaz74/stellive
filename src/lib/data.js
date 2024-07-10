import { Post } from "./models";
import { connectToDb } from "./utils";

export const getPosts = async () => {
  try {
    connectToDb();
    const posts = await Post.find();
    return posts;
  } catch (err) {
    console.log(err);
    throw new Error(err);
  }
};

export const getPost = async ({ item }) => {
  try {
    connectToDb();
    const posts = await Post.findOne({ item });
    return posts;
  } catch (err) {
    console.log(err);
    throw new Error(err);
  }
};
