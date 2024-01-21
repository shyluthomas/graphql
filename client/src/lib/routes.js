import {createBrowserRouter} from 'react-router-dom';
import App from '../App';
import Layout from '../components/layout';
import Jobs from '../pages/jobs';

export  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Layout></Layout>,
      children :[ {
        path: '/',
        element : <App></App>,
      },
      {
        path: '/jobs',
        element : <Jobs></Jobs>,
      }
    ]
    },
  ])