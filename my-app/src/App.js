import { useEffect, useState } from 'react';
import { createBrowserRouter, RouterProvider, BrowserRouter, Switch, Route, Routes } from 'react-router-dom';
import './App.css';
import Blog from './Components/Blog/Blog';
import Courses from './Components/Courses/Courses';
import Home from './Components/Home/Home';
import Main from './Components/Main/Main';

function App() {
  const router = createBrowserRouter([
    {
      path: '/', element: <Main></Main>,
      children: [
        {
          path: '/', element: <Home></Home>
        },
        {
          path: '/Courses', element: <Courses></Courses>
        },
        {
          path: '/Blog', element: <Blog></Blog>
        },
        {
          path: '/Home', element: <Home></Home>
        },

      ]

    }
  ])

  return (

    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>

  );
}

export default App;
