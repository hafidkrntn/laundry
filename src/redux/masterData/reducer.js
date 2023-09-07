import {
    ERROR_MASTERDATA,
    START_MASTERDATA,
    SUCCESS_MASTERDATA,
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
    orderBy: "masterdata",
    orderDirection: "asc",
  };

  export default function reducer(state = initialState, action) {
    switch (action.type) {
      case START_MASTERDATA:
        return { ...state, status: statusList.process };
      case ERROR_MASTERDATA:
        return { ...state, status: statusList.error };
      case SUCCESS_MASTERDATA:
        return {
          ...state,
          status: statusList.success,
          data: action.masterData,
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
