import './App.css';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import MainTemplate from "./components/MainTemplate";
import Search from "./features/search/Search";
import Movie from "./features/movie/Movie";
import Whitelist from "./features/whitelist/Whitelist";

function App() {
  const router = createBrowserRouter([{
    path: "/",
    element: <MainTemplate/>,
    children: [
      {
        path: '/',
        exact: true,
        element: <Search/>,
      },
      {
        path: '/whitelist',
        element: <Whitelist/>
      },
      {
        path: '/movie/:id',
        element: <Movie/>,
      },
    ]
  }]);

  return (
    <RouterProvider router={router} />
  );
}

export default App;
