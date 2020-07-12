import { React, useDispatch, useEffect, useSelector, Link } from "libraries";
import { addToCart, removeFromCart } from "modules/redux/actions/cartActions";
function CartScreen(props) {
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  console.log(cartItems);
  const productId = props.match.params.id;
  const qty = props.location.search
    ? Number(props.location.search.split("=")[1])
    : 1;
  const dispatch = useDispatch();
  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty));
    }
  }, []);

  const handlerRemoveFromCart = (productId) => {
    dispatch(removeFromCart(productId));
  };

  const handlerCheckout = () => {
    props.history.push("/signin?redirect=shipping");
  };

  return (
    <div className="cart">
      <div className="cart__list">
        <ul className="cart__container">
          <li>
            <h3>Shopping Cart</h3>
            <div>Price</div>
          </li>
          {cartItems.length === 0 ? (
            <div>Cart is empty</div>
          ) : (
            cartItems.map((item) => (
              <li key={item.product}>
                <div className="cart__image">
                  <img src={item.image} alt="product" />
                </div>
                <div className="cart__name">
                  <Link to={"/product/" + item.product}>{item.name}</Link>
                  <div>
                    Qty :
                    <select
                      value={item.qty}
                      onChange={(e) =>
                        dispatch(addToCart(item.product, e.target.value))
                      }
                    >
                      {[...Array(item.countInStock).keys()].map((stock) => (
                        <option key={stock + 1} value={stock + 1}>
                          {stock + 1}
                        </option>
                      ))}
                    </select>
                    <button
                      type="submit"
                      className="button"
                      onClick={() => handlerRemoveFromCart(item.product)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
                <div className="cart__price">${item.price}</div>
              </li>
            ))
          )}
        </ul>
      </div>
      <div className="cart__action">
        <h3>
          Subtotal ({cartItems.reduce((a, c) => a + Number(c.qty), 0)} items) :
          {cartItems.reduce((a, c) => a + c.price * c.qty, 0)}
        </h3>
        <button
          className="button__add button__add--primary button__add--full-width"
          disabled={cartItems.length === 0}
          onClick={handlerCheckout}
        >
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
}

export default CartScreen;
