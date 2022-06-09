export interface ResponseModel<T> {}

export interface IRoute {
  path: string;
  Component : React.FunctionComponent | React.ReactNode;
};
