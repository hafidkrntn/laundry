import {
  ERROR_CUSTOMER,
  SUCCESS_CUSTOMER,
  START_CUSTOMER,
  SET_KEYWORD,
  SET_LIMIT,
  SET_ORDER_BY,
  SET_ORDER_DIRECTION,
  SET_PAGE,
} from "./constants";

const statusList = {
  idle: "idle",
  process: "process",
  success: "success",
  error: "error",
};

const initialState = {
  status: statusList.idle,
  data: [],
  page: 1,
  keyword: "",
  limit: 10,
  orderBy: "customer",
  orderDirection: "asc",
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case START_CUSTOMER:
      return { ...state, status: statusList.process };
    case ERROR_CUSTOMER:
      return { ...state, status: statusList.error };
    case SUCCESS_CUSTOMER:
      return { ...state, status: statusList.error, data: action.customer };
    case SET_PAGE:
      return {
        ...state,
        page: action.page,
      };
    case SET_KEYWORD:
      return {
        ...state,
        keyword: action.keyword,
      };
    case SET_LIMIT:
      return {
        ...state,
        limit: action.limit,
      };
    case SET_ORDER_BY:
      return {
        ...state,
        orderBy: action.orderBy,
      };
    case SET_ORDER_DIRECTION:
      return {
        ...state,
        orderDirection: action.orderDirection,
      };
    default:
      return state;
  }
}
