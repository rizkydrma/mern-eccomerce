import {
  createStore,
  combineReducers,
  applyMiddleware,
  compose,
  thunk,
} from "libraries";
import {
  productListReducers,
  productDetailReducers,
} from "./reducers/productReducers";

const initialState = {};
const reducer = combineReducers({
  productList: productListReducers,
  productDetails: productDetailReducers,
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducer,
  initialState,
  composeEnhancer(applyMiddleware(thunk))
);

export default store;
