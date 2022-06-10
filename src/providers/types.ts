import React from "react";

export interface ResponseModel<T> {
  results:T
}

export interface IRoute {
  path: string;
  Component: React.FC;
}

export interface IMenu {
  path: string;
  title: string;
}

export interface IMovieInfo {
  genres: { id: number; name: string }[];
  homepage: string;
  id: number;
  imdb_id: string;
  budget: number;
  popularity: number;
  poster_path: string;
  status: string;
  vote_average: number;
  vote_count: number;
  tagline: string;
  production_companies: { id: number; logo_path: string }[];
  overview: string;
  release_date: number;
  revenue: number;
  backdrop_path: string;
}
