import mongoose from "mongoose";

const todoSchema = mongoose.Schema({
  title: String,
  isComplated: {
    type: Boolean,
    default: false,
  },
});

export default mongoose.model("todo", todoSchema);
