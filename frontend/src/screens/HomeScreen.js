import { React, Link, useState, useEffect, axios } from "libraries";

export default function HomeScreen() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get("/api/products");
      setProducts(data);
    };
    fetchData();
  }, []);
  return (
    <ul className="products">
      {products.map((product) => {
        return (
          <li className="products__listItem" key={product._id}>
            <div className="product">
              <Link to={`/product/${product._id}`}>
                <img
                  src={product.image}
                  alt="product"
                  className="product__image"
                />
              </Link>
              <div className="product__name">
                <Link to={`/product/${product._id}`}>{product.name}</Link>
              </div>
              <div className="product__brand">{product.brand}</div>
              <div className="product__price">{product.price}</div>
              <div className="product-rating">
                {product.rating} Star ({product.numReviews})
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
