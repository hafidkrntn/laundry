import axios from "axios";
import { config } from "../configs";

export async function getData(url, params) {
    try {
      return await axios.get(`${config.api_host_dev}${url}`, {
        params,
      });
    } catch (error) {
      return handleError(error);
    }
  }
  
  export async function postData(url, payload, formData) {
    try {
      const token = getToken();
      return await axios.post(`${config.api_host_dev}${url}`, payload, {
        headers: {
          "Content-Type": formData ? "multipart/form-data" : "application/json",
        },
      });
    } catch (error) {
      return handleError(error);
    }
  }
  
  export async function putData(url, payload) {
    try {
      const token = getToken();
      return await axios.put(`${config.api_host_dev}${url}`, payload);
    } catch (error) {
      return handleError(error);
    }
  }
  
  export async function deleteData(url) {
    try {
      const token = getToken();
      return await axios.delete(`${config.api_host_dev}${url}`);
    } catch (error) {
      return handleError(error);
    }
  }
  
  export async function getDownloadFile(url, params) {
    try {
      const token = getToken();
      return await axios.get(`${config.api_host_dev}${url}`, {
        params,
        headers: {
          'Accept': '*/*',
          'Content-Type': 'application/json',
        },
        responseType: 'blob',
      });
    } catch (error) {
      return handleError(error);
    }
  }