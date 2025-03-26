import { createBrowserRouter, RouterProvider } from 'react-router';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import AppLayout from '@/Layout/AppLayout';
import Home from '@/pages/Home';
import Country from '@/pages/Country';
import About from './pages/About';
import Contact from './pages/Contact';
import Error from './pages/Error';
import CountryDetails from './pages/CountryDetails';


function App() {

  const queryClient = new QueryClient();

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
        path: '/country/:name',
        element: <CountryDetails />
      },
      {
        path: '/contact',
        element: <Contact />
      }
    ]
  }])

  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router}></RouterProvider>
    </QueryClientProvider>
  )
}

export default App
