import React from "react";

export interface ResponseModel<T> {}

export interface IRoute {
  path: string;
  Component: React.FC;
}
