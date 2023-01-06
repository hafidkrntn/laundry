import { USER_LOGIN, USER_LOGOUT } from "./constants";

import { getTokenFromLS } from "../../utils/jwt";

let initialState = { token: getTokenFromLS() };

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case USER_LOGIN:
      return { token: action.token };
    case USER_LOGOUT:
      return { token: null };
    default:
      return state;
  }
}