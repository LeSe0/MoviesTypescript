import { IMovieInfo } from "src/providers/types";
import ApiSlice from "../slice";

export default class MoviesSlice extends ApiSlice {
  static baseURL = ApiSlice.baseURL + `/movie`;

  static GetMovieInfo(id: number) {
    return this.request<{ results: IMovieInfo }>(`/${id}`);
  }
}
