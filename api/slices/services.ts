import ApiSlice from "api/slice";

//types
import { IServicesResponse } from "providers/types";

export default class ServicesAuth extends ApiSlice {
  static baseURL = ApiSlice.baseURL + `/services`;
  static defaultAuth = true;

  static GetServices = () => this.request<IServicesResponse>("");

  static AddService = (payload: FormData) => this.request("", "POST", payload);
}
