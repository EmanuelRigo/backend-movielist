import { model, Schema } from "mongoose";

const collection = "movies";

const schema = new Schema({
  title: { type: String, required: true, index: true },
  price: { type: Number, default: 10 },
  stock: { type: Number, default: 10 },
  status: { type: String, required: true },
  category: {
    type: String,
    enum: ["action", "comedy", "drama", "horror"],
    default: "action",
  },
});

const MovieModel = model(collection, schema);

export default MovieModel;