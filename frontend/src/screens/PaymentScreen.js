import { React, useDispatch, useState } from "libraries";
import { savePayment } from "modules/redux/actions/cartActions";
import CheckoutSteps from "../components/CheckoutSteps";

const PaymentScreen = (props) => {
  const [paymentMethod, setPaymentMethod] = useState("");
  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(savePayment(paymentMethod));
    props.history.push("placeorder");
  };

  return (
    <div>
      <CheckoutSteps step1 step2 step3 />

      <div className="form">
        <form onSubmit={submitHandler}>
          <ul className="form__container">
            <li>
              <h2>Payment</h2>
            </li>

            <li>
              <input
                type="radio"
                name="paymentMethod"
                id="paymentMethod"
                onChange={(e) => setPaymentMethod(e.target.value)}
                placeholder="enter a paymentMethod"
                value="paypal"
              />
              <label htmlFor="paymentMethod">Paypal</label>
            </li>
            <li>
              <button
                type="submit"
                className="button__add button__add--primary"
              >
                Continue
              </button>
            </li>
          </ul>
        </form>
      </div>
    </div>
  );
};

export default PaymentScreen;
