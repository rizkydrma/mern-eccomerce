import express from "express";
import data from "./data";
import dotenv from "dotenv";
import config from "./config";
import mongoose from "mongoose";
import userRoute from "./routes/userRoutes";

dotenv.config();

const mongodbUrl = config.MONGODB_URL;
mongoose
  .connect(mongodbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .catch((error) => console.log(error.reason));

const app = express();

app.use("/api/users", userRoute);

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
