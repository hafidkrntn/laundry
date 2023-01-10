import {
  ERROR_TRANSAKSI,
  START_TRANSAKSI,
  SUCCESS_TRANSAKSI,
  SET_KEYWORD,
  SET_LIMIT,
  SET_ORDER_BY,
  SET_ORDER_DIRECTION,
  SET_PAGE,
  SET_PAKET,
  SET_CUSTOMER,
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
  paket: [],
  customer: [],
  page: 1,
  keyword: "",
  limit: 10,
  orderBy: "transaksi",
  orderDirection: "asc",
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case START_TRANSAKSI:
      return { ...state, status: statusList.process };
    case ERROR_TRANSAKSI:
      return { ...state, status: statusList.error };
    case SUCCESS_TRANSAKSI:
      return {
        ...state,
        status: statusList.success,
        data: action.transaksi,
      };

    case SET_CUSTOMER:
      return {
        ...state,
        customer: action.customer,
      };

    case SET_PAKET:
      return {
        ...state,
        paket: action.paket,
      };

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
