import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Landing } from '../feature/landing/landing'
import Login from '../feature/auth/pages/login'
import Clientes from "../feature/auth/pages/Clientes";
import Ventas from "../feature/auth/pages/Ventas";
import Productos from "../feature/auth/pages/Productos";


export const RoutesModelo = () => {
  return (
     <>
      <Routes >
        <Route path='/' element={ <Landing/> } />
        <Route path='/login' element={ <Login/> } />
        <Route path='/clientes' element={ <Clientes/> } />
        <Route path='/ventas' element={ < Ventas/> } />
        <Route path="/productos" element={<Productos />} />
      </Routes>
    </>
  )
}
