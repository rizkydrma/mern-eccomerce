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
  cartReducers,
  userSigninReducer,
  userRegisterReducer,
  productSaveReducer,
  productDeleteReducer,
} from "modules/redux/reducers";

const cartItems = Cookie.getJSON("cartItems") || [];
const userInfo = Cookie.getJSON("userInfo") || null;

const initialState = { cart: { cartItems }, userSignin: { userInfo } };
const reducer = combineReducers({
  productList: productListReducers,
  productDetails: productDetailReducers,
  cart: cartReducers,
  userSignin: userSigninReducer,
  userRegister: userRegisterReducer,
  productSave: productSaveReducer,
  productDelete: productDeleteReducer,
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducer,
  initialState,
  composeEnhancer(applyMiddleware(thunk))
);

export default store;
