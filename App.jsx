import './App.css'
import { RoutesModelo } from './routers/routes'
import React from 'react';
import Sidebar from "./feature/auth/components/Sidebar";


function App() {
  return (
    <div className="App">
      <Sidebar />
      <div style={{ marginLeft: "220px", padding: "20px" }} >
    <RoutesModelo/>
      </div>
    </div>
  )
}

export default App
