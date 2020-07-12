import express from "express";
import data from "./data";

const app = express();

// GET DETAIL PRODUCT
app.get("/api/products/:id", (req, res) => {
  const productId = parseInt(req.params.id);
  const product = data.products.find((x) => x._id === productId);
  if (product) {
    res.send(product);
  } else {
    res.status(404).send({ msg: "Product Not Found" });
  }
});
// GET ALL PRODUCT
app.get("/api/products", (req, res) => {
  res.send(data.products);
});

app.listen(5000, () =>
  console.log(`Server has started on port http://localhost:5000`)
);
