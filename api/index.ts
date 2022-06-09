//slices
import ApiSlice from "./slice";
import AuthSlice from "./slices/auth";
import ServicesAuth from "./slices/services";

export default class Api extends ApiSlice {
  static auth = AuthSlice;
  static services = ServicesAuth;
}
