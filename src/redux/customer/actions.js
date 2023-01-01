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

import { getData } from "../../utils/fetch";
import debounce from "debounce-promise";

let debouncedFetchTalents = debounce(getData, 1000);

export const startCustomer = () => {
  return {
    type: START_CUSTOMER,
  };
};

export const errorCustomer = () => {
  return {
    type: ERROR_CUSTOMER,
  };
};

export const successCustomer = ({ customer }) => {
  return {
    type: SUCCESS_CUSTOMER,
    customer,
  };
};

export const fetchAllData = (noloading) => {
  return async (dispatch, getState) => {
    noloading && dispatch(startCustomer());
    try {
      let params = {
        page: getState().customer?.page || 1,
        search: getState().customer?.keyword,
        limit: getState().customer?.limit,
        orderBy: getState().customer?.orderBy,
        orderDirection: getState().customer?.orderDirection,
      };

      let res = await debouncedFetchTalents(`/users/users`, params);
      dispatch(successCustomer({
        customer: res.data,
      }))
    } catch (e) {
      dispatch(errorCustomer());
    }
  };
};

export const setPage = (page) => {
  return {
    type: SET_PAGE,
    page,
  };
};

export const setKeyword = (keyword) => {
  return {
    type: SET_KEYWORD,
    keyword,
  };
};

export const setLimit = (limit) => {
  return {
    type: SET_LIMIT,
    limit,
  };
};

export const setOrderBy = (orderBy) => {
  return {
    type: SET_ORDER_BY,
    orderBy,
  };
};

export const setOrderDirection = (orderDirection) => {
  return {
    type: SET_ORDER_DIRECTION,
    orderDirection,
  };
};
