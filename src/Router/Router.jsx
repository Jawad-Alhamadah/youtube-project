import React from 'react'
import {createBrowserRouter,RouterProvider,} from 'react-router-dom'
import Home from '../Pages/Home';
import Login from '../Pages/Login';
import Videos from '../Pages/Videos';
import Signup from '../Pages/SignUp';
import SingleVideo from '../Pages/SingleVideo';
import SearchResult from '../Pages/SearchResult';
const router = createBrowserRouter([
  {

    path: "/video/:id",
    element: <SingleVideo/>,
  },
  {

    path: "/",
    element: <Home/>,
  },
  {

    path: "/login",
    element: <Login/>,
  },
  {

    path: "/signup",
    element: <Signup/>,
  },
  {

    path: "/videos",
    element: <Videos/>,
  },
  {
    path:"/Search/:word",
    element:<SearchResult/>
  }
]);
function Router() {

    return (
        <RouterProvider router={router} />
)
}
export default Router
