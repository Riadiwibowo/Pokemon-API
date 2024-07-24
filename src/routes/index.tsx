import Battle from "../features/battle/batte";
import Generation from "../features/generations/generation";
import Home from "../features/home/home";
import Layout from "../component/layout";
import MyPokemong from "../features/showpokemon";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/generation/:id",
        element: <Generation />,
      },
      {
        path: "/battle/:id",
        element: <Battle />,
      },
      {
        path: "/seemypokemong",
        element: <MyPokemong />,
      },
    ],
  },
]);
