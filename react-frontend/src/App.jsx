import React from 'react'
import './App.css'
import User from './getuser/User'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AddUser from './adduser/AddUser'
import Update from './updateuser/Update'

const App = () => {

  const route = createBrowserRouter([
    {
      path: '/',
      element: <User />
    },
    {
      path: '/add',
      element: <AddUser />
    },
    {
      path: '/update/:id',
      element: <Update />
    }
  ])
  return (
    <>
      <RouterProvider router={route}></RouterProvider>
    </>
  )
}

export default App