import { React, Link, useEffect, useSelector, useDispatch } from "libraries";
import { listProduct } from "modules/redux/actions/productActions";

export default function HomeScreen() {
  const productList = useSelector((state) => state.productList);
  const { loading, products, error } = productList;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(listProduct());
  }, []);
  return loading ? (
    <div>loading....</div>
  ) : error ? (
    <div>{error}</div>
  ) : (
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
