import { AxiosRequestConfig } from "axios";
import axios from "axios";
import Cookies from "js-cookie";

interface callAPIProps extends AxiosRequestConfig {
  token?: boolean;
  serverToken?: string;
}

export default async function callAPI({
  url,
  method,
  data,
  token,
  serverToken,
}: callAPIProps) {
  let headers = {};
  if (serverToken) {
    headers = {
      Authorization: `Bearer ${serverToken}`,
    };
  } else if (token) {
    const tokenCookies = Cookies.get("token");
    if (tokenCookies) {
      const jwtToken = atob(tokenCookies);
      headers = {
        Authorization: `Bearer ${jwtToken}`,
      };
    }
  }

  const response = await axios({ url, method, data, headers }).catch(
    (err) => err.response
  );
  if (response.status > 300) {
    const res = {
      error: true,
      message: response.data.message,
      data: null,
    };
    return res;
  }

  const length = Object.keys(response.data).length;

  const res = {
    error: false,
    message: "Success",
    data: length > 1 ? response.data : response.data.data,
  };
  return res;
}
