import React from 'react'
import { Dashboard } from './pages/dashboard/Dashboard'
import { YourCourses } from './component/yourCourses/YourCourses'
import { Navbar } from './component/navbar/Navbar'

function App() {
  return (
    <div className='app'>
      <Navbar />
      <Dashboard />
    </div>
  )
}

export default App