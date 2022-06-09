import ApiSlice from "api/slice";

//types
import { ILoginResponse } from "providers/types";

const HOST = process.env.HOST;

export default class AuthSlice extends ApiSlice {
  static baseURL = HOST + `/api/auth`;

  static LogIn(payload: { email: string; password: string }) {
    return this.request<ILoginResponse>("/login", "POST", payload);
  }
}
