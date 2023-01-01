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
} from "./constants";

import { getData } from "../../utils/fetch";
import debounce from "debounce-promise";

let debouncedFetchTalents = debounce(getData, 1000);

export const startTransaksi = () => {
  return {
    type: START_TRANSAKSI,
  };
};

export const errorTransaksi = () => {
  return {
    type: ERROR_TRANSAKSI,
  };
};

export const successTransaksi = ({ transaksi, paket }) => {
  return {
    type: SUCCESS_TRANSAKSI,
    transaksi,
    paket,
  };
};

export const fetchAllData = (noloading) => {
  return async (dispatch, getState) => {
    noloading && dispatch(startTransaksi());
    try {
      let params = {
        page: getState().transaksi?.page || 1,
        search: getState().transaksi?.keyword,
        limit: getState().transaksi?.limit,
        orderBy: getState().transaksi?.orderBy,
        orderDirection: getState().transaksi?.orderDirection,
      };

      let res = await debouncedFetchTalents(`/transaksi/all`, params);
      dispatch(
        successTransaksi({
          transaksi: res.data,
        })
      );

      // redux paket
      let paket = await debouncedFetchTalents(`/datas/data`);
      dispatch(
        setPaket({
          paket: paket.data,
        })
      )

    } catch {
      dispatch(errorFetching());
    }
  };
};

export const setPaket = (data) => {
  return {
    type: SET_PAKET,
    paket: data.paket,
  }
}

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
