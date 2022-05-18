import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Employee from './pages/EmployeeDashboard'
import Admin from './pages/AdminDashboard'
import HomePage from './pages/HomePage'
import DisplayEmployee from './components/Employee/DisplayEmployee'
import DisplayAll from './components/Admin/DisplayAll'
import UpdateDetails from './components/Admin/UpdateDetails'
import AddEmployee from './components/Admin/AddEmployee'

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/employee' element={<Employee />} />
        <Route path='/admin' element={<Admin />} />
        <Route path='/employee/display' element={<DisplayEmployee />} />
        <Route path='/admin/display' element={<DisplayAll />} />
        <Route path='/admin/display/update/:id' element={<UpdateDetails />} />
        <Route path='/admin/display/addNewEmployee' element={<AddEmployee />} />
      </Routes>
    </>
  )
}

export default App
