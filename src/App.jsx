import { createBrowserRouter, RouterProvider } from 'react-router';
import AppLayout from './Layout/AppLayout';
import Home from './pages/Home/Home';
import Country from './pages/Country/Country';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Error from './pages/Error/Error';


function App() {

  const router = createBrowserRouter([{
    path: '/',
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/about',
        element: <About />
      },
      {
        path: '/country',
        element: <Country />
      },
      {
        path: '/contact',
        element: <Contact />
      }
    ]
  }])

  return (
    <RouterProvider router={router}></RouterProvider>
  )
}

export default App
