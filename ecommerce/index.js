import express from "express";
import connectDb from "./config/connectDb.js";
import ProductRoute from "./Routes/Product.js";

const app = express();
app.use(express.json());
connectDb();

app.use(ProductRoute);

app.get("/health", (req, res) => {
  res.status(200).json({
    message: "server running",
    success: true,
  });
});

app.listen(8000, () => {
  console.log("server started");
});
