import axios from "axios";
import { config } from "../configs";

export async function getData(url, params) {
  try {
    return await axios.get(`${config.api_host_dev}${url}`, {
      params,
    });
  } catch (error) {
    console.log(error);
  }
}

export async function postData(url, payload, formData) {
  try {
    // const token = getToken();
    return await axios.post(`${config.api_host_dev}${url}`, payload, {
      headers: {
        "Content-Type": formData ? "multipart/form-data" : "application/json",
      },
    });
  } catch (error) {
    // return handleError(error);
    console.log(error);
  }
}

export async function putData(url, payload) {
  try {
    // const token = getToken();
    return await axios.put(`${config.api_host_dev}${url}`, payload);
  } catch (error) {
    // return handleError(error);
    console.log(error);
  }
}

export async function deleteData(url) {
  try {
    // const token = getToken();
    return await axios.delete(`${config.api_host_dev}${url}`);
  } catch (error) {
    // return handleError(error);
    console.log(error);
  }
}

export async function getDownloadFile(url, params) {
  try {
    // const token = getToken();
    return await axios
      .get(`${config.api_host_dev}${url}`, {
        params,
        headers: {
          Accept: "*/*",
          "Content-Type": "application/json",
        },
        responseType: "blob",
      })
      .then((response) => {
        const url = window.URL.createObjectURL(response.data);
        const a = document.createElement("a");
        a.style.display = "none";
        a.href = url;
        a.download = "Data Excel Laundry.xlsx";
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
      });
  } catch (error) {
    // return handleError(error);
    console.log(error);
  }
}

export async function getDownloadPdf(url, params) {
  try {
    // const token = getToken();
    return await axios
      .get(`${config.api_host_dev}${url}`, {
        params,
        headers: {
          Accept: "*/*",
          "Content-Type": "application/json",
        },
        responseType: "blob",
      })
      .then((response) => {
        const url = URL.createObjectURL(response.data);
        const a = document.createElement("a");
        a.style.display = "none";
        a.href = url;
        a.download = "Print Nota.pdf";
        document.body.appendChild(a);
        a.click();
        URL.revokeObjectURL(url);
      });
  } catch (error) {
    // return handleError(error);
    console.log(error);
  }
}

