import { IRoute } from './providers/types';
// Components

import Main from "./pages/Main";

const routes: IRoute[] = [
  {
    path: "/",
    Component: Main,
  },
];

export default routes;
