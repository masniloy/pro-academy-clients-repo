import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import For4o4 from './Components/4o4/For4o4';
import Blog from './Components/Blog/Blog';
import CourseDetail from './Components/CourseDetail/CourseDetail';
import Courses from './Components/Courses/Courses';
import FAQ from './Components/FAQ/FAQ';
import Home from './Components/Home/Home';
import Main from './Components/Main/Main';
import Premium from './Components/Premium/Premium';
import Private from './Components/Private/Private';
import SignIn from './Components/SignIn/SignIn';
import SignUp from './Components/SignUp/SignUp';

function App() {
  const router = createBrowserRouter([
    {
      path: '/', element: <Main></Main>,
      children: [
        {
          path: '/Courses',
          loader: async () => {
            return fetch('https://b610-lerning-platform-server-side-masniloy.vercel.app/all-data')
          },
          element: <Courses></Courses>
        },
        {
          path: '/', element: <Home></Home>
        },
        {
          path: '/Courses/:id',
          loader: async ({ params }) => {
            return fetch(`https://b610-lerning-platform-server-side-masniloy.vercel.app/singleData/${params.id}`)
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
        {
          path: '/SignIn', element: <SignIn></SignIn>
        },
        {
          path: '/SignUp', element: <SignUp></SignUp>
        },
        {
          path: '/Premium', element: <Private><Premium></Premium></Private>
        },
        {
          path: '*', element: <For4o4></For4o4>
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
