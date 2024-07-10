import mongoose from 'mongoose';

const PostSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },
    types: {
      type: String,
      required: true,
    },
    img: {
      type: String,
    },
    content: {
      type: String,
    },
    link: {
      type: String,
    },
  },
  { timestamps: true },
);

export const Post =
  mongoose.models?.Post || mongoose.model('Post', PostSchema, 'posts');
