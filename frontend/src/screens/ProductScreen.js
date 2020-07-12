import {
  React,
  Link,
  useSelector,
  useDispatch,
  useEffect,
  useState,
} from "libraries";
import { detailsProduct } from "modules/redux/actions/productActions";

export default function ProductScreen(props) {
  const productDetails = useSelector((state) => state.productDetails);
  const { product, loading, error } = productDetails;
  const dispatch = useDispatch();

  const [qty, setQty] = useState(1);

  useEffect(() => {
    dispatch(detailsProduct(props.match.params.id));
  }, []);

  const handleAddToCart = () => {
    props.history.push(`/cart/${props.match.params.id}?qty=${qty}`);
  };
  return (
    <div>
      <div className="back-to-result">
        <Link to="/">back to results</Link>
      </div>
      {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <div> {error} </div>
      ) : (
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
              <li>
                Status :{" "}
                {product.countInStock > 0 ? "in Stock" : "Out of Stock"}
              </li>
              <li>
                Qty:
                <select value={qty} onChange={(e) => setQty(e.target.value)}>
                  {[...Array(product.countInStock).keys()].map((stock) => (
                    <option value={stock + 1} key={stock + 1}>
                      {" "}
                      {stock + 1}{" "}
                    </option>
                  ))}
                </select>
              </li>
              <li>
                <button
                  className="button__add button__add--primary"
                  onClick={handleAddToCart}
                  disabled={product.countInStock > 0 ? false : true}
                >
                  Add to cart
                </button>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
