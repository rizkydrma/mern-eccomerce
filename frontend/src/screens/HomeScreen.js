import { React, Link } from "libraries";
import data from "assets/dummy/data";

export default function HomeScreen() {
  return (
    <ul className="products">
      {data.products.map((product) => {
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
