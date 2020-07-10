import React from "react";
import data from "assets/dummy/data";

export default function HomeScreen() {
  return (
    <ul className="products">
      {data.products.map((product, i) => {
        return (
          <li className="products__listItem" key={i}>
            <div className="product">
              <img
                src={product.image}
                alt="product"
                className="product__image"
              />
              <div className="product__name">
                <a href="product.html">{product.name}</a>
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
