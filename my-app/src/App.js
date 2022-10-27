import { useEffect, useState } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Blog from './Components/Blog/Blog';
import CourseDetail from './Components/CourseDetail/CourseDetail';
import Courses from './Components/Courses/Courses';
import FAQ from './Components/FAQ/FAQ';
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
          path: '/Courses',
          loader: async () => {
            return fetch('http://localhost:5000/all-data')
          },
          element: <Courses></Courses>
        },
        {
          path: '/Courses/:id',
          loader: async ({ params }) => {
            return fetch(`http://localhost:5000/singledata/${params.id}`)
          },
          element: <CourseDetail></CourseDetail>,
        },
        {
          path: '/Blog', element: <Blog></Blog>
        },
        {
          path: '/Home', element: <Home></Home>
        },
        {
          path: '/FAQ', element: <FAQ></FAQ>
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
