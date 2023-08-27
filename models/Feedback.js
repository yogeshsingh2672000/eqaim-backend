import mongoose, { Schema } from "mongoose";

const COLLECTION = "feedbacks";

const commentSchema = Schema({
  id: Number,
  content: String,
  user: {
    image: String,
    name: String,
    username: String,
  },
  replies: [
    {
      content: String,
      replyingTo: String,
      user: {
        image: String,
        name: String,
        username: String,
      },
    },
  ],
});

const productRequestSchema = Schema({
  id: Number,
  title: String,
  category: String,
  upvotes: Number,
  status: String,
  description: String,
  comments: [commentSchema],
});

const currentUserSchema = Schema({
  image: String,
  name: String,
  username: String,
});

const feedbackSchema = Schema({
  currentUser: currentUserSchema,
  productRequests: [productRequestSchema],
});

const Feedback = mongoose.model(COLLECTION, feedbackSchema);

export default Feedback;
