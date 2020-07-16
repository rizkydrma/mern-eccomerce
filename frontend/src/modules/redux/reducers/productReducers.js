import {
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_FAIL,
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_SUCCESS,
  PRODUCT_DETAILS_FAIL,
  PRODUCT_SAVE_REQUEST,
  PRODUCT_SAVE_SUCCESS,
  PRODUCT_SAVE_FAIL,
  PRODUCT_DELETE_REQUEST,
  PRODUCT_DELETE_SUCCESS,
  PRODUCT_DELETE_FAIL,
} from "modules/redux/constant/productConstant";
const initialState = {
  products: [],
};

const productListReducers = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case PRODUCT_LIST_REQUEST:
      return { loading: true, products: [] };
    case PRODUCT_LIST_SUCCESS:
      return { loading: false, products: payload };
    case PRODUCT_LIST_FAIL:
      return { loading: false, error: payload };
    default:
      return state;
  }
};

const productSaveReducer = (state = { product: {} }, action) => {
  const { type, payload } = action;
  switch (type) {
    case PRODUCT_SAVE_REQUEST:
      return { loading: true };
    case PRODUCT_SAVE_SUCCESS:
      return { loading: false, success: true, product: payload };
    case PRODUCT_SAVE_FAIL:
      return { loading: false, error: payload };
    default:
      return state;
  }
};

const productDeleteReducer = (state = { product: {} }, action) => {
  const { type, payload } = action;
  switch (type) {
    case PRODUCT_DELETE_REQUEST:
      return { loading: true };
    case PRODUCT_DELETE_SUCCESS:
      return { loading: false, success: true, product: payload, success: true };
    case PRODUCT_DELETE_FAIL:
      return { loading: false, error: payload };
    default:
      return state;
  }
};

const productDetailReducers = (state = { product: {} }, action) => {
  const { type, payload } = action;
  switch (type) {
    case PRODUCT_DETAILS_REQUEST:
      return { loading: true };
    case PRODUCT_DETAILS_SUCCESS:
      return { loading: false, product: payload };
    case PRODUCT_DETAILS_FAIL:
      return { loading: false, error: payload };
    default:
      return state;
  }
};

export {
  productListReducers,
  productDetailReducers,
  productSaveReducer,
  productDeleteReducer,
};
