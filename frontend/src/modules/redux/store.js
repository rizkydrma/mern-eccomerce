import {
  createStore,
  combineReducers,
  applyMiddleware,
  compose,
  thunk,
  Cookie,
} from "libraries";
import {
  productListReducers,
  productDetailReducers,
} from "./reducers/productReducers";
import { cartReducers } from "./reducers/cartReducers";

const cartItems = Cookie.getJSON("cartItems") || [];

const initialState = { cart: { cartItems } };
const reducer = combineReducers({
  productList: productListReducers,
  productDetails: productDetailReducers,
  cart: cartReducers,
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducer,
  initialState,
  composeEnhancer(applyMiddleware(thunk))
);

export default store;
