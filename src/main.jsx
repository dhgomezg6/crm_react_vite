import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Layout from './components/Layout'
import NuevoCliente, { action as nuevoClienteAction} from './pages/NuevoCliente'
import Index, { loader as clientesLoader} from './pages/Index'
import EditarCliente, {
  loader as editarClienteLoader,
  action as editarClienteAction } from './pages/EditarCliente'
import ErrorPage from './components/ErrorPage'
import './index.css'
import { action as eliminarClienteAction} from './components/Cliente'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Index />,
        loader: clientesLoader,
        errorElement: <ErrorPage />
      },
      {
        path: '/clientes/nuevo',
        element: <NuevoCliente />,
        action: nuevoClienteAction
      },
      {
        path: '/clientes/:clienteId/editar',
        element: <EditarCliente />,
        loader: editarClienteLoader,
        action: editarClienteAction,
        errorElement: <ErrorPage />
      },
      {
        path: '/clientes/:clienteId/eliminar',
        element: <NuevoCliente />,
        action: eliminarClienteAction
      }
    ]
  }
  
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
