import {
  React,
  useEffect,
  useSelector,
  useDispatch,
  Link,
  useState,
} from "libraries";
import { saveShipping } from "modules/redux/actions/cartActions";
import CheckoutSteps from "../components/CheckoutSteps";

const ShippingScreen = (props) => {
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [country, setCountry] = useState("");

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(saveShipping({ address, city, postalCode, country }));
    props.history.push("payment");
  };

  return (
    <div>
      <CheckoutSteps step1 step2 />

      <div className="form">
        <form onSubmit={submitHandler}>
          <ul className="form__container">
            <li>
              <h2>Shipping</h2>
            </li>

            <li>
              <label htmlFor="address">address</label>
              <input
                type="text"
                name="address"
                id="address"
                onChange={(e) => setAddress(e.target.value)}
                placeholder="enter a address"
              />
            </li>

            <li>
              <label htmlFor="city">city</label>
              <input
                type="text"
                name="city"
                id="city"
                onChange={(e) => setCity(e.target.value)}
                placeholder="enter a city"
              />
            </li>

            <li>
              <label htmlFor="postalCode">postalCode</label>
              <input
                type="text"
                name="postalCode"
                id="postalCode"
                onChange={(e) => setPostalCode(e.target.value)}
                placeholder="enter a postalCode"
              />
            </li>

            <li>
              <label htmlFor="country">country</label>
              <input
                type="text"
                name="country"
                id="country"
                onChange={(e) => setCountry(e.target.value)}
                placeholder="enter a country"
              />
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

export default ShippingScreen;
