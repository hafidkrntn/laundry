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
  
  import { getData } from "../../utils/fetch";
  import debounce from "debounce-promise";
  
  let debouncedFetchTalents = debounce(getData, 1000);
  
  export const startData = () => {
    return {
      type: START_MASTERDATA,
    };
  };
  
  export const errorData = () => {
    return {
      type: ERROR_MASTERDATA,
    };
  };
  
  export const successData = ({ masterData }) => {
    return {
      type: SUCCESS_MASTERDATA,
      masterData,
    };
  };
  
  export const fetchAllData = (noloading) => {
    return async (dispatch, getState) => {
      noloading && dispatch(startData());
      try {
        let params = {
          page: getState().masterData?.page || 1,
          search: getState().masterData?.keyword,
          limit: getState().masterData?.limit,
          orderBy: getState().masterData?.orderBy,
          orderDirection: getState().MASTERDATA?.orderDirection,
        };
  
        let res = await debouncedFetchTalents(`/datas/data`, params);
        dispatch(
          successData({
            masterData: res.data,
          })
        );
      } catch {
        dispatch(errorData());
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
  