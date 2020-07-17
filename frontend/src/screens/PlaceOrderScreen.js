import { React, useDispatch, useEffect, useSelector, Link } from "libraries";
import { addToCart, removeFromCart } from "modules/redux/actions/cartActions";
import CheckoutSteps from "components/CheckoutSteps";
function PlaceOrderScreen(props) {
  const cart = useSelector((state) => state.cart);
  const { cartItems, shipping, payment } = cart;

  if (!shipping) {
    props.history.push("/shipping");
  }

  if (!payment) {
    props.history.push("/payment");
  }

  const dispatch = useDispatch();
  useEffect(() => {}, []);

  const handlerCheckout = () => {
    props.history.push("/signin?redirect=shipping");
  };

  return (
    <div>
      <CheckoutSteps step1 step2 step3 step4 />

      <div className="placeorder">
        <div className="placeorder__info">
          <div>
            <h3>Shipping</h3>
          </div>
          <div>
            {cart.shipping.address} , {cart.shipping.city},
            {cart.shipping.postalCode} , {cart.shipping.country}
          </div>
          <div>
            <h3>Payment</h3>
            <div>Payment Method : {cart.payment.paymentMethod}</div>
          </div>
          <div>
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
                      <div>Qty : {item.qty}</div>
                    </div>
                    <div className="cart__price">${item.price}</div>
                  </li>
                ))
              )}
            </ul>
          </div>
        </div>
        <div className="placeorder__action">
          <h3>
            Subtotal ({cartItems.reduce((a, c) => a + Number(c.qty), 0)} items)
            :{cartItems.reduce((a, c) => a + c.price * c.qty, 0)}
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
    </div>
  );
}

export default PlaceOrderScreen;
