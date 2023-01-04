import { getDownloadFile } from "../../utils/fetch";
import { START_FETCHING, ERROR_FETCHING, SUCCESS_FETCHING } from "./constants";
import Filesaver from "file-saver";

export const downloadFile = (url, nameFile) => {
  return async (dispatch) => {
    dispatch(startFetching());
    try {
      let result = await getDownloadFile(url);
      Filesaver.saveAs(result.data, nameFile);
      dispatch(successFetching());
    } catch {
      dispatch(errorFetching());
    }
  };
};

export const startFetching = () => {
  return {
    type: START_FETCHING,
  };
};
export const errorFetching = () => {
  return {
    type: ERROR_FETCHING,
  };
};
export const successFetching = () => {
  return {
    type: SUCCESS_FETCHING,
  };
};
