import express from "express";
import Product from "../models/productModel";
import { isAuth, isAdmin } from "../utils";

const router = express.Router();

router.get("/", async (req, res) => {
  const products = await Product.find({});
  res.send(products);
});
router.get("/:id", async (req, res) => {
  const products = await Product.findOne({ _id: req.params.id });
  console.log(products);
  if (products) {
    res.send(products);
  } else {
    res.status(404).send({ msg: "Product Not Found" });
  }
});

router.post("/", isAuth, isAdmin, async (req, res) => {
  const product = new Product({
    name: req.body.name,
    image: req.body.image,
    brand: req.body.brand,
    price: req.body.price,
    category: req.body.category,
    countInStock: req.body.countInStock,
    description: req.body.description,
    rating: req.body.rating,
    numReviews: req.body.numReviews,
  });
  const newProduct = await product.save();
  if (newProduct) {
    return res
      .status(201)
      .send({ msg: "New Product Created", data: newProduct });
  }
  return res.status(500).send({ msg: "Error in creating product" });
});

router.put("/:id", isAuth, isAdmin, async (req, res) => {
  const productId = req.params.id;
  const product = await Product.findById(productId);
  if (product) {
    product.name = req.body.name;
    product.price = req.body.price;
    product.image = req.body.image;
    product.brand = req.body.brand;
    product.category = req.body.category;
    product.countInStock = req.body.countInStock;
    product.description = req.body.description;

    const updatedProduct = await product.save();
    if (updatedProduct) {
      return res
        .status(200)
        .send({ msg: "Product Updated", data: updatedProduct });
    }
  }
  return res.status(500).send({ msg: "Error in updating product" });
});

router.delete("/:id", isAuth, isAdmin, async (req, res) => {
  const productId = req.params.id;
  const deletedProduct = await Product.findById(productId);
  if (deletedProduct) {
    await deletedProduct.remove();
    res.send({ msg: "Product Deleted" });
  } else {
    res.send({ msg: "Error in Deletion" });
  }
});

export default router;
