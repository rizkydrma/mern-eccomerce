import {
  USER_SIGNIN_REQUEST,
  USER_SIGNIN_SUCCESS,
  USER_SIGNIN_FAIL,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAIL,
} from "modules/redux/constant/userConstant";

function userSigninReducer(state = {}, action) {
  const { type, payload } = action;
  switch (type) {
    case USER_SIGNIN_REQUEST:
      return { loading: true };
    case USER_SIGNIN_SUCCESS:
      return { loading: false, userInfo: payload };
    case USER_SIGNIN_FAIL:
      return { loading: false, error: payload };
    default:
      return state;
  }
}
function userRegisterReducer(state = {}, action) {
  const { type, payload } = action;
  switch (type) {
    case USER_REGISTER_REQUEST:
      return { loading: true };
    case USER_REGISTER_SUCCESS:
      return { loading: false, userInfo: payload };
    case USER_REGISTER_FAIL:
      return { loading: false, error: payload };
    default:
      return state;
  }
}

export { userSigninReducer, userRegisterReducer };
