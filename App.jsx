import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import LoginForm from './LoginForm.jsx'
import Dashboard from './Dashboard.jsx'

export default function App() {
  return (
    <BrowserRouter>
       <Routes>
          <Route path='/' element={<LoginForm />} />
          <Route path='/dashboard' element={<Dashboard />}/>
       </Routes>
    </BrowserRouter>
    
  )
}



