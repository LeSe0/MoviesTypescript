//slices
import ApiSlice from "./slice";
import MoviesSlice from "./slices/movie";

export default class Api extends ApiSlice {
  static movies = MoviesSlice;
}
