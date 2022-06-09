import axios, { AxiosError, AxiosResponse, Method } from "axios";
import { ResponseModel } from "../src/providers/types";

const HOST = "https://api.themoviedb.org";
const API_KEY = "35fa4249985d61836134bfb1e1ef357c";

export default class ApiSlice {
  static baseURL = `${HOST}/3`;
  static defaultAuth = false;

  static async request<T>(
    url: string,
    method: Method = "GET",
    payload: unknown = null,
    options: { headers?: object; auth?: boolean } | null = null
  ) {
    let headers: HeadersInit = {};

    if (this.defaultAuth || options?.auth) {
      headers.Authorization = `Bearer ${localStorage.getItem("token")}`;
    }

    if (options) {
      if (options.headers) {
        headers = { ...headers, ...options.headers };
      }
    }

    try {
      const response: AxiosResponse<ResponseModel<T>> = await axios({
        method,
        url: `${this.baseURL}${url}/?api_key=${API_KEY}`,
        data: payload ?? {},
        headers,
      });
      if ("data" in response) return response.data;
    } catch (error) {
      const _error = error as AxiosError<ResponseModel<T>>;
      return _error?.response?.data;
    }
  }
}
