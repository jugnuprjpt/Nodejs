import express from "express";
import { createProduct, productList } from "../controllers/productControll.js";

const router = express.Router();

// router.get("/products", productList);   /// intial same //

router.route("/products").get(productList);

router.route("/product").post(createProduct);

export default router;
