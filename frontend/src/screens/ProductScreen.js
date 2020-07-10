import { React, Link } from "libraries";
import data from "assets/dummy/data";

export default function ProductScreen(props) {
  const getId = parseInt(props.match.params.id);
  const product = data.products.find((product) => product._id === getId);
  return (
    <div>
      <div className="back-to-result">
        <Link to="/">back to results</Link>
      </div>
      <div className="detail-product">
        <div className="detail-product__image">
          <img src={product.image} alt="Product" />
        </div>
        <div className="detail-product__info">
          <ul>
            <li>
              <h4>{product.name}</h4>
            </li>
            <li>
              {product.rating} start ({product.numReviews} reviews)
            </li>
            <li>
              <b>{product.price}</b>
            </li>
            <li>{product.description}</li>
          </ul>
        </div>
        <div className="detail-product__action">
          <ul>
            <li>Price : {product.price}</li>
            <li>Status : {product.status}</li>
            <li>
              Qty:
              <select>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
              </select>
            </li>
            <li>
              <button className="button__add button__add--primary">
                Add to cart
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
