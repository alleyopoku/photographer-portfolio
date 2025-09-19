import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from '../pages/Home';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  // Add more routes here as needed
]);

export default function AppRouter() {
  return <RouterProvider router={router} />;
}
