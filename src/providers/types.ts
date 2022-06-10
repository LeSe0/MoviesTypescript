import React from "react";

export interface ResponseModel<T> {}

export interface IRoute {
  path: string;
  Component: React.FC;
}

export interface IMenu {
  path: string;
  title: string;
}
