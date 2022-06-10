import Api from 'src/api/index';

export async function useGetMovieInfo(id: number) {
  const data = await Api.movies.GetMovieInfo(id);
  return data?.results;
}
